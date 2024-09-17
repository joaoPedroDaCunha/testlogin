document.addEventListener("DOMContentLoaded", function() {
    const login = document.getElementById("log");
    const register = document.getElementById("regis");
    const n = document.getElementById("_n");
    const p = document.getElementById("_p");

    login.addEventListener("click", function() {
        n.value;
        p.value;
        //para obter o que esta escrito dentro da função utiliza o value se não ira obter so as marcações do html 
         
    });

    register.addEventListener("click", function() {
        window.location.href = "./register";
        //comando para redirecionar para outro diretorio
    });
});