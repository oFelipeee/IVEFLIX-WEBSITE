let btnVerSenha = document.querySelector('#verNovaSenha');

    btnVerSenha.addEventListener('click', () => {
      let inputSenha = document.querySelector('#newPassword');

      if (inputSenha.getAttribute('type') === 'password') {
        inputSenha.setAttribute('type', 'text');
      } else {
        inputSenha.setAttribute('type', 'password');
      }
    });

    // Função para exibir o formulário de atualização de senha
    function showUpdatePasswordForm() {
      document.getElementById('updatePasswordForm').style.display = 'block';
    }

    // Função para atualizar a senha
    function updatePassword() {
      const currentPassword = document.getElementById('currentPassword').value;
      const newPassword = document.getElementById('newPassword').value;
      const confirmPassword = document.getElementById('confirmPassword').value;

      if (newPassword !== confirmPassword) {
        alert('A nova senha e a confirmação não coincidem.');
        return;
      }

      // Atualiza a senha no armazenamento local
      let listaUser = JSON.parse(localStorage.getItem('listaUser')) || [];
      let userLogado = JSON.parse(localStorage.getItem('userLogado'));

      let userIndex = listaUser.findIndex(user => user.userCad === userLogado.user);

      if (userIndex !== -1) {
        if (listaUser[userIndex].senhaCad === currentPassword) {
          listaUser[userIndex].senhaCad = newPassword;
          localStorage.setItem('listaUser', JSON.stringify(listaUser));
          alert('Senha atualizada com sucesso.');
          document.getElementById('updatePasswordForm').style.display = 'none';
          window.location.href = './assets/html/signin.html'; 
        } else {
          alert('A senha atual está incorreta.');
        }
      } else {
        alert('Usuário não encontrado.');
      }
    }