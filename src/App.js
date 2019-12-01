import React from 'react';
const API_URL = '/api';

class App extends React.PureComponent {
  async componentDidMount() {
    const res = await fetch(API_URL);
    const data = await res.json();

    console.log(data)
  }

  render() {
    return (
      <div className="App">
        <h1>home</h1>
      </div>
    );
  }
}

export default App;
