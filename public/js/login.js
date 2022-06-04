

async function salvarUsuario() {
    try {
        const usuario = {
            login: document.getElementById("usuario").value,
            senha: document.getElementById("senha").value
        }

        const { data } = await axios.post(`http://localhost:3001/salvarLogin`, usuario)
        console.log(data)

    } catch (error) {
        console.log(error)

    }


}

async function salvar() {
    try {
        const cadastro = {
            usuariocad: document.getElementById("usuariocad").value,
            cnpjCpf: document.getElementById("cnpjcpf").value,
            senhacad: document.getElementById("senhacad").value,
            celular: document.getElementById("celular").value,
        }

        const { data } = await axios.post(`http://localhost:3001`, cadastro)
        console.log(data)

    } catch (error) {
        console.log(error)

    }


}

document.getElementById('Login').addEventListener('click', function () {
    window.location.href = ('/home');
});

const clearFields = () => {
    const fields = document.querySelectorAll ('.modal-field')
    fields.forEach(field => fields.Value = " ")
}

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => {
    clearFields()
    document.getElementById('modal').classList.remove('active')

}

document.getElementById('cadastro')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)



