let content = document.querySelector('.js-generated.content')
let header = document.createElement('h1')

header.setAttribute('class', 'dog-name')
header.append('Rizzo')

let mainDiv = document.createElement('div')
mainDiv.setAttribute('class', 'dog-content')

let rizzoImg = document.createElement('img')
rizzoImg.setAttribute("class", "dog-image")
rizzoImg.setAttribute("src", "./assets/rizzo.jpg")

console.log('RizzoImg')
console.log(rizzoImg)

let detailsDiv = document.createElement('div')
detailsDiv.setAttribute('class', 'dog-details')

let description = document.createElement('h3')
description.innerHTML = 'Description:'

detailsDiv.append(description)

let p1 = document.createElement('p')
p1.innerHTML = 'This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.'

detailsDiv.append(p1)

let h3 = document.createElement('h3')

h3.innerHTML = 'Feeding Times:'

detailsDiv.append(h3)

let feedingTimesList = document.createElement('ul')

for( let i = 0; i < 3; i++ ){
    let listItem = document.createElement('li')
    if ( i == 0 )
    listItem.append('9:00 am')
    else if ( i == 1 )
    listItem.append('12:00 pm')
    else if ( i == 2 )
    listItem.append('5:00 pm')
    feedingTimesList.append(listItem)
}

detailsDiv.append(feedingTimesList)

mainDiv.append(rizzoImg)
mainDiv.append(detailsDiv)

content.append(header)
content.append(mainDiv)
