Vue.component('todo-item',{
    props: ['todo'],
    template: `<li>
    <select v-if='clicked === true' v-model='todo.priority'>
        <option>Low</option>
        <option>Normal</option>
        <option>High</option>
    </select>

    <span v-if='clicked === !true'>{{ todo.priority}} Priority -></span>
    <span v-if='clicked === !true'>{{ todo.text }}</span>
    <input v-if='clicked === true' v-model="todo.text"
    placeholder="todo.text">
    <button v-if='clicked === !true' 
        v-on:click='changeTodo(todo)'>Change</button>

    <button v-if='clicked === true'
        v-on:click='finishTodo(todo)'>Done</button>

    <button v-on:click='deleteTodo(todo)'>Delete</button>

    <p>
        <span v-if='todo.done === !true' style>Done</span>

        <span v-if='todo.done === true' v-bind:style='{color: "green"}'>Done</span>
        <input type="checkbox" id="checkbox" v-model="todo.done">
    </p>
    
</li>`,
    data() {
        return {
            clicked: false,
            checked: false
        }
    },
    methods: {
            changeTodo: function(item){
                this.clicked = true;
                
            },
            deleteTodo: function(item){
                var index = app.todos.indexOf(item);
                app.todos.splice(index, 1)
    
            },   
            finishTodo: function(item){
                this.clicked = false;
                var index = app.todos.indexOf(item);
                app.todos.splice(index,1,item)
            }
    }
})


var app = new Vue({
    el: '#app',
    data() {
        return {
            todos: [
                { text: 'Learn JavaScript',
                priority: 'High',
                done: false},
                { text: 'Learn Vue',
                priority: 'Normal',
                done: true},
                { text: 'Build something awesome',
                priority: 'Low',
                done: false}
                ],
            newTodo: {
                text: '',
                priority: ''
            },
            selected: '',
        }
    },
    methods: {
        addTodo: function(newItem){
    
            var item = {
                text: newItem.text,
                priority: newItem.priority,
            }
            item.done = false;
            this.todos.push(item)
        },
    }
})

