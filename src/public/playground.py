import sys
import numpy as np
import json
from io import BytesIO
from urllib import request
from scipy.stats import entropy
from keras.applications.mobilenet import MobileNet
from tensorflow.keras.preprocessing import image

def preprocess_image(x):
    x /= 255.
    x -= 0.5
    x *= 2.
    return x


# In[3]:
imagenet = MobileNet(include_top=True, weights='imagenet') # using MobileNet

def get_image_features(model, filepath):
    res = request.urlopen(filepath).read()
    img = image.load_img(BytesIO(res), target_size=(224, 224))
    x = image.img_to_array(img)
    x = np.expand_dims(x, axis=0)
    x = preprocess_image(x)
    preds = model.predict(x)[0]
    return preds

def get_topk_songs(img_feature, song_features, k=3):
    distances = []
    for i in range(len(song_features)):
        distance = entropy(img_feature, song_features[i])
        distances.append(distance)
    topk_indecies = np.argsort(distances)[:k]
    return topk_indecies


if __name__ == '__main__':
    sound_json_path = sys.argv[1]
    sound_features_path = sys.argv[2]
    img_path = sys.argv[3];

    with open(sound_json_path) as f:
      mp3_files = json.load(f)
    sound_features = np.load(sound_features_path)

    img_feature = get_image_features(imagenet, img_path)
    
    topk_indecies = get_topk_songs(img_feature, sound_features, k=3)
    
    print(mp3_files["mp3"][topk_indecies[0]]["filepath"])

# %%
