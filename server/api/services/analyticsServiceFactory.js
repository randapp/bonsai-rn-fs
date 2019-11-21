module.exports = ({ UserService, ProductService }) => {
  const updateFavorites = inc => async (userId, productId) => {
    const action = inc === 1 ? UserService.likeProduct : UserService.unlikeProduct;
    return Promise.all([
      action(userId, productId),
      ProductService.updatePopularity(productId, inc),
    ]);
  };

  return {
    updateFavorites,
  };
};
