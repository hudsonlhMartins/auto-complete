const serachInput = document.querySelector('.serach-input')
const input = document.querySelector('input')
const autocompBox = document.querySelector('.autocomp-box')
const icon = document.querySelector('.icon')

// se user digita algo autualizar, cada letrar que for digitando vai mostrando
input.onkeyup=(e)=>{
    let userData = e.target.value
    let emptyArray = []
    if(userData){
        emptyArray = sugestao.filter(data=>{ // ver sobre o filter
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase()); 
            // tolocaleLowerCase colocar em menisculo
            // startWith vai procurar se tem oq esta dentro () se tiver vai rtonar true
        })
        emptyArray = emptyArray.map((data)=>{
            return data = `<li>${data}</li>`
        })
        serachInput.classList.add('active') // no css so colocar a active na class__
        //serach-input
        showSuggestions(emptyArray)
        let allList = autocompBox.querySelectorAll('li')
        for (let i = 0; i< allList.length; i++){
            allList[i].setAttribute('onclick', 'select(this)')
            // para cada elemento vai colocar oncluck e um function
            // this vai traz o elemento
        }
    } else{
        serachInput.classList.remove('active')
        
    }
    
    share()
    
}

function select(elem){
    let selectUserData = elem.textContent
    // aqui da pegando o this que passou que e o elemento for
    console.log(selectUserData)
    input.value = selectUserData
    serachInput.classList.remove('active')
    window.open(`https://www.google.com/search?q=${input.value}`)

}

function showSuggestions(list){
    let listData
    if (!list.length) {
        userValue = input.value
        listData=`<li>${userValue}</li>`
    }else{
        listData = list.join('') // procurar sobre join
        // listtData vairecebe o parametro, então onde rem listaData Vai recebe o parametro
    }
    autocompBox.innerHTML = listData // adiconar no html
}

function share(){
    icon.addEventListener('click', ()=>{
        if(!input.value ==''){
            window.open(`https://www.google.com/search?q=${input.value}`)
        }else{
            
        }
    })
}