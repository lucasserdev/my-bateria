document.body.addEventListener('keyup', (e) => {
    playSound(e.code.toLocaleLowerCase());
})

document.querySelector('button').addEventListener('click', () => {
    let string = document.querySelector('#input').value;
    
    if (string !== '') {
        let song = string.split('');
        tocaString(song)
    }
})

document.querySelector('.keys').addEventListener('click', (event) => {
    let som = event.target.textContent;
    let forma = (`key${som}`);
    playSound(forma);
})

function playSound(sound) {
    let key = document.querySelector(`audio#${sound}`);
    let select = document.querySelector(`div#${sound}`);
    if(key) {
        key.currentTime = 0;
        key.play();
    }

    select.classList.add('active');

    setTimeout(() => {
        select.classList.remove('active');
    }, 300)
}

function tocaString(song) {
    let wait = 0

   for (let c of song) {
    setTimeout( () => {
        playSound(`key${c}`);
    }, wait)
    
    wait += 250;
   }

}



