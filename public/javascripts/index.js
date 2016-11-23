console.log('Hello console');


var a = document.getElementById('bossDropdown')

a.addEventListener('mouseleave', function () {
  console.log('in the event');
  reDirect()
})

var lastIndex = ''
function reDirect () {
  var e = document.getElementById('bossDropdown')
  if(e.selectedIndex > 0) {
    if(e.selectedIndex !== lastIndex) {
      console.log('Yep');
     window.location = `/patients/${e.value}`
    }
  }
}
