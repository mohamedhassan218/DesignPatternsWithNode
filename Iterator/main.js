// This represents our client code.
const ConcreteAggregate = require('./ConcreteAggregate');

const players = [
    { pName: 'Ahmed Sayed Zizo', position: 'RWF' },
    { pName: 'Shikabala', position: 'RWF' },
    { pName: 'Ashraf Bin Charki', position: 'LWF' },
    { pName: 'Mostafa Mohamed', position: 'CF' },
    { pName: 'Tarek Hamed', position: 'DMF' },
    { pName: 'Ferjai Sassi', position: 'CMF' }
];

const aggregate = new ConcreteAggregate(players);

const iterator = aggregate.createIterator();

console.log(iterator.getCurrent());     // prints: 0

while (iterator.hasNext()) {
    console.log(iterator.next());
}

console.log(iterator.getCurrent());     // prints: 6