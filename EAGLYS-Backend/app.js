const http = require('http');
const { exec } = require('child_process');
const express = require('express');
const cors = require('cors'); // impoort cors module
const corsOptions = {
  origin: '*', // 允许的来源（你的前端应用的地址）
  methods: 'POST', // 允许的 HTTP 方法
  allowedHeaders: ['Content-Type'], // 允许的头部
};


const app = express();
app.use(cors(corsOptions));
const PORT = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Start! Node.js!');
});

app.use(express.json());

app.post('/query', (req, res) => {
  const sqlQuery = req.body.sqlQuery;

  // a router to execute main.py module
  exec(`python python/main.js "${sqlQuery1}" "${sqlQuery2}" "${sqlQuery3}"`, (error, stdout, stderr) => {
    if (error) {
      console.error(`something wrong happened when execute python：${error}`);
      return res.status(500).json({ error: 'Error executing Python script' });
    }

    try {
      // parse python returned result to json
      const results = JSON.parse(stdout);

      // three outputs return to frontend
      res.json({ result1: results[0], result2: results[1], result3: results[2] });
    } catch (e) {
      console.error(`something wrong happened when parse python：${e}`);
      res.status(500).json({ error: 'Error parsing Python script output' });
    }
  });
});

// a router to execute unit test module
app.get('/runTests', (req, res) => {
  exec('python python/parseUnitTest.py', (error, stdout, stderr) => {
    if (error) {
      console.error(`something wrong happened when execute unit test：${error}`);
      return res.status(500).json({ error: 'Error executing unit tests' });
    }

    // return to frontend
    res.json({ testOutput: stdout });
  });
});

server.listen(PORT, () => {
  console.log(`HTTP Server is running on port ${PORT}`);
});