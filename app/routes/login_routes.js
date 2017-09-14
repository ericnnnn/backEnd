module.exports = function(app, db) {
  app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type, Authorization");
    next();
  });
  app.post('/users/login', (req, res) => {
    //res.json({type:true})
    res.json({s:"success"});
    //res.status(200)
    //.send({s:"success"});
    //const id = req.params.id;
    //const details = { '_id': new ObjectID(id) };
    // db.collection('notes').findOne(details, (err, item) => {
    //
    //   //
    //   // if (err) {
    //   //
    //   //   res.send({'error':'An error has occurred'});
    //   // } else {
    //   //   res.status(200);
    //   //   res.send("succeed");
    //   // }
    // });
  });
}
