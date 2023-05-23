question_number = 0;
result = 0;
const result_png = document.getElementById("feya_img_back");
const style_img_back = result_png.style;

const result_try_again = document.getElementById("try_again_button");
const style_try_again_button = result_try_again.style;

const result_feya_name = document.getElementById("feya_feya_name_img");
const style_feya_name = result_feya_name.style;

const result_feya_desc = document.getElementById("feya_desc");

const button1 = document.getElementById('answer_1');
const button2 = document.getElementById('answer_2');
const button3 = document.getElementById('answer_3');
const button4 = document.getElementById('answer_4');
const button5 = document.getElementById('answer_5');

let answer_switch = document.getElementById("question");

function result_screen(result){
    style_try_again_button.display = "block";
    if (result <= 6){
        style_img_back.content = "url(img/laila.png)";
        style_feya_name.content = "url(img/logo_laila.png)";
        result_feya_desc.innerHTML = "Спортивная, черная, упрямая и своевольная";
    }
    else if ((result > 6) && (result <= 12)){
        style_img_back.content = "url(img/flora.png)";
        style_feya_name.content = "url(img/logo_flora.png)";
        result_feya_desc.innerHTML = "Спокойная, любящая умиротворенность, стойкая";
    }
    else if ((result > 12) && (result <= 18)){
        style_img_back.content = "url(img/muza.png)";
        style_feya_name.content = "url(img/logo_muza.png)";
        result_feya_desc.innerHTML = "Избалованная, веселая, ироничная и энергичная";
    }
    else if ((result > 18) && (result <= 24)){
        style_img_back.content = "url(img/stella.png)";
        style_feya_name.content = "url(img/logo_stella.png)";
        result_feya_desc.innerHTML = "Болтушка, самоуверенная и эгоцентричная";

    }
    else{
        style_img_back.content = "url(img/bloom.png)";
        style_feya_name.content = "url(img/logo_bloom.png)";
        result_feya_desc.innerHTML = "Храбрая, честная, щедрая, самая сильная из фей!";
    }

}
function change_question(question_number){
    switch(question_number){
        case 0:
            answer_switch.innerHTML = "Какой твой любимый цвет?";
            break;
        case 1:
            answer_switch.innerHTML = "Кто из мальчиков тебе больше нравится?";
            break;
        case 2:
            answer_switch.innerHTML = "Какой магией ты бы могла обладать?";
            break;
        case 3:
            answer_switch.innerHTML = "Чем ты занимаешься в свободное время?";
            break;
        case 4:
            answer_switch.innerHTML = "Какого ты бы хотела иметь питомца?";
            break;
        case 5:
            answer_switch.innerHTML = "Кто из феечек самая замечательная?";  
            break;   
    }  
}

function change_button(question_number){
    switch(question_number){
        case 1:
            button1.innerHTML = "Набу";
            button2.innerHTML = "Гелия";
            button3.innerHTML = "Ривен";
            button4.innerHTML = "Брендон";
            button5.innerHTML = "Скай";
            break;
        case 2:
            button1.innerHTML = "Магия воды!";
            button2.innerHTML = "Силой земли!";
            button3.innerHTML = "Магия музыки! Тыц-тыц-тыц!";
            button4.innerHTML = "Магией солнца!";
            button5.innerHTML = "Силой огня!";
            break;
        case 3:
            button1.innerHTML = "Я танцую о.о";
            button2.innerHTML = "Ухаживаю за цветочками";
            button3.innerHTML = "Слушаю музыку! Уииии";
            button4.innerHTML = "Хожу по магазинам, я модница!";
            button5.innerHTML = "Гуляю с подружками-феями";
            break;
        case 4:
            button1.innerHTML = "Маленький утеночек!";
            button2.innerHTML = "Кошка! И пусть будет розовая!";
            button3.innerHTML = "Маленький мишка";
            button4.innerHTML = "Розовенький пудель <3";
            button5.innerHTML = "Белый ягненок!";
            break;
        case 5:
            button1.innerHTML = "Лайла!";
            button2.innerHTML = "Флора!";
            button3.innerHTML = "Муза!";
            button4.innerHTML = "Стелла!";
            button5.innerHTML = "Блум!";
            break;
    }  
}


button1.addEventListener('click', () => {
    const elementId = document.getElementById('answer_1').id;
    if (elementId === 'answer_1') {
        question_number += 1;
        result += 1;
        change_question(question_number);
        change_button(question_number);
        if (question_number > 5) { 
            document.getElementById("wrapper_quiz").style.display = "none";
            document.getElementById("wrapper_result").style.display = "block";
            result_screen(result);
          }
    }
  });
  
button2.addEventListener('click', () => {
    const elementId = document.getElementById('answer_2').id;
    if (elementId === 'answer_2') {
        question_number += 1;
        result += 2;
        change_question(question_number);
        change_button(question_number);
        if (question_number > 5) {
            document.getElementById("wrapper_quiz").style.display = "none";
            document.getElementById("wrapper_result").style.display = "block";
            result_screen(result);
        }
    }
});
  
button3.addEventListener('click', () => {
    const elementId = document.getElementById('answer_3').id;
    if (elementId === 'answer_3') {
        question_number += 1;
        result += 3;
        change_question(question_number);
        change_button(question_number);
        if (question_number > 5) {
            document.getElementById("wrapper_quiz").style.display = "none";
            document.getElementById("wrapper_result").style.display = "block";
            result_screen(result);
          }
    }
  });

 button4.addEventListener('click', () => {
    const elementId = document.getElementById('answer_4').id;
    if (elementId === 'answer_4') {
        question_number += 1;
        result += 4;
        change_question(question_number);
        change_button(question_number);
        if (question_number > 5) {
            document.getElementById("wrapper_quiz").style.display = "none";
            document.getElementById("wrapper_result").style.display = "block";
            result_screen(result);
          }
    }
  });
  
button5.addEventListener('click', () => {
    const elementId = document.getElementById('answer_5').id;
    if (elementId === 'answer_5') {
        question_number += 1;
        result += 5;
        change_question(question_number);
        change_button(question_number);
        if (question_number > 5) {
            document.getElementById("wrapper_quiz").style.display = "none";
            document.getElementById("wrapper_result").style.display = "block";
            result_screen(result);
          }
    }
  });

