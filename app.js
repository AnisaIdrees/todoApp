var list = document.getElementById("list")
function addItem() {
    var todoItem = document.getElementById("todoItem");

    var li = document.createElement("li")
    var liText = document.createTextNode(todoItem.value)
    li.appendChild(liText);
    list.appendChild(li)




    // edit btn
    var editBtn = document.createElement('button')
    var editText = document.createTextNode('Edit')
    editBtn.appendChild(editText)
    li.appendChild(editBtn)

    editBtn.setAttribute('class', 'editBtn')
    editBtn.setAttribute('onclick', 'edit(this)')


    // delete btn
    var btn = document.createElement("button")
    var icon = document.createElement('i');
    icon.setAttribute('class', 'fas fa-trash')

    btn.appendChild(icon)
    console.log(btn);
    li.appendChild(btn)

    li.appendChild(btn)
    btn.setAttribute('class', 'delBtn')
    btn.setAttribute('onclick', 'deleteItem(this)')





    todoItem.value = ""
}
function deleteItem(e) {
    e.parentNode.remove();
}
function edit(e){
var val =prompt('Enter update task',e.parentNode.firstChild.nodeValue )
e.parentNode.firstChild.nodeValue=val
}
function delAll(){
    list.innerHTML=""
}