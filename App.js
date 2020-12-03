import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      count: 0,
      myButtons: []
    }
  }

  aFunction = (incrementBy) => {
    this.setState({...this.state, count: this.state.count+incrementBy});
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const increment = Number(event.target.increment.value)
    let aButton = <AButton key={this.state.myButtons.length} value={increment} onPress={this.aFunction}/>
    if (this.state.myButtons !== undefined) {
      this.setState({...this.state, myButtons: [...this.state.myButtons, aButton]})
    } else {
      this.setState({...this.state, myButtons: [aButton]})
    }
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>custom counter</h1>
        </header>
        <div>{ this.state.count }</div>
        <form onSubmit={this.handleSubmit}>
          <input type="number" name="increment" />
          <button type="submit">generate button</button>
        </form>
        <div>{this.state.myButtons}</div>
      </div>
    );
  }
}

const AButton = (props) => {
  return (
    <button onClick={() => {props.onPress(props.value)}}>{props.value.toString()}</button>
  );
}

export default App;
