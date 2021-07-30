<template>
  <v-app>
    <core-filter v-if="($route.path!=='/console/login')&&($route.path!=='/console/register')" />

    <core-toolbar v-if="($route.path!=='/console/login')&&($route.path!=='/console/register')" />

    <core-drawer v-if="($route.path!=='/console/login')&&($route.path!=='/console/register')" />

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
  @import '@/views/console/styles/index.scss';

  /* Remove in 1.2 */
  .v-datatable thead th.column.sortable i {
    vertical-align: unset;
  }
  main{
    min-width:320px;
    background:url(/img/login_back.jpg) no-repeat;
    background-size:cover;
  }
  @media (max-width: 640px){
    main{
      background:none;
    }
  }

</style>