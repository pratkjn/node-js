const fs = require('fs');

function requestHandler(req, res) {
    const url = req.url;
    const method = req.method;
    res.setHeader('Content-Type', 'text/html');
    if (url === '/') {
        res.write(`
        <html>
            <head>
                <title>Enter Message</title>
            </head>
            <body>
                <form action='/message' method='POST'>
                    <input type='text' name='message'/>
                    <button type='submit'>Send Message</button>
                </form>
            </body>
        </html>`
        );
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const message = Buffer.concat(body).toString();
            console.log(message);
            fs.writeFileSync('message.txt', message);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
    }
    res.end();
}

//below all statements have same meaning

// module.exports = requestHandler;
// module.exports = {
//     handler : requestHandler,
//     sampleText : 'sampleText'
// }

// module.exports.handler = requestHandler;
// module.exports.sampleText = 'sampleText';

module.exports = requestHandler;
// exports = {
//     handler: requestHandler,
//     sampleText: 'sampleText'
// }

// exports.handler = requestHandler;
// exports.sampleText = 'sampleText';