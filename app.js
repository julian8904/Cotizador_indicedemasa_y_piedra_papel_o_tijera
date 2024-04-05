const roca = 0;
const papel = 1;
const tijera = 2;

const empate = 0;
const ganaste = 1;
const perdiste = 2;

const rocaBtn = document.getElementById('roca');
const papelBtn = document.getElementById('papel');
const tijeraBtn = document.getElementById('tijera'); 
const resultadoText = document.getElementById('text-start');
const userImg = document.getElementById('user-img');
const machineImg = document.getElementById ('machine-img');


rocaBtn.addEventListener('click',() => {
    play(roca);
});
papelBtn.addEventListener('click',() => {
    play(papel);
});
tijeraBtn.addEventListener('click',() => {
    play(tijera);
});

function play(userOption) {
    const machineOptions = Math.floor(Math.random() * 3);
    const resultado = calResult (userOption, machineOptions);

    if (userOption == 2)
    {
        userImg.src= "imagenesIMC/tijera.png";
    }
    else if (userOption == 1)
    {
        userImg.src= "imagenesIMC/papel.png";
    }
    else if (userOption == 0)
    {
        userImg.src= "imagenesIMC/roca.png";
    }

    if (machineOptions == 2)
    {
        machineImg.src= "imagenesIMC/tijera.png";
    }
    else if (machineOptions == 1)
    {
        machineImg.src= "imagenesIMC/papel.png";
    }
    else if (machineOptions == 0)
    {
        machineImg.src= "imagenesIMC/roca.png";
    }
    
    

   
    switch(resultado){
        case empate:
            resultadoText.innerHTML = "¡ HAS EMPATADO !";
            break;
        case ganaste:
                resultadoText.innerHTML = "¡ HAS GANADO !";
                break;
        case perdiste:
            resultadoText.innerHTML = "¡ HAS PERDIDO !";
            break;

    }
    
}

function calResult (userOption, machineOptions) { 
    
    if (userOption === machineOptions){
    return empate;

} else if (userOption === roca ) 
{
   if (machineOptions === papel) return perdiste;
   if (machineOptions === tijera) return ganaste;

} else if (userOption === papel)
 {
    if (machineOptions === roca) return ganaste;
    if (machineOptions === tijera) return perdiste;

} else if (userOption === tijera) 
{
    if (machineOptions === papel) return ganaste;
    if (machineOptions === roca) return perdiste;

} 

}