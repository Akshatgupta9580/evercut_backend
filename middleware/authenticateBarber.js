const jwt = require('jsonwebtoken');
const Barber = require('../models/Barber.model');

module.exports = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) return res.status(401).json({ error: 'Access denied' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const barber = await Barber.findById(decoded.id);

    if (!barber) return res.status(401).json({ error: 'Invalid token' });

    req.user = barber;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Authentication failed' });
  }
};
