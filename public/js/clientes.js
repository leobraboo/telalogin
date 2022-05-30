const openModal = () => document.getElementById('modal')
    .classList.add('active');

const closeModal = () => {
    document.getElementById('modal').classList.remove('active')
    clearFields();
}
const dbclient = {
    nome : "leonardo",
    CNPJCPF : "01313393622",
    cidade: "vicosa" ,
    Email : "leo-llopes@hotmail.com"
}

const getlocalStorage = () => JSON.parse (localStorage.getItem("dbClient")) ?? [] 
const setlocalStorage = (dbClient) => localStorage.setItem ("dbClient" , JSON.stringify(dbClient))
const createClient = (client) => {
    const dbClient= getlocalStorage();
    dbClient.push (client);
    setlocalStorage(dbClient);
} ;

const readClient = () => getlocalStorage();

const uptadeClient = (index ,client) => {
    const dbClient = readClient();
    dbClient[index] = client;
    setlocalStorage(dbClient);
}


const deleteClient = (index) => {
    const dbClient = readClient();
    dbClient.splice (index ,1);
    setlocalStorage(dbClient);
}

const isValidFields = () => {
    return document.getElementById('form').reportValidity();
}

const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field');
    fields.forEach (field=> fields.Value = " ");
}

const saveClient = () => {
    if (isValidFields()){
        const client = {
            nome: document.getElementById ('nome').Value ,
            CNPJCPF: document.getElementById ('cnpjCpf').Value ,
            cidade: document.getElementById ('cidade').Value ,
            Email: document.getElementById ('email').Value 
        }
        createClient(client);
        closeModal();
        clearFields();
    
    }
}



document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal);

document.getElementById('modalClose')
    .addEventListener('click', closeModal);

document.getElementById('salvar')
    .addEventListener('click' , saveClient);

document.getElementById('cancelar')
    .addEventListener('click' , deleteClient);