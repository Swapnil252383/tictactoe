let boxes=document.querySelectorAll(".box");
let resetbut=document.querySelector(".reset");
let msg=document.querySelector("#msg");
let container=document.querySelector(".msg-container")

let turnO= true;

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was click")
        if(turnO){
            box.innerText="o";
            turnO=false;

        }
        else{
            box.innerText="x";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    })
})
const showwinner=(winner)=>{
    msg.innerText=`you are the winner ${winner}`;
    container.classList.remove("hide");
}
const checkwinner=()=>{
    for(let pattern of winpatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("winner");
                showwinner(pos1val);
            }
        }
    }
}