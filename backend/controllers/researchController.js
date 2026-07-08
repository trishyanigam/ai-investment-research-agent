const researchService = require('../services/researchService');
const asyncHandler = require('../middleware/asyncHandler');
const AppError = require('../utils/AppError');

/**
 * POST /api/analyze
 * Body: { company: string }
 */
exports.analyze = asyncHandler(async (req, res, next) => {
  const { company } = req.body;

  if (!company) {
    throw new AppError('The "company" field (ticker symbol or name) is required in the request body.', 400);
  }

  const result = await researchService.analyzeCompany(company);

  return res.status(200).json(result);
});
