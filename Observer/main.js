const Subject = require('./Subject');
const Observer = require('./Observer');

const sub = new Subject('Leader');

const obs1 = new Observer('Mohamed');
const obs2 = new Observer('Hassan');
const obs3 = new Observer('Fathy');

sub.subscribe(obs1);
sub.subscribe(obs2);
sub.subscribe(obs3);

sub.notify('Hello World');
console.log('...............');
sub.unsubscribe(obs3);  // Remove 'Fathy'.
sub.notify('Hello again!');
console.log('...............');
sub.unsubscribe(obs2);  // Remove 'Hassan'.
sub.notify('Hello');
console.log('...............');
sub.subscribe(obs2);    // Add 'Hassan' again.
sub.notify('Hello');