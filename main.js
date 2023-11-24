import { arr } from './arr.js'
const container = $('.container')

function load(console){
    container.html('')
    let sideBarArr = []
    const sideBar = $('.side-bar')
    let sideBarHTML = '<div class="btn flex-centralize"><span class="material-symbols-outlined">menu</span> TODOS</div>'
    sideBar.html(sideBarHTML)
    arr.forEach((el) =>{
            if(sideBarArr.includes(el.console) === false){
                sideBarArr.push(el.console)
                sideBar.append(`<div class='btn'>${el.console}</div>`)
            }
    })
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            if(event.target.innerHTML === '<span class="material-symbols-outlined">menu</span> TODOS') {
                load(false)
            } else {
                load(event.target.innerHTML)
            }
        })
    })

    //
    const arrFilter = console != false ? arr.filter((el) => el.console === console) : arr
    arrFilter.forEach((el) =>{
        const card = document.createElement('div')
        card.classList.add('card')
        const promo = dailyPromotion() == el.promoNumber ? 'red' : ''
        const [integer, decimal] = String(el.preço).split('.')
        card.innerHTML = `
        
            <div class='container-img flex-centralize'>
                <img src='${el.img}'>
            </div>
            <div class='titulo'>${el.name}</div>
    
            <div class='anunciante'>
                <h2>
                    Anunciado Por: <b>${el.anunciante}</b>
                </h2>
            </div>
    
            <a href='#' class='console'>${el.console}</a>
    
            <div class='preço ${promo} flex-centralize'>
                <div class='small'>
                    R$
                </div>
                <div class='big'>
                    $${integer}
                </div>
                <div class='small'>
                    ${decimal}
                </div>
            </div>
    
                        
            <div class='parcelas'>
                <p>em até ${parcelas(el.preço)[0]} de R$ ${parcelas(el.preço)[1]} sem juros</p>
            </div>
    
            <div class='frete'>
                <p>FRETE GRATIS</p>
            </div>
    
            <div class='buttons'>
                <input class='card-btn carrinho-btn' type='button' value='Adicionar Ao Carrinho '>
                <input class='card-btn comprar-btn' type='button' value='Compre Agora'>
            </div>
    
        `.trim()
        container.append(card)
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

function dailyPromotion(){
    const date = new Date()
    return date.getDay()
}

function onLoad(){
    dailyPromotion()
    load(false)
}

onLoad()

//

/*
function textHidden(){
    const sobre = document.querySelector('#textSobreNos')
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


$(window).on('resize orientationchange', function(el){
    resizeGrid()
})
*/