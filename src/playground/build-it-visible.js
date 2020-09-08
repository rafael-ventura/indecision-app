
class VisibilityToggle extends React.Component {
  constructor(props){
    super(props);
    this.handletoggleVisibility = this.handletoggleVisibility.bind(this);
    this.state = {
      visibility : false
    };

  }

  handletoggleVisibility(){
    this.setState((prevState) => {
      return {
        visibility : !prevState.visibility
      }
    });
  }

  render() {
    let text = 'Hide Details';
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handletoggleVisibility}> 
        {this.state.visibility ? 'Hide Details' : 'Show Details'} 
        </button>
        {this.state.visibility && (
          <div>
            <p>Hey. These are some details you can now see!</p>
          </div>
        )}
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


