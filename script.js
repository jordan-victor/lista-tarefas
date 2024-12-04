const app = {  
    data(){
        let lists = []

        return{
            teste: new Date().getDate(),

            dataConclusao:'',

            newNote:{
                conclusao:'',
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
                    conclusao:'',
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





        //ADICIONADO DATA DE CONCLUSÃO
        addDataConclusao(i){
            this.lists[i].conclusao = this.dataConclusao
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
        },





        //EDITANDO O TÍTULO DO QUADRO
        editTitle(i){
            var novoTitulo = this.lists[i].text
            this.lists[i].text = novoTitulo
            localStorage.setItem("tarefa", JSON.stringify(this.lists))
        },



        //PEGANDO A DATA
        dataHoje(){
            let dia = new Date().getDate()
            if(dia < 10){
                dia = '0'+dia
            }

            let mes = new Date().getMonth()
            if(mes < 10){
                mes = '0'+mes
            }

            let ano = new Date().getFullYear()

            let dataHoje = `${dia}/${mes}/${ano}`

            return dataHoje          
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
        this.dataHoje()
    }
    /*
    updated(){
        localStorage.setItem("tarefa", JSON.stringify(this.lists))
    }
    */
}

Vue.createApp(app).mount("#app")