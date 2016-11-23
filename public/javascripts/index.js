console.log('Hello console');


var a = document.getElementById('bossDropdown')

a.addEventListener('mouseleave', function () {
  console.log('in the event');
  reDirect()
})

function reDirect () {
  var e = document.getElementById('bossDropdown')
     window.location = `/patients/${e.value}`
}

document.getElementById("index").addEventListener('click', function() {
  window.location = '/'
})
