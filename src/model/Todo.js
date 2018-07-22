export default class Todo{  
    constructor(content){
        this.id = this.generateUUID();
        this.content = content;
        this.status = 'active';       
    }

    static get ACTIVE() {
        return "active";
    }

    static get COMPLETED() {
        return "completed";
    }

    static get ALL() {
        return "all";
    }

    
    complete(){
        this.status = Todo.COMPLETED;
    }

    reactive(){
        this.status = Todo.ACTIVE;
    }

    toggleActive() {
        this.status = this.status === Todo.ACTIVE ? Todo.COMPLETED : Todo.ACTIVE;
    }

    generateUUID() {
        /*jshint bitwise:false */
        var i,
            random;
        var uuid = '';
    
        for (i = 0; i < 32; i++) {
            random = Math.random() * 16 | 0;
            if (i === 8 || i === 12 || i === 16 || i === 20) {
                uuid += '-';
            }
            uuid += (i === 12
                ? 4
                : (i === 16
                    ? (random & 3 | 8)
                    : random)).toString(16);
        }
        return uuid;
    }
}