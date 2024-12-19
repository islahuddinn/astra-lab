<template>
  <div class="audio-player" v-if="audioUrl">
    <audio :src="audioUrl" controls></audio>
  </div>
</template>

<script>
export default {
  props: ["audioUrl"],
};
</script>

<style>
.audio-player {
  margin-top: 20px;
}
</style>
