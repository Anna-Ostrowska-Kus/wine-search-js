let search = document.querySelector('.search')
const wineList = document.querySelectorAll('ul li')
const sorry = document.querySelector('.sorry')
let flag

const checkList =()=>{
    flag = 0
    for(const li of wineList){
    if(!(li.textContent.toUpperCase().includes(search.value.toUpperCase()))){
        li.style.display='none'
        
        
    }else{
        li.style.display='flex'
        flag+=1
        
    } 
    
    if(flag!==0){
        sorry.style.display = "none"
    }else{
        sorry.style.display = 'flex'
    }
}
}





search.addEventListener('input', checkList)







