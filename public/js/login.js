

async function salvarUsuario() {
    try {
        const usuario = {
            login: document.getElementById("usuario").value,
            senha:document.getElementById("senha").value
        }

        const { data } = await axios.post(`http://localhost:3001/salvarLogin`, usuario)
        console.log(data)

    } catch (error) {
        console.log(error)

    }


}



