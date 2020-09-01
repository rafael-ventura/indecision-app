class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    const options = ['Thing 1',' Thing 2',' Thing 3'];
    return (
      <div>
        <Header title= {title} subtitle= {subtitle} />
        <Action />
        <Options options= {options} />
        <AddOption />
      </div>
    )
  }
}


class Header extends React.Component {
  render(){
    return (
      <div>
        <h1> {this.props.title} </h1>
        <h2> {this.props.subtitle} </h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button> What Should I Do? </button>
      </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <Option />
        <h2> {this.props.options.length} </h2>
        {this.props.options.map((option) => <Option key={option} optionText={option} /> )}
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
      <p> {this.props.optionText } </p>
    )
  }

}

class AddOption extends React.Component {
  render(){
    return (
    <div>
      This is AddOption Component
    </div>
    )
  }
}


ReactDOM.render(<IndecisionApp /> , document.getElementById('app'));