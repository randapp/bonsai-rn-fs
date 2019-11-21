const Decimal = require('decimal.js');

const total = items =>
  items
    .reduce((acc, item) => {
      return acc.plus(new Decimal(item.priceAtOrderDate).times(item.quantity));
    }, new Decimal(0))
    .toFixed(2);

module.exports = ({ UserService, OrderModel, ProductService }) => {
  const getUserOrders = async userId => {
    const orderRefs = await UserService.getOrderRefs(userId);
    return Promise.all(orderRefs.map(orderId => OrderModel.findById(orderId)));
  };
  const addOrder = async order => {
    const { userId: user, ...rest } = order;
    const items = await ProductService.price(rest.items);
    const newOrder = new OrderModel({ ...rest, user, items, total: total(items) });
    const result = await newOrder.save();
    await Promise.all([
      UserService.addOrder(user, result._id),
      ProductService.updateStocks(order.items),
    ]);
    return result;
  };

  const getOrderOwner = async orderId => {
    const result = await OrderModel.findById(orderId).populate('user');
    return result.user;
  };
  const getOrderDetails = async orderId => {
    const result = await OrderModel.findById(orderId);
    return Promise.all(
      result.items.map(async item => {
        const { name } = await ProductService.getProduct(item.product);
        return {
          name,
          quantity: item.quantity,
          product: item.product,
          priceAtOrderDate: item.priceAtOrderDate,
        };
      }),
    );
  };
  return {
    getUserOrders,
    addOrder,
    getOrderOwner,
    getOrderDetails,
    total,
  };
};
