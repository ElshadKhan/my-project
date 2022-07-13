create TABLE todos (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  completed VARCHAR(255),
  createdat DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedat VARCHAR(255)
);