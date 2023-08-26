var num1Element = document.getElementById('num1');
var num2Element = document.getElementById('num2');
var buttonElement = document.querySelector('button');
function add(num1, num2) {
    return num1 + num2;
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
;
if (buttonElement) {
    buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.addEventListener('click', function () {
        var num1 = num1Element.value;
        var num2 = num2Element.value;
        var result = add(+num1, +num2);
        var stringResult = add(num1, num2);
        console.log(result);
        console.log(stringResult);
        printResult({ val: result, timestamp: new Date });
    });
}
;
