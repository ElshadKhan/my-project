const express = require('express');
const todoRouter = require('./routes/todo.routes.js');
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use('/', todoRouter);

app.listen(PORT, () => console.log(`Server started on post ${PORT}`));