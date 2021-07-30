<template>
  <v-app>
    <core-view />
  </v-app>
</template>
<script>
  export default{
    mounted(){
      // console.log(this.$route.path)
    }
  }
</script>
<style lang="scss" scoped>
  @import '@/views/client/styles/index.scss';

  /* Remove in 1.2 */
  .v-datatable thead th.column.sortable i {
    vertical-align: unset;
  }
</style>