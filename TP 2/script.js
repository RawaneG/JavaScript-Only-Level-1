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
    a.setAttribute('class','anchor');

    p.innerHTML = elements[i];

    a.appendChild(p);
    L_parent.appendChild(a);    
}

const a = document.querySelectorAll('.anchor');

for(let i = 0; i < a.length; i++)
{
    a[i].addEventListener('mouseover',mouseOver);
    a[i].addEventListener('mouseout',mouseOut);

    function mouseOver()
    {
        a[i].style.color = "white";
        a[i].style.backgroundColor = "red";
        a[i].style.transition = "0.3s ease-in-out";
    }
    function mouseOut()
    {
        a[i].style.color = "black";
        a[i].style.backgroundColor = "white";
        a[i].style.transition = "0.3s ease-in-out";
    }

    counterL++;
}

    function partageR(element)
    {
        R_parent.appendChild(element);
    }
    function partageL(element)
    {
        L_parent.appendChild(element);
    }
    function focus(element)
    {
        element.style.backgroundColor = "black";
    }

if(counterL == 4)   
{
    disable(btnRight);
}

for(let i = 0; i < a.length; i++)
{
    a[i].addEventListener('click', ()=>
    {
        focus(a[i]);
        enable(btnRight);   
             
        btnRight.addEventListener('click', ()=>
        {
            partageR(a[i]);
            counterL--;
        });
    });
}