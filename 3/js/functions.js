// Задание 1
function checkStringLength(string, size){
  if (string.length <= size){
    return true;
  }
  return false;
}
checkStringLength('проверяемая строка', 10);
checkStringLength('проверяемая строка', 20);
checkStringLength('проверяемая строка', 18);

// Задание 2
function isPalindrom(string) {
  const word = string
    .toLowerCase()
    .replaceAll(' ','');
  let reverseString = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reverseString += word.at(i);
  }
  return word === reverseString;
}
isPalindrom('топот');
isPalindrom('ДовОд');
isPalindrom('Кекс');
isPalindrom('Лёша на полке клопа нашёл');

// Задание 3
function getNumberFromString(string) {
  const number = string.replaceAll(' ', '').split('');
  let num = '';
  for (let i = 0; i <= number.length - 1; i++) {
    if(+number[i] === Number(number[i])) {
      num += +number[i];
    }

  }
  if (+num === 0) {
    return NaN;
  }
  return Math.floor(num);

}
getNumberFromString('2023 год');
getNumberFromString('ECMAScript 2022');
getNumberFromString('1 кефир, 0.5 батона');
getNumberFromString('агент 007');
getNumberFromString('а я томат');


function supplement (string, minLength, pad) {
  const actualPad = minLength - string.length;
  if(actualPad <= 0) {
    return string;
  }
  return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
}
supplement('1', 2, '0');
supplement('1', 4, '0');
supplement('q', 4, 'werty');
supplement('q', 4, 'we');
supplement('qwerty', 4, '0');
