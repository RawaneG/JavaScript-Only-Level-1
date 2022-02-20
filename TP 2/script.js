const elements = ["Mon Premier","Mon Deuxième","Mon Troisième","Mon Quatrième"];

const L_parent = document.getElementById("L");
const R_parent = document.getElementById("R");

const btnRight = document.getElementById('to_right');
const btnLeft = document.getElementById('to_left');


var counterL = 0;
var counterR = 0;

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

for(let i = 0; i < elements.length; i++)
{   
    let a = document.createElement('a');
    let p = document.createElement('p');

    a.setAttribute('href',"#");
    p.innerHTML = elements[i];

    a.appendChild(p);
    L_parent.appendChild(a);    
}

const a = document.querySelectorAll('a');

    function partageR(element)
    {
        return R_parent.appendChild(element);
    }

    function partageL(element)
    {
        return L_parent.appendChild(element);
    }

for(let i = 0; i < a.length; i++)
{
    a[i].addEventListener('click', ()=>
    {
        a[i].classList.toggle('active');
    });
}


btnRight.addEventListener('click',()=>{
    
    const a_gauche = L_parent.querySelectorAll('a');
    for(let i = 0; i < a_gauche.length; i++)
    {
        if(a_gauche[i].className == "active")
        {
            a_gauche[i].className = "";
            R_parent.appendChild(a_gauche[i]);
            counterR++;
        }
    }
});

btnLeft.addEventListener('click',()=>{
    const a_droite = R_parent.querySelectorAll('a');
    for(let i = 0; i < a_droite.length; i++)
    {
        if(a_droite[i].className == "active")
        {
            a_droite[i].className = "";
            L_parent.appendChild(a_droite[i]);
        }
    }
});

