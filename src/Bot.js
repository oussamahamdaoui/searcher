import Artyom from 'artyom.js';
const createBot = (eventManager)=>{
    const artyom = new Artyom();
    artyom.addCommands([
        {
            indexes: ['how to *','how do *', 'how *'],
            smart:true,
            action: function(i) {
                eventManager.emit('set-results', [
                    'How to create an invoice',
                    'How to add a customer',
                    'How to change the curency',
                    'How to change the date format',
                    'How to add a tax',
                    'How to add a promotion',
                    'How to create a product',
                    'How to edit a product',
                ]);
            }
        },
        {
            indexes: ['*create','*add', 'add', 'create'],
            smart:true,
            action: function(i) {
                eventManager.emit('set-results', [
                    'How to create an invoice',
                    'How to add a customer',
                    'How to add a tax',
                    'How to add a promotion',
                    'How to create a product',
                ]);
            }
        },
    ]);

    console.log(artyom.getAvailableCommands())

    return artyom;
}



module.exports = createBot;
