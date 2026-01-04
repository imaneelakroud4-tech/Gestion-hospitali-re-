function login(){
  if(user.value==="admin@hospital.com" && pass.value==="admin"){
    localStorage.setItem("auth","ok");
    location.href="dashboard.html?page=patients";
  }else{
    msg.innerText="Username ou Password incorrect";
  }
}
