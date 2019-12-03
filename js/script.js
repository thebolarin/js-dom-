





document.getElementById('firstButton').onclick = switchColor;
document.getElementById('thirdButton').onclick = switchBlue;



function myFunction() {
    
    document.getElementById("secondButton").innerHTML = "rice";  
  }



function switchBlue(){
  document.getElementsByTagName('body')[0].style.backgroundColor = 'blue';
  document.getElementsByTagName('body')[0].style.color = 'white';
}

function switchColor(){
    document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
    document.getElementsByTagName('button')[0].style.color = 'red';
  }

  

