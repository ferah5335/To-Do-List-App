const button = document.getElementById('add');
const container = document.getElementById('toDoContainer');
const input = document.getElementById('input');

button.addEventListener('click', function(){
    var paragraf = document.createElement('P');
    paragraf.classList.add('paragraf-styling')
    paragraf.innerText = input.value;
    container.appendChild(paragraf);
    input.value='';

    paragraf.addEventListener('click', function(){
        paragraf.style.textDecoration ='line-through'
    })

    paragraf.addEventListener('dblclick', function(){
        container.removeChild(paragraf)
    })
})

input.addEventListener('keyup', function(event){
    if (event.keyCode ===13){
        event.preventDefault();
        button.click();
    }

})