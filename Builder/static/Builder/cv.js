document.addEventListener('DOMContentLoaded', function () {
   const buttons= document.querySelectorAll('.edit')
   console.log(buttons);
    
   buttons.forEach(function(button){
    button.onclick = function(){
        user_input = document.querySelectorAll('.change');
        user_input.forEach(function(input){
            const text_area = document.createElement('input');
            const save = document.querySelector('.save');
            save.style.display = 'block';
            input.onclick = (event) =>{
                const foo = event.target
                event.target.innerHTML = '' 
                event.target.appendChild(text_area);
                save.click()
                save.onclick = function(){
                    foo.innerHTML = ''
                    foo.innerHTML = text_area.value
                    const download = document.querySelector('.download')
                    download.style.display = 'block';
                download.onclick = function(){
                    download.style.display = 'none';
                    save.style.display = 'none';
                    document.querySelector('.edit').style.display = 'none';
                    div = document.querySelector('.padding')
                html2pdf()
                .from(div)
                .set({
                    html2canvas: {scale: 2},
                    margin: 1,
                    jsPDF: {orientation: "portrait"},
                    filename: 'CV.pdf',
                        })     
                        .save()    
                        }   
                    }
                }
        })
    }
   })
})