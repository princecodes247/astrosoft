let cursorElem = document.createElement("div")
cursorElem.classList.add("cursor")
let cursor = document.querySelector(".cursor")
let body = document.querySelector("body")
body.addEventListener("mousemove", e => {
	// console.log(e)
	cursor.style.left = (e.pageX - 20) + "px"
	cursor.style.top = (e.pageY - 20) + "px"
})

  // body.addEventListener('mousemove', (e) => {
  //       cursor.style.top = e.clientY + "px"
  //       cursor.style.left = e.clientX + "px"


  //   })