const elements = ["Mon Premier","Mon Deuxième","Mon Troisième","Mon Quatrième"];

const L_parent = document.getElementById("L");
const R_parent = document.getElementById("R");

const btnRight = document.getElementById('to_right');
const btnLeft = document.getElementById('to_left');

function disable(input)
{
    input.disabled = true;
    input.style.pointerEvents = "none";
}

function enable(input)
{
    input.disabled = false;
    input.style.pointerEvents = "";
}
function desactiver(element,btn)
{
    if(element.children.length === 0)
    {
        disable(btn);
    }
    else
    {
        enable(btn);
    }
}


// Parcours une boucle pour y ajouter les balises a

for(let i = 0; i < elements.length; i++)
{   
    let a = document.createElement('a');
    let p = document.createElement('p');

    a.setAttribute('href',"#");
    p.innerHTML = elements[i];

    a.appendChild(p);
    L_parent.appendChild(a);    
}

// Je recupère toutes les balises a et les mets dans une constante

const a = document.querySelectorAll('a');

//On active la class active de a au moment ou cette dernière est cliquée

for(let i = 0; i < a.length; i++)
{
    a[i].addEventListener('mouseover', ()=>
    {
        a[i].classList.toggle('active');
    });
}
disable(btnLeft);
//Après avoir cliqué le bouton pour transférer on vérifie d'abord si l'élément a déjà la classe active activée
//dans ce cas on le transfère dans l'autre bloc

btnRight.addEventListener('click',()=>{
    enable(btnLeft);
    const a_gauche = L_parent.querySelectorAll('a');
    for(let i = 0; i < a_gauche.length; i++)
    {
        if(a_gauche[i].className == "active")
        {
            a_gauche[i].className = "";
            R_parent.appendChild(a_gauche[i]);
        }
    }
    desactiver(L_parent,btnRight);
});

//Même procédé pour partir du bloc droit au bloc gauche

btnLeft.addEventListener('click',()=>{
    enable(btnRight);
    const a_droite = R_parent.querySelectorAll('a');
    for(let i = 0; i < a_droite.length; i++)
    {
        if(a_droite[i].className == "active")
        {
            a_droite[i].className = "";
            L_parent.appendChild(a_droite[i]);
        }
    }
    desactiver(R_parent,btnLeft);

});

