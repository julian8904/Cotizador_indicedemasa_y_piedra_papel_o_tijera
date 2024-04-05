 function calcularIMC(){
    const userImg = document.getElementById('user-img')
    var peso = document.getElementById ('peso').value;
    var altura = document.getElementById ('altura').value;
    

    if ( peso!== '' && altura !== '') {
        var bmi = peso / ((altura / 100) **2);
        var resultado = document.getElementById ('resultado');
        resultado.innerHTML = 'Tu IMC es: ' + bmi.toFixed (2);
        
    }
    
    // clasificacion de IMC
    if (bmi < 18.5){
        resultado.innerHTML += ' - bajo peso ';
        userImg.src= "imagenesIMC/bajopeso.png";

    }else if (bmi<25) {
        resultado.innerHTML += ' -Peso normal';
        userImg.src= "imagenesIMC/pesonormal.png";


    }else if (bmi <30) {
        resultado.innerHTML += ' -Sobrepeso';
        userImg.src= "imagenesIMC/sobrepeso.png";

    }else if (bmi <35) {
        resultado.innerHTML += ' -Obesidad I';
        userImg.src= "imagenesIMC/obesidad (1).png";

    }else if (bmi <40) {
        resultado.innerHTML += ' -Obesidad II';
        userImg.src= "imagenesIMC/obesidadII.png";

    }else if (bmi <50) {
        resultado.innerHTML += ' -Obesidad III';
        userImg.src = "imagenesIMC/obesidad32.png";

    }else {
        resultado.innerHTML += ' -Obesidad IV';
        userImg.src = "imagenesIMC/obesidadIV.png";
        
    }
 }