//JS code goes here
var turn = false;
function play(event){
  if (!event.target.innerText){
  event.target.innerText = turn? "0": "X";
  turn = !turn;
}
}
