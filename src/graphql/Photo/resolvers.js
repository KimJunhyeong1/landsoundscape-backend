const { AuthenticationError } = require("apollo-server-core");
const config = require("../../config");
const getImaginarySoundUrl = require("../../util/runPy");
const { fileUpload } = require("../../util/s3");

const queries = {
  photo: async (_, { id }, { dataSources: { photos } }) => {
    const result = await photos.getPhotoRandomly(id);

    return result[0];
  },
};

const mutations = {
  uploadPhoto: async (
    _,
    { input, file },
    { dataSources: { photos, users }, user },
  ) => {
    if (!user) throw new AuthenticationError("not authenticated");

    const { url } = await fileUpload({
      file,
      bucketName: config.AWS_S3_BUCKET_NAME,
    });

    const soundUrl = await getImaginarySoundUrl(url);

    const photoData = await photos.createPhoto({
      imageUrl: url,
      soundUrl,
      ...input,
    });
    await users.addMyPhoto({ name: input.creator, photoId: photoData._id });

    return photoData;
  },
};

const resolvers = { queries, mutations };

module.exports = { resolvers };
