// $(document).ready(function(){
//     $('body').addClass('light-mode')
//     $('#toggle-mode').click(function(){
//         $()
//     })
// })

// $(selector).action
$(document).ready(function(){
    $('#add-task').click(function(){
        const taskText =$('#new-task').val()
        if(taskText !==""){
            $('#task-list').append(`<li>${taskText} <button class="remove-btn">Remove</button></li>`)
            $('#new-task').val('')
        }
        else{
            alert('field cannot be empty')
        }
    })

    $("#task-list").on("click",".remove-btn", function(event){
        $(this).parent().remove();
    })


})

// var firstName = "ola";
// var lastName = "jumoke";


// console.log((`${firstName} ${lastName}`));