const events = require('events')
const util = require('util')

const Person = function(name){
  this.name=name
}




util.inherits(Person,events.EventEmitter)


const mark = new Person('mark')
const james = new Person('james')
const riu = new Person('riu')


const people = [mark,james,riu]
people.forEach( (person)=>{
  person.on('speak',(mss)=>{
    console.log(person.name+ " said: "+mss)
  })
})


james.emit('speak','hey guys')


//41.188.11.196