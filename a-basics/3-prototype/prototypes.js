//VERSION FUNCTION

function Humain(){
    this.jambes = 2;
    this.bras = 2;
    this.courir = () => {
        return "Je peux courir puisque j'ai des jambes";
    }
    this.parler = function(){
        return "Sans bouche je ne peux pas parler";
    }
    this.etc = ['tout ce qui caractérise un humain'];
}

function Personne(){
    Humain.call(this)
    this.nationalité = ['française'];
    this.civile = {
        droits : [
            'justice', 
            'liberté de pensé', 
            'éducation', 
            'travail', 
            'exprimer', 
            'circuler'
        ],
        devoirs: [
            'honorer ses impôts',
            'porter assistance à personne en danger', 
            [
                {'respecter': 'loi'},
                {'respecter': 'code de la route'},
                {'respecter': 'les autres citoyens'}
            ]
        ]
    };
   
 
}

function Moi(chanter, nager){
    Personne.call(this)
    this.age = 38;
    this.firstname = 'Cyril';
    this.lastname = 'Vassallo';
    this.job = 'developer';
    this.chanter = chanter;
    this.nager = nager;
}

const cyril = new Moi(false, true);
console.log(cyril);

//VERSION CLASS

class Human {
    constructor(){
        this.jambes = 2;
        this.bras = 2;
        this.etc = ['tout ce qui caractérise un humain'];
    }

    courir = () => {
        return "Je peux courir puisque j'ai des jambes";
    }

    parler = function (){
        return "Sans bouche je ne peux pas parler";
    }

    //syntaxe non comprise par le navigateur
    // sauter(){
    //     if(this.jambes === 2){
    //         return ' jump !!!';
    //     }
    //  return 'stay on the ground';    
    // }
}

class People extends Human {
    constructor(){
        super();
        this.nationalité = ['française'];
        this.civile = {
            droits : [
                'justice', 
                'liberté de pensé', 
                'éducation', 
                'travail', 
                'exprimer', 
                'circuler'
            ],
            devoirs: [
                'honorer ses impôts',
                'porter assistance à personne en danger', 
                [
                    {'respecter': 'loi'},
                    {'respecter': 'code de la route'},
                    {'respecter': 'les autres citoyens'}
                ]
            ]
        };
    }
}

class Me extends People{
    constructor(chanter, nager){
        super();
        this.age = 99;
        this.firstname = 'John';
        this.lastname = 'Doe';
        this.job = 'developer';
        this.chanter = chanter;
        this.nager = nager;
    }
}

const johnDoe = new Me(true, true);
console.log(johnDoe);