function reverseString(str){
    var strArr = str.split("");
    var reverseStrArray = strArr.reverse();
    var reversedString = reverseStrArray.join("");
    console.log(reverseStrArray);
    console.log(reversedString);
    //document.write(reversedString);
    document.getElementById("word").innerHTML=reversedString;
    var water = document.getElementById("word");
    water.classList.add("blue");
}





function myFunctionBlue() {
    var element = document.getElementById("myDiv");
    element.classList.add("blue");
}