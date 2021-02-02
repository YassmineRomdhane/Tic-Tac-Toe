
  var cells = document.querySelectorAll(".block");
  for (var cell of cells) {
      cell.addEventListener('click', marker)
  }
  
  var counter = 0;
  function marker() {
      counter += 1;
      if (counter % 2 === 0) {
          this.innerHTML = "O";
      } else {
          this.innerHTML = "X";
      }
  }

  
