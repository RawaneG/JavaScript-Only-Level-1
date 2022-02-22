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
        question : "Quel est le meilleur langage de programmation en 2022",
        a : "Java",
        b : "C",
        c : "Python",
        d : "Javascript",
        correct : "d",
    },
    {
        question : "Etes vous ?",
        a : "Oui",
        b : "Non",
        c : "Peut être",
        d : "C'est pas vos oignons",
        correct : "a",
    },
    {
        question : "Pourquoi ?",
        a : "parceque",
        b : "j'en sais rien",
        c : "il faut accepter",
        d : "C'est pas vos oignons",
        correct : "a",
    },
    {
        question : "Quoi ?",
        a : "Feur",
        b : "Rien",
        c : "je suis désolé",
        d : "oui",
        correct : "a",
    },
    {
        question : "Quoi ?",
        a : "Feur",
        b : "Rien",
        c : "non",
        d : "oui",
        correct : "a",
    }
];

let quizActuel = 0;
let score = 0;

chargeQuiz();

function chargeQuiz()
{
    reponsesNonChoisies();

    const donneeQuizActuel = quizData[quizActuel];
    question.innerText = donneeQuizActuel.question;
    aText.innerText = donneeQuizActuel.a;
    bText.innerText = donneeQuizActuel.b;
    cText.innerText = donneeQuizActuel.c;
    dText.innerText = donneeQuizActuel.d;
}

function reponsesNonChoisies()
{
    reponses.forEach(param => param.checked = false);
}

function reponseChoisie()
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
    const reponse = reponseChoisie();
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