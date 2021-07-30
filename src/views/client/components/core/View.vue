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
      title: this.$route.path==='/login'||this.$route.path==='/register'?this.$route.path.split("/")[1]:'client view title'
    }
  }
}
</script>

<style lang="scss" scoped>
#core-view {
  padding-bottom: 100px;
}
</style>
