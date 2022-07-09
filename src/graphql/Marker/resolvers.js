const queries = {
  markers: async (_, __, { dataSources: { markers } }) => {
    const response = await markers.getMarkers();

    const markersData = response.map(element => ({
      ...element,
      photosNum: element.photos.length,
    }));

    return markersData;
  },
};

const mutations = {};

const resolvers = { queries, mutations };

module.exports = { resolvers };
