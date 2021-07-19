module.exports = function(app)
{
  app.get('/', (req, res) => {
    //serve angular - default static index.html
  })

  app.get('/tasks', (req, res) => {
    
    res.redirect('/');
    //serve angular - default static index.html
  })
}
