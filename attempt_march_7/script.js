const fire = document.getElementById('top-left');
const water = document.getElementById('top-right');
const sparkle = document.getElementById('bottom-left');
const electric = document.getElementById('bottom-right');
const word = document.getElementById('word')



function reverseString(str){
    var strArr = str.split("");
    var reverseStrArray = strArr.reverse();
    var reversedString = reverseStrArray.join("");
    console.log(reverseStrArray);
    console.log(reversedString);
    //document.write(reversedString);
    document.getElementById("word").innerHTML=reversedString;

}


fire.addEventListener('click', (e) => {
    word.removeAttribute('class');
    //word.classList.remove('water', 'sparkle', 'electric');
    console.log('Fire Magic');
    word.classList.add('fire');
    
})

water.addEventListener('click', (e) =>{
    word.removeAttribute('class');
    //word.classList.remove('fire', 'sparkle','electric');
    console.log('Water Magic');
    word.classList.add('water')
})

sparkle.addEventListener('click', (e) =>{
    word.removeAttribute('class');
    //word.classList.remove('fire','water','electric');
    console.log('Sparkle Magic');
    word.classList.add('sparkle')
})

electric.addEventListener('click', (e) =>{
    word.removeAttribute('class');
    //word.classList.remove('fire','water','sparkle');
    console.log('Electric Magic');
    word.classList.add('electric')
})
