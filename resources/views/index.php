<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Vue - ToDo</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
</head>
<body class="p-3 mb-2 bg-light">
    <h1 class="p-3 mb-2 bg-dark text-white">ToDo List Management App</h1>
    
    <div id='app' class="container">

        <h4>Add new ToDo</h4>

        <input v-model='newTodo.text'>
        <p>{{newTodo.text}}</p>

            <select v-model="newTodo.priority" class="selectpicker">
                <option>Low</option>
                <option>Normal</option>
                <option>High</option>
            </select>

        <button v-on:click='postTodo()' class="btn">Add New</button>

        <ol class="list-group">
            <todo-item  v-for="todo in todos" 
                        :key="todo.id" 
                        :todo="todo"
                        class="list-group-item">
            </todo-item>
        </ol>

    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script>

    Vue.component('todo-item',{
        props: ['todo'],
        template: `<li row>
        <select v-if='clicked === true' v-model='todo.priority'>
            <option>Low</option>
            <option>Normal</option>
            <option>High</option>
        </select>

        <span v-if='clicked === !true' class="badge badge-secondary" @click='changeTodo()'>{{ todo.priority}} Priority</span>
        <span v-if='clicked === !true'>{{ todo.text }}</span>

        <input v-if='clicked === true' v-model="todo.text"
        placeholder="todo.text">

        <button v-if='clicked === !true' 
            v-on:click='changeTodo()' class="btn">Change</button>

        <button v-if='clicked === true'
            v-on:click='updateTodo(todo)' class="btn">Done</button>

        <button @click='destroyThisTodo()' class="btn">Delete</button>

        <p>
            <span v-if='!todo.done' style>Done</span>
            <span v-if='todo.done' class="bg-success text-white">Done</span>

            <input type="checkbox" id="checkbox" v-model="todo.done" @click='changeDone' class="checkbox">
        </p>


        
    </li>`,
        data() {
            return {
                clicked: false,
                checked: false
            }
        },
        methods: {
            changeTodo: function(){
                this.clicked = true;
                
            },
            deleteTodo: function(item){
                var index = app.todos.indexOf(item);
                app.todos.splice(index, 1)
    
            },
            destroyThisTodo: function(){
                axios.delete('/todos/' + this.todo.id)
                    .then((response) => {
                        app.todos = response.data;
                    })
            },
            updateTodo: function(){
                axios.put('/todos/' + this.todo.id, this.todo)
                    .then((response) => {
                        app.todos = response.data;
                    }),
                this.clicked = false;
            },
            changeDone: function(){
                if(this.todo.done){
                    this.todo.done = 0;
                    axios.put('/todos/'+this.todo.id, this.todo)
                        .then((response) => {
                            app.todos = response.data;
                        })
                }else{
                    this.todo.done = 1;
                    axios.put('/todos/'+this.todo.id, this.todo)
                        .then((response) => {
                            app.todos = response.data;
                        })
                }
            }    
        }
    })


    var app = new Vue({
        el: '#app',
        data() {
            return {
                todos: [],
                newTodo: {
                    text: '',
                    priority: 'Normal',
                    done: 0
                },
                selected: '',
            }
        },
        methods: {
            postTodo: function(){
                axios.post('/todos', this.newTodo)
                    .then((response) => {
                        this.todos.push(response.data);
                    })
                this.newTodo = {priority: 'Normal'};
            },
        },

        created() {
            axios.get('/todos').then((response) => {
                this.todos = response.data;
            })
        }

    })

    </script>
</body>
</html>