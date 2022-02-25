const output = document.getElementById('output');
const longueur = document.getElementById('longueur');
const defautLongueur = longueur.value = 15;
const majuscule = document.getElementById('majuscule');
const miniscule = document.getElementById('miniscule');
const nombre = document.getElementById('nombre');
const cSpeciaux = document.getElementById('cSpeciaux');
const generer = document.getElementById('generer');
const copie = document.getElementById('copie');
const check = document.querySelectorAll(".checked");
const checkboxes = Array.from(document.querySelectorAll("input[type=checkbox]"))

function alMin()
{
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function alMaj()
{
    return alMin().toUpperCase();
}
function alNombre()
{
    return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function alSymbole()
{
    const symbole = '!@#$%^&*(){}[]=<>/,.';
    return symbole[Math.floor(Math.random() * symbole.length)];
} 

const alFonction =
{
    majuscule : alMaj,
    miniscule : alMin,
    nombre : alNombre,
    symbole : alSymbole
};

longueur.addEventListener('input',()=>{
    const results = checkboxes.filter(checkbox)
    if(longueur.value >= 5 && longueur.value <= 20 && results.length > 0)
        generer.removeAttribute('disabled');
    else
        generer.setAttribute('disabled','disabled');
})

function checkbox(checkbox){
    return checkbox.checked
}

for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("click", ()=>{
    const results = checkboxes.filter(checkbox)

    if(longueur.value >= 5 && longueur.value <= 20 && results.length > 0)
        generer.removeAttribute('disabled');
    else
        generer.setAttribute('disabled','disabled');
 })
}

generer.addEventListener('click', () => {
    const longueurValeur = +longueur.value;
    const majusculeBool = majuscule.checked;
    const minisculeBool = miniscule.checked;
    const nombreBool = nombre.checked;
    const cSpeciauxBool = cSpeciaux.checked;

    output.innerText = genererMdp(longueurValeur,majusculeBool,minisculeBool,nombreBool,cSpeciauxBool); 

});

output.addEventListener('mouseover',() => {
    copie.removeAttribute('hidden');
})
                            //  //  Fonction permettant de générer le mot de passe
function genererMdp(longueur, majuscule , miniscule , nombre , symbole)
{
    let generatedPassword = '';

    const compteurType = majuscule + miniscule + nombre + symbole;
    console.log(compteurType);
    const typeArray = [
        {majuscule},
        {miniscule},
        {nombre},
        {symbole}
    ].filter(item => Object.values(item)[0]); 
    console.log(typeArray);

    for(let i = 0; i < longueur; i += compteurType)
    {
        typeArray.forEach(type => {
            const nomFonction = Object.keys(type)[0];
            console.log(nomFonction);
            generatedPassword += alFonction[nomFonction]();
        });
    }

    const mdpFinal = generatedPassword.slice(0, longueur);
	
	return mdpFinal;
}

                                            //  //  Copie du mot de passe
copie.addEventListener('click',() => {
    const textarea = document.createElement('textarea');
    const mdp = output.innerText;

    if(!mdp)
    {
        return;
    }

    textarea.value = mdp;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Le texte a été copié avec succès.');
});
