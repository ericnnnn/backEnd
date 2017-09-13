// routes/index.js

const noteRoutes = require('./note_routes');
const productsRoutes=require('./products_routes');
module.exports = function(app, db) {
  noteRoutes(app, db);
  // Other route groups could go here, in the future
  productsRoutes(app,db);
};
