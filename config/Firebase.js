const admin = require("firebase-admin");

const serviceAccount = require(process.env.FILEPATH);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin
