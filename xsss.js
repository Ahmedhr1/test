fetch("https://10.0.0.1")
  .then(response => response.text())
  .then(data => console.log("Response:", data))
  .catch(error => console.log("Fetch error:", error));
