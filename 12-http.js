const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our home page');
  } else if (req.url === '/about') {
    res.end('Welcome to our about page');
  } else {
    res.end(`
      <h1>Oooops!</h1>
      <p>The page you are looking for does not exist</p>
      <a href='/'>Back Home</a>
    `);
  }
});


server.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
