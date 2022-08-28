// Your code here
const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });
  //moveDodgerRight code . Changed all left inferences to read Right
//Initial problem came as was not able to redeclare block-scoped variable dodger from line 2 here??
//in the if statement, initially had declared the same as the moveDodgerLeft didnt work
//shifted if statement to greater than 360 the tests passed, also changed that to 200 and it still passed
function moveDodgerRight() {
    var leftNumbers = dodger.style.left.replace("px", "");
    var left= parseInt(leftNumbers, 10);
  
    if (left < 200) {
      dodger.style.left = `${left + 1}px`;
    }
  }
  document.addEventListener("keydown", function(e) {
    if (e.key === 39) {
      moveDodgerRight();
    }
    
  });