<template>
    <div>
        <input class="form-control" v-model="listBook" />
        <button class="btn btn-success" @click.native="addBook">Tambah Buku</button>
        <br><br>
        <div >
            <ul>   
                 <li>
                     <span><p style="display: inline-block">list contoh</p> <button style="display:inline-block; margin-left:150px" class="btn btn-outline-danger" ><i class="fas fa-trash"></i></button> </span>
                 </li>
            </ul>
                   
        </div>
    </div>
</template>