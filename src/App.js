import './App.css';
import React from 'react';

function Header(props) {
  return(
    <div id="nav-bar">
      <h1 id="title-banner">Cuymmunity!</h1>
      {/* <p>hola {props.text} !</p> */}
      <ul>
        <li> <a href='directorio'>Directorio</a> </li>
        <li> <a href='Sugerir'>Sugerir Negocio</a> </li>
        <i className='material-icons'>person</i>
      </ul>
    </div>
      
  )
};

class Helloworld extends React.Component {

  state = {
    show: true
  }

  visibility() {
    if ( this.state.show === true ){
      this.setState({ show:false })
    } else {
      this.setState({ show: true })
    }
    
  }

  render() {
    if (this.state.show === true) {
      return (
        <div>
          <h3> {this.props.title} </h3>
          {this.props.subtitle}
          <button onClick={() => this.visibility()}>Try</button>
        </div>
        
      )
    } else {
      return (
        <div>
          <h3>{this.props.subtitle}</h3>
          <button onClick={() => this.visibility()} >Make me visible</button>
        </div>
        
      )
    }
  }
};

function App() {
  return (
    <div>
      <Header text="Qi" />
      <Helloworld title="Make me invisble!!" subtitle=""/>
    </div>
    
  );
}

export default App;
