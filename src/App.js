import React, { Component } from 'react';

import Button from './components/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button onClick={() => alert('click')}>Example Button</Button>
      </div>
    );
  }
}

export default App;
