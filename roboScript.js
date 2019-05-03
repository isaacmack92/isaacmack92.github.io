var arrayNum = 0;
var queue = [];
var spot;
var left = -105;
var right = 105;
var up = -64;
var down = 64;
var imgBox1 = document.getElementById("imgBox1");
var imgBox2 = document.getElementById("imgBox2");
var imgBox3 = document.getElementById("imgBox3");
var imgBox4 = document.getElementById("imgBox4");
var imgBox5 = document.getElementById("imgBox5");

var images1 = new Array();
images1[0] = new Image();
images1[0].src = "arrow.png";
images1[1] = new Image();
images1[1].src = "arrow_left.png";
images1[2] = new Image();
images1[2].src = "arrow_down.png";
images1[3] = new Image();
images1[3].src = "arrow_up.png";

var images2 = new Array();
images2[0] = new Image();
images2[0].src = "arrow.png";
images2[1] = new Image();
images2[1].src = "arrow_left.png";
images2[2] = new Image();
images2[2].src = "arrow_down.png";
images2[3] = new Image();
images2[3].src = "arrow_up.png";

var images3 = new Array();
images3[0] = new Image();
images3[0].src = "arrow.png";
images3[1] = new Image();
images3[1].src = "arrow_left.png";
images3[2] = new Image();
images3[2].src = "arrow_down.png";
images3[3] = new Image();
images3[3].src = "arrow_up.png";

var images4 = new Array();
images4[0] = new Image();
images4[0].src = "arrow.png";
images4[1] = new Image();
images4[1].src = "arrow_left.png";
images4[2] = new Image();
images4[2].src = "arrow_down.png";
images4[3] = new Image();
images4[3].src = "arrow_up.png";

var images5 = new Array();
images5[0] = new Image();
images5[0].src = "arrow.png";
images5[1] = new Image();
images5[1].src = "arrow_left.png";
images5[2] = new Image();
images5[2].src = "arrow_down.png";
images5[3] = new Image();
images5[3].src = "arrow_up.png";


function goUp() {
    queue.push('up');
    switch(queue.length) {
        case 1: imgBox1.appendChild(images1[3]);
        break;
        case 2: imgBox2.appendChild(images2[3]);
        break;
        case 3: imgBox3.appendChild(images3[3]);
        break;
        case 4: imgBox4.appendChild(images4[3]);
        break;
        case 5: imgBox5.appendChild(images5[3]);
        break;
        default: console.log("ok buddy");
    }
}

function goDown() {
    queue.push('down');
    switch(queue.length) {
        case 1: imgBox1.appendChild(images1[2]);
        break;
        case 2: imgBox2.appendChild(images2[2]);
        break;
        case 3: imgBox3.appendChild(images3[2]);
        break;
        case 4: imgBox4.appendChild(images4[2]);
        break;
        case 5: imgBox5.appendChild(images5[2]);
        break;
        default: console.log("ok buddy");
    }
}

function goLeft() {
    queue.push('left');
    switch(queue.length) {
        case 1: imgBox1.appendChild(images1[1]);
        break;
        case 2: imgBox2.appendChild(images2[1]);
        break;
        case 3: imgBox3.appendChild(images3[1]);
        break;
        case 4: imgBox4.appendChild(images4[1]);
        break;
        case 5: imgBox5.appendChild(images5[1]);
        break;
        default: console.log("ok buddy");
    }
}

function goRight() {
    queue.push('right');
    switch(queue.length) {
        case 1: imgBox1.appendChild(images1[0]);
        break;
        case 2: imgBox2.appendChild(images2[0]);
        break;
        case 3: imgBox3.appendChild(images3[0]);
        break;
        case 4: imgBox4.appendChild(images4[0]);
        break;
        case 5: imgBox5.appendChild(images5[0]);
        break;
        default: console.log("ok buddy");
    }
}

function removeOne() {
    switch(queue.length) {
        case 1: imgBox1.innerHTML="";
        break;
        case 2: imgBox2.innerHTML="";
        break;
        case 3: imgBox3.innerHTML="";
        break;
        case 4: imgBox4.innerHTML="";
        break;
        case 5: imgBox5.innerHTML="";
        break;
        default: console.log("nothing to remove!");
    }
    queue.pop();
}

function removeAll() {
    for(var i=0;i=queue.length;i++) {
        queue.pop();
    }
    imgBox1.innerHTML="";
    imgBox2.innerHTML="";
    imgBox3.innerHTML="";
    imgBox4.innerHTML="";
    imgBox5.innerHTML="";
    character.x = 0;
    character.y = 0;
    character.element.style.left = character.x + 'px';
    character.element.style.top = character.y + 'px';
}

function clearAll() {
    for(var i=0;i=queue.length;i++) {
        queue.pop();
    }
    imgBox1.innerHTML="";
    imgBox2.innerHTML="";
    imgBox3.innerHTML="";
    imgBox4.innerHTML="";
    imgBox5.innerHTML="";
}

function delay(t) {
  return new Promise(function(resolve){
    return setTimeout(resolve, t)
  });
}

var character = {
  x: 0,
  y: 0,
  element: document.getElementById("sprite")
};

/// character movement update
var moveCharacter = function(dx, dy){
  character.x += dx||0;
  character.y += dy||0;
  character.element.style.left = character.x + 'px';
  character.element.style.top = character.y + 'px';
};

async function startMove() {
    for(var j=0;j<queue.length;j++) {
        spot = queue[j];
        console.log(spot);
        if(spot=="left") {  
            const a = await moveCharacter(left);
            const b = await delay(1000);
        }
        else if(spot=="right") {
            const c = await moveCharacter(right);
            const d = await delay(1000);
        }
        else if(spot=="up") {
            const e = await moveCharacter(0, up);
            const f = await delay(1000);
        }
        else if(spot=="down") {
            const g = await moveCharacter(0, down);
            const h = await delay(1000);
        }
    }
    const i = await clearAll();
}
