const myCat = {
    name: 'Tilín',
    age: 3,
    isCute: true,
    color: 'black and white',
    hungry: 10,
    greet: function() {
        console.log('Hi! my name is ' + this.name)
    },
    feed: function() {
        this.hungry--;
    }
}

const dayHours = 24

for (let i = 0; i < dayHours; i++) 
    {
        console.log('Hour', i)
    }

if (myCat.hungry > 0) {
    console.log('My cat is hungry')
}
myCat.greet()