//JS code goes here
var win = false;
var turn = false;
function play(event){
  if (!event.target.innerText && !win){
  document.getElementById("gamestat").innerText="Game in progress";
  event.target.innerText = turn? "0": "X";
  var player = event.target.innerText;
  checkwin(player);
  turn = !turn;
}

}

function checkwin(player){
var b0 = document.getElementById(0).innerText;
var b1 = document.getElementById(1).innerText;
var b2 = document.getElementById(2).innerText;
var b3 = document.getElementById(3).innerText;
var b4 = document.getElementById(4).innerText;
var b5 = document.getElementById(5).innerText;
var b6 = document.getElementById(6).innerText;
var b7 = document.getElementById(7).innerText;
var b8 = document.getElementById(8).innerText;

if(
    (b0==b1 && b1==b2 && b0!="") ||
    (b3==b4 && b4==b5 && b3!="") ||
    (b6==b7 && b7==b8 && b6!="") ||
    (b0==b3 && b3==b6 && b0!="") ||
    (b1==b4 && b4==b7 && b1!="") ||
    (b2==b5 && b5==b8 && b2!="") ||
    (b0==b4 && b4==b8 && b0!="") ||
    (b2==b4 && b4==b6 && b2!="")
  ){
  console.log(player + " wins")
  if(player == 'X'){
    var temp = document.getElementById('p1_wins');
    temp.innerText = Number(temp.innerText) + 1;
    document.getElementById("gamestat").innerText="Player 1 wins";

    var temp = document.getElementById('p2_lost');
    temp.innerText = Number(temp.innerText) + 1;
    win = true;

    //clear();
  }
  else{
    var temp = document.getElementById('p2_wins');
    temp.innerText = Number(temp.innerText) + 1;
    document.getElementById("gamestat").innerText="Player 2 wins";

    var temp = document.getElementById('p1_lost');
    temp.innerText = Number(temp.innerText) + 1;
    win = true;
    //clear();
  }

}
else {
  for (var i =0; i<9; i++){
    if(document.getElementById(i).innerText==""){
      break;
    }
  }
  if (i==9)
    document.getElementById("gamestat").innerText="Game Draw";
}

}

function clear(){
  console.log("works")
  for (var i=0; i<9; i++){
    document.getElementById(i).innerText="";
  }
  document.getElementById("gamestat").innerText="New Game";
  win = false;
}


document.getElementById("clc").addEventListener("click",function (event){
  clear();
})
