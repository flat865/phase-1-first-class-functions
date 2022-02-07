function receivesAFunction(spy){
    spy();
    }

function returnsANamedFunction(toNotDeeplyEqual){
    return function toNotDeeplyEqual(){}
}
  
function returnsAnAnonymousFunction(){
  {return function(){ 
      console.log("before all")}
}
}
