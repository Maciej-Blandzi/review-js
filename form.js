

var form = document.querySelector('form');

var input = document.querySelector('input');
var textarea = document.querySelector('textarea');
var ul = document.getElementById('notes-list');

var message = document.getElementById('info');


form.addEventListener('submit', function(event){
    event.preventDefault();
    var li = document.createElement('li');

    var header = document.createElement('h2')
    var description = document.createElement('p')
    var deleteButton = document.createElement('button')

    deleteButton.addEventListener('click', function(event){
        event.currentTarget.parentElement.remove()
    })

    header.textContent = input.value;
    description.textContent = textarea.value;
    deleteButton.textContent = 'DELETE ENTRY';

    li.appendChild(header)
    li.appendChild(description)
    li.appendChild(deleteButton)



    // li.textContent = header + description



    input.value = '';
    textarea.value = '';
    ul.appendChild(li);
});



input.addEventListener('blur',function(){
    if(input.value.length < 5){
message.textContent = '5 digits minimum'
    }else{message.textContent = ''}

});