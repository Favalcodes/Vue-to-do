var STORAGE_KEY = 'fav-to-do-pz09876z'
var todoStorage = {
  fetch: function () {
    var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    return todos;
  },
  save: function (todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }
}


const app = new Vue({
    el: '#app',
    data: {
        title: 'Vue To-do',
        newTodo: '',
        todos: todoStorage.fetch()
    },
    watch: {
      todos: {
        handler: function(todos) {
          todoStorage.save(todos);
        }
      }
    },
    methods: {
        addTodo() {
            this.todos.push({
                title: this.newTodo,
                done: false,
                waiting: true,
                button: true,
                buut: false
            });
            this.newTodo = ''
        },  
    completeTask(todo) {
        todo.done = ! todo.done;
        todo.waiting = false;
        todo.buut=true
      },
      waiting(todo) {
        todo.done = false;
        todo.waiting = true;
        todo.button=true
      },
        removeTodo(todo) {
            const todoIndex = this.todos.indexOf(todo);
            this.todos.splice(todoIndex, 1);
        },
        editTodo(e, todo) {
            e.preventDefault();
            todo.title = e.target.innerText;
        },
        allDone() {
            this.todos.forEach(todo => {
                todo.done = true;
                todo.waiting = false;
                todo.buut = true;
            })
        },
        clearAll() {
            this.todos = []
        }
    }
  })