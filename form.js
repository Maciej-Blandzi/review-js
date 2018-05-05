

var form = document.querySelector('form')

var input = document.querySelector('input');
var ul = document.getElementById('notes-list')

var message = document.getElementById('info')


form.addEventListener('submit', function(event){
    event.preventDefault()

    var li = document.createElement('li')
    ul.appendChild(li)
    li.textContent = input.value
})



input.addEventListener('blur',function(x){
    if(input.value.length < 5){
message.textContent = '5 digits minimum'
    }else{message.textContent = ''}

})