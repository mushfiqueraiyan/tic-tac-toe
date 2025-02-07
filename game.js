let boxes = document.querySelectorAll(".box");
let resetGame = document.querySelector("#reset");
let newGame = document.querySelector("#newGame")
let wmsg = document.querySelector("#win")

let turnO = true;

let winningPattern = [
    [0,1,2,],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turnO === true){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner()
    })
})


const checkWinner = () => {
    for (let pattern of winningPattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                wmsg.innerText = "Winner is " + pos1Val;
                showWinner(); 
                return;
            }
        }
    }
};

const showWinner = () => {
    disableBtn(); 
}

const disableBtn = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enableBtn = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = ""
        wmsg.innerText = ""
    }
};

const reset = ()=>{
    turnO = true;
    enableBtn()
}

resetGame.addEventListener("click", reset)
newGame.addEventListener("click", reset)