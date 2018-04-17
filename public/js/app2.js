var test = "Test variable";
console.log(test, 'in same file.');

var anon = function() {
    return console.log(test, 'in anonymous function.');
 };

 anon();


