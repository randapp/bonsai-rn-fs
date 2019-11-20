const searchCriteria = term => {
  const regExp = new RegExp(term, 'i');
  return {
    merchantOrBrand: {
      $or: [{ brands: regExp }, { name: regExp }],
    },
    product: { name: regExp },
  };
};

module.exports = ({ MerchantModel, ProductModel }) => {
  const search = async term => {
    // const query = { $text: { $search: term } };
    const criteria = searchCriteria(term);
    const results = await Promise.all([
      ProductModel.find(criteria.product).exec(),
      MerchantModel.find(criteria.merchantOrBrand).exec(),
    ]);
    return [].concat(...results);
  };
  return search;
};
