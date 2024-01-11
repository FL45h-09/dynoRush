// Declare Variables here
let dynoPosBottom = 50;
let bottomPos = "50%";
const mainCharDiv = document.getElementById('mainchar'); // Y
// const currentBtmPos = mainCharDiv.offsetTop // Y

// window.scrollX + document.querySelector('#elementId').getBoundingClientRect().left // X

// var mainCharDiv = document.getElementById("mainchar");
// let currentPos = mainCharDiv.offsetTop;
// console.log(currentPos);


const fallDown = ()=>{
    if(Math.sign(dynoPosBottom) == -1){
        bottomPos = `0`;
        document.getElementById("mainchar").style.bottom=bottomPos;
    }
    else if(dynoPosBottom < 100 ){
        bottomPos = `calc(${dynoPosBottom}% - 114px)`;
        document.getElementById("mainchar").style.bottom=bottomPos;
        console.log("Falling Down "+ bottomPos);
        dynoPosBottom = dynoPosBottom - 5;
    }
}

const riseUp = ()=>{
    if(dynoPosBottom < 100){
        bottomPos = `calc(${dynoPosBottom}% - 114px)`
        document.getElementById("mainchar").style.bottom=bottomPos;
        console.log("Rising Up "+ bottomPos);
        dynoPosBottom = dynoPosBottom + 8;
    }else if(dynoPosBottom > 100){
        bottomPos = `initial`;
        let topPos = `0`;
        document.getElementById("mainchar").style.bottom=bottomPos;
        document.getElementById("mainchar").style.top=topPos;
    }
}

const flyHigh = ()=> {
    document.body.onkeyup = function(e) {
        if (e.key == " " || e.code == "Space") {
            riseUp();
            // console.log(currentBtmPos);
        }
    }
    // document.body.onkeydown = function() {
    //     // fallDown();
    //     setInterval(fallDown, 200);
    // }
}

setInterval(flyHigh, 200);