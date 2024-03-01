import Todo from "./Todo";
import TodosPage from "./Todos";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={TodosPage} />
        <Route path="/todo/:id" Component={Todo} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
