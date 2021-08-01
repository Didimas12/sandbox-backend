
<template>
    <div>
        <h6>Pilih opsi</h6>
        <select class="custom-select">
            <option disabled>Pilih buku</option>
            <option value="1" v-for="users in user" :key="users.id">{{users.nama}}</option>    
        </select>
        <br><br><br>
      
    </div>
</template>
<script>
export default {
    name:"selectOptionUser",
    props:["user"],
}
</script>