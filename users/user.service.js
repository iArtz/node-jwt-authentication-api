const jwt = require('jsonwebtoken');
const { secret } = require('config');

// users hardcoded for simplicity, store in a db for production applications
const users = [
  {
    id: 1,
    username: 'test',
    password: 'test',
    firstName: 'Test',
    lastName: 'User',
  },
];

async function authenticate({ username, password }) {
  const user = users.find(
    (u) => u.username === username && u.password === password,
  );
  if (user) {
    const token = jwt.sign({ sub: user.id }, secret);
    const { password, ...userWithoutPassword } = user;
    return {
      userWithoutPassword,
      token,
    };
  }
  return false;
}

async function getAll() {
  return users.map((u) => {
    const { password, ...userWithoutPassword } = u;
    return userWithoutPassword;
  });
}

module.exports = {
  authenticate,
  getAll,
};
