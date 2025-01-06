
const taskInput = document.getElementById('exampleFormControlInput1');
const detailInput = document.getElementById('exampleFormControlTextarea1');
const todoList = document.getElementById('todoList');
const errorMsgs = document.getElementById('errorMsg');
const btn = document.getElementById('addTodo');

// const error = document.querySelector('error')

// const listEl = JSON.parse(localStorage.getItem('todoList'))||{};
btn.addEventListener('click', (e) => {
    e.preventDefault();
  
    if (taskInput.value === '' || detailInput.value === '') {
      errorMsgs.classList.add('error');
      errorMsgs.textContent = 'Please fill all todos';
      // setTimeout(() => errorMsgs.remove('error'), 3000);
    } else {
      const li = document.createElement('li');
      li.appendChild(
        document.createTextNode(`${taskInput.value}: ${detailInput.value}`));
        li.classList.add('error');
        li.style.border = 'thin solid red'
        li.style.marginTop = '20px'
        li.style.width = '400px'
        li.style.borderRadius = '10px'
        li.style.paddingLeft = '20px'
  
   
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.classList.add('todo-checkbox');
      checkbox.style.marginLeft = '10px'; 
    
      
      checkbox.addEventListener('change', () => {
        li.classList.toggle('done', checkbox.checked);
      });
  
      li.appendChild(checkbox); 
      todoList.appendChild(li);
    }
  
  
    taskInput.value = '';
    detailInput.value = '';
  
  });
  