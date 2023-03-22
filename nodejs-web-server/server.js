const http = require("http");

const requestListener = (request, response) => {
  response.setHeader("Content-Type", "application/json");
  response.setHeader('X-Powered-By', 'NodeJs');

  const { method, url } = request;

  if (url === "/") {
    if (method === "GET") {
      response.statusCode = 200;
      response.end(JSON.stringify({
        message: 'Ini adalah homepage',
    }));
    } else {
      response.statusCode = 400;
      response.end(JSON.stringify({
        message: `Halaman tidak dapat diakses dengan ${method} request`,
    }));
    } // logika respons bila url bernilai '/'
  } else if (url === "/about") {
    if (method === "GET") {
      response.statusCode = 200;
      response.end(JSON.stringify({
        message: 'Halo! Ini adalah halaman about',
    })); // respons bila client menggunakan GET
    } else if (method === "POST") {
      let body = [];
      request.on("data", (chunk) => {
        body.push(chunk);
      });
      request.on("end", () => {
        body = Buffer.concat(body).toString();
        const { name } = JSON.parse(body);
        response.statusCode = 200;
        response.end(JSON.stringify({
          message: `Halo, ${name}! Ini adalah halaman about`,
      }));
      }); // respons bila client menggunakan POST
    } else {
      response.statusCode = 400;
      response.end(JSON.stringify({
        message: `Halaman tidak dapat diakses menggunakan ${method}, request`
    }));
    } //  logika respons bila url bernilai '/about'
  } else {
    response.statusCode = 404;
    response.end(JSON.stringify({
      message: 'Halaman tidak ditemukan!',
  })); //  logika respons bila url bukan '/' atau '/about'
  }
};

const server = http.createServer(requestListener);
const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});
