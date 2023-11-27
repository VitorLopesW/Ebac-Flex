import { arr } from './arr.js'
const container = $('.container')
let show = [1,2,3]

function load(page, console){
    window.scrollTo(0, 0)
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
            show = [1,2,3]
            if(event.target.innerHTML === '<span class="material-symbols-outlined">menu</span> TODOS') {
                load(0, false)
            } else {
                load(0, event.target.innerHTML)
            }
        })
    })

    //
    const arrFilter = console != false ? arr.filter((el) => el.console === console) : arr
    let arrAppend = []
    arrFilter.forEach((el) =>{
        const card = document.createElement('div')
        card.classList.add('card')
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
    
            <div class='preço ${el.preço} flex-centralize'>
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
        arrAppend.push(card)
    })
    //
    let pages = []
    let chunkSize =  12 // 12
    for (let i = 0; i < arrAppend.length; i += chunkSize) {
        pages.push(arrAppend.slice(i, i + chunkSize));
    }
    pages[page].forEach((el) => container.append(el) )
    const cards = document.querySelectorAll('.card')
    function createPagination(){

        const pagination = $('.pagination')
        pagination.html('')
        pages.forEach((el, index) => {
            let pageNum = index + 1
            //
            if(index === 0) pagination.append(`<div class='flex-centralize next-btn btn-pagination not-a-button' id ='returnBtn'><span class="material-symbols-outlined">
            star
            </span></div>`)
            //
            let divToAppend = `<div class='flex-centralize btn-pagination' id='pagination${pageNum}'>${pageNum}</div>`
            //
            if(show.includes(pageNum) === true){
                pagination.append(divToAppend)
            }            
            if(pageNum === pages.length && pages.length > 3) {
                pagination.append(`<div class='flex-centralize solid' id='rightDot'>...</div>`)
                pagination.append(`<div class='flex-centralize btn-pagination lastDiv' id='pagination${pageNum}'>${pageNum}</div>`)
            }
            if(pageNum === pages.length)  pagination.append(`<div class='flex-centralize next-btn btn-pagination not-a-button' id ='fowardBtn'><span class="material-symbols-outlined">
            star
            </span></div>`)

        })
        //
        const paginationButtoms = document.querySelectorAll('.btn-pagination')
        paginationButtoms.forEach((btn) => {
            btn.classList.remove('btn-pagination-Selected')
            btn.addEventListener('click', () => {
                let pageNumber = Number(btn.id.replace('pagination', ''))
                if (isNaN(pageNumber)) {
                    return
                }
                //alert(pageNumber + "\r\n" + pages.length)
                const clickedPage = show.indexOf(pageNumber)
                if(show.includes(pageNumber)){
                    function refactorShow(){
                        if(pageNumber === 0) return
                        if(pageNumber > 1 && clickedPage == 0){
                            show.unshift(pageNumber - 1)
                            show.pop(pageNumber + 1)
                        }
                        //else if(pageNumber > 1 && clickedPage == 1 && pageNumber < pages.length - 1){
                        //}
                        else if(pageNumber > 1 && clickedPage == 2  && pageNumber < pages.length){
                            show.shift()
                            show.push(pageNumber + 1)
                        }
                    }
                    refactorShow()
                    // append 
                    load(pageNumber - 1, console)
                    document.querySelector(`#${btn.id}`).classList.add('btn-pagination-selected')
                }
                if(show.includes(pageNumber) === false){
                    function refactorShow(){
                        if(pageNumber === pages.length){
                            for (let i = 0; i < 3; i++) 
                                show.shift();
                            
                            for (let i = pageNumber - 2; i <= pageNumber; i++) 
                                show.push(i);
                            
                        }
                            if(pageNumber === 1){
                                for (let i = 0; i < 3; i++) 
                                    show.shift();
                                
                                for (let i = 1; i <= 3; i++) 
                                    show.push(i);
                        }
                    }
                    refactorShow()
                    // append 
                    load(pageNumber - 1, console)
                    document.querySelector(`#${btn.id}`).classList.add('btn-pagination-selected')
                }

                function refactorFirstAndLast(){
                    if(pageNumber > 2 && pages.length > 3) {
                        const divToAppend = '<div id="beforeDots" class="flex-centralize solid">...</div>'
                        const one = `<div class='flex-centralize btn-pagination' id='pagination1'>1</div>`
                        $(divToAppend).insertAfter(returnBtn)
                        $(one).insertAfter(returnBtn)
                        $('#pagination1').click(function(){
                            
                            show = [1,2,3]
                            load(0, console)
                        })
                    }
                    if(pageNumber >= pages.length - 1 ) {
                        $('#rightDot').remove()
                        $('.lastDiv').remove()
                    }

                }
                refactorFirstAndLast()
            })
        })
    }
    createPagination()


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



function onLoad(){
    load(0, false)
}

onLoad()

//

