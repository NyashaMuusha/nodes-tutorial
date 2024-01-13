// Modules - Encapsulated code, only share minimum.
// Common js - Every file in node is a module.
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavour');
require('./7-mind-grenade')
sayHi('Brenda');
sayHi(names.jason);
sayHi(names.nip);