
let audioFile1 = new Audio("sounds/tom-1.mp3");
let audioFile2 = new Audio("sounds/tom-2.mp3");
let audioFile3 = new Audio("sounds/tom-3.mp3");
let audioFile4 = new Audio("sounds/tom-4.mp3");
let audioFile5 = new Audio("sounds/crash.mp3");
let audioFile6 = new Audio("sounds/kick-bass.mp3");
let audioFile7 = new Audio("sounds/snare.mp3");

document.addEventListener("keypress",function(event){
  let keyPressed = event.key;
  keyPress(keyPressed);
});

    document.querySelector('.i0').addEventListener('click',function(){
                audioFile1.play();
    });
    document.querySelector('.i1').addEventListener('click',function(){
                audioFile2.play();
    });
    document.querySelector('.i2').addEventListener('click',function(){
                audioFile3.play();
    });
    document.querySelector('.i3').addEventListener('click',function(){
                audioFile4.play();
    });
    document.querySelector('.i4').addEventListener('click',function(){
        audioFile5.play();
    });
    document.querySelector('.i5').addEventListener('click',function(){
                audioFile6.play();
    });
    document.querySelector('.i6').addEventListener('click',function(){
                audioFile7.play();
    });

function keyPress(key){
            switch(key){
            case "w":
                audioFile1.play();
            break;
            case "a":
                audioFile2.play();
            break;
            case "s":
                audioFile3.play();
            break
            case "d":
                audioFile4.play();
            break
            case "m":
                audioFile5.play();
            break;
            case "n":
                audioFile6.play();
            break;
            case "b":
                audioFile7.play();
            break;
            default : console.log(key);
    }
}