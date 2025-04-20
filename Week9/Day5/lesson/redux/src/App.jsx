import PostsList from "./features/posts/PostsList";
import "./App.css";
import UserBox from "./features/users/UsersBox";

function App() {
  return (
    <>
      <p>The Posts Project</p>
      <UserBox/>
      <PostsList />
    </>
  );
}

export default App;
