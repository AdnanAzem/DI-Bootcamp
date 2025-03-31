import './App.css';
import Counter from './components/BuggyCounter'
import ErrorBoundary from './components/ErrorBoundary';
import Color from './components/Color';
import Child from './components/Color'

function App() {
  return (
    <>

    {/* <ErrorBoundary>
      <Counter />
    </ErrorBoundary>
    <ErrorBoundary>
      <Counter />
    </ErrorBoundary>  */}


    <Child/>
    </>
  );
}

export default Color;