window.onload = function() {

  const body = document.body;
  const dice = document.querySelector('.dice');
  const h1 = document.querySelector('h1');
  const h6 = document.querySelector('h6');
  const box0 = document.querySelector('#box0');
  const box6 = document.querySelector('#box6');
  const box12 = document.querySelector('#box12');
  const box18 = document.querySelector('#box18');
  const box24 = document.querySelector('#box24');
  const player = document.createElement('div');
  const flag = document.createElement('div');
  const banana1 = document.createElement('div');
  const banana2 = document.createElement('div');
  const banana3 = document.createElement('div');
  
  function setUp () {
    flag.className = "flag";
    document.querySelector('#box24').appendChild(flag);
    dice.addEventListener('click', playTurn);
    player.className = "player";
    document.querySelector('#box0').appendChild(player);
    player.classList.add("style");
    player.style.top = "0px";
    player.style.left = "0px";
    banana1.className = "banana";
    document.querySelector('#box6').appendChild(banana1);
    banana2.className = "banana";
    document.querySelector('#box12').appendChild(banana2);
    banana3.className = "banana";
    document.querySelector('#box18').appendChild(banana3);
  }; 

  setUp(); 

  let count = 0;
  let top = 0;
  let left = 0;  

  function moveRight (x) {
    left += (x * 84);
    player.style.left = left + "px";
  }

  function moveDown (y) {
    top += (y * 84);
    player.style.top = top + "px";
  }

  function moveUp (w) {
    top -= (w * 84);
    player.style.top = top + "px";
  }

  function checkPos(count, diceNum) {
    for(let i=1; i<=diceNum; i++) {
      switch(count) {
        case 0: case 1: case 2: case 3: case 10: case 11: case 12: case 13: case 20: case 21: case 22: case 23: moveDown(1);
        break;
        case 4: case 9: case 14: case 19: moveRight(1);
        break;
        case 5: case 6: case 7: case 8: case 15: case 16: case 17: case 18: moveUp(1);
        break;
        default: console.log("error");
        break;
      };
      count++;
    };
  }
  
  function bananaSlip () {
    if(count===6) {
      h1.textContent = "Banana skin!!";
      h1.style.color = "yellow";
      moveDown(1);
      count-=1;
    } else if(count===12) {
      h1.textContent = "Banana skin!!";
      h1.style.color = "yellow";
      moveUp(2);
      count-=2;
    } else if(count===18) {
      h1.textContent = "Banana skin!!";
      h1.style.color = "yellow";     
      moveDown(3);
      count-=3;
    } else if(count!=0 && count!=24 && count <23) { 
      h1.textContent = "Roll the dice and avoid the banana skins!";
      h1.style.color = "green";
    }
  }

  function checkWin () {
    if(count>=24) {
      h1.textContent = "Congratulations, you win!";
      h1.style.color = "red";
      }
  }

  function playTurn () {
    let diceRoll = (Math.floor(Math.random() * 6)) + 1;
    h6.textContent = diceRoll;
    checkPos(count,diceRoll);
    count += diceRoll;
    setTimeout(function(){ bananaSlip() }, 200);
    checkWin();
  }

};

  