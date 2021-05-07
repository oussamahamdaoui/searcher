const { html } = require('@forgjs/noframework');
const Messager = require('./Messager');

const App = () => {
    const DomElement = html`<div class="app">
        ${Messager()}
    </div>`;

    return DomElement;
}

document.body.append(App());
