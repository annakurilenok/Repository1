const _ = require('lodash');
const $ = require('jquery');
const alertModul = require('./alert');

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());

  //$('body').css({backgroundColor: 'pink'}); //jquery

  alertModul.myFunction('Это аллерt!');