const db = require("../db");
class TodoController {
  async createTodo(req, res) {
    const { title } = req.body;
    const newTodo = await db.query(
      `INSERT INTO todos (title, completed) values ($1, $2) RETURNING *`,
      [title, 1]
    );
    res.json(newTodo.rows[0]);
  }
  async getTodos(req, res) {
    const todos = await db.query("SELECT title FROM todos");
    res.json(todos.rows);
  }
  async getActiveTodos(req, res) {
    const todos = await db.query(
      "SELECT title FROM todos where completed = $1",
      [1]
    );
    res.json(todos.rows);
  }
  async getCompletedTodos(req, res) {
    const todos = await db.query(
      "SELECT title FROM todos where title = completed "
    );
    res.json(todos.rows);
  }
  async updateTodo(req, res) {
    const id = req.params.id;
    const { title } = req.body;
    const todo = await db.query(`UPDATE todos SET title = $1 WHERE id = $2 `, [
      title,
      id,
    ]);
    res.json(todo.rows[0]);
  }
  async createCompletedTodo(req, res) {
    const id = req.params.id;
    const completedTodo = await db.query(
      `UPDATE todos SET completed = title WHERE id = $1`,
      [id]
    );
    res.json(completedTodo.rows[0]);
  }
  async deleteCompletedTodo(req, res) {
    const todo = await db.query(`DELETE FROM todos where (title = completed)`);
    res.json(todo.rows);
  }
  async deleteTodo(req, res) {
    const id = req.params.id;
    const todo = await db.query("DELETE FROM todos where id = $1", [id]);
    res.json(todo.rows[0]);
  }
}

module.exports = new TodoController();
