<template>
  <div class="output">
    <h3>Output</h3>
    <p>{{ output }}</p>
  </div>
</template>

<script>
export default {
  props: ['output'],
};
</script>

<style>
.output {
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #fff;
  text-align: left;
  max-width: 600px;
}
</style>
