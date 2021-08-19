<template>
    <div>
        <div id="list-done">
            <h4>List Done</h4><br>
            <div v-for="(list, i) in listDone" :key="i" class="row">
                <div class="col-9">
                    <p>{{list.title}}</p><br>   
                </div>
                <div class="col-3"><button class="btn" @click="listUndo (i)"><i class="fas fa-minus-square"></i></button></div>
                </div>
               
        </div>          
    </div>
</template>
<script>
export default {
    data() {
        return {
            listDone:this.$store.state.toDoList.listDone
        }
    },
    methods: {
         
       listUndo(i){
           this.$emit("undo-list", i)
       }
    },
   
}
</script>
<style scoped>
i{
 color: rgb(190, 54, 44);   
}
</style>