function Login({ onLogin }) {
  return (
    <div className="login-page">
      <h1>Auto-SRE</h1>
      <h2>Login</h2>

      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />

      <button onClick={onLogin}>Login</button>
    </div>
  );
}

export default Login;