const marker = document.querySelector('#marker');
const navItems = document.querySelectorAll('header nav ul li:not(#marker)')
const header = document.querySelector('header')
const nav = document.querySelector('header nav ul')
// const logo = document.querySelector('header nav .logo span')




// function markerPos(e) {
//     marker.style.left = e.offsetLeft + "px";
//     marker.style.width = e.offsetWidth + "px";
// }

// navItems.forEach(navItem => {
//     navItem.addEventListener('mouseover', (e) => {
//         markerPos(e.target)

//     })

// })

// nav.addEventListener('mouseleave', (e) => {
//     marker.style.left = "-1px";
//     marker.style.width = "68px";
// })



// nav.addEventListener('click', (e) => {
//     scroll.scrollTo(`#${e.target.innerText.toLowerCase()}`);
// })
// let logoBounce = true
// logo.addEventListener('click', (e) => {
//     logoBounce ? scroll.scrollTo(`#home`) : scroll.scrollTo('top');
//     logoBounce = !logoBounce

// })

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    header.classList.add("header_small");
  } else {
    header.classList.remove("header_small");
  }
} 