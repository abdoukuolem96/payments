<template>
  <div class="row">
    <h3>{{ title }}</h3>
    <h4>{{ value }}</h4>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    value: {
      type: String,
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&display=swap');
h3 {
  /* font-size: 1.5rem; */
  font-weight: bold;
  margin: 10px;
  font-family: 'Roboto Mono', monospace;
  background: -webkit-linear-gradient(rgb(14, 1, 87), rgb(0, 0, 0));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
h4 {
  /* font-size: 1.2rem; */
  margin: 0;
}
</style>
