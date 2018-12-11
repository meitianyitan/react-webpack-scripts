'use strict';

process.on('unhandledRejection', err => {
  throw err;
});

const spawn = require('../utils/crossSpawn');
