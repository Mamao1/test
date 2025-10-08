const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const telefone = document.getElementById('telefone');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');

// PF e PJ
const tipo = document.getElementById('tipo');
const pfCampos = document.getElementById('pf-campos');
const pjCampos = document.getElementById('pj-campos');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const telefoneValue = telefone.value.trim();
  const passwordValue = password.value.trim();
  const passwordConfirmationValue = passwordConfirmation.value.trim();

  // Nome
  if (usernameValue === '') {
    setErrorFor(username, 'O nome é obrigatório');
  } else {
    setSuccessFor(username);
  }

  // Email
  if (emailValue === '') {
    setErrorFor(email, 'O email é obrigatório');
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, 'Email inválido');
  } else {
    setSuccessFor(email);
  }

  // Telefone
  if (telefoneValue.length < 9) {
    setErrorFor(telefone, 'O telefone deve ter pelo menos 9 dígitos');
  } else {
    setSuccessFor(telefone);
  }

  // Senha
  if (passwordValue.length < 6) {
    setErrorFor(password, 'A senha precisa ter pelo menos 6 caracteres');
  } else {
    setSuccessFor(password);
  }

  // Confirmação
  if (passwordConfirmationValue === '') {
    setErrorFor(passwordConfirmation, 'A confirmação é obrigatória');
  } else if (passwordConfirmationValue !== passwordValue) {
    setErrorFor(passwordConfirmation, 'As senhas não conferem');
  } else {
    setSuccessFor(passwordConfirmation);
  }
}

// funções de erro/sucesso
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = message;
  formControl.className = 'form-control error';
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = '';
  formControl.className = 'form-control success';
}

// regex simples para email
function checkEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

// mostrar/esconder campos PF/PJ
function mostrarCampos() {
  pfCampos.classList.add('hidden');
  pjCampos.classList.add('hidden');

  if (tipo.value === 'pf') {
    pfCampos.classList.remove('hidden');
  } else if (tipo.value === 'pj') {
    pjCampos.classList.remove('hidden');
  }
}
