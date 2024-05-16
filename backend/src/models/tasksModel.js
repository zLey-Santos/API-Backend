const connection = require("./connection");

const getAll = async () => {
  const [tasks] = await connection.execute("SELECT * FROM tasks");
  return tasks;
};

const createTask = async (task) => {
  const { title } = task;
  const dateUTC = new Date().toISOString();

  const query = "INSERT INTO tasks (title, status, dateUTC) VALUES (?, ?, ?)";
  const [createdTask] = await connection.execute(query, [
    title,
    "Pendente",
    dateUTC,
  ]);
  return { insertId: createdTask.insertId };
};

const deleteTask = async (id) => {
  const [removeTask] = await connection.execute(
    " DELETE FROM tasks WHERE id = ?",
    [id]
  );
  return removeTask;
};

const updateTask = async (id, task) => {
  const { title, status } = task;
  const query = "UPDATE tasks SET title = ?, status = ? WHERE id = ?";
  const [updatedTask] = await connection.execute(query, [title, status, id]);
  return updatedTask;
};

module.exports = {
  getAll,
  createTask,
  deleteTask,
  updateTask,
};
