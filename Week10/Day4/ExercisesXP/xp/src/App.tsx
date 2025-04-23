// src/App.tsx
import React from "react";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import "./App.css";
import UserCard from "./components/UserCard";
import UserList from "./components/UserList";

const App: React.FC = () => {
  const user = {
    name: "Adnan",
    messageCount: 5,
    isLoggedIn: true,
  };

  return (
    <>
      {/* Exercise 2  */}
      {/* <Greeting 
          name={user.name}
          messageCount={user.messageCount}
          isLoggedIn={user.isLoggedIn}
        /> */}

      {/* Exercise 3   */}
      {/* <Counter /> */}

      {/* Exercise 4 */}
      {/* <UserCard 
          name="Alice Johnson" 
          age={28} 
          role="Frontend Developer" 
          email="alice@example.com" 
          isActive={true} 
        /> */}

      {/* Minimal information */}
      {/* <UserCard name="Bob Smith" /> */}

      {/* Partial information */}
      {/* <UserCard 
          name="Charlie Brown" 
          age={35}
          isActive={true}
        /> */}

      {/* No props */}
      {/* <UserCard /> */}

      {/* Exercise 5 */}
        <UserList />
    </>
  );
};

export default App;
