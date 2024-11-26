const app = {  
    data(){
        let lists = [
           
        ]

        return{
            newNote:{
                text:'',
                tasks:[]
            },
            newTask:{done:false, task:''},
            lists
        }
    },

    methods:{
        addList(){
            if(this.newNote.text != ''){
                this.lists.push(this.newNote)              

                this.newNote = {

                }

                //Salvando no localStorage
                localStorage.setItem("tarefa", JSON.stringify(this.lists))
            }
            else{
                alert("Escreva algo na lista")
            }
        },

        storeList(){
            localStorage.setItem("tarefa", JSON.stringify(this.lists))
        },


        addTask(i){
            if(this.newTask.task != ''){
                this.lists[i].tasks.push(this.newTask)

                this.newTask = {
                    done: false
                }
                
                localStorage.setItem("tarefa", JSON.stringify(this.lists))
            }
            else{
                console.log("Adicione uma tarefa")
            }
        }
    },
    
    created(){
        this.lists = localStorage.getItem("tarefa") ? JSON.parse(localStorage.getItem("tarefa")) : this.lists
    },
    /*
    updated(){
        localStorage.setItem("tarefa", JSON.stringify(this.lists))
    }
    */
}

Vue.createApp(app).mount("#app")