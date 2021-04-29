//  This line of code changes the background color
document.body.style.backgroundColor = 'lightgreen'
//  This line listens for a click and then sends it towards function
document.getElementById('button').addEventListener('click', newimage)
//  Here is where the input of click allows for the new image to be loaded in place of the bird.
function newimage () {
  document.getElementById('photo').src = 'Corgi.png'
}
//  Just like before, this listens for a click.
document.getElementById('textone').addEventListener('click', textdisplayone)
//  This is where it edits a textbox and adds it's own text of birds can fly. The two next line after is the exact same by changing the text but with a different sentence of dogs can run.
function textdisplayone () {
  document.getElementById('textbox').innerHTML = 'Birds can fly!'
}

document.getElementById('texttwo').addEventListener('click', textdisplaytwo)
function textdisplaytwo () {
  document.getElementById('textbox').innerHTML = 'Dogs can run!'
}
//  This is where the button looks for a click which allows for a background to be loaded
document.getElementById('background').addEventListener('click', newbackground)
//  Once receiving the function from the button, the color of the background can change from light green to light blue.
function newbackground () {
  document.body.style.backgroundColor = 'lightblue'
}
//  Like the other buttons, this listens for a click
document.getElementById('show').addEventListener('click', showtext)
//  With a click registered, the text can reapear after being hidden by doing stye display 'block'.
function showtext () {
  document.getElementById('textbox').style.display = 'block'
}
//  Again, this button listens for a click to be registered
document.getElementById('hide').addEventListener('click', hidetext)
//  Now instead of showing text, this function hides the text through style display 'none'
function hidetext () {
  document.getElementById('textbox').style.display = 'none'
}
