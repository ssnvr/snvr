import React, { Component } from 'react';
import Content from './components/content';
import Menu from './components/menu'


class App extends Component {
  render() {
    return (
      <div className="App">
<Menu/>
<Content/>
      </div>
    );
  }
}
 
export default App;

