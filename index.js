const http = require("http");
const fs = require('fs');

const PORT = 3000;
const hostname = "localhost";
const Home = fs.readFileSync('./index.html','utf-8')


const server = http.createServer((req, res) => {

  if (req.url === "/") {
    return res.end(Home)
  } else if (req.url === "/about") {
    return res.end("<h1>About Page</h1>");
  } else if (req.url === "/product") {
    return res.end("<h1>Product Page</h1>");
  } else if (req.url === "/list") {
    return res.end("<h1>List page</h1>");
  }else{
    return res.end('<h1>404---Page not Found</h1>')
  }

});

server.listen(PORT, hostname, () => {
  console.log(`server is working`);
});
