const cors = require("cors");

const allowedOrigins = process.env.ORIGINS.split(",");

const corsConfiguration = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback( new Error("Not allowed by cors"));
    }
  },
  Credentials : true
};


module.exports = cors(corsConfiguration)