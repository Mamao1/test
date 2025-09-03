const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirmation = document.getElementById('passwordConfirmation')


form.addEventListener('submit', (e) => {
    e.preventDeFault()

    checkInputs()
})
function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.Value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.Value;

    if(usernameValue === '') {
        setErrorFor(username, 'o nome do usúario é obrigatório')
    } else {
        setSuccessFor(username)
    }

}


function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    // adiciona mensagem de erro
    small.innerText = message

    //adiciona a classe de erro
    formControl.className = 'form-control error'
}
function setErrorFor(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    // limpa a mensagem de erro
    small.innerText = '';

    //adiciona a classe de sucesso
    formControl.className = 'form-control success'
}


function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
    );
    }