const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

const search = document.querySelector('#search')
const reset = document.querySelector('#reset')

author.innerHTML = '630610731 Tewarad Somrad'

let status = true
let count = 0

btn_toggle.onclick = () => {
    if (status) {
        btn_toggle.innerHTML = 'Show Author'
        author.innerHTML = 630610731 + count
        status = false
    }else {
        btn_toggle.innerHTML = 'Show Calculation'
        author.innerHTML = '630610731 Tewarad Somrad'
        status = true
    }
}

const paraG = document.querySelector('#text')
const alltext = paraG.innerText
let word = [] 

search.onclick = () => {
    count = 0
    const leng = document.querySelector('#length').value
    paraG.innerHTML = ''
    for (let i=0;i<alltext.length;i++) {
        word.push(alltext[i])
        if (alltext[i] === ' ' || i === alltext.length-1) {
            if (word.length > leng) {
                const span = document.createElement('span')
                for (let j=0;j<word.length-1;j++) {
                    span.append(word[j])
                }
                word = []
                count++
                span.style.color = document.querySelector('#color').value
                paraG.append(span)
                paraG.append(' ')
            }
            else {
              for (let j=0;j<word.length;j++) {
                  paraG.append(word[j])
              }
              word = []
            }
        }
    }
}

reset.onclick = () => {
    count = 0
    btn_toggle.innerHTML = 'Show Calculation'
    author.innerHTML = '630610731 Tewarad Somrad'
    status = true
    document.querySelector('#length').value = 5
    document.querySelector('#color').value = "#FF0000"
    paraG.innerHTML = ''
    paraG.append(alltext)
}
