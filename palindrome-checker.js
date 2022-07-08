function reverseString(str) {
    var splitString = str.split(""); 
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join(""); 
    return joinArray; 
}

function removeCharacters (str){
  let newStr = str.replace(/[^a-z0-9]/gmi, "").replace(/\s+/g, "");

  return newStr;
}

function palindrome(str) {
  str = str.replace(" ","").toLowerCase();
  str = removeCharacters(str);
  let reversedStr = reverseString(str);

  console.log(str);
  console.log(reversedStr);

  return str === reversedStr;
}