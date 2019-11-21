module.exports = ({ UserService, OrderModel, ProductService }) => {
  const getUserOrders = async userId => {
    const orderRefs = await UserService.getOrderRefs(userId);
    return Promise.all(orderRefs.map(orderId => OrderModel.findById(orderId)));
  };
  const addOrder = async order => {
    const { userId: user, ...rest } = order;
    const newOrder = new OrderModel({ ...rest, user });
    console.log(newOrder);
    const result = await newOrder.save();
    console.log(JSON.stringify(result, undefined, 2));
    await UserService.addOrder(user, result._id);
    return result;
  };

  const getOrderOwner = async orderId => {
    const result = await OrderModel.findById(orderId).populate('user');
    return result.user;
  };
  const getOrderDetails = async orderId => {
    console.log(orderId);
    const result = await OrderModel.findById(orderId);
    return Promise.all(result.items.map(item => ProductService.getProduct(item.product)));
  };
  return {
    getUserOrders,
    addOrder,
    getOrderOwner,
    getOrderDetails,
  };
};
