
;
let visibility = false;
const changeTo = () => {
    visibility = !visibility;
    render();
}
const appRoot = document.getElementById('app');
const render = () => 
{
    const template = (
    <div>
        <h1> Visibility Toggle </h1>
        <button onClick = {changeTo} >{visibility ? 'Hide Details' : 'Show Details'} </button>
    { visibility && (
        <div>
            <p>Text Here</p>
        </div>
        )}
    </div>
    );
ReactDOM.render(template, appRoot);
}
render();