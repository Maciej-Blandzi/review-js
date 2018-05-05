var newstuff;
newstuff = 'hello';

var change = document.getElementById('theOne');
change.innerHTML = newstuff;











































var name ='blandzi';
function myName(a, b){
    for(i=0; i<=4; i+=1){
        console.log(i)
    }
}
myName();




//
// var  MYarr = ['1','2','3','4','5','6','7','8','9','10'];
// console.log(MYarr.length);
//
// console.log(MYarr);
// console.log(MYarr.slice(3, 8));
// console.log(MYarr[6]);
//
//
// var my_things = [2 + 5, 'samurai', true];
// my_things.forEach(function(item) {
//     alert(item);
// });
//
//
//
//
// MYarr.forEach(function(item) {
//
//     console.log(item);
// });

var list = ['dom', 'house', 'cat','dog','people', 'equipment','other stuff'];
list.forEach(function(item) {
    console.log(item);
})

console.log(list.length);
console.log(list[5]);


//
//
// function greet(name) {
//     var message = 'Hey there ' + name;
//     alert(message);
// }
// greet('Alex');
//




function hello(first, last ){
    var message = 'hello mr   '+ first + last + '  !!';
    console.log(message.concat());

}


hello('One ','   Two');




function czlowiek(imie, nazwisko, telefon){
    var wiadomosc= 'siema mr  ' + imie + nazwisko + telefon + ' !!';
    console.log(wiadomosc);

}czlowiek('mac', '   be  ',885994 );

var str = 'hello';


function reverseString(str) {
    // Step 1. Use the split() method to return a new array

    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array

    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string

    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string

    return joinArray; // "olleh"
}

