// function createTable() {
//
//     var table = document.createElement('table');
//
//
//
//     var tr, td;
//
//     for (var i = 1; i < 10; i += 1) {
//         tr = document.createElement('tr');
//         table.appendChild(tr);
//         for (var j = 1; j < 10; j += 1) {
//             td = document.createElement('td');
//             tr.appendChild(td);
//         }
//     }return table;
// }
function createTable(width, height) {
    var table = document.createElement('table');


    var tr;
    var td;
    for (i = 0; i < height; i += 1) {
        tr = document.createElement('tr');
        table.appendChild(tr);
        for (j = 0; j < width; j += 1) {
            td = document.createElement('td')
            tr.appendChild(td)
        }
    }return table;
}


function toggleRed(komorka){
    if(komorka.classList.contains('red')){
        komorka.classList.remove('red')
    }else{komorka.classList.add('red')}


}



