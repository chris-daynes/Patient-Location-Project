// An NHI generator to make format ABC1234

// make a random number of fixed length
var randomFixedInteger = function (length) {
    return Math.floor(Math.pow(10, length-1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length-1) - 1));
}

// generate a random letter combo of certain length
function makeLetters(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for( var i=0; i < length; i++ ) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
      }
    return text;
}

// makes a certain number of things
function makeNHI(num) {
  var nhiArray = []
  for(var i = 0; i < num; i++) {
    var joined = (makeLetters(3)).concat(randomFixedInteger(4))
    nhiArray.push(joined)
  }
  return nhiArray
}

module.exports = makeNHI
