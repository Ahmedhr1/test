fetch("http://10.0.0.1", { method: "OPTIONS" })
  .then(response => response.text())
  .then(data => console.log("OPTIONS Response:", data))
  .catch(error => console.log("Fetch error:", error));
