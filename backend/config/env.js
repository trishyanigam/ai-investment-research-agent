require('dotenv').config();

// Centralized SSL inspection bypass for corporate proxy decryption
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

module.exports = {
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  NEWS_API_KEY: process.env.NEWS_API_KEY
};
