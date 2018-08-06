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

    //proximo contenedor de tareas
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

    const inputNameTask = document.createElement('input');
    inputNameTask.type = 'text';
    inputNameTask.classList.add('form-control','form-control-sm','mb-2','inputTask');
    inputNameTask.placeholder = 'Añadir una tarea...';

    const btnAddTask =  document.createElement('a');
    btnAddTask.classList.add('btn','btn-success','btn-sm','ml-0');
    btnAddTask.href = '#';
    
    btnAddTask.innerText = 'Agregar';
    
    const btnClouseTask =  document.createElement('a');
    btnClouseTask.classList.add('btn','close','ml-0');
    btnClouseTask.href = '#';

    const spanClose = document.createElement('span');
    var att = document.createAttribute("aria-hidden");       
    att.value = "true"; 
    spanClose.setAttributeNode(att); 
    spanClose.innerHTML = '&times;';

    btnClouseTask.appendChild(spanClose);

    formBodyTask.appendChild(inputNameTask);
    formBodyTask.appendChild(btnAddTask);
    formBodyTask.appendChild(btnClouseTask);
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

}

function addTaskButton(obj){
    const formAdd = obj.parentElement.parentElement;
    const inputAdd = obj.parentElement.parentElement.parentElement.children[2];

    hideFormAddTask(obj);
}

function hideFormAddTask(obj){
    const formAdd = obj.parentElement.parentElement;
    const inputAdd = obj.parentElement.parentElement.parentElement.children[2];
    formAdd.style.display = 'none';
    inputAdd.style.display = 'block';
}
