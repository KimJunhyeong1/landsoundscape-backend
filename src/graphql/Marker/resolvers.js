const queries = {
  markers: async (_, __, { dataSources: { markers } }) => {
    const response = await markers.getMarkers();

    const markersData = response.map(element => ({
      ...element,
      photosNum: element.photos.length,
    }));

    return markersData;
  },

  marker: async (_, { id }, { dataSources: { markers } }) => {
    const response = await markers.getMarker(id);

    const markerData = {
      ...response,
      photosNum: response.photos.length,
    };

    return markerData;
  },
};

const mutations = {};

const resolvers = { queries, mutations };

module.exports = { resolvers };
