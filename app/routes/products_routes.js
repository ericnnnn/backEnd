var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
  app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
  app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('products').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      }
    });
  });

  app.get('/products', (req, res) => {
    //const id = req.params.id;
    //const details = { '_id': new ObjectID(id) };
    // db.collection('products')
    // .find({}, (err, item) => {
    //   console.log(item);
    //   if (err) {
    //     res.send({'error':'An error has occurred'});
    //   } else {
    //     res.send(item);
    //   }
    // });
    db.collection('products')
    .find({}).toArray().then(function(item){res.send(item)})


  });

  app.post('/products', (req, res) => {
    const product = { name: req.body.name, description: req.body.description, category:req.body.category,price:req.body.price };
    db.collection('products').insert(product, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' });
      } else {
        res.send(result.ops[0]);
      }
    });
  });
};
