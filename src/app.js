console.log('App.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['Arroz', 'Feijao', 'Macarrao']
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};
const onMakeDecision = () => {
  const randonNum =  Math.floor(Math.random() * app.options.length);
  const option = app.options[randonNum];
  alert(option);
}

const onRemoveAll = () => {
  app.options = [];
  render();
};

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <p>{app.options.length}</p>
      <button disabled= {app.options.length === 0} onClick={onMakeDecision}> What Should I Do?</button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {app.options.map((option) => <li key={option}> {option} </li>)}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};
render();
