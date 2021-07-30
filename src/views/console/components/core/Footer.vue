<template>
  <v-footer
    id="core-footer"
    absolute
    height="30"
  >
   
    <span class="font-weight-light copyright">
      &copy;
      {{ (new Date()).getFullYear() }}
    </span>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    
  })
}
</script>

<style lang="scss" scoped>
#core-footer {
  opacity:0.7;
  z-index: 0;
  .copyright{
    width:100%;
    text-align:center;
  }
}
@media (max-width: 6400px){
  #core-footer {
    display:none;
  }
}
</style>
