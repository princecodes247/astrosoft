let cursorElem = document.createElement("div")
cursorElem.classList.add("cursor")
let cursor = document.querySelector(".cursor")
let body = document.querySelector("body")
body.addEventListener("mousemove", e => {
	console.log(e)
	cursor.style.setProperty("--cursor-x", (e.pageX - 30) + "px")
	cursor.style.setProperty("--cursor-y", (e.pageY -30) + "px")
})

  // body.addEventListener('mousemove', (e) => {
  //       cursor.style.top = e.clientY + "px"
  //       cursor.style.left = e.clientX + "px"


  //   })