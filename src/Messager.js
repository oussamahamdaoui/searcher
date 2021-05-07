const { html, $, EventManager, emptyElement } =  require('@forgjs/noframework');
const { createElement, Search } = require('lucide');
const Bot = require('./Bot');


const SmartSearch = () => {
    const DomElement = html`<div class="smart-search">
        <div class="input-elem">
            ${createElement(Search)}
            <input type="text" spellcheck="false">
        </div>
        <div class="results">
        </div>
    </div>`;

    const InputElem = $('input', DomElement);
    const resultsElem = $('.results', DomElement);
    const eventManager = new EventManager();
    const commander = Bot(eventManager);

    InputElem.addEventListener('focus', ()=>{
        DomElement.classList.add('open');
    });

    InputElem.addEventListener('input', ()=>{
        const text = InputElem.value.toLowerCase().trim() || '';
        commander.simulateInstruction(text);
    });

    InputElem.addEventListener('blur', ()=>{
        DomElement.classList.remove('open');
    });

    eventManager.subscribe('set-results', (res)=>{
        emptyElement(resultsElem);
        res.map(e => html`<div class="result">${e}</div>`).forEach((element) => {
            resultsElem.appendChild(element);
        });
    });

    return DomElement;
}

module.exports = SmartSearch;
