fetch("http://10.0.0.1/admin")
  .then(response => response.text())
  .then(data => console.log("Admin Response:", data))
  .catch(error => console.log("Fetch error:", error));
