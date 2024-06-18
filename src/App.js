const root = document.getElementById('root')
const img = document.createElement('img')
img.src = 'person.jpg' 
const res = root.appendChild(img)
res.style.width = '400px'
document.body.appendChild(res)


const description = document.createElement('p')
description.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, molestias ad tenetur labore cum, molestiae hic rem, inventore earum quam facere adipisci quaerat error. Consequatur voluptate quo esse repellat ea.'
description.style.width = '300px'
document.body.appendChild(description)
