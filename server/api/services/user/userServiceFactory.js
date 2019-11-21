module.exports = ({ UserModel }) => {
  const addUser = async user => {
    const newUser = new UserModel(user);
    const result = await newUser.save();
    return result;
  };
  const getUser = async userId => {
    console.log(userId);
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
    const user = await UserModel.findById(userId);
    user.orders.push(orderId);
    await user.save();
    return user;
  };
  return {
    addUser,
    getUser,
    getUsers,
    getOrderRefs,
    addOrder,
  };
};
