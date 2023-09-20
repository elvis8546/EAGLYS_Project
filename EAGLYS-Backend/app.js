// app.js

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Start! Node.js!');
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const { exec } = require('child_process');

// The Python file path
const pythonScriptPath = 'python/main.py';

// Execute Python file
exec(`python ${pythonScriptPath}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`执行 Python 文件时发生错误：${error}`);
    return;
  }
  console.log(`Python 文件输出：${stdout}`);
});
