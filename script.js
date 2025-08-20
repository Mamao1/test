  const form = document.getElementById('signup');
  const feedback = document.getElementById('feedback');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    feedback.style.display = 'none';
    feedback.classList.remove('error');

    const data = new FormData(form);
    const email = data.get('email')?.toString().trim();
    const senha = data.get('senha')?.toString();
    const confirmacao = data.get('confirmacao')?.toString();
    const usuario = data.get('usuario')?.toString().trim();

    if (!usuario || !email || !senha || !confirmacao) {
      showMsg('Preencha todos os campos.', true);
      return;
    }
    if (senha.length < 6) {
      showMsg('A senha deve ter ao menos 6 caracteres.', true);
      return;
    }
    if (senha !== confirmacao) {
      showMsg('As senhas não coincidem.', true);
      return;
    }

    // Simula sucesso de cadastro
    showMsg('Cadastro realizado com sucesso!');
    form.reset();
  });

  function showMsg(texto, isError = false) {
    feedback.textContent = texto;
    feedback.classList.toggle('error', !!isError);
    feedback.style.display = 'block';
  }