import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';


// const person = 'Dani';
// const greetingPerson = <h3> Hello, {person} </h3>;

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName
// }

// const user = {
//   firstName: 'Brian',
//   lastName: 'Kang'
// };

// const greeter = (
//   <h3>
//     Hello, {formatName(user)}!
//   </h3>
// );

const element = {
  type :'h1',
  props: {
    className: 'greeting',
    children: 'hello world!!'
  }
};

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  ///////////////
  // greetingPerson,
  // document.querySelector('#root')
  element,
  document.querySelector('#root')
  
);


reportWebVitals();
