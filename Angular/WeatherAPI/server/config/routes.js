module.exports = function(app)
{
  app.get('/', (req, res) => {
    //serve angular - default static index.html
  })

  app.get('/chicago', (req, res) => {
    
    res.redirect('/');
  })

  app.get('/dc', (req, res) => {
    
    res.redirect('/');
  })

  app.get('/sanjose', (req, res) => {
    
    res.redirect('/');
  })

  app.get('/seattle', (req, res) => {
    
    res.redirect('/');
  })

  app.get('/dallas', (req, res) => {
    
    res.redirect('/');
  })

  app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
  });
}
