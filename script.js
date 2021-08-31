let divEl = document.querySelector('.container')
let clearBtn = document.querySelector('#clear-btn')
let startOverBtn = document.querySelector('#start-over')
let number=null
let pixels = null


const sketchGrid = (num, pixels)=>{



    for(let i=0; i<num*num; i++){
        let divGrids = document.createElement('div')
        divEl.appendChild(divGrids)
        divGrids.setAttribute('class', 'grids')
        divGrids.textContent='.'
        divGrids.addEventListener('mouseenter',()=>{
            divGrids.classList.add('sketch')
        })
        function clear(){
            divGrids.classList.remove('sketch')
        }
        clearBtn.addEventListener('click', ()=>{
            clear()
        })

    }
    
    divEl.setAttribute('style', 'width:'+(num*pixels)+'; border:solid 1px black; display:grid; grid-template-columns: repeat('+num+','+pixels+'px); grid-template-rows: repeat('+num+','+pixels+'px);')
}
startOverBtn.addEventListener('click', ()=>{ 
    start()  
})
const start = ()=>{
    number=prompt('no. of squares', 20)
    pixels = prompt('pixel size', 10)
    sketchGrid(number, pixels)
}
start()


