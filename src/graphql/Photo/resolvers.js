const { AuthenticationError } = require("apollo-server-core");
const config = require("../../config");
const { predict } = require("../../util/mobileNet");
const getImaginarySoundUrl = require("../../util/runPy");
const { fileUpload } = require("../../util/s3");

const queries = {
  randomPhoto: async (_, { id }, { dataSources: { photos } }) => {
    const result = await photos.getPhotoRandomly(id);

    return result[0];
  },

  photo: async (_, { id }, { dataSources: { photos } }) => {
    const result = await photos.getPhoto(id);

    return result;
  },

  photos: async (_, { tag }, { dataSources: { photos } }) => {
    const searchTag = tag.includes("#") ? tag : `#${tag}`;
    const result = await photos.getPhotos({ tags: searchTag });

    return result;
  },
};

const mutations = {
  uploadPhoto: async (
    _,
    { input, file },
    { dataSources: { photos, users, markers }, user },
  ) => {
    if (!user) throw new AuthenticationError("not authenticated");

    const { country, coordinates, ...photoInput } = input;
    const { url } = await fileUpload({
      file,
      bucketName: config.AWS_S3_BUCKET_NAME,
    });

    const soundUrl = await getImaginarySoundUrl(url);

    const tags = [];
    const tag = await predict(url);

    tags.push(`#${tag}`);

    const photoData = await photos.createPhoto({
      imageUrl: url,
      soundUrl,
      tags,
      country,
      ...photoInput,
    });

    await users.addMyPhoto({ name: input.creator, photoId: photoData._id });
    await markers.upsertMarker(
      { country },
      {
        country,
        coordinates,
        photos: [photoData._id],
        recentlyPhotoUrl: url,
      },
    );

    return photoData;
  },
};

const resolvers = { queries, mutations };

module.exports = { resolvers };
