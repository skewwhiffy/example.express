const fs = require('fs');
const util = require('util');
const yaml = require('js-yaml');
const express = require('express');
const app = express();

(async () => {
  const readFile = util.promisify(fs.readFile);
  const configRaw = await readFile('./config.yml', 'utf8');
  const { port } = yaml.safeLoad(configRaw);

  app.get('/ping', (_, res) => res.send({ response: 'pong' }));

  app.listen(port, () => console.log(`Listening on port ${port}`))
})();
