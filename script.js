var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';

var setUpperCase = dinosaur.toUpperCase();

var textChange = text.replace('Velociraptor', (setUpperCase));

console.log(textChange.length/2);

var halfText = textChange.slice(0, 72);

console.log(halfText);