import { ThemeProvider } from "./context/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";
import ThemedComponent from "./components/ThemedComponent";
import "./App.css";
import "./styles.css";

function App() {
  return (
    <>
      <ThemeProvider>
        <div className="app">
          <header>
            <h1>Theme Switcher Demo</h1>
            <ThemeSwitcher />
          </header>
          <main>
            <ThemedComponent />
            <div className="content">
              <p>Press the button to switching between light and dark modes.</p>
            </div>
          </main>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
