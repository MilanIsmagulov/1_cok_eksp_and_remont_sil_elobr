const anwserArr = [
['двум лицам, одно должно иметь квалификационную группу по электробезопасности ІІІ, второе – группу IV или V старшее по должности'],
['двум лицам, одно должно иметь квалификационную группу по электробезопасности не ниже IV'],
['двум лицам, одно должно иметь квалификационную группу по электробезопасности не ниже ІІІ'],
]; //Ответы в правильном порядке


const text = ["до 1000 В","до 380 В","выше 1000 В"]

const list = document.getElementById('list');
let listItems = [];
let dragStartIndex;

function reloadWindow(){
    window.location.reload();
}

console.log(anwserArr)

let numberOfQuestion = 2; 
let numberOfQuestionSum = 19;

let textOfQuestionPlace = document.querySelector('#question_number_1')

textOfQuestionPlace.innerHTML = '<p>' + '<span>' + numberOfQuestion +  '. ' + '</span>'  + 'Установите соответствие между видами выполняемых работ в электроустановках и составом бригады  для выполнения этих работ.' + '</p>' + '<span style="margin-left: 25px; font-size: clamp(20px,1vw,30px); font-weight: 700;"> Работы в электроустановках по проверке, испытанию и ремонту, связанные с подачей напряжения, разрешено выполнять:</span>'

let stepMarkerPlace = document.querySelector('.step_marker');
console.log("stepMarkerPlace")
for (let i = 0; i < numberOfQuestion; i++){
    let markers = document.createElement('img');
    markers.src = "./content/radio_button_blue.svg";
    stepMarkerPlace.appendChild(markers);
}

for (let i = 0; i < numberOfQuestionSum-numberOfQuestion; i++){
    let markers = document.createElement('img');
    markers.src = "./content/radio_button.svg";
    stepMarkerPlace.appendChild(markers);
}

let stepPlaceDescription = document.querySelector('.number_description');
stepPlaceDescription.innerHTML = numberOfQuestion + '/' + numberOfQuestionSum;




createList2()

function createList2() {
    let iii = 0;
    [...anwserArr]
    .map(a => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(a => a.value)
    .forEach((item, index) => {
        let div = document.createElement("div");
        div.setAttribute("class", "number");
        div.innerHTML = `${text[index]}  <img class="markers_of_blue" src="./content/marker_blue.png" alt="1">`;
        document.getElementsByClassName("numbers")[0].appendChild(div)

        const listItem = document.createElement('div');
        listItem.setAttribute("id", `${index}`)

        // <div class="number">${text[index]} <img src="./content/marker_blue.png" alt="1"></div>
        listItem.innerHTML = ` <div class="item">${item} </div> `;
        listItems.push(listItem);
        list.appendChild(listItem);
        iii++;
    });

    addEventListeners();
}

function dragStart() {
    dragStartIndex = +this.closest('li').getAttribute('id');
}

function dragEnter() {
    this.classList.add('over');
}

function dragLeave() {
    this.classList.remove('over');
}

function dragOver(e) {
    e.preventDefault();
}

function dragDrop() {
    const dragEndIndex = +this.getAttribute('id');
    swapItems(dragStartIndex, dragEndIndex);

    this.classList.remove('over');
}

function swapItems(fromIndex, toIndex) {
    const itemOne = listItems[fromIndex].querySelector('.item');
    const itemTwo = listItems[toIndex].querySelector('.item');

    listItems[fromIndex].appendChild(itemTwo);
    listItems[toIndex].appendChild(itemOne);
}

let checkAnwserButton = document.querySelector('#check_button_1')
let reloadButton = document.querySelector('#check_button_2')
let nextButton = document.querySelector('#check_button_3')
checkAnwserButton.classList.remove('disabled_button')
reloadButton.classList.add('disabled_button')
nextButton.classList.add('disabled_button')


localStorage.setItem('answer_' + numberOfQuestion, JSON.stringify({questionPlace: true}));
function checkAnwser5() {

    checkAnwserButton.classList.add('disabled_button')
    reloadButton.classList.remove('disabled_button')
    nextButton.classList.remove('disabled_button')

    listItems.forEach((item, index) => {

        const itemName = item.querySelector('.item').innerText.trim()
        console.log(itemName)

        if (itemName !== anwserArr[index].join(',')) {
            item.classList.add('incorrect')
            localStorage.setItem('answer_' + numberOfQuestion, JSON.stringify({questionPlace: false}));
        } else {
            item.classList.remove('correct')
            item.classList.add('correct')
        }
        
    });

}

function addEventListeners() {
    const draggables = document.querySelectorAll('.item');
    const dragListItems = document.querySelectorAll('.list li');

    draggables.forEach((draggable) => {

    });

    dragListItems.forEach((item) => {

    });
}

let openPopUpButton = document.querySelector('#open_popup_button')
let closePopUpButton = document.querySelector('#close_popup_button_1')
let popUpWindow = document.querySelector('#popup1')


openPopUpButton.addEventListener('click', function(){
    popUpWindow.classList.remove('close')
})

closePopUpButton.addEventListener('click', function(){
    popUpWindow.classList.add('close')
})
