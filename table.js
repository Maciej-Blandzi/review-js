

function createTable(width,height)
{

    var table = document.createElement('table')

    macia.appendChild(table)



    var tr, td;
    for (var i = 0; i < height; i += 1) {
        tr = document.createElement('tr')
        tbody.appendChild(tr)
        for (var j = 0; j < width; j += 1) {
            td = document.createElement('td')
            tr.appendChild(td)
        }
    }return table
}


function klikniecie(klik){
    if(klik.target.matches('td')){
        var intervalId = setInterval(function(){
        if(klik.target.classList.contains('red')){
            klik.target.classList.remove('red')
        }else{klik.target.classList.add('red')}
    },700)}
    setTimeout(function(){clearInterval(intervalId)},10000)
}