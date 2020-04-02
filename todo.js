new Vue({
    el: "#app",
    data: {
        currentTodo: "",
        todos: [
            { text: "Learn Vue", done: false },
            { text: "Learn Java", done: false },
            { text: "Play with friends", done: true }
        ]
    },
    methods: {
        toggleTodo(todo) {
            todo.done = !todo.done;
        },
        addTodo() {
            if(!this.currentTodo) return;
            this.todos.push({
                text: this.currentTodo,
                done: false
            });
            this.currentTodo = "";
        },
        delTodo(index) {
            this.todos.splice(index, 1);
        }
    },
    computed: {
        filteredTodos() {
            return this.todos.filter(
                todo => todo.text.toLowerCase().match(this.currentTodo.toLowerCase())
            );
        }
    }
});