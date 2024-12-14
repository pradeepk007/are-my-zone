let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newgameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-Container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX,playerO

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],   
];



const resetgame = () => {
    turnO = true;
    enableBoxes ();
    
};

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
      
    if (turnO) { //playerO
        box.innerText = "O";
        turnO = false;
    } else {
        box.innerText = "X";
        turnO = true;
    }
    box.disabled = true;

    checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
       
    };
};

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText="";
       
    };
};

const showWinner = (winner) => {
    msg.innerText = `Congratulation,winner is ${winner}`;
  
    disableBoxes();
};

const checkWinner = () => {
    for(pattern of winPatterns) {
       let pos1Val = boxes[pattern[0]].innerText;
       let pos2Val = boxes[pattern[1]].innerText;
       let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
           
            showWinner(pos1Val);
        }
    }
    }
}


newgameBtn.addEventListener("click", resetgame);
resetBtn.addEventListener("click",resetgame);