const myArray = [];

function afisareLista() {
    let html = '';
    let element = '';
    let date = '';
    for (let i = 0; i < myArray.length; i++) {
        element = myArray[i].activity;
        date = myArray[i].dueDate;
        if (element != '' && date != '') {
            html += `<div class="css-input"> <div class="css-overflow">${element}</div> <div>${date}</div> <button class="css-delete" 
            onclick="deleteElement(${i});">Delete</button> </div>`;
        }
    }
    document.querySelector('.js-todolist').innerHTML = html;
}


function deleteElement(index) {
    myArray.splice(index, 1);
    afisareLista();
    alert(`One item is going to be erased from the list!`);
}

function addElement() {
    const newElement = document.querySelector('.js-insert').value;
    const newDate = document.querySelector('.js-date').value;
    if (onlySpaces(newElement) === 0) {
        myArray.push({ activity: newElement.trim(), dueDate: newDate });
        document.querySelector('.js-insert').value = '';
        document.querySelector('.js-date').value = '';
        afisareLista();
    }
}

function onlySpaces(newElement) {
    for (let i = 0; i < newElement.length; i++) {
        if (newElement[i] != ' ') {
            return 0;
        }
    }
    return 1;
}

function addEnter() {
    if (event.key === 'Enter') {
        addElement();
    }
}
