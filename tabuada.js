function tabuada(){
    let nTxt = document.getElementById('nTxt')
    let tab = document.getElementById('tab')
    if(nTxt.value.length == 0){
        window.alert("É necessário digitar um número para gerar a tabuada!")
    }else{
        let num = Number(nTxt.value)
        tab.innerHTML = ''
        for(let i = 1; i <= 10; i++){
            let total = num * i
            let item = document.createElement('option')
            item.value = `tab${i}`
            tab.appendChild(item)
            item.text = `${num} X ${i} = ${total}`       
                       
        }
    }
}