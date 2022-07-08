let romanNumerals = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I'	
  }
  
  function getRomano(cifra, pot){
    if(romanNumerals[cifra*(10**pot)]) return romanNumerals[cifra*(10**pot)];
    else if (cifra<5) return (romanNumerals[(10**pot)]).repeat(cifra);
    else return romanNumerals[5*(10**pot)]+(romanNumerals[(10**pot)]).repeat(cifra-5);
  }
  function convertToRoman(num) {
    if(num==0) return "";
    let pot, cifra;
    let romano = "";
    while (num>0){
      pot = (Math.floor(Math.log10(num)));
      cifra = Math.floor(num/(10**pot));
      romano += getRomano(cifra, pot);
      num = num -  cifra*(10**pot);  
    }
    //console.log(romano);
    return romano;   
  }
  
  convertToRoman(16);