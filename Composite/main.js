const MenuItem = require('./MenuItem');
const Menu = require('./Menu');

const item1 = new MenuItem('Pasta', 12.99);
const item2 = new MenuItem('Pizza', 15.99);

const menu = new Menu('Main Menu');
const submenu = new Menu('Specials');

menu.add(item1);
menu.add(item2);

menu.display();

const item3 = new MenuItem('Espresso', 1.99);
const item4 = new MenuItem('Hot Chocolate', 3.5);

submenu.add(item3);
submenu.add(item4);

menu.add(submenu);

console.log(item1.display());
console.log(menu.display());   