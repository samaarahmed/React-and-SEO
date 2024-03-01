import React from "react";
import { Link } from "react-router-dom";

import "./App.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

function Todo() {
  const params = useParams();
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const fetchTodo = async () => {
      const res = await fetch(
        `http://jsonplaceholder.typicode.com/todos/${params.id}`
      );
      const data = await res.json();
      setTodo(data);
    };
    if (params.id) {
      fetchTodo();
      console.log(params.id);
    }
  }, [params.id]);

  return (
    <main>
      <h1>{todo.title}</h1>
      <p className="card">To implement SEO in react js app</p>
      <div>
        <Link to="/">Back to homepage</Link>
      </div>

      <Helmet>
        <title>{todo.title}</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

        <meta
          name="description"
          content="On this page you can check  todos details with complete information "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="canonical" href={`http://localhost:3000/todo/${todo.id}`} />
      </Helmet>
    </main>
  );
}

export default Todo;
