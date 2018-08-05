const inputList = document.getElementById('inputText');
const formAddList = document.getElementById('formAgregar');

function showFormAddList(){
    inputList.style.display = 'none';
    formAddList.style.display = 'block';
    document.getElementById('listName').focus();

}

function hideFormAddList(){
    inputList.style.display = 'block';
    formAddList.style.display = 'none';
}