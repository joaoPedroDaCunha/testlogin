document.addEventListener("DOMContentLoaded", function() {
    const login = document.getElementById("log");
    const register = document.getElementById("regis");
    const n = document.getElementById("email");
    const p = document.getElementById("password");

    login.addEventListener("click", () => {
        n.value;
        p.value;
        //para obter o que esta escrito dentro da função utiliza o value se não ira obter so as marcações do html 
         
    });

    register.addEventListener("click", () => {
        window.location.href = "./register";
        //comando para redirecionar para outro diretorio
    });
});