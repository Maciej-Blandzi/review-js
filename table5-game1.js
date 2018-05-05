

function toggleClass(element) {
    if (element.classList.contains('red')) {
        element.classList.remove('red')
    } else {
        element.classList.add('red')
    }
}

function createTable(width,height) {
    var table = document.createElement('table');
    var tbody = document.createElement('tbody');
    var tr, td, x, y;

    for (y = 0; y < width; y += 1) {
        tr = document.createElement('tr');
        for (x = 0; x < height; x += 1) {
            td = document.createElement('td');
            tr.appendChild(td)
        }
        tbody.appendChild(tr)
    }

    table.appendChild(tbody);
    return table;
}