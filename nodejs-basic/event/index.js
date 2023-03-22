const { EventEmitter } = require('events');// TODO 1

const birthdayEventListener = (name) => {//bisa nambah({name}) di dalam parameter
    console.log(`Happy birthday ${name}!`);
  }
   
  const myEmitter = new EventEmitter(); // TODO 2
   
myEmitter.on('birthday',birthdayEventListener) // TODO 3
   
myEmitter.emit('birthday','IMAM DZA QHOIR')  // TODO 4 //tapi arg harus di tulis ulang {name:'imam'}