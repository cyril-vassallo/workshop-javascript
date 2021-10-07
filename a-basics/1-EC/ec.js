/** 
 * ******************************************Title*****************************************************
 * Le context d'execution
 * *******************************************Ttile*****************************************************
 * */  




 var a = 10;

 function functionA() {
 
     console.log("Start function A");
 
     function functionB(){
         console.log("In function B");
     }
 
     functionB();
 
 }
 
 functionA();
 
 console.log("GlobalContext");


/** 
 * ******************************************sources************************************************
 *
 * Le contexte d'execution est un bloc d'instructions qui doit s'executer entre deux accolades 
 * comme par exemple dans une fonction (FEC) ou bien le context d'execution global (GEF) en dehors de toute fonction.
 * 
 * https://medium.com/@happymishra66/execution-context-in-javascript-319dd72e8e2c
 * 
 * *******************************************sources************************************************
 * */  