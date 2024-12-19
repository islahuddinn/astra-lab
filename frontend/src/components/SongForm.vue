<template>
  <div class="form">
    <div>
      <label>Lyrics for the Song:</label>
      <textarea v-model="lyrics" placeholder="Enter your lyrics here"></textarea>
    </div>
    <div>
      <label>Style of the Song:</label>
      <textarea v-model="style" placeholder="Describe the musical style (e.g., Pop)"></textarea>
    </div>
    <button @click="handleGenerate">Generate</button>
  </div>
</template>

<script>
export default {
  data() {
    return { lyrics: '', style: '' };
  },
  methods: {
    handleGenerate() {
      this.$emit('generate', { lyrics: this.lyrics, style: this.style });
    },
  },
};
</script>

<style>
.form {
  margin: 20px auto;
  text-align: left;
  max-width: 600px;
}
textarea {
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
}
button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}
</style>
