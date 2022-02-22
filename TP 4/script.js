const quiz = document.getElementById('quiz');
const question = document.getElementById('question');
const reponses = document.querySelectorAll('.answer');
const aText = document.getElementById('a_text');
const bText = document.getElementById('b_text');
const cText = document.getElementById('c_text');
const dText = document.getElementById('d_text');
const submit = document.getElementById('submit');

const quizData = 
[
    {
        question : "Quel est le meilleur langage de programmation en 2022 ? ",
        a : "Java",
        b : "C",
        c : "Python",
        d : "Javascript",
        correct : "d",
    },
    {
        question : "Le programme qui rectifie les erreurs commises par le programmeur est :",
        a : "Le débugger",
        b : "L'éditeur de texte",
        c : "Le compilateur",
        d : "Je sais pas",
        correct : "a",
    },
    {
        question : " L'un de ceux-ci n'est pas un programme :",
        a : "l'IDE",
        b : "le compilateur",
        c : "le code source",
        d : "Je sais pas",
        correct : "c",
    },
    {
        question : " L'extension du programme est :",
        a : ".exe",
        b : ".avi",
        c : ".doc",
        d : "Je sais pas",
        correct : "a",
    },
    {
        question : " Un éditeur de texte :",
        a : "permet de corriger et rectifier les erreurs commises par le développeur",
        b : "permet d'écrire le code source",
        c : "permet de faire la traduction du code source au langage binaire",
        d : "Je sais pas",
        correct : "b",
    }
];

let quizActuel = 0;
let score = 0;

chargeQuiz();

function chargeQuiz()
{
    //On appelle une fonction permettant de décocher toutes les valeurs d'emblée
    decocheReponse();

    //On affecte aux différents champs les questions ainsi que les réponses
    
    const donneeQuizActuel = quizData[quizActuel];
    question.innerText = donneeQuizActuel.question;
    aText.innerText = donneeQuizActuel.a;
    bText.innerText = donneeQuizActuel.b;
    cText.innerText = donneeQuizActuel.c;
    dText.innerText = donneeQuizActuel.d;
}

function decocheReponse()
{
    reponses.forEach(param => param.checked = false);
}

function reponseCoche()
{
    let reponse;
    reponses.forEach(param => {
        if(param.checked)
        {
            reponse = param.id;
        }
    })  
    return reponse;
}

submit.addEventListener('click', () => {
    const reponse = reponseCoche();
    if(reponse)
    {
        if(reponse === quizData[quizActuel].correct)
        {
            score++;
        }

        quizActuel++;

        if(quizActuel < quizData.length)
        {
            chargeQuiz();
        }
        else
        {
            quiz.innerHTML = 
            `<h2> Vous avez trouvé ${score}/${quizData.length} questions. </h2>
            
            <button onclick="location.reload()">Rejouer</button>
            `;
        }
    }
});