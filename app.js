
   var counter = 0;
  function marker(id) {
      var block =document.getElementById(id)
      console.log(id);
      if(block.innerHTML!=="O" && block.innerHTML !=="X"){
          for(var i=0 ; i <playBoard.length ; i++){
            // console.log(playBoard[0][i]===playBoard[1][i]===playBoard[2][i]==='X', playBoard);
            if(playBoard[0][i]=== 'X' && playBoard[1][i]==='X' && playBoard[2][i]==='X' ){
                console.log("win");
            } }
        counter += 1;
      if (counter % 2 === 0) {
          block.innerHTML = "O";
      } else {
          block.innerHTML = "X";
      }

    }
   
   }


//    var block0 = document.getElementById('block0').setAttribute('value', 'X');

   var playBoard = []
for(var i=0; i<3; i++) {
    playBoard[i] = new Array(3);

}
console.log(playBoard[0]);














 
