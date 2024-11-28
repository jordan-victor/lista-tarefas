const app = {  
    data(){
        let lists = []

        return{
            newNote:{
                data:'',
                text:'',
                tasks:[]
            },
            newTask:{done:false, task:''},
            lists,
            n_quadros:''
        }
    },


    methods:{
        //ADICIONANDO NOVO QUADRO
        addList(){
            if(this.newNote.text != ''){
                let dia = new Date().getDate()
                let mes = new Date().getMonth()
                let ano = new Date().getFullYear()
                let data = `${dia}/${mes}/${ano}`
                
                this.newNote.data = data

                this.lists.push(this.newNote)              

                this.newNote = {
                    data:'',
                    text:'',
                    tasks:[]
                }

                localStorage.setItem("tarefa", JSON.stringify(this.lists))
            }
            else{
                alert("Escreva o nome do quadro")
            }
        },

        storeList(){
            localStorage.setItem("tarefa", JSON.stringify(this.lists))
        },





        //ADICIONANDO NOVA TAREFA   
        addTask(i){
            if(this.newTask.task != ''){
                console.log(i)
                this.lists[i].tasks.push(this.newTask)

                this.newTask = {
                    done: false
                }
                
                localStorage.setItem("tarefa", JSON.stringify(this.lists))
            }
            else{
                alert("Adicione uma tarefa")
            }
        },





        //DELETANDO QUADRO
        saveDelete(){
            localStorage.setItem("tarefa", JSON.stringify(this.lists))
        },
        
        handleClick(){
            
        },




        //CONTANDO O TOTAL DE QUADROS
        total_quadros(){
            let tt_quadros = document.getElementsByName("quadro")
            this.n_quadros = tt_quadros.length
            return this.n_quadros
        }
    },
    




    //CARREGANDO QUADROS NA TELA
    created(){
        this.lists = localStorage.getItem("tarefa") ? JSON.parse(localStorage.getItem("tarefa")) : this.lists     
    },
    //ATUALIZANDO NÚMERO DE QUADROS AÓS ADIÇÃO
    updated(){
        let tt_quadros = document.getElementsByName("quadro")
        this.n_quadros = tt_quadros.length
    },
    //EXIBINDO O NUEMRO TOTAL DE QUADROS APÓS CARREGAMNETO DA PÁGINA
    mounted(){
        this.total_quadros()
    }
    /*
    updated(){
        localStorage.setItem("tarefa", JSON.stringify(this.lists))
    }
    */
}

Vue.createApp(app).mount("#app")