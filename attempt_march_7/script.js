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


fire.addEventListener('click', () =>{
    document.getElementById("word");
    console.log('Fire Magic');
    word.classList.add('fire');
    
})

water.addEventListener('click', () =>{
    document.getElementById("word");
    console.log('Water Magic');
    word.classList.add('water')
})

