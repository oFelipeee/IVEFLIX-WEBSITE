function deleteUser() {
    if (confirm("Tem certeza de que deseja deletar sua conta? Esta ação é irreversível.")) {
        let listaUser = JSON.parse(localStorage.getItem('listaUser')) || [];
        let userLogado = JSON.parse(localStorage.getItem('userLogado'));

        let filteredUsers = listaUser.filter(user => user.userCad !== userLogado.user);
        localStorage.setItem('listaUser', JSON.stringify(filteredUsers));
        localStorage.removeItem('userLogado');

        alert("Usuário deletado com sucesso.");
        window.location.href = './assets/html/signin.html'; // Redireciona para a página inicial após deletar
    }
}