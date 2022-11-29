let n=19;
let flage=0;
for(let i=2;i<19;i++){
   if(n%2==0){
      flage=1;
      break;
    }
}if(flage==1){
    console.log("number is not prime")
  }else{
     console.log("number is prime")
}