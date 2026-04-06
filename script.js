p1="Player 1";
p2="Player 2";
console.log(p1,p2);
let nod=document.querySelectorAll(".box");
const win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let x=true;
let count=0;
nod.forEach((ele) => {
    ele.addEventListener("click",()=>{
        if(x){
            ele.innerText="X";
            ele.disabled="true";
            x=false;
        }
        else{
            ele.innerText="O";
            ele.disabled="true";
            x=true;
        }
        count++;
        if(count==9){
            print("F");
            let restart=document.querySelector("#but2");
            restart.style.display="inline-block";   
        }
        fun();
    });
});
let fun=()=>{
    win.forEach((ch)=>{
    if(nod[ch[0]].innerText==="X" && nod[ch[1]].innerText==="X" && nod[ch[2]].innerText==="X"){
        print("X");
        let restart=document.querySelector("#but2");
            restart.style.display="inline-block"; 
    }
    else if(nod[ch[0]].innerText==="O" && nod[ch[1]].innerText==="O" && nod[ch[2]].innerText==="O"){
        print("O");
        let restart=document.querySelector("#but2");
            restart.style.display="inline-block"; 
    }
}
);
};
let newele=document.createElement("div");
let print=(val)=>{
    newele.setAttribute("class","msg");
    if(val==="X") newele.innerText=`Congrat's ${p1} Win's.`;
    else if(val==="O") newele.innerText=`Congrat's ${p2} Win's.`;
    else newele.innerText="Awesome! Match Draw Try Again.";
    let sel=document.querySelector(".container");
    sel.after(newele);
    nod.forEach((char)=>{
        char.disabled=true;
    });
}
let resets=document.querySelectorAll(".reset");
resets.forEach((reset)=>{
reset.addEventListener("click",()=>{
    nod.forEach((ele)=>{
        ele.innerText="";
        ele.disabled=false;
    });
    newele.remove();
    x=true;
    count=0;
    let restart=document.querySelector("#but2");
    restart.style.display="none"; 
});
});