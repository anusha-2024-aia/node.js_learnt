import http from 'http';

const PORT = process.env.PORT || 8000;

const server = http.createServer((req, res) => {
  try {
    if (req.method !== 'GET') {
      throw new Error('Method not allowed');
    }

    if (req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end('<h1>Home Page</h1>');
      return;
    }

    if (req.url === '/about') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end('<h1>About Page</h1>');
      return;
    }

    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>Not Found</h1>');
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});