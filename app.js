
   var counter = 0;
  function marker(id) {
      var block =document.getElementById(id)
      console.log(id);
      if(block.innerHTML!=="O" && block.innerHTML !=="X"){
        counter += 1;
      if (counter % 2 === 0) {
          block.innerHTML = "O";
      } else {
          block.innerHTML = "X";
      }

    }
   
   }


 


 
  
//   var player1 = "O";
//   var player2 = "X";
//   var playboard=[]
 