/**
 * Custom request logger middleware measuring route execution duration
 */
module.exports = (req, res, next) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.originalUrl} - status: ${res.statusCode} (${duration}ms)`);
  });

  next();
};
