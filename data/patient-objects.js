var makeNHI = require('./nhi-generator')
var ptObjIncomplete = require('./MOCK_DATA.json')


function newObject() {
  var nhis = makeNHI(100)
  for (var i = 0; i < nhis.length; i++) {
    ptObjIncomplete.patients[i] = nhis[i]
  }
  return ptObjIncomplete
}

module.exports = newObject
