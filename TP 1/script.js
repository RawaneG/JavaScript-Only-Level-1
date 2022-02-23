boxDiv = document.getElementById("add_div")

    boxDiv.addEventListener("click", () => {
    createBloc();
});

let i = 0;

function createBloc()
{
    let box = document.createElement("div")
    box.setAttribute("id", "parent"+i)
    box.setAttribute("class", "parent")
    box.innerHTML = `
    <div class="parent_boutons">
        <button class="btn_edit" id="modifier" onclick="editBloc(${i})">
            <i class='fa fa-edit' style='font-size:26px'></i>
        </button>
        <button class="btn_trash" id="supprimer" onclick="removeBloc(${i})">
            <i class='fa fa-trash' style='font-size:26px'></i> 
        </button>
    </div>
    <div class="textarea" id="textarea" ">
        <textarea id="area${i}"></textarea>
    </div>`;
    document.getElementById('box_div').appendChild(box)
    i++;
}

function removeBloc(i)
{
    document.getElementById('parent'+i).remove();
}

function editBloc(i)
{
    document.getElementById('area'+i).toggleAttribute('disabled');
}
