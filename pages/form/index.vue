<template>
<div>
    <h1>Form Perpustakaan</h1><br><br>
    <div class="container justify-content-center align-items-center">
        <div class="row">
            <div class="col-4"><input-form-book v-bind:book ="book" @remove-book="deleteBook"/>
            
            </div>
             <div class="col-4"><input-form-users v-bind:user ="user" @remove-user="deleteUser" /></div>
              <div class="col-4">
                    <select-option-book v-bind:book="book"/>
                    <select-option-user v-bind:user="user"/>
                    <br><br>
                    <p>detail peminjaman : </p> 
             </div>
        </div>
    </div>
       
</div>
</template>
<script>
import inputFormBook from "../../components/inputFormBook.vue"
import inputFormUsers  from '../../components/inputFormUsers.vue'
import selectOptionBook  from '../../components/selectOptionBook.vue'
import selectOptionUser from '../../components/selectOptionUser.vue'
export default {
    name:"index",
    components:{
        inputFormBook,
         inputFormUsers,
         selectOptionBook,
         selectOptionUser
    },
    data() {
        return {
            book:[
                {
                    id:1,
                    title:"Muscle Cars"
                },
                {
                    id:2,
                    title:"Sherlock Holmes",
                },
                {
                    id:3,
                    title:"the Art of Wibu"
                }
            ],
            user:[
                {
                    id:1,
                    nama:"Dimas"
                },
                {
                    id:2,
                    nama:"Gilang"
                },
                {
                    id:3,
                    nama:"Mawar"
                }
            ]
        }
    },
    methods: {
        deleteBook(index){
            if(confirm("yakin mau hapus ?") == true){
                this.book.splice(index,1)
            } else{
                alert("yaudah gak jadi hapus")
            }
            
            
        },
        deleteUser(index){
            
            if (confirm('apa anda yakin?') == true){
                this.user.splice(index,1)
            }else{
                   alert('oke gk jadi hapus')
            }
            
        }
    }
    
}
</script>
