const asyncHandler = require('../middleware/asyncHandler');

/**
 * GET /api/health
 */
exports.checkHealth = asyncHandler(async (req, res, next) => {
  return res.status(200).json({
    status: "Healthy",
    time: new Date().toISOString()
  });
});
