<template>
  <v-content>
    <div id="core-view">
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </div>
    <core-footer v-if="$route.name !== 'Maps'" />
  </v-content>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: this.$route.path==='/console/login'||this.$route.path==='/console/register'?this.$route.path.split("/")[2]:'console view title'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
