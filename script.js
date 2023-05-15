
const nextBtn = document.querySelectorAll('.next-btn');
const prevBtn = document.querySelectorAll('.prev-btn');

const forms = document.querySelectorAll('.form-container');
const number = document.querySelectorAll('.number');

const circleContainer = document.querySelector('.circle-container');
const circle = document.querySelector('.circle');
const yearText = document.querySelector('#yearly');
const monthyText = document.querySelector('#monthly');
const yearlyBilling = document.querySelectorAll('#yearly-billing');

const arcadePrice = document.querySelector('.price.arcade');
const advancedPrice = document.querySelector('.price.advanced');
const proPrice = document.querySelector('.price.pro');


const onlineServer = document.querySelector('#online-service-billing');
const largerStorage = document.querySelector('#larger-storage-billing');
const customizableProfile = document.querySelector('#customizable-profile-billing');

const cards = document.querySelectorAll('.card');
const AllCards = document.querySelectorAll('[product-name]');
const AllCardsPrice = document.querySelectorAll('[product-price]');


const options = document.querySelectorAll('.service');
const invoice = document.querySelector('.invoice');


const confirmBtn = document.querySelector('.confirm');
const thanksForm = document.querySelector('.thanks')
const LastForm = document.querySelector('.th');


let content = document.querySelectorAll('.content');

let product = {
    id: Date.now(),
    itms: undefined,
    opItms: undefined
};
const total = document.querySelector('#total-price')
let CounterForm = 0;

nextBtn.forEach(nxt => {
    nxt.addEventListener('click', () => {
        CounterForm++;
        updateForm()
    })
})
prevBtn.forEach(nxt => {
    nxt.addEventListener('click', () => {
        CounterForm--;
        updateForm()
    })
})

function updateForm() {
    forms.forEach((form) => {
        form.classList.contains('active') &&
            form.classList.remove('active')
    })
    number.forEach((form) => {
        form.classList.contains('active') &&
            form.classList.remove('active')
    })

    forms[CounterForm].classList.add('active')
    number[CounterForm].classList.add('active')

}


circleContainer.addEventListener('click', () => {

    circleContainer.classList.toggle('active');
    yearText.classList.toggle('active')
    monthyText.classList.toggle('active')

    yearlyBilling.forEach(btn => {
        btn.classList.toggle('active')
    })
    if (circleContainer.classList.contains('active')) {
        arcadePrice.innerText = '$90/yr'
        advancedPrice.innerText = '$120/yr'
        proPrice.innerText = '$150/yr'

        onlineServer.innerText = '+$10/yr'
        largerStorage.innerText = '+$20/yr'
        customizableProfile.innerText = '+$20/yr'

    }
    else {
        arcadePrice.innerText = '$9/mo'
        advancedPrice.innerText = '$12/mo'
        proPrice.innerText = '$15/mo'

        onlineServer.innerText = '+$1/mo'
        largerStorage.innerText = '+12/mo'
        customizableProfile.innerText = '+$2/mo'
    }
})



options.forEach(option => {
    option.addEventListener('click', () => {

        product.opItms = option.childNodes;
        const tax = document.createElement('div');
        const optionName = document.createElement('p');
        const optionprice = document.createElement('p');

        optionName.innerText = product.opItms[3].innerText;

        optionprice.innerText = product.opItms[5].innerText;


        tax.classList.add('tax');
        optionName.classList.add('tax.p');

        console.log(product.opItms)

        tax.appendChild(optionName)
        tax.appendChild(optionprice)
        invoice.appendChild(tax)
    })
})


cards.forEach(card => {

    card.addEventListener('click', () => {
        card.classList.toggle('active');



        product.itms = card.childNodes

        const items = document.createElement('div')
        const change = document.createElement('div')

        const itemText = document.createElement('h1')
        const itemLink = document.createElement('a')

        const priceText = document.createElement('p')


        itemLink.innerText = 'Change';
        itemLink.href = '#';



        itemText.innerText = product.itms[3].innerText
        priceText.innerText = product.itms[5].innerText;




        change.appendChild(itemText)
        change.appendChild(priceText)
        change.appendChild(itemLink)



        invoice.appendChild(change)


        items.classList.add('items');
        change.classList.add('change');
        itemText.classList.add('change.h1');
        itemLink.classList.add('change.a');
    })


})

confirmBtn.addEventListener('click', () => {
    thanksForm.classList.toggle('active')
    LastForm.classList.toggle('active')

})