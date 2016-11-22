var makeNHI = require('./nhi-generator')
var ptArrayIncomplete = require('./MOCK_DATA.json').patients

function newObject() {
  var nhis = makeNHI(100)
  for (var i = 0; i < nhis.length; i++) {
    ptArrayIncomplete[i].NHI = nhis[i]
  }
  return ptArrayIncomplete
}

module.exports = newObject
