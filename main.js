// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// invoke "server" per instructions, adding eventlister function, change heart
mimicServerCall()
.then(addEventListenerToHearts())
.catch( function(err) {
  alert(err)

  // Getting model element, removing hi)dden
  u = document.getElementById('modal')
  u.classList.remove('hidden')
  //console.log(u)

  // Using timeout after 3 secs tp add hidden class back
  const myTime = setTimeout(function () {
    document.getElementById('modal').classList.add('hidden')}, 3000)
})

function addEventListenerToHearts(){

  let heartButtons = document.getElementsByClassName("like-glyph")

  // adding event listener to each heart, returning event
  for (let h of heartButtons){
    h.addEventListener('click', function (e) {
      console.log("This heart was clicked")

      // Conditional logic changing the heart
      if (e.target.innerText === EMPTY_HEART) {
        console.log("empty to full")
        e.target.innerText = FULL_HEART
      } else if (e.target.innerText === FULL_HEART) {
        e.target.innerText = EMPTY_HEART
        console.log("full to empty")
      } else {
        console.log("Something is wrong")
      }
      
    })
  }
}

//addEventListenerToHearts()

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
