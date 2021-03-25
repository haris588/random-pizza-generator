const imageContainer = document.querySelector('.imageContainer')
const btn = document.querySelector('.btn')

const getPizza = async () => {
    const api = 'https://foodish-api.herokuapp.com/api/images/pizza'

    const promise = await fetch(api)
    const apiData = await promise.json()
    
    return imageContainer.innerHTML = `<img src=${apiData.image} alt="pizza" />` 
}


(async ()=> {
    try {
        await getPizza()
    }
    catch(e){
        console.log(e)
    }
})()

btn.addEventListener('click', getPizza)