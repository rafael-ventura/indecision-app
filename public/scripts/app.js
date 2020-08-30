'use strict';

;
var visibility = false;
var changeTo = function changeTo() {
    visibility = !visibility;
    render();
};
var appRoot = document.getElementById('app');
var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            ' Visibility Toggle '
        ),
        React.createElement(
            'button',
            { onClick: changeTo },
            visibility ? 'Hide Details' : 'Show Details',
            ' '
        ),
        visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Text Here'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};
render();
