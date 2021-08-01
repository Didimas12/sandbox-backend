<template>
    <div>
        <input class="form-control" v-model="newBook" @keyup.enter="addBook" placeholder="insert book . . ."/>
        <button @click="addBook" class="btn btn-success">Tambah Buku</button>
        <br><br>
        <ul>
            <li v-for="(books,index) in book" :key="index" >
                <div class="card">
                 <div class="card-body">
                     <div class="row">
                         <div class="col-10"><p>{{books.title}}</p></div>
                         <div class="col-2"><button @click="removeBook(index)" class="btn btn-outline-danger"><i class="fas fa-trash" style="fomt-size:12px"></i></button></div>
                     </div>
                 </div>
                </div>
            </li>
            
        </ul>
        <div class="row">
            <div class="col-6"></div>
            <div class="col-6">
                <button @click="clearAll" class="btn btn-warning">Hapus semua</button>
            </div>
        </div>
       
    </div>
</template>
<script>

export default {
    name:"inputFormBook",
    props:["book"],
    data() {
    return {
            newBook:"",
        }
    },
    
    methods:{
        addBook(){
            if (this.newBook){
                this.book.push({
                    title:this.newBook
                })
                this.newBook =""
            }
        },
        clearAll(){
        alert(' awas data akan terhapus semua')
            this.book=[];
        },
        removeBook( index ){
            this.$emit("remove-book", index)
        }
    }
}
</script>
