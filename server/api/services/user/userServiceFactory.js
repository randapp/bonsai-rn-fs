module.exports = ({ UserModel }) => {
  const addUser = async user => {
    const newUser = new UserModel(user);
    const result = await newUser.save();
    return result;
  };
  const getUser = async userId => {
    const result = await UserModel.findById(userId);
    return result;
  };
  const getUsers = async () => {
    return UserModel.find({});
  };
  const getOrderRefs = async userId => {
    const user = await getUser(userId);
    return user.orders;
  };
  const addOrder = async (userId, orderId) => {
    const user = await getUser(userId);
    user.orders.push(orderId);
    await user.save();
    return user;
  };

  const likeProduct = async (userId, productId) => {
    const user = await getUser(userId);
    user.likes.push(productId);
    await user.save();
    console.log(user.likes);
    return user;
  };

  const unlikeProduct = async (userId, productId) => {
    const user = await getUser(userId);
    user.likes = user.likes.filter(p => p !== productId);
    await user.save();
    return user;
  };

  return {
    addUser,
    getUser,
    getUsers,
    getOrderRefs,
    addOrder,
    likeProduct,
    unlikeProduct,
  };
};
