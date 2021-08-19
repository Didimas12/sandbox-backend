<template>
        <div id="wrapper" >
            <nuxt-link to="sandbox2"><button class="btn btn-danger">tidak pakai state management</button></nuxt-link>
            <h1 style="">menggunakan state management</h1><br>
           <sandboxke2-form-input id="form-input" :list="list" @remove-list="deleteList" @add-done="addListDone" />
           <sandboxke2-list-done @undo-list="listUndo" />
            <h3>Filter data</h3>
            <p>{{listssDone}}</p>
        </div>
</template>
<script>
export default {
    data() {
        return {
            list:[
                {
                    id:1,
                    title: "makan",
                    done:true
                },
                {
                    id:2,
                    title: "olahraga",
                    done:true
                },
                {
                    id:3,
                    title:"menyebrang",
                    done:true
                },
                {
                    id:4,
                    title:"memukuli orang",
                    done:false
                },
                {
                    id:5,
                    title:"menggali",
                    done:true
                }
            ],
            // list2:[]
        }
    },
    methods: {
       deleteList(i){      
           this.list.splice(i, 1)
       },
    //    deleteStore(i){
    //       this.$store.state.toDoList.listDone.splice(i ,1)
    //    },
        addListDone(i){
           const listDone = this.list[i]
            this.$store.dispatch("toDoList/add", listDone)
            this.deleteList(i ,1)
            
        },
       
        listUndo(i){
            const listUndo = this.$store.state.toDoList.listDone
           this.list.unshift(this.$store.state.toDoList.listDone[i])
           this.$store.dispatch("toDoList/remove",listUndo)
        //    this.deleteStore(i ,1)      
        }
        
       
    },
     computed:{
        listssDone(){
            return this.list.filter(item=>item.title=="olahraga")
        }
        
    }
   

}
</script>
<style scoped>
#wrapper{
    margin: 0 auto;
    width: 600px; 
    padding-top: 100px;  
}

</style>