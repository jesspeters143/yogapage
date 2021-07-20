const modeButton  = document.getElementsByTagName("button")[0];
const bodyElement = document.getElementsByTagName("body")[0];


var inDarkMode = false;

function applyMode() {
   console.log('hello');
   if (inDarkMode == false) {
    modeButton.style.background="#b9936c";
    modeButton.style.color="ivory";
    modeButton.style.border="ivory";
    bodyElement.style.background="black";
    inDarkMode = true;
    console.log('Currently in dark mode');
   } else if (inDarkMode == true) {
      modeButton.style.background="#c4b7a6";
      modeButton.style.color="black";
      modeButton.style.border="black";
      bodyElement.style.background="ivory";
      inDarkMode = false;
      console.log('Currently in light mode');
   }
}



modeButton.addEventListener("click", applyMode);
