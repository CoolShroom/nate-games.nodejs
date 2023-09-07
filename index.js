const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const repoPath = path.join(__dirname, 'nate-games.github.io');

app.use(express.static(repoPath));

app.listen(port, () => {
  console.log(`Static site server is running at http://localhost:${port}`);
});
