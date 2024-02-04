const app = require('express')();
const board = require('../controller/board');

app.get('/', board.getList);
app.post('/create', board.create);

module.exports = app;