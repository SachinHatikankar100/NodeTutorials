const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello");
  }
  if (req.url === "/about") {
    res.end("Here is our about page");
  }
  res.end(
    `<h1>Oops!</h1>
    <p>Page not available</p>
    <a href='/'>Back Home</a>
    `
  );
});
server.listen(5000);

//This has issue. Unable to navigate to the defined pages
