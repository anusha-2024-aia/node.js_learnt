import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';


const PORT = process.env.PORT || 8000;

//get current path

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename, __dirname);

const server = http.createServer(async(req, res) => {
  try {
    if (req.method !== 'GET') {
      let filePath;
      // throw new Error('Method not allowed');
    }

    if (req.url === '/') {
      filePath = path.join(__dirname, 'public', 'index.html');
      // res.writeHead(200, { 'Content-Type': 'text/html' });
      // res.end('<h1>Home Page</h1>');
      // return;
    } else if (req.url === '/about') {
      filePath = path.join(__dirname, 'public', 'about.html');
      // res.writeHead(200, { 'Content-Type': 'text/html' });
      // res.end('<h1>About Page</h1>');
      // return;
    } else {
      throw new Error('Not Found');
    }

    const data = await fs.readFile(filePath);
    res.setHeader('Content-Type', 'text/html');
    res.write(data);
    res.end();

    // if (req.url === '/about') {
    //   res.writeHead(200, { 'Content-Type': 'text/html' });
    //   res.end('<h1>About Page</h1>');
    //   return;
    // }

    // res.writeHead(404, { 'Content-Type': 'text/html' });
    // res.end('<h1>Not Found</h1>');
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});