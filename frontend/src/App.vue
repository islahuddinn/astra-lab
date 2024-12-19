<template>
  <div id="app" class="app-container">
    <header class="header">
      <div class="logo">Astra Labs</div>
    </header>

    <div class="main-content">
      <div class="input-section">
        <div class="box">
          <label for="lyrics" class="label">Lyrics for the Song:</label>
          <textarea
            id="lyrics"
            class="input"
            placeholder="Enter your lyrics here"
          ></textarea>
        </div>
        <div class="box">
          <label for="style" class="label">Style of the Song:</label>
          <textarea
            id="style"
            class="input"
            placeholder="Describe the musical style (e.g., Pop, Jazz, etc.)"
          ></textarea>
        </div>
      </div>

      <div class="output-section box">
        <h2 class="output-label">Output</h2>
      </div>
    </div>

    <footer class="footer">
      <button class="generate-button">Generate</button>
    </footer>
  </div>
</template>

<style scoped>
/* General Styles */
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
  min-width: 100vw; 
  background-color: #121212; 
  color: white;
  font-family: Arial, sans-serif;
  box-sizing: border-box;
  overflow: hidden; 
  margin: 0; 
  padding: 0;
}

/* Logo Header */
.header {
  position: fixed; 
  top: 0;
  left: 0;
  right: 0; 
  background-color: #000; 
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.logo {
  font-size: 1.5em;
  font-weight: bold;
  color: white;
  margin-left: 20px; 
}

/* Main Content Layout */
.main-content {
  display: flex;
  justify-content: space-between;
  flex: 1;
  padding: 20px;
  margin-top: 80px; 
  gap: 20px;
  box-sizing: border-box;
}

.input-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
}

.output-section {
  flex: 1;
  max-width: calc(50% - 10px); 
}

/* Box and Input Styling */
.box {
  background-color: #1e1e1e; 
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  height: 100%; 
}

.label {
  font-size: 1.1em;
  margin-bottom: 10px;
  display: block;
  text-align: left; 
}

.input {
  width: 80%; 
  height: 80px;
  background-color: #2a2a2a; 
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px;
  resize: none;
  font-size: 1em;
  margin-left: 10px; 
}

/* Button Styling */
.footer {
  text-align: center;
  margin: 20px 0;
}

.generate-button {
  background-color: #1e1e1e;
  color: white;
  font-size: 1.2em;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.generate-button:hover {
  background-color: #2a2a2a; 
}

/* Output Section */
.output-label {
  font-size: 1.5em;
  font-weight: bold;
  margin: 0;
  text-align: left; 

/* Media Queries for Responsiveness */
@media (max-width: 768px) {
  .main-content {
    flex-direction: column;
    gap: 20px;
  }

  .input-section,
  .output-section {
    flex: none;
    width: 100%;
  }

  .box {
    height: auto; 
  }

  .footer {
    margin-top: 20px;
  }
}
}
</style>
