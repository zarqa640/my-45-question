var personName = ("zarka khan");
console.log(personName.toLocaleLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
