<template>
    <div>
        <input class="form-control" v-model="newUser" @keyup.enter="addUser" placeholder="add user . . ." />
        <button class="btn btn-success" @click="addUser">Tambah User</button>
        <br><br>
        <ul>
            <li v-for="(users,index) in user" :key="users.id">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-10">{{users.nama}}</div>
                            <div class="col-2"><button class="btn btn-outline-danger" @click="removeUser(index)"><i class="fas fa-trash"></i></button></div>
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
    name:"inputFormUsers",
    props:["user"],
    data() {
        return {
            newUser : "" , 
        }
    },
    methods: {
        addUser(){
            if(this.newUser){
                this.user.push({
                    nama:this.newUser
                }) 
                this.newUser=""
            }
        },
        clearAll(){
            alert('data akan terhapus semua')
            this.user=[]
        },
        removeUser(index){
            this.$emit("remove-user",index)
        }
    },
}

</script>