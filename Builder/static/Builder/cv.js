document.addEventListener('DOMContentLoaded', function () {
   const buttons= document.querySelectorAll('#edit_senior, #edit_junior')
    
   buttons.forEach(function(button){
    button.onclick = function(){
        user_input = document.querySelectorAll('.change');
        user_input.forEach(function(input){
            const text_area = document.createElement('input');
            const save = document.querySelector('#bar');
            save.style.display = 'block';
            input.onclick = (event) =>{
                const foo = event.target
                event.target.innerHTML = '' 
                event.target.appendChild(text_area);
                save.onclick = function(){
                    foo.innerHTML = text_area.value
                    save.style.display = 'none';
                }
            }
        })
        
    }
   })
    
    
})