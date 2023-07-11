// pegar as teclas 
const keys= document.querySelectorAll(".key")

// tocar notas - funcionalidades das teclas

function playNote(event){

let audioKeyCode = getKeyCode(event);
const key= document.querySelector(`.key[data-key="${audioKeyCode}"]`)

// verificar se a chave existe

// const isKeyExists= key

//entra no if somente se não existir
// if(!isKeyExists) {
//     return;
// }

// fazendo de outra forma
const cantFoundAnyKey = !key
if(cantFoundAnyKey){
    return;
}
addPlayingClass(key)
playAudio(audioKeyCode)

}
//adcionar uma classe enquanto está tocando

function addPlayingClass(key){
    key.classList.add('playing')
}


function getKeyCode(event) {
    let keyCode;

    const isKeyboard= event.type==="keydown";
    
    if (isKeyboard){
    keyCode = event.keyCode
    } else{
        keyCode= event.target.dataset.key
    }

    return keyCode
}



function playAudio(audioKeyCode){
//play audio

const audio= document.querySelector(`audio[data-key="${audioKeyCode}"]`)
console.log(audio);
audio.currentTime=0 // o tempo começa no zero
audio.play() // para tocar
}

function removePlayClass(event){
    event.target.classList.remove("playing")
    // pegando e na lista de classe ele remove a classe playing quando terminar a transição transitionend
}

//clic do mouse
keys.forEach(function (key) {
    key.addEventListener("click", playNote)
    key.addEventListener("transitionend", removePlayClass)

})

//keyboard type
window.addEventListener("keydown", playNote);
//toda vez que clicar EVENTO keydown ele disparar a função
//playnotes é uma função que vai receber um evento function(event)