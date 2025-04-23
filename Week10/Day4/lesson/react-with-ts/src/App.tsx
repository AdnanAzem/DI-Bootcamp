import "./App.css";
import Header from "./components/Header";
import List from "./components/LIst";
import Section from "./components/Section";
function App() {
  return (
    <>
      <h2>React With Typescript</h2>
      {/* <Header
        title={"swimming with sharks"}
        subTitle={"do not feed sharks when you swimmig next to"}
      />
      <Header
        title={"swimming with sharks"}
      /> */}
      {/* <Section content={"111"}>
        <>
          <h2>rrrrr</h2>
          <Header title={"swimming with sharks"} />
        </>
      </Section> */}
      <List items={["a","b","c"]}/>
    </>
  );
}

export default App;
