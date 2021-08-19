<template>
        <div id="wrapper" >
            <nuxt-link to="sandboxke2"> <button class="btn btn-success">pakai state management</button></nuxt-link>
            <h1>Tidak menggunakan state management</h1>
           <sandbox2-form-input id="form-input" :list="list" @remove-list="deleteList" @add-done="doneList" />
           <sandbox2-list-done  :list2="list2" @undo-list="listUndo" />
            <h2>Filter data</h2>
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
            list2:[]
        }
    },
    methods: {
       deleteList(i){
           this.list.splice(i, 1)
       },
       
       doneList(i){
           if (this.list2.push(this.list[i])){
             this.deleteList(i, 1)
          }
       },
       
       listUndo(i){
           if (this.list.unshift(this.list2[i])){
           this.list2.splice(i, 1)
           }
       }
        
    },
     computed:{
        listssDone(){
            return this.list2.filter(item=>item.title=="olahraga")
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