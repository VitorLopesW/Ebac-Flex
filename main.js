
const arr = [{
    img: 'https://i0.wp.com/vooks.net/img/2019/06/Mario-Luigi-646x431.jpg?ssl=1',
    name: 'Nintendo 3ds XL - Mario & Luigi: Dream Team',
    anunciante: 'NinStore',
    console: 'Nintendo 3DS',
    preço: 1099.99,
    },{
        img: 'https://i0.wp.com/vooks.net/img/2019/06/Silver.jpg?ssl=1',
        name: 'Nintendo 3ds XL - Silver Black',
        anunciante: 'NinStore',
        console: 'Nintendo 3DS',
        preço: 999.99,
    },{
        img: 'https://i0.wp.com/vooks.net/img/2019/06/Animal-Crossing-New-Leaf.jpg?ssl=1',
        name: 'Nintendo 3ds XL - Animal Crossing New Leaf',
        anunciante: 'NinStore',
        console: 'Nintendo 3DS',
        preço: 1299.99,
    },{
        img: 'https://i0.wp.com/vooks.net/img/2019/06/Pokemon-XY-Red.jpg?ssl=1',
        name: 'Nintendo 3ds XL - Pokemon X/Y (RED)',
        anunciante: 'NinStore',
        console: 'Nintendo 3DS',
        preço: 1599.99,
    },{
        img: 'https://i0.wp.com/vooks.net/img/2019/06/Monster-Hunter-X-Hunting-Life-646x334.jpg?ssl=1',
        name: 'Nintendo 3ds XL - Monster Hunter X Hunting Life',
        anunciante: 'NinStore',
        console: 'Nintendo 3DS',
        'preço': 3999.99
    },{
        img: 'https://i0.wp.com/vooks.net/img/2019/06/Hyrule-646x348.jpg?ssl=1',
        name: 'Nintendo 3ds XL - Hyrule',
        anunciante: 'NinStore',
        console: 'Nintendo 3DS',
        'preço': 2999.99
    },{
        img: 'https://i0.wp.com/vooks.net/img/2019/06/Electric-Blue.jpg?ssl=1',
        name: 'Nintendo 2ds - Electric Blue',
        anunciante: 'NinStore',
        console: 'Nintendo 2DS',
        'preço': 799.99
    },{
        img: 'https://i0.wp.com/vooks.net/img/2019/06/Crimson-Red.jpg?ssl=1',
        name: 'Nintendo 2ds - Crimson Red',
        anunciante: 'NinStore',
        console: 'Nintendo 2DS',
        'preço': 799.99
    },{
        img: 'https://i0.wp.com/vooks.net/img/2019/06/Transparent-Green-646x646.jpg?ssl=1',
        name: 'Nintendo 2ds -Transparent Green',
        anunciante: 'NinStore',
        console: 'Nintendo 2DS',
        'preço': 799.99
    },{
        img: '/img/img-one.jpg',
        name: 'Nintendo 3ds XL - Mario & Luigi: Dream Team USADO',
        anunciante: 'João Lima',
        console: 'Nintendo 3DS',
        preço: 899.99,
    },{
        img: 'https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/07/Disney-Tsum-Tsum-Switch-System.jpg?q=50&fit=crop&w=963&dpr=1.5',
        name: 'Nintendo Switch V2 - Disney Tsum Tsum',
        anunciante: 'NinStore',
        console: 'Nintendo Switch',
        preço: 4499.99,
    },{
        img: 'https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/07/Monster-Hunter-XX-Switch-System.jpg?q=50&fit=crop&w=963&dpr=1.5',
        name: 'Nintendo Switch V2 - Monster Hunter XX',
        anunciante: 'NinStore',
        console: 'Nintendo Switch',
        preço: 2499.99,
    },{
        img: 'https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/07/Super-Smash-Bros-Ultimate-Switch-System.jpg?q=50&fit=crop&w=963&dpr=1.5',
        name: 'Nintendo Switch V2 - Super Smash Bros Ultimate',
        anunciante: 'NinStore',
        console: 'Nintendo Switch',
        preço: 1999.99,
    },{
        img: '/img/img-two.jpg',
        name: 'Nintendo Switch Lite -Zacian Zamazenta USADO',
        anunciante: 'Claudio Augusto',
        console: 'Nintendo Switch',
        preço: 1599.99,
    },{
        img: '/img/img-three.jpg',
        name: 'Nintendo Switch OLED - Branco',
        anunciante: 'NinStore',
        console: 'Nintendo Switch',
        preço: 2199.99,
    }
]

const content = document.querySelector('.content')

arr.forEach((el) => {
    //
    const newDiv = document.createElement('div')
    newDiv.classList.add('container-product')
    //
    let [integer, decimal] = el.preço.toString().split('.')
    newDiv.innerHTML = `
    <div class='container-img flex-centralize '>
        <img class='thumbnail' src='${el.img}'>
    </div>
        <div class='container-txt'>
        <h2>
            ${el.name}
        </h2>
        <h3 class='anunciante'>
            Anunciado Por: <b>${el.anunciante}</b>
        </h3>
        <a href='#'>${el.console}</a>
        <h3 class='valor'>
        <div class=small>R$</div><div class=big>${integer}</div><div class=small>${decimal}</div>
        </h3>
        <h3 class='parcelas'>
            em até ${parcelas(el.preço)[0]}x de R$${parcelas(el.preço)[1]} sem juros
        </h3>
        <h3 class='frete'>
            Frete Gratis
        </h3>
        <div class='btn-container flex-centralize'>
            <input type='button' class='btn-comprar btn-carrinho' value='adicionar ao carrinho'>
            <input type='button' class='btn-comprar btn-agora' value='Comprar agora'>
        </div>
    </div>
    `
    const buttons = newDiv.querySelectorAll('.btn-comprar');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.add('blink');
    
            setTimeout(() => {
                button.classList.remove('blink');
            }, 1000);
        });
    });
    
    
    //

    //append
    content.insertBefore(newDiv, content.firstChild)
})


function parcelas(num) {
    if (num >= 2000) return ['24', (num / 24).toFixed(2)]
    if (num >= 1000) return ['12', (num / 12).toFixed(2)]
    if (num >= 800) return ['8', (num / 8).toFixed(2)]
    if (num >= 500) return ['6', (num / 6).toFixed(2)]
    if (num >= 300) return ['4', (num / 4).toFixed(2)]
    if (num >= 100) return ['3', (num / 3).toFixed(2)]
    return ['2', (num / 2).toFixed(2)]
}

function resizeGrid() {
    const win = $(window);
    const width = win.width();
    const content = $('.content');
    const itemWidth = $('.container-product').width();
    let calc = Math.floor(width / itemWidth);
    if(calc == 1) calc++

    if (width <= 450) {
        $('.container-product').width(width).height('200px');
        content.css("grid-template-columns", `100%`);
    } else {
        $('.container-product').width('200px').height('404px');

        
        content.css("grid-template-columns", `repeat(${calc}, 1fr)`);
        
    }
}


function onLoad(){
    resizeGrid()
}

onLoad()







$(window).on('resize orientationchange', function(el){
    resizeGrid()
})

