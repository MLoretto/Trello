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
    document.getElementById('listName').value = '';
}

function addList(titleText){
    const listCol = document.createElement('div');
    listCol.classList.add('col-xs-12','col-sm-6','col-md-3');

    const formList = document.createElement('div');
    formList.classList.add('card', 'space', 'card-color');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body', 'card-body-form');

    const title = document.createElement('h6');
    const titleStrong = document.createElement('strong');
    titleStrong.innerText = titleText;

    title.appendChild(titleStrong);

    const divTaskContent = document.createElement('div');
    divTaskContent.classList.add('container-fluid');


    const divInputTask = document.createElement('div');
    divInputTask.classList.add('form-group', 'space');

    const inputTask = document.createElement('input');
    inputTask.type = 'text'
    inputTask.classList.add('form-control', 'inputTask');
    inputTask.placeholder = 'Añadir una tarea...';
    
    inputTask.addEventListener("click", 
        function inputTaskClick(e) {
            console.log(e.target);
            showFromAddTask(e.target);
    });

    divInputTask.appendChild(inputTask);

    const formTask = document.createElement('div');
    formTask.classList.add('card','space','card-color');
    formTask.style.display = 'none';

    const formBodyTask = document.createElement('div');
    formBodyTask.classList.add('card','card-body-form');

    const containerFormTask = document.createElement('div');
    containerFormTask.classList.add('container');

    const rowFormInputTask = document.createElement('div');
    rowFormInputTask.classList.add('row');

    const inputNameTask = document.createElement('input');
    inputNameTask.type = 'text';
    inputNameTask.classList.add('form-control','form-control-sm','mb-2','inputTask');
    inputNameTask.placeholder = 'Añadir una tarea...';

    const rowFormButtonTask = document.createElement('div');
    rowFormButtonTask.classList.add('row');

    const colFormButtonTask = document.createElement('div');
    colFormButtonTask.classList.add('col-xs-12','col-sm-12','col-md-12');

    const btnAddTask =  document.createElement('a');
    btnAddTask.classList.add('btn','btn-success','btn-sm','ml-0');
    btnAddTask.href = '#';
    btnAddTask.innerText = 'Añadir Tarjeta';
    
    btnAddTask.addEventListener("click", 
        function inputTaskClick(e) {
            console.log(e.target);
            addTaskButton(e.target);
    });

    const btnCloseTask =  document.createElement('a');
    btnCloseTask.classList.add('btn','close','ml-0');
    btnCloseTask.href = '#';

    const spanClose = document.createElement('span');
    var att = document.createAttribute("aria-hidden");       
    att.value = "true"; 
    spanClose.setAttributeNode(att); 
    spanClose.innerHTML = '&times;';

    btnCloseTask.appendChild(spanClose);

    btnCloseTask.addEventListener("click", 
        function inputTaskClick(e) {
            console.log(e.target);
            hideFormAddTask(e.target);
    });

    rowFormInputTask.appendChild(inputNameTask)

    colFormButtonTask.appendChild(btnAddTask);
    colFormButtonTask.appendChild(btnCloseTask);

    rowFormButtonTask.appendChild(colFormButtonTask);

    containerFormTask.appendChild(rowFormInputTask);
    containerFormTask.appendChild(rowFormButtonTask);

    formBodyTask.appendChild(containerFormTask);

    formTask.appendChild(formBodyTask);

    cardBody.appendChild(title);
    cardBody.appendChild(divTaskContent);
    cardBody.appendChild(divInputTask);

    cardBody.appendChild(formTask);
    formList.appendChild(cardBody);
    listCol.appendChild(formList);
    listContent.insertBefore(listCol, listContent.childNodes[0]);
}

function showFromAddTask(obj){
    console.log('click show task form');
    console.log(obj);
    const formAdd = obj.parentElement.parentElement.children[3];
    
    formAdd.style.display = 'block';
    obj.parentElement.style.display = 'none';
    formAdd.firstChild.firstChild.firstChild.children[0].value = '';
    formAdd.firstChild.firstChild.firstChild.children[0].focus();

}

function addTaskButton(obj){
    const formAdd = obj.parentElement.parentElement.parentElement.parentElement.parentElement;
    const inputAdd = formAdd.firstChild.firstChild.firstChild.firstChild;
    const inputClick = inputAdd.parentElement.parentElement.parentElement.parentElement.parentElement.children[2]
    let tituloTarea = inputAdd.value;
    const content = formAdd.parentElement.children[1];                 

    const divRowTask = document.createElement('div');
    divRowTask.classList.add('row','d-flex','justify-content-between', 'align-items-center');

    const TitleTask = document.createElement('h6');
    TitleTask.innerText = tituloTarea;
    formAdd.firstChild.firstChild.value = '';

    
    const btnDeleteTask = document.createElement('a');
    btnDeleteTask.classList.add('btn', 'close', 'ml-0');
    btnDeleteTask.href = '#';
   
    const spanClose = document.createElement('span');
    var att = document.createAttribute("aria-hidden");
    att.value = "true";
    spanClose.setAttributeNode(att);
    spanClose.innerHTML = '&times;';

    btnDeleteTask.appendChild(spanClose);
    btnDeleteTask.addEventListener("click",
        function (e) {
            deleteTask(e.target);
        });
    divRowTask.appendChild(TitleTask);
    
    divRowTask.appendChild(btnDeleteTask);

    content.appendChild(divRowTask);

    formAdd.style.display = 'none';
    inputClick.style.display = 'block';
}

function hideFormAddTask(obj){
    const formAdd = obj.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    const inputAdd = obj.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[2];
    console.log(obj);
    console.log(inputAdd);
    
    formAdd.style.display = 'none';
    inputAdd.style.display = 'block';
}

function deleteTask(obj) {
    var opcion = confirm("¿Esta seguro que desea eliminar la tarea?");
    if (opcion == true) {
        const content = obj.parentElement.parentElement.parentElement;
        const rowTask = obj.parentElement.parentElement;
        content.removeChild(rowTask);
    } 
}