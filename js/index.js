var a = Number(prompt('Введіть значення коефіціента "a"'));
var b = Number(prompt('Введіть значення коефіціента "b"'));
var c = Number(prompt('Введіть значення коефіціента "c"'));

var resultQuadraticEquation = quadraticEquation(a, b, c);

document.write(resultQuadraticEquation);

function quadraticEquation(a, b, c) {
    var result;
    var x1;
    var x2;
    
    var d = discr();
    
    if (a === 0) {
        result = 'Рівняння не квадратне';
        return result;
    }

    if (d > 0) {
        x1 = (-b + Math.sqrt(d)) / 2 * a;
        x2 = (-b - Math.sqrt(d)) / 2 * a;
        result = 'Дискримінант дорівнює ' + d + '<br>' + 'Рівняння має два корені. х1 = ' + x1 + ' ' + 'х2 = ' + x2;
        return result;
    }
    else if (d === 0) {
        x1 = -b / 2 * a;
        x2 = -b / 2 * a;
        result = 'Дискримінант дорівнює ' + d + '<br>' + 'Рівняння має один спільний корінь. х1, x2 = ' + x1; 
        return result;
    }
    else if (d < 0) {
        result = 'Дискримінант дорівнює ' + d + '<br>' + 'Рівняння дійсних коренів не має';
        return result;
    }

}

function discr() {
    return b * b - 4 * a * c;
}




