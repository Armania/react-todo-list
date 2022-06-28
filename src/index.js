import React from 'react';
import ReactDOM from 'react-dom';

//stylesheet
import "../styles/style.scss"

//import App from "./App";
//ReactDOM.render(<App />, document.getElementById("root"));

//component files
import TodoContainer from '../components/ToDoContainer';
ReactDOM.render(
  //<React.StrictMode>
  <>
    <TodoContainer />
  </>,
  //</React.StrictMode>,
  document.getElementById('root')
);
