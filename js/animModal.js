const btnInfoContato = document.querySelector('#listContatoMobile')
btnInfoContato.addEventListener('click', () => {
   modalConfig()
})

const boxModalContato = document.querySelector('#boxModalContato')
boxModalContato.addEventListener('click', (e) => {
    // modalConfig()
    if (e.target.id == 'boxModalContato') modalConfig()
})

function modalConfig(){
    // console.log('funfo') //OK
    const modal = document.querySelector('#boxModalContato')
    modal.classList.toggle('invisivel')
    console.log(modal)
}