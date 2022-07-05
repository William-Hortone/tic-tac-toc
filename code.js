let cases = [...document.querySelectorAll(".case")];
console.log(cases);
let button = document.querySelector(".button");
let restart = false;


currentPlayer = "X";
let winningCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
function winner(combination) {
  combination.forEach((idx) => {
    cases[idx].classList.add("cases_color");
  });
}

cases.forEach((cell) => {
    cell.addEventListener("click", () => {
      if (cell.innerText != "") return;
      cell.innerText = currentPlayer;
      checkForWinner();
      currentPlayer = currentPlayer == "X" ? "O" : "X";
    });
  });
  

function checkForWinner() {
  winningCombination.forEach((combination) => {
    let check = combination.every(
      (idx) => cases[idx].innerText == currentPlayer
    );
    if (check) {
      winner(combination);
      
    alert(currentPlayer +' has won the match')
     
        
    cases.forEach((cell) => {
        cell.addEventListener("click", () => {
        // if (cell.innerText = "") return;
        if(restart == false){

            alert(currentPlayer +'  has won the match ! You can restart the game')
        }
        });
    });



    }
  });
}


button.addEventListener("click", () => {
  cases.forEach((box) => {
    box.innerText = "";
    box.classList.remove("cases_color");
  });
  restart= true;
});
