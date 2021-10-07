
/** 
 * ******************************************Title*****************************************************
 * Le hoisting grace Lexical Environment 
 * Conceptuellement, par exemple, une définition stricte du hissage suggère que les déclarations de variables et de fonctions 
 * sont déplacées physiquement en haut de votre code, mais ce n'est pas ce qui se passe en fait. 
 * A la place, les déclarations de variables et de fonctions sont mises en mémoire pendant la phase de compilation, 
 * mais restent exactement là où vous les avez tapées dans votre code.
 * ******************************************Title*****************************************************
 * */  
 
// var a ;
// let b;
// function calcule(aValue, bValue){ return aValue + bValue;}

a = 12;
// b=12;

console.log(typeof a);   // number
console.log(calcule);    // function



let b = 12;

console.log(typeof b);   // uncaught ReferenceError  - ne peut être appelé avant son initialisation

//other code instructions
//...

console.log(calcule(a,b)); // 20

var a; // declaration de la variable var en bas du fichier est possible
let b;


/**
 * Addition
 * @param {number} aValue
 * @param {number} bValue 
 * @return {number}
 */
 function calcule(aValue, bValue){
    return aValue + bValue;
}





/** 
 * ******************************************sources*****************************************************
 * 
 * 
 * 
 * What is a Lexical Environment?
 * A lexical environment is a data structure that holds identifier-variable mapping.
 * On peut s'imaginer le Lexical Environment ainsi
 * 
 * lexicalEnvironment = {
 *  calcule : function  {},
 *  a : content, // valeurs possibles d'abord "undefine" ensuite la valeur initialisée
 *  b : content
 * }
 * 
 * ES5 : https://blog.wax-o.com/2014/09/comment-le-hoisting-fonctionne-en-javascript-et-pourquoi/
 * ES6 s: https://blog.bitsrc.io/hoisting-in-modern-javascript-let-const-and-var-b290405adfda
 * 
 * 
 * Comment fonction le moteur Javascript 
 * 
 * Donc, quand le moteur JS entre dans un contexte d’exécution (une fonction par exemple), 
 * il commence par créer les bindings
 * puis il exécute les instructions 
 * enfin il assigne les valeurs.
 * Lors de l'execution, les variables et fonction bindées sont recherchées dans le context d'execution courant
 * si elle ne sont pas trouvées le moteur Javascript va rechercher dans le contexte parent et ainsi de suite.
 * *******************************************sources*****************************************************
 * */  
