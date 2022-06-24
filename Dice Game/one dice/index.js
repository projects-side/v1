function start(){
    document.querySelector('.start').textContent = 'Re-Roll';
    let image1 = document.querySelector('.image-1');
    let randomNumber = Math.floor(Math.random()*6)+1;
        image1.src = `images/dice${randomNumber}.png`
    document.querySelector('h2').textContent = randomNumber;
}

    
    