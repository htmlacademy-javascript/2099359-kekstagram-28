// Задание 1
function isStringLengthLessOrEqual(string, size){
  if (string.length <= size){
    return true;
  }
  return false;
}
isStringLengthLessOrEqual('проверяемая строка', 10);
isStringLengthLessOrEqual('проверяемая строка', 20);
isStringLengthLessOrEqual('проверяемая строка', 18);

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
  const symbols = string.replaceAll(' ', '').split('');
  let num = '';
  for (let i = 0; i <= symbols.length - 1; i++) {
    if(!Number.isNaN(parseInt(+symbols[i], 10))) {
      num += +symbols[i];
    }

  }
  return parseInt(num, 10);

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
