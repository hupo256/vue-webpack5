<template>
  <div id="app">
      <Header name="The feade"/>
  </div>
</template>
<script>

export default {
  components: {
    Header: () => import('app1/Header')
  }
}

</script>
