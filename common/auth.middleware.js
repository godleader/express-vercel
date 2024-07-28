const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, '7f8d3e9c1a2b5d6f4e7c8d9a0b2c1d3e5f7a1b4c6d8e0f2b4a6c8d7e9f0', (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
