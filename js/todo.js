document.getElementById('add').addEventListener('click', function(){
    let todo = document.getElementById('todo').value;
    let addTodo = document.createElement('li');

    //TODOテキストフィールドを空にする
    document.getElementById('todo').value = '';

    //削除ボタンの付与
    let removeButton = document.createElement('button');
    removeButton.classList.add('btn', 'btn-remove');
    removeButton.textContent = 'remove';
    addTodo.textContent = todo;
    addTodo.append(removeButton);
    document.getElementsByClassName('todolist')[0].appendChild(addTodo);

    //削除ボタンを押したときの処理
    removeButton.addEventListener('click', function(){
        removeTasks(removeButton);
    });
});
//削除処理
const removeTasks = (removeButton) =>{
    const choseTask = removeButton.closest('li');
    document.getElementsByClassName('todolist')[0].removeChild(choseTask);
}
