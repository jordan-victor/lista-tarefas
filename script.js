const app = {  
    data(){
        let lists = []

        return{
            saudacao:"",
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
        // Saldação
        saldacao(){
            setInterval(()=>{
                let horas = new Date().getHours()
                
                if(horas >= 6 && horas < 12){
                    this.saudacao = "BOM DIA!"
                }
                else if(horas >= 12 && horas < 18){
                    this.saudacao = "BOA TARDE!"
                }
                else if(horas >= 18 || horas < 6){
                    this.saudacao = "BOA NOITE!"
                }
            }, 1000)
        },



        //ADICIONANDO NOVO QUADRO
        addList(){
            if(this.newNote.text != ''){
                let dia = new Date().getDate()
                let mes = new Date().getMonth() + 1
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
        addTask(i, dataHoje){
            if(this.newTask.task != ''){
                //Atributo de  Data de criação de tarefa adicionada no objeto newTak
                this.newTask.data = dataHoje

                // Objeto newTask adicionado ao atributo tasks do objeto principal newNote
                this.lists[i].tasks.push(this.newTask)
                console.log(this.lists[i].tasks)
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

            let mes = new Date().getMonth() + 1
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
        this.saldacao()
    }
    /*
    updated(){
        localStorage.setItem("tarefa", JSON.stringify(this.lists))
    }
    */
}

Vue.createApp(app).mount("#app")