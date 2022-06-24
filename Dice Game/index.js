function start(){
document.querySelector('.start').textContent = 'Re-Roll';
let image1 = document.querySelector('.image-1');
let image2 = document.querySelector('.image-2');
let randomNumber = Math.floor(Math.random()*6)+1;//this is for dice logic
let randomNumber2 = Math.floor(Math.random()*6)+1;
document.querySelector('h2').textContent = randomNumber+randomNumber2;
    image1.src = `images/dice${randomNumber}.png`
    image2.src = `images/dice${randomNumber2}.png`
}