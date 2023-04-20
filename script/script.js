let icone = document.querySelector('.icone');
let menu = document.querySelector('.modalmenu');
icone.addEventListener('click', function(){
    menu.classList.toggle('show')
});
let urlbasica = 'file:///C:/Users/dudur/Documents/coisas%20importantes/code/html/letras'

const dados = [
    { name: 'yung buda', url: urlbasica + '/pages/artistas/yung_buda.html', category: 'artista'},
    { name: 'nill', url: urlbasica + '/pages/artistas/nill.html', category: 'artista'},
    { name: 'nikito', url: urlbasica + '/pages/artistas/nikito.html', category: 'artista'},
    { name: '7k', url: urlbasica + '/pages/artistas/7k.html', category: 'artista'},
    { name: 'arctic monkeys', url: urlbasica + '/pages/artistas/arctic_monkeys.html', category: 'artista'},
    { name: 'tyler the creator', url: urlbasica + '/pages/artistas/tyler_the_creator.html', category: 'artista'},
    { name: 'kendrick lamar', url: urlbasica + '/pages/artistas/kendrick_lamar.html', category: 'artista'},
    { name: 'melanie martinez', url: urlbasica + '/pages/artistas/melanie_martinez  .html', category: 'artista'}
];
const searchinput = document.querySelector('#searchinput');
const resultadoscontainer = document.querySelector('.resultados');
let botaopesquisa = document.querySelector('#botaopesquisa')
searchinput.addEventListener('input', () => {
    const termo = searchinput.value.toLowerCase().trim();
    if (termo.length > 0){
        const resultadosfiltro = dados.filter(item => {
            return item.name.toLowerCase().includes(termo);
        });
        mostrarresultado(resultadosfiltro);
    }
    else {
        resultadoscontainer.innerHTML = '';
    }
});
const limite = 5;
function mostrarresultado(resultados) {
    let html = []
    if (resultados.length > 0){
        resultados.slice(0,limite).forEach(item => {
            html.push(`<ul><li><a href="${item.url}" class="resultadoitem"><img src="imagens/artistas/${item.name.replace(/\s+/g, '_')}.jpg"><div><p class="nome">${item.name}</p><p class="categoria">${item.category}</p></div></a></li></ul>`)
        });
        console.log(html)
        if (html.length > 4){
            html.push(`<a href="" class="outrosresultados">Mostrar outros resultados</a>`)
        }
    }
    else {
        html.push('<p class="nenhumresultado">Nenhum resultado encontrado</p>')
    }
    resultadoscontainer.innerHTML = html.join(' ');
}
document.addEventListener('click', () => {
    resultadoscontainer.classList.remove('show')
    botaopesquisa.style.borderBottomRightRadius = '10px';
    searchinput.style.borderBottomLeftRadius = '10px';
})
searchinput.addEventListener('input', (event) => {
    if (searchinput.value.length > 0){
        event.stopPropagation()
        resultadoscontainer.classList.add('show')
        botaopesquisa.style.borderBottomRightRadius = '0px';
        searchinput.style.borderBottomLeftRadius = '0px';
    }
    else{
        botaopesquisa.style.borderBottomRightRadius = '10px';
        searchinput.style.borderBottomLeftRadius = '10px';
    }
})
resultadoscontainer.addEventListener('click', (event) => {
    event.stopPropagation()
})