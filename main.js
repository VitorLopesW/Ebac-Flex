
const arr = [{
    img: 'https://i0.wp.com/vooks.net/img/2019/06/Mario-Luigi-646x431.jpg?ssl=1',
    name: 'Nintendo 3ds XL - Mario & Luigi: Dream Team',
    anunciante: 'João Souza',
    console: 'Nintendo 3DS',
    preço: 1099.99,
},{
    img: 'https://i0.wp.com/vooks.net/img/2019/06/One-Piece-Unlimited-World-Red.jpg?ssl=1',
    name: 'Nintendo 3ds - ONE PIECE',
    anunciante: 'Mario Souza',
    console: 'Nintendo 3DS',
    preço: 1099.99,
},{
    img: 'https://i0.wp.com/vooks.net/img/2019/06/Fire-Emblem-Awakening-1-646x386.jpg?ssl=1',
    name: 'Nintendo 3ds - Fire Emblem: Awakening',
    anunciante: 'Carlos Magno',
    console: 'Nintendo 3DS',
    preço: 899.99,
},{
    img: 'https://m.media-amazon.com/images/I/71t1ATYDuHL.jpg',
    name: 'Nintendo Switch Lite - Zacian e Zamazenta',
    anunciante: 'NinStore',
    console: 'Nintendo Switch',
    preço: 1699.99,
},{
    img: 'https://http2.mlstatic.com/D_Q_NP_627805-MLA32731593173_112019-O.webp',
    name: 'Nintendo 3DS - Vermelho',
    anunciante: 'NinStore',
    console: 'Nintendo 3DS',
    preço: 399.99,
},{
    img: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRw0o4x8ePDypqMlO8pjhMG5eO8opVsQMNDBjW0Tt3g_EQumxXmgLK6nS01Z7wMC-gfP4YcEqYV9UUvK8Qy0_pJTm0y7w8wmehKDvvxLFX8smAg5IlhVMJY6w&usqp=CAE',
    name: 'Nintendo Switch OLED - Monster Hunter Rise',
    anunciante: 'NinStore',
    console: 'Nintendo Switch',
    preço: 1799.99,
},{
    img: 'https://http2.mlstatic.com/D_NQ_NP_801788-MLB49045990176_022022-W.webp',
    name: "Nintendo 3DS - Majora's mask",
    anunciante: 'Claudio Augusto',
    console: 'Nintendo 3DS',
    preço: 4699.99,
},{
    img: 'https://http2.mlstatic.com/D_NQ_NP_686027-MLB71008095182_082023-W.webp',
    name: "Nintendo 3DS XL - Smash Bros",
    anunciante: 'Cesar  Sampaio',
    console: 'Nintendo 3DS',
    preço: 2699.99,
},{
    img: 'https://m.media-amazon.com/images/I/81UzXyarPpL.__AC_SY300_SX300_QL70_ML2_.jpg',
    name: "Cartão Micro SD Nintendo Switch, SanDisk, 64GB",
    anunciante: 'Claudio Augusto',
    console: 'SanDisk',
    preço: 59.99,
},{
    img: 'https://http2.mlstatic.com/D_NQ_NP_719738-MLU72566278420_112023-W.webp',
    name: 'Nintendo Switch Lite - Turquesa ',
    anunciante: 'NinStore',
    console: 'Nintendo Switch',
    preço: 999.99,
},{
    img: 'https://http2.mlstatic.com/D_NQ_NP_863079-MLA32736049778_112019-W.webp',
    name: 'Nintendo New 3DS XL - Standart ',
    anunciante: 'Jean Claude',
    console: 'Nintendo New 3DS',
    preço: 1999.99,
},{
    img: 'https://i0.wp.com/vooks.net/img/2019/06/DoraKazu-Nobita-no-Suuji-Daibouken.jpg?ssl=1',
    name: 'Nintendo 3DS - DoraKazu: Nobita no Suuji Daibouken',
    anunciante: 'Jean Claude',
    console: 'Nintendo 3DS',
    preço: 6999.99,
}]

const content = document.querySelector('.content')

let consolesKey = {
    'Todos Os Produtos': true
}

function updateStore(filter){
    content.innerHTML = ''
    arr.forEach((el) => {
        if(consolesKey[el.console] == undefined) consolesKey[el.console] = true
        if( filter != 'Todos Os Produtos'){
            if(filter != el.console) return
        }
        const newDiv = document.createElement('div')
        newDiv.id = 'container'
        newDiv.classList.add('container')
        // <div class="container">
        const imgProduct = document.createElement('div')
        imgProduct.classList.add("img-product")
        //
        const title = document.createElement('a')
        title.href = "#"
        title.classList.add('titulo')
        title.innerHTML = `<h2><b>${el.name}</b></h2>`
        //
        const img = document.createElement('img')
        img.src = el.img
        //
        const textLeft = document.createElement('div')
        textLeft.classList.add('text-left')
        textLeft.innerHTML = `<h3>Anunciado por <i>${el.anunciante}</i></h3>`
        //
        const textLeftTwo = document.createElement('div')
        textLeftTwo.classList.add('text-left')
        textLeftTwo.innerHTML = `<h3><a href='#'><b class="blue">${el.console}</b></a></h3>`
        //
        const textLeftThree = document.createElement('div')
        let numberString = el.preço.toString();
        let [integerPart, decimalPart] = numberString.split('.');
        textLeftThree.classList.add("price")
        textLeftThree.innerHTML = `<h3><div class="small">R$</div><b>${integerPart}</b><div class="small">${decimalPart}</div></h3>`
        //
        const textLeftFour = document.createElement('div')
        textLeftFour.classList.add("text-left")
        let [numParcelas, preço] = parcelas(el.preço)
        textLeftFour.innerHTML = `<h3 class="light-grey">em até ${numParcelas}x de R$${preço} sem juros</h3>`
        //
        const textLeftFive = document.createElement('div')
        textLeftFive.classList.add("text-left")
        textLeftFive.innerHTML = `<h3>Frete GRÁTIS</h3>`
        //
        const textLeftSix = document.createElement('div')
        textLeftSix.classList.add("margin-bottom")
        //
        const button = document.createElement('div')
        button.classList.add("btn")
        button.innerHTML = 'Adicionar Ao Carrinho'
        //
        // </div class="container">
        // append
        imgProduct.appendChild(img)
        newDiv.appendChild(imgProduct)
        newDiv.appendChild(title)
        newDiv.appendChild(textLeft)
        newDiv.appendChild(textLeftTwo)
        newDiv.appendChild(textLeftThree)
        newDiv.appendChild(textLeftFour)
        newDiv.appendChild(textLeftFive)
        newDiv.appendChild(button)
        newDiv.appendChild(textLeftSix)
    
        //
    
        // append to main
        content.insertBefore(newDiv, content.firstChild)    
    })
    
}
updateStore('Todos Os Produtos')

const arryConsoles = Object.keys(consolesKey)

const busca = document.querySelector('.busca')

arryConsoles.forEach((el) => {
const newDiv = document.createElement('h3')
newDiv.innerHTML = el
newDiv.addEventListener('click', () => {
    updateStore(el)
})
busca.append(newDiv)
})

function textHidden(){
    const sobre = document.querySelector('#textSobre')
    const saibaMais = `<b id='btnText'  style='cursor: pointer'>Click Aqui para saber mais</b>`
    const esconder = `<b id='btnHidden'  style='cursor: pointer'>Click Aqui para Esconder</b>`
    sobre.innerHTML = `<span class="tab"></span>Na NinStore, mergulhamos no universo mágico da Nintendo para trazer a você uma experiência única de compras online... ${saibaMais}`
    const btnText = document.querySelector('#btnText')
    btnText.addEventListener('click', () => {
        sobre.innerHTML = `<span class="tab"></span>Na NinStore, mergulhamos no universo mágico da Nintendo para trazer a você uma experiência única de compras online. Somos mais do que uma simples loja; somos apaixonados por tudo relacionado à Nintendo, e nossa missão é compartilhar essa paixão com você, oferecendo os melhores produtos e serviços. Além disso, a NinStore é também um marketplace dedicado, proporcionando um espaço vibrante para anúncios relacionados ao mundo Nintendo. Se você procura vender ou encontrar itens exclusivos, a NinStore é o seu destino definitivo para explorar e celebrar a comunidade Nintendo. Junte-se a nós nessa jornada emocionante! <br><br>${esconder}`
        const btnHidden = document.querySelector('#btnHidden')
        btnHidden.addEventListener('click', () => {
        textHidden()
    })
    })

}









function parcelas(num) {
    if (num >= 2000) return ['24', (num / 24).toFixed(2)]
    if (num >= 1000) return ['12', (num / 12).toFixed(2)]
    if (num >= 800) return ['8', (num / 8).toFixed(2)]
    if (num >= 500) return ['6', (num / 6).toFixed(2)]
    if (num >= 300) return ['4', (num / 4).toFixed(2)]
    if (num >= 100) return ['3', (num / 3).toFixed(2)]
    return ['2', (num / 2).toFixed(2)]
}

textHidden()