const AppError = require('../utils/AppError');
const { HTTP_STATUS } = require('../config/constants');

/**
 * 404 Fallback middleware for undefined API paths
 */
module.exports = (req, res, next) => {
  next(new AppError(`Can't find path ${req.originalUrl} on this server!`, HTTP_STATUS.NOT_FOUND));
};
