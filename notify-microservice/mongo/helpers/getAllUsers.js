const { Users } = require("../Schemas");

const getUsers = async () => {
  try {
    const users = await Users.find({});
    return users;
  } catch (e) {
    console.log(`error`, e);
  }
};
module.exports = {
  getUsers,
};
