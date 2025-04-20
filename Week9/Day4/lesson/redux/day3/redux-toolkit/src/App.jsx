import "./App.css";
import Counter from "./features/counter/Counter";
import Users from "./features/users/Users";

function App() {
  return (
    <>
      <h2>Redux Toolkit</h2>

      <Users />
      <Counter />
    </>
  );
}

export default App;
