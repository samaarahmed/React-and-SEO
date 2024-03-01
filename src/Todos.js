import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { Helmet } from "react-helmet-async";

function TodosPage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      // setTimeout(async () => {
      const res = await fetch("http://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      setTodos(data);
      //  }, 3000);
    };
    fetchTodos();
  }, []);

  return (
    <main className="container">
      <h1>List of Todos</h1>
      {todos.length === 0 ? (
        <div>loading... </div>
      ) : (
        todos.map((todo) => (
          <div className="card" key={todo.id}>
            <Link to={`todo/${todo.id}`}>
              <h2>
                {todo.id}: {todo.title}
              </h2>
            </Link>
          </div>
        ))
      )}
      <Helmet>
        <title>Samaar's list of Todos 2024</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

        <meta
          name="description"
          content="On this page you can check  samaar's todos list year 2024"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="canonical" href="http://localhost:3000/" />
      </Helmet>
    </main>
  );
}

export default TodosPage;
