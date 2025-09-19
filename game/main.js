document.getElementById("txt").innerText = "これはゲームです";
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

//ctx.fillStyle = "block";
//ctx.fillRect(0,0,canvas.width, canvas.height);

// fillRect(X座標（横）、Y座標（縦）、横幅、縦幅)

//自分のキャラクターに見立てた四角形をとりあえず作ってみてください。

// width="480" height="640"
let x = 255;
let y = 0;  
let tama=0;

window.addEventListener("keydown",(e)=>{
    if (e.key === "ArrowLeft"){
        x -=10;
    } else if (e.key === "ArrowRight"){
        x += 10;
    } else if (e.key==="Space"){
        tama+=1;
        //たまの処理
    }
});

    function gameLoop() {
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,canvas.width, canvas.height);
    ctx.fillStyle = "blue";
    ctx.fillRect(x, 480, 30, 30);
    x+=0;
    ctx.fillStyle = "red";
    ctx.fillRect(300, y, 30, 30);
    y+=1;
    if(tama>0){
    ctx.fillStyle = "white";
    ctx.fillRect(x + 10, 480 - tama * 10, 10, 10);
    }
 
    requestAnimationFrame(gameLoop);
}

gameLoop();