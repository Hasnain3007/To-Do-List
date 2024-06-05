// getting DOM values
var input = document.getElementById('input')
var saveBtn = document.getElementById('save')
var ul = document.getElementById('ul')




saveBtn.addEventListener('click', () => {
    if (input.value == '') {
        alert('Please Write Your ToDo')
    } else {
        ul.innerHTML += `
        <div class="main2 d-flex mt-3 col-12 id='div'">
        <li class='li' id='li'>
        ${input.value}
        </li>
        <button class="edit mx-3" id='edit' >Edit</button>
        <button class="delete" id='delete'>Delete</button>
        </div>
        `
        var li = document.getElementById('li')
        var edit = document.getElementById('edit')
        var dlt = document.getElementById('delete')
        var div = document.getElementById('div')
        input.value = ''
        edit.addEventListener('click', () => {
            var changevalue = prompt('Enter New Value')
            if (changevalue == '') {
                alert('Enter Your ToDo')

            } else {

                li.innerText = changevalue
            }

        })
        div.remove()
        dlt.addEventListener('click', () => {


        })
    }
})



