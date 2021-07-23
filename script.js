/* .js files add interaction to your website */
/* TW 

window.alert("TW// This site talks about Ableism, Homophobia, and Sexism!");  */

/* FACT BUTTON */

var clickCount=0;
var factList = ["The Universal Declaration of Human Rights is the most translated document in the world.", "Human Rights Day is held on December 10th every year to promote the rights and freedoms of people across the globe.", "Throughout history, women have been denied the knowledge, means, and freedom to act in the best interest of themselves and their children."]

var factShow = document.getElementById ("fact");
var myBtn = document.getElementById ("myBtn");
myBtn.addEventListener ("click", displayFact);

function displayFact(){
  factShow.innerHTML = factList[clickCount];
  clickCount ++;
  if (clickCount==factList.length) {
    clickCount = 0;
  }
}
