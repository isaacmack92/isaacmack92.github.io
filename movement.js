var queue = [];
var spot;
var left = -105;
var right = 105;
var up = -64;
var down = 64;
function delay(t) {
  return new Promise(function(resolve){
    return setTimeout(resolve, t)
  });
}
function resizeArrow(num) {
    switch(num) {
        case 0:
            document.getElementById("one").style.transform = "scale(1.5)";
            break;
        case 1:
            document.getElementById("two").style.transform = "scale(1.5)";
            break;
        case 2:
            document.getElementById("three").style.transform = "scale(1.5)";
            break;
        case 3:
            document.getElementById("four").style.transform = "scale(1.5)";
            break;
        case 4:
            document.getElementById("five").style.transform = "scale(1.5)";
            break;
        default:
            console.log("Length is zero.");
            break;
    }
}
var moveLeft = function() {
    if(queue.length < 5){
        queue.push('left');
        switch(queue.length) {
            case 1:
                document.getElementById("one").style.visibility = "visible";
                document.getElementById("one").style.imageOrientation = "180deg";
                break;
            case 2:
                document.getElementById("two").style.visibility = "visible";
                document.getElementById("two").style.imageOrientation = "180deg";
                break;
            case 3:
                document.getElementById("three").style.visibility = "visible";
                document.getElementById("three").style.imageOrientation = "180deg";
                break;
            case 4:
                document.getElementById("four").style.visibility = "visible";
                document.getElementById("four").style.imageOrientation = "180deg";
                break;
            case 5:
                document.getElementById("five").style.visibility = "visible";
                document.getElementById("five").style.imageOrientation = "180deg";
                break;
        }
    }
};

var moveRight = function() {
    if(queue.length < 5){
        queue.push('right');
        switch(queue.length) {
            case 1:
                document.getElementById("one").style.visibility = "visible";
                document.getElementById("one").style.imageOrientation = "0deg";
                break;
            case 2:
                document.getElementById("two").style.visibility = "visible";
                document.getElementById("two").style.imageOrientation = "0deg";
                break;
            case 3:
                document.getElementById("three").style.visibility = "visible";
                document.getElementById("three").style.imageOrientation = "0deg";
                break;
            case 4:
                document.getElementById("four").style.visibility = "visible";
                document.getElementById("four").style.imageOrientation = "0deg";
                break;
            case 5:
                document.getElementById("five").style.visibility = "visible";
                document.getElementById("five").style.imageOrientation = "0deg";
                break;
        }
    }
};

var moveUp = function() {
    if(queue.length < 5){
        queue.push('up');
        switch(queue.length) {
            case 1:
                document.getElementById("one").style.visibility = "visible";
                document.getElementById("one").style.imageOrientation = "270deg";
                break;
            case 2:
                document.getElementById("two").style.visibility = "visible";
                document.getElementById("two").style.imageOrientation = "270deg";
                break;
            case 3:
                document.getElementById("three").style.visibility = "visible";
                document.getElementById("three").style.imageOrientation = "270deg";
                break;
            case 4:
                document.getElementById("four").style.visibility = "visible";
                document.getElementById("four").style.imageOrientation = "270deg";
                break;
            case 5:
                document.getElementById("five").style.visibility = "visible";
                document.getElementById("five").style.imageOrientation = "270deg";
                break;
        }
    }
};

var moveDown = function() {
    if(queue.length < 5){
        queue.push('down');
        switch(queue.length) {
            case 1:
                document.getElementById("one").style.visibility = "visible";
                document.getElementById("one").style.imageOrientation = "90deg";
                break;
            case 2:
                document.getElementById("two").style.visibility = "visible";
                document.getElementById("two").style.imageOrientation = "90deg";
                break;
            case 3:
                document.getElementById("three").style.visibility = "visible";
                document.getElementById("three").style.imageOrientation = "90deg";
                break;
            case 4:
                document.getElementById("four").style.visibility = "visible";
                document.getElementById("four").style.imageOrientation = "90deg";
                break;
            case 5:
                document.getElementById("five").style.visibility = "visible";
                document.getElementById("five").style.imageOrientation = "90deg";
                break;
        }
    }
};

var removeOne = function() {
    queue.pop();
    switch(queue.length) {
        case 0:
            document.getElementById("one").style.visibility = "hidden";
            break;
        case 1:
            document.getElementById("two").style.visibility = "hidden";
            break;
        case 2:
            document.getElementById("three").style.visibility = "hidden";
            break;
        case 3:
            document.getElementById("four").style.visibility = "hidden";
            break;
        case 4:
            document.getElementById("five").style.visibility = "hidden";
            break;
        default:
            alert("Something went wrong.");
            break;
        }
};

var resetAll = function() {
    for(var k = queue.length;k > 0;k--) {
        queue.pop();
    }
    document.getElementById("one").style.transform = "scale(1)";
    document.getElementById("one").style.visibility = "hidden";
    document.getElementById("two").style.transform = "scale(1)";
    document.getElementById("two").style.visibility = "hidden";
    document.getElementById("three").style.transform = "scale(1)";
    document.getElementById("three").style.visibility = "hidden";
    document.getElementById("four").style.transform = "scale(1)";
    document.getElementById("four").style.visibility = "hidden";
    document.getElementById("five").style.transform = "scale(1)";
    document.getElementById("five").style.visibility = "hidden";
    character.x = 0;
    character.y = 0;
    character.element.style.left = character.x + 'px';
    character.element.style.top = character.y + 'px';
};

var resetArrows = function() {
    for(var k = queue.length;k > 0;k--) {
        queue.pop();
    }
    document.getElementById("one").style.transform = "scale(1)";
    document.getElementById("one").style.visibility = "hidden";
    document.getElementById("two").style.transform = "scale(1)";
    document.getElementById("two").style.visibility = "hidden";
    document.getElementById("three").style.transform = "scale(1)";
    document.getElementById("three").style.visibility = "hidden";
    document.getElementById("four").style.transform = "scale(1)";
    document.getElementById("four").style.visibility = "hidden";
    document.getElementById("five").style.transform = "scale(1)";
    document.getElementById("five").style.visibility = "hidden";
}
/// store reference to character's position and element
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
        if(spot=="left") {  
            const a = await moveCharacter(left);
            const b = await delay(1000).then(resizeArrow(j));
        }
        else if(spot=="right") {
            const c = await moveCharacter(right);
            const d = await delay(1000).then(resizeArrow(j));
        }
        else if(spot=="up") {
            const e = await moveCharacter(0, up);
            const f = await delay(1000).then(resizeArrow(j));
        }
        else if(spot=="down") {
            const g = await moveCharacter(0, down);
            const h = await delay(1000).then(resizeArrow(j));
        }
    }
    const i = await resetArrows();
}




