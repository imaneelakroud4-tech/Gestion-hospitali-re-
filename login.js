function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  // Authentification simulée
  if (email === "admin@hospital.com" && password === "admin") {
    localStorage.setItem("auth", "true");
    window.location.href = "dashboard.html";
  } else {
    error.textContent = "Identifiants incorrects";
  }
}