let rot13Alphabet = {
    A: 'N',
    B: 'O',
    C: 'P',
    D: 'Q',
    E: 'R',
    F: 'S',
    G: 'T',
    H: 'U',
    I: 'V',
    J: 'W',
    K: 'X',
    L: 'Y',
    M: 'Z',
    N: 'A',
    O: 'B',
    P: 'C',
    Q: 'D',
    R: 'E',
    S: 'F',
    T: 'G',
    U: 'H',
    V: 'I',
    W: 'J',
    X: 'K',
    Y: 'L',
    Z: 'M'
  }
  function rot13(str) {
    str = str.toUpperCase();
    let rot13Str="";
    let strArray = str.split("");
    for(let letter of strArray){
      if(letter == " ") rot13Str += " ";
      else if (rot13Alphabet[letter]) rot13Str += rot13Alphabet[letter];
      else rot13Str += letter;
    }
    console.log(rot13Str);
    return rot13Str;
  }
  
  rot13("SERR CVMMN!");