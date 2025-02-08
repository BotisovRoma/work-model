// Объявление переменных
const myBtn = document.querySelector('#myBtn');
const nameInput = document.querySelector('#name');
const list = document.querySelector('#list');

// Обработчик события кнопки
myBtn.addEventListener('click', () => {
    // Создание элемента "li" в памяти (на странице его пока что нет)
    const newItem = document.createElement('li');
    // Добавить элементу newItem класс item (элемент еще не на странице)
    newItem.classList.add('item');
    // Добавить элементу текстовое содержимое из поля ввода
    newItem.textContent = nameInput.value
    // Добавить элемент в список
    list.appendChild(newItem);
    // Отчистить поле ввода
    nameInput.value = '';

// creat button
const deleteButton = document.createElement("button");
// добавляем текст кнопке
deleteButton.textContent='delete'
// добавить кнопку в элимент списка
newItem.appendChild(deleteButton);

deleteButton.addEventListener('click',() =>{
    // удаление элимента из списка
    list.removeChild(newItem);
})
})



// получить случайное число
function getRandomInt(min,max){
    return Math,floor(Math.random()* (max-min+1))+min;
}
// (Math.random()* (max-min+1))+min формула нахождения случайного чисоа в диапозоне от мин до макс
// найти случайное число от 0 до 20

// Math.random()*(11)

// найти рандомное число от 1 до 10
// (Math.random()* (10)+1
//  найти рандом от 2 до 10
// (Math.random()* (9)+2

// округлить и вывести в консоль случайное число от 2 до 10
console.log(Math.floor(Math.random)()*9+2)
// Math.floor округлить до целого числа в меньшую сторону
// Math.random случайное число от 0до 1