<template>
    <div>
        <h6>Pilih opsi</h6>
        <select class="custom-select">
            <option disabled>Pilih buku</option>
            <option value="1" v-for="books in book" :key="books.id">{{books.title}}</option>    
        </select>
        <br><br><br>
      
    </div>
</template>
<script>
export default {
    name:"selectOptionBook",
    props:["book"],
}
</script>