import Angelfish from './Module/Angelfish.js'
import Buffalo from './Module/Buffalo.js'
import Cat from './Module/Cat.js'
import Dog from './Module/dog.js'
import Elephant from './Module/Elephant.js'

let angelfish = new Angelfish('Angelfish', 'swimming', 2, 1)
console.log(angelfish)
angelfish.sound()

let RomBuffalo = new Buffalo('Romanian', 'Milky', 800, 160)
console.log(RomBuffalo)
RomBuffalo.sound()

let cat = new Cat('fluffy', 'catchMouse', 10, 5)
console.log(cat)
cat.sound()

let afghanHound = new Dog('afghan-hound', 'hunter', 90, 110)
console.log(afghanHound)
afghanHound.sound()

let elephant = new Elephant('African', 'Milky', 200, 1500)
console.log(elephant)
elephant.sound()




