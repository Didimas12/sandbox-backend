<template>
    <div >
        <div class=" row" >
            <div class="col-11"  >
                <input v-model="newList" type="text" class="form-control" placeholder="input list . . ." >
                <p style="color: red ; font-size:11px;">{{checkChar}}</p>
            </div>
                <div class="col-1">
                    <button id="button-add" :disabled="isDisable" @click="addList" class="btn btn-primary">+</button>
            </div>
            </div>
            <div id="list" >
                <h4>To do list</h4>                
                <div v-for="(listed, i) in list" :key="i" class="row">
                    <div class="col-8">    
                         <p> {{listed.title}}</p><br>   
                    </div>
                    <div class="col-2"><button class="btn" @click="removeList (i)"><i class="fas fa-trash"></i></button></div>
                    <div class="col-2"><button class="btn" @click="addDone (i)"><i id="font-check" class="fas fa-check-circle"></i></button></div>
                </div>
            </div>
           
    </div>
</template>
<script>
export default {
    props: ["list", "list2"],

    data() {
        return {
            newList:"",
            
        }
    },
    methods: {
        addList(){
            if (this.newList){
                this.list.push({title:this.newList})
                this.newList =""
            }
        },
        removeList(i){
            this.$emit("remove-list", i)
        },

        addDone(i){
           this.$emit("add-done", i)
        }
       
    },
    computed:{
        isDisable(){ 
            return(this.newList.length < 8)
        },
        checkChar(){
            return this.newList.length < 8 ?"minimal harus 8 karakter" : ""
         }
    }
    
    
}
</script>
<style scoped>
ul{
    list-style: none;
}
#list{
    margin-top: 20px;
}
i{
 color: rgb(190, 54, 44);   
}
#list-done{
    margin-top: 50px;
}
#font-check{
    color: rgb(12, 141, 33);
}
#button-add:disabled{
     cursor: not-allowed;
     opacity: 0.5;
}
</style>