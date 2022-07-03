const queries = {
  photo: async (_, { id }, { dataSources: { photos } }) => {
    const result = await photos.getPhotoRandomly(id);

    return result[0];
  },
};

const resolvers = { queries };

module.exports = { resolvers };
