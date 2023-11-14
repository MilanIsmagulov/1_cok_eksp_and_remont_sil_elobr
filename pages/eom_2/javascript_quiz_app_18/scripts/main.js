let test = document.querySelector('#question_number_1');
let testAnswers = document.querySelector('#answers_buttons1');

let Dalee = document.querySelector('#check_button_3')





console.log('Script is Loaded')

let questions = [
    {
        text: 'Рассмотрите составление дефектной ведомости при ремонте асинхронного  электродвигателя.',
        right: 0,
        answers: ['для управления потоками рабочих сред путём изменения проходного сечения внутренней части трубопровода', 'для изменения основных параметров транспортируемых жидкостей и газов', 'для измерения основных параметров транспортируемых жидкостей и газов',],
    },
];

let answerLength = questions[0].answers;
let numberOfQuestion = 10+8; 
let numberOfQuestionSum = 20-1;

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


let img1 = document.createElement('img');
img1.src = './content/correct.svg'
let img2 = document.createElement('img');
img2.src = './content/incorrect.svg'


let i = 1;
for (let question of questions){
    let div = document.createElement('div');
    test.appendChild(div);
    let p = document.createElement('p');
    p.innerHTML = '<span>' + numberOfQuestion + '. ' + '</span>' +  question.text;
    div.appendChild(p);

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


let openPopUpButton2 = document.querySelector('#open_popup_button_2')
let closePopUpButton2 = document.querySelector('#close_popup_button_2')
let popUpWindow2 = document.querySelector('#popup2')


openPopUpButton2.addEventListener('click', function(){
    popUpWindow2.classList.remove('close')
})

closePopUpButton2.addEventListener('click', function(){
    popUpWindow2.classList.add('close')
})

let openPopUpButton3 = document.querySelector('#open_popup_button_3')
let closePopUpButton3 = document.querySelector('#close_popup_button_3')
let popUpWindow3 = document.querySelector('#popup3')


openPopUpButton3.addEventListener('click', function(){
    popUpWindow3.classList.remove('close')
})

closePopUpButton3.addEventListener('click', function(){
    popUpWindow3.classList.add('close')
})

let openPopUpButton4 = document.querySelector('#open_popup_button_4')
let closePopUpButton4 = document.querySelector('#close_popup_button_4')
let popUpWindow4 = document.querySelector('#popup4')


openPopUpButton4.addEventListener('click', function(){
    popUpWindow4.classList.remove('close')
})

closePopUpButton4.addEventListener('click', function(){
    popUpWindow4.classList.add('close')
})