
   var counter = 0;
  function marker(id) {
      var block =document.getElementById(id)
      console.log(id);
      counter += 1;
      if(block.innerHTML!=="O" && block.innerHTML !=="X"){
      if (counter % 2 === 0) {
          block.innerHTML = "O";
      } else {
          block.innerHTML = "X";
      }
      console.log(counter); 
    }





  }


 


 
  
//   var player1 = "O";
//   var player2 = "X";
//   var playboard=[]
 