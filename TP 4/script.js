const quiz = document.getElementById('demo');
const question = document.getElementById('question');
const reponse = document.querySelectorAll('.answer');
const a = document.getElementById('a_text');
const b = document.getElementById('b_text');
const c = document.getElementById('c_text');
const d = document.getElementById('d_text');
const submit = document.getElementById('submit');
 
const questions = 
[
    {
        question : "Quel est le meilleur langage de programmation en 2022",
        a : "Java",
        b : "C",
        c : "Python",
        d : "Javascript",
        correct : "d"
    },
    {
        question : "Etes vous",
        a : "Oui",
        b : "Non",
        c : "Peut être",
        d : "C'est pas vos oignons",
        correct : "a"
    },
    {
        question : "Pourquoi",
        a : "parceque",
        b : "j'en sais rien",
        c : "il faut accepter",
        d : "C'est pas vos oignons",
        correct : "a"
    },
    {
        question : "Quoi ?",
        a : "Feur",
        b : "Rien",
        c : "je suis désolé",
        d : "oui",
        correct : "a"
    }
];
