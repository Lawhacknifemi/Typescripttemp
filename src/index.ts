import { createServer } from 'http';

const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from TypeScript!');
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
