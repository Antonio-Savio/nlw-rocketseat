const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form) //NLWSetup é uma biblioteca
const button = document.querySelector('header button')

button.addEventListener('click', add) //add ouvidor de evento (o click). Quando houver click, a função add será add
form.addEventListener("change", save) //sempre que houver modificações no form, a função será chamada

function add() {
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5) //formato de data tem q ser 'dd/mm'
    const dayExists = nlwSetup.dayExists(today) //retorna true ou false

    if (dayExists) {
        alert('Dia já incluso')
        return // pára a função aqui (n passa pra linha de baixo)
    }
    
    nlwSetup.addDay(today)
}

function save() {
    localStorage.setItem('habits_nlwsetup', JSON.stringify(nlwSetup.data)) //dado armazenado no localStorage (no navegador) | dado precisa ser string
} 

const data = JSON.parse(localStorage.getItem('habits_nlwsetup')) || {} //form não some qnd atualiza | dado volta a ser objeto | o OU (||) serve para evitar erros qnd executado em outro ambiente
nlwSetup.setData(data)
nlwSetup.load()
/*
const data = {
    run: ["01-01", "01-02", "01-06", "01-07", "01-08"],
    takePills: ["01-03"],
    journal: ["01-02"]
}

*/