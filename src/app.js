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
  handlePick() {
    alert ('looking');
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}> What Should I Do? </button>
      </div>
    )
  }
}

class Options extends React.Component {
  handleRemoveAll() {
    alert('some message');
  }
  render() {
    return (
      <div>
        <Option />
        <button onClick={this.handleRemoveAll}> RemoveAll </button>
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
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option){
      alert (`'${option}' added`);
    }

  }
  render(){
    return (
    <div>
      <form onSubmit={this.handleAddOption}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
    )
  }
}


ReactDOM.render(<IndecisionApp /> , document.getElementById('app'));