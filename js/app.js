// create cards.
const cards=["fa fa-leaf","fa fa-leaf","fa fa-diamond","fa fa-diamond",
"fa fa-paper-plane-o","fa fa-paper-plane-o","fa fa-bomb","fa fa-bomb",
"fa fa-bolt","fa fa-bolt","fa fa-anchor","fa fa-anchor","fa fa-cube",
"fa fa-cube","fa fa-bicycle","fa fa-bicycle"];


shuffle(cards);

var deck1=document.getElementsByClassName('deck')[0];

// generate cards for loop.
for (var i = 0; i < cards.length; i++){

  li1=document.createElement('li');
  li1.className='card';
  li1.dataset.icon = cards[i];
  i1=document.createElement('i');
  deck1.appendChild(li1);
  li1.appendChild(i1);
  i1.className=cards[i];

}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var cli2=document.querySelectorAll('.card');
var comp=[];
var newArray=[];
var count=0;
var seconds=0;
cli2.forEach(function(card){
  window.onload=card.classList.add('open','show'); // open cards in 2 second to focus.
  setTimeout(function(){window.onload=card.classList.remove('open','show');},2000); // 2 seconds;
  card.addEventListener('click',function(event){
    comp.push(card);
      card.classList.add('open','show');
      card.classList.add('pointer');
      if(comp.length === 2){
        console.log("goooooo1");
        count++;
        movee();
        if(comp[0].dataset.icon === comp[1].dataset.icon){
          console.log("goooooo2");
          comp[0].classList.add('open','show','match');
          comp[1].classList.add('open','show','match');
          comp[0].classList.remove('pointer');
            comp[1].classList.remove('pointer');
          comp=[];
          newArray.push(comp[0]);
          newArray.push(comp[1]);
          displaymess();
        }else {
          setTimeout(function(){
            console.log("goooooo3");
            comp[0].classList.remove('open','show');
            comp[1].classList.remove('open','show');
            comp[0].classList.remove('pointer');
              comp[1].classList.remove('pointer');
            comp=[];
          },900);}
        }else{ if(comp.length > 2){
          console.log("goooooo4");
          card.classList.remove('open','show');
          card.classList.remove('pointer');}
        }
      });
        });


  // replay game
  var res=document.getElementsByClassName("restart")[0];
  res.addEventListener('click',restart);

  // restart function.
  function restart(){
    location.reload();
  }

  // Number of moves and stars.
  function movee(){
    var move=document.getElementsByClassName("moves")[0];
    move.innerHTML=count;
    if(count==10){
      var x = document.getElementById("first");
      x.remove();
    }
    if(count==16){
      var x = document.getElementById("secon");
      x.remove();
    }

  }

  // start game timer.
  var timer=document.getElementsByClassName("timer1")[0];
  function theTimer(){
    'use strict';
    ++seconds;
    var minute=Math.floor(seconds/60);
    var sec= seconds -(minute*60);
    timer.innerHTML = minute+":"+sec;
  }

  var tim= setInterval(theTimer,1000);// Timer

  // stop timer fun.
  function stopTimer() {
    clearInterval(tim);
  }
  // display the message.
  let message = document.getElementById("display");
  let moves2 = document.getElementById("moves1");
  let stars2 = document.getElementById("stars1");
  var restart2 = document.getElementById("play");
  var close1 = document.getElementById("close2");
  var time2 = document.getElementById("time1");
  var final;
  function displaymess(){
    if(newArray.length==16){
      stopTimer();
      message.classList.add("pop");//add message.
      moves2.innerHTML=count;
      time2.innerHTML=timer.innerHTML;// add time.

      //play again button.
      restart2.onclick=function(){
        restart();
      }
      //close button
      close1.onclick=function(){
        message.classList.remove("pop"); //remove message.
      }
      // writing  stars number.
      if(count<10){
        stars2.innerHTML="3";
      }
      if(count>=10){
        stars2.innerHTML="2";
      }
      if(count>=16){
        stars2.innerHTML="1";
      }

    }
  }
