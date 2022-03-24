// Solving by using Brute Force

var str="thisracecarisgood";
var n=str.length;
var bag="";
var l=0;
var newL=1;
for(var i=0;i<n;i++){
  for(var j=i;j<n;j++){
    bag="";
    for(var k=i;k<=j;k++){
      bag+=str[k];
    }
    l=palindrome(bag);
    newL<l?newL=l:newL; 
  }
}
console.log(newL);

function palindrome(bag){
  var nStr="";
  for(var i=bag.length-1;i>=0;i--){
    nStr += bag[i];
  }
  // console.log(nStr);
  if(bag==nStr){
    return bag.length;
  }
  return 1;
}