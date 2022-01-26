let navigator = document.getElementsByClassName('navigate')
for (let index = 0; index < navigator.length; index++) {
    navigator[index].addEventListener('click', () =>{
        for (let j = 0; j < navigator.length; j++) {
            navigator[j].classList.remove('active')
        }
        navigator[index].classList.add('active')
        openableMenu.style.height = '0'
        hasBeenClicked = !hasBeenClicked
        opMenu.classList.remove('opened')
    })
}

//Scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    let onSc = document.getElementsByClassName('navbar-on-sc')[0]
    onSc.style.top = '-50px'
} else {
    let onSc = document.getElementsByClassName('navbar-on-sc')[0]
    onSc.style.top = '0'
  }
  prevScrollpos = currentScrollPos;
}

let opMenu = document.getElementById('opM')
let openableMenu = document.getElementById('openable')
let hasBeenClicked = false
opMenu.addEventListener('click', () => {
    if(hasBeenClicked){
        openableMenu.style.height = '0'
        hasBeenClicked = !hasBeenClicked
    }else{
        openableMenu.style.height = '100%'
        hasBeenClicked = !hasBeenClicked
    }
})

// let cc = document.getElementsByClassName('cc')
// for (let h = 0; h < cc.length; h++) {
//     const element = array[h];
//     element.addEventListener('click', () => {
//         openableMenu.style.height = '0'
//     })
    
// }