const http = require('http');

const server = http.createServer((req, res) => {

  const url = req.url;
  const method = req.method;

  res.setHeader('content-type', 'text/html');

  if (url === '/') {
    res.write(`<html>
      <head></head>
      <body>
        <h1>Hello everybody!</h1>
        <p>This is my first node application</p>
        <form action="/create-user" method="POST">
          Username: <input type="text" name="username" id="username">
          <button type="submit">Submit</button>
        </form>
      </body>
    </html>`)
  }

  if (url === '/users') {
    res.write(`<ul>
      <li>User1</li>
      <li>User2</li>
      <li>User3</li>
      <li>User4</li>
    </ul>`);
  }

  if (url === '/create-user' && method === 'POST') {
    const data = [];
    req.on('data', (dataStream) => {
      data.push(dataStream);
    });
    req.on('end', () => {
      let receivedData = Buffer.concat(data).toString()
      console.log(receivedData.split('=')[1]);
    });
  }

  return res.end();

});

server.listen(3000);