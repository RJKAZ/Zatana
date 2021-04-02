function reverseString(str){
    var strArr = str.split("");
    var reverseStrArray = strArr.reverse();
    var reversedString = reverseStrArray.join("");
    console.log(reverseStrArray);
    console.log(reversedString);
    //document.write(reversedString);
    document.getElementById("word").innerHTML=reversedString;
}

reverseString();




/* function magicWords(str){
    return str.split("").reverse().join("");
}

console.log(magicWords("Fire"));

document.getElementById("word").innerHTML =

*/