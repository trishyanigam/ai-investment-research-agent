const AppError = require('../utils/AppError');
const { HTTP_STATUS } = require('../config/constants');

/**
 * Validates request payload for POST /api/analyze
 */
exports.validateAnalyzeRequest = (req, res, next) => {
  const { company } = req.body;

  if (!company || typeof company !== 'string' || company.trim().length === 0 || company.trim().length > 80) {
    return next(
      new AppError(
        'Invalid payload: The "company" field is required and must be a non-empty string under 80 characters.',
        HTTP_STATUS.BAD_REQUEST
      )
    );
  }

  next();
};
