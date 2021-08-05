// Le hoisting
// Grace Lexical Environment 
// qui va mettre en mémoire les reférences des variables et fonctions


b = 8;

/**
 * Cette déclaration est placé dans le Lexical Environment
 * @param {number} a 
 * @param {number} b 
 * @return {number}
 */
function calcule(a, b){
    //instructions/
    return a + b;
}

let a = 12;

console.log(typeof a)
console.log(calcule(a,b));

// let a;
// a = 12 

//idem pour les variables dans le même scope
var b;

//Le hoisting n'est pas supporté dans le cas d'initialization
//console.log(a);
//var a = 3;  // outputs 'undefined'




/*******************************************sources*****************************************************/
// What is a Lexical Environment?
// A lexical environment is a data structure that holds identifier-variable mapping.

//On peut s'imaginer le Lexical Environment ainsi

// lexicalEnvironment = {
//   calcule : function  {},
//   a : content, // valeurs possibles d'abord "undefine" ensuite la valeur initialisée
//   b : content
//}

//https://blog.bitsrc.io/hoisting-in-modern-javascript-let-const-and-var-b290405adfda

/*******************************************sources*****************************************************/


