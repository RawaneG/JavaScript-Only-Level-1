const output = document.getElementById('output');
const longueur = document.getElementById('longueur');
const defautLongueur = longueur.value = 15;
const majuscule = document.getElementById('majuscule');
const miniscule = document.getElementById('miniscule');
const nombre = document.getElementById('nombre');
const cSpeciaux = document.getElementById('cSpeciaux');
const generer = document.getElementById('generer');
const copie = document.getElementById('copie');
const check = document.querySelectorAll('.checked');

function alMin()
{
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function alMaj()
{
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
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

function disable(element)
{
    element.disabled = true;
    element.style.pointerEvents = 'none';
}
function enable(element)
{
    element.disabled = false;
    element.style.pointerEvents = '';
}

const alFonction =
{
    majuscule : alMaj,
    miniscule : alMin,
    nombre : alNombre,
    symbole : alSymbole
};


generer.addEventListener('click', () => {
    const longueurValeur = +longueur.value;
    const majusculeBool = majuscule.checked;
    const minisculeBool = miniscule.checked;
    const nombreBool = nombre.checked;
    const cSpeciauxBool = cSpeciaux.checked;
    
    output.innerText = genererMdp(longueurValeur,majusculeBool,minisculeBool,nombreBool,cSpeciauxBool); 

    copie.removeAttribute('hidden');
});

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
    if(compteurType === 0)
    {
        return alert('Veuillez cocher au moins un critère');
    }

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
