let randomNumbers=[]
const Tombola=function() {
   
    const table = document.createElement('table')
    let row = document.createElement('tr')

    for (let i = 0; i< 76; i++) {
        const cell = document.createElement('td')
        cell.textContent = i +1
        row.appendChild(cell)
        
        if ((i+1)% 12 === 0 || i=== 75) {
            table.appendChild(row)
            row = document.createElement('tr')
        }
    }

    document.getElementById('container').appendChild(table)
    
}

Tombola()
const button =document.getElementById('gira')
button.addEventListener('click', function(){
const n = Math.floor(Math.random()*77)
document.getElementById('number').innerText=n
const cells=document.querySelectorAll('td')
for (let i=0;i<cells.length;i++){
    if(parseInt(cells[i].innerText)===n){
        cells[i].classList.add('colore')
    break}}

    })
