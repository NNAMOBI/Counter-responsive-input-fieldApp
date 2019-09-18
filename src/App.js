import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import ClassCounter from './component/classComponent/ClassCounter';
// import HookCounter from './component/functionComponent/hookCounter';
import HookName from './component/functionComponent/hookName';
import HookCounter2 from './component/functionComponent/hookCounter2'
import HookCounter3 from './component/functionComponent/hookCounter3'

function App() {
  return (
    <div className="App">
      {/* <ClassCounter />
      <HookCounter /> */}
      <HookName />
      <HookCounter2 />
      <HookCounter3 />
    </div>
  );
}

export default App;
