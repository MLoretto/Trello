const inputList = document.getElementById('inputText');
const formAddList = document.getElementById('formAgregar');
const listContent = document.getElementById('listContent');

function showFormAddList(){
    inputList.style.display = 'none';
    formAddList.style.display = 'block';
    document.getElementById('listName').focus();

}

function hideFormAddList(){
    inputList.style.display = 'block';
    formAddList.style.display = 'none';
}

function addListButton(){
    const titleName = document.getElementById('listName').value;
    console.log(titleName);

    addList(titleName);
    hideFormAddList();

}

function addList(titleText){
    const listCol = document.createElement('div');
    listCol.classList.add('col-md-3', 'p-1');

    const formList = document.createElement('div');
    formList.classList.add('card', 'space', 'card-color');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body', 'card-body-form');

    const title = document.createElement('h6');
    const titleStrong = document.createElement('strong');
    titleStrong.innerText = titleText;

    title.appendChild(titleStrong);

    const divInputTask = document.createElement('div');
    divInputTask.classList.add('form-group', 'space');

    const inputTask = document.createElement('input');
    inputTask.type = 'text'
    inputTask.classList.add('form-control', 'inputTask');
    inputTask.placeholder = 'Añadir una tarea...';

    divInputTask.appendChild(inputTask);

    cardBody.appendChild(title);
    cardBody.appendChild(divInputTask);

    formList.appendChild(cardBody);

    listCol.appendChild(formList);

    listContent.insertBefore(listCol, listContent.childNodes[0]);

}
