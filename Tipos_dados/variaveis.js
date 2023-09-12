//VAR 

/* IT WORKS ANYWAY, IN OTHER WORDS, YOU CAN DECLARE THE VARIABLE IN ANY PARTS OF THE CODE */
 exemplo2 = 15

console.log(exemplo2)

console.log(typeof exemplo2)


var exemplo2

/*-----------------------------------------------------------------------------------------------*/
//LET

//LET works reading one line at a time, you can't use it before you declare it, 'cause your scope don't let it be elevated to the top

let exemplo3

exemplo3 = 30

console.log(exemplo3)
console.log(typeof exemplo3)




/*-----------------------------------------------------------------------------------------------*/



//CONST

/* THE CONST DECLARATIONS CANNOT BE REASSIGNED AFTER THE INITIAL AWARDING, AND IT MUST BE INICIALIZATED ON THE SAME LINE THAT IT WAS DECLARED*/




const status = "Aluno Aprovado!"

const nota1 = 7
const nota2 = 4


let aprovacao
if (status === "Aluno Aprovado!") {

     aprovacao = nota1 + nota2 
    console.log("Você foi aprovado, parabens!")
}


