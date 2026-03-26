document.getElementById("login").addEventListener("submit", async(e)=>{
    e.preventDefault();

    const email = getElementById("email").value;
    const password = getElementById("password").value;

    await login(email, password);
});