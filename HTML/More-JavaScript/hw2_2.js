/**
 * This file is the file foe moudule 1 build.
 *
 * @author Yingjie Shen
 */
function loadCards() {
    fetch('http://mysqlcs639.cs.wisc.edu:5000/cards')
        .then(response => response.json())
        .then(data => {
            const styles = ["bg-success", "bg-danger", "bg-warning", "bg-primary"]
            for (let i = 0; i < data.cards.length; i++) {
                //Create a card
                let newCard = document.createElement("div");
                let style = "card text-white " + styles[i] + " mb-3";
                newCard.setAttribute("class", style);
                newCard.setAttribute("style", "max-width: 18rem;");

                //Create card title in card header
                let newCardHeader = document.createElement("div");
                newCardHeader.setAttribute("class", "card-header");

                let newCardTitle = document.createElement("div");
                newCardTitle.setAttribute("class", "card-title");
                newCardTitle.setAttribute("class", "font-weight-bold");
                newCardTitle.setAttribute("style", "font-family: Monaco");
                newCardTitle.innerText = "" + data.cards[i].title; //Set title text

                newCardHeader.appendChild(newCardTitle);
                newCard.appendChild(newCardHeader);

                //Create card body: list
                let newBody = document.createElement("div");
                newBody.setAttribute("style", "padding: 10px");
                for (let j = 0; j < data.cards[i].body.length; j++) {
                    let newLi = document.createElement("div");
                    newLi.setAttribute("style", "font-family: Monaco");
                    newLi.innerText = "" + data.cards[i].body[j];

                    newBody.append(newLi);
                }
                newCard.appendChild(newBody);

                //Add the card to the cards row
                document.getElementById("cards").appendChild(newCard);
            }
        })
        .catch(error => console.error(error))
}


function getData() {
    return (
        [{
                title: 'Todo',
                body: ['Go shopping', 'Get oil change', 'Buy gift']
            },
            {
                title: 'Places to visit',
                body: ['Greece', 'Venice', 'Turkey', 'Puerto Rico']
            }
        ]
    )
}