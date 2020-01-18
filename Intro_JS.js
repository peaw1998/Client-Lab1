//Homework
//1 Even-Odd
var x = [2, 3, 7, 9, 6, 4, 5], i, Even = 0, Odd = 0
function EvenOdd() {
    for (i = 0; i < x.length; i++) {
        if (x[i] % 2 == 0)
            Even++
        else
            Odd++
    }
    console.log('Even = ' + Even + '     Odd = ' + Odd)
}

EvenOdd()

//2 avgGrade
var stdGrade = 75, Total = 0, i = 0, avg
function Grade() {
    stdGrade /= 10
    stdGrade = parseInt(stdGrade)
    switch (stdGrade) {
        case 8: console.log('Your grade is A'); break;
        case 7: console.log('Your grade is B'); break;
        case 6: console.log('Your grade is C'); break;
        case 5: console.log('Your grade is D'); break;
        default: console.log('Your grade is F'); break;
    }
}
Grade()

//3 SoodKoon
var x = 5, i

SoodKoon = (x, i) => console.log(x + ' x ' + i + ' = ' + x * i)

for (i = 1; i < 13; i++)
    SoodKoon(x, i)


