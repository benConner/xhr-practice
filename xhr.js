var msgRequest = new XMLHttpRequest();


function loadMsg(e){
    var data = JSON.parse(e.target.responseText)
    console.log(data)
    console.log(data.message[0].sender)
    console.log(data.message[2])
    console.log(data.message[1].date)
    console.log(data.message[2].content.split(" ")[1])

    var slackContent= "";

    for (var i = 0; i < data.message.length; i++) {
        slackContent +=`<div>
                            <date>${data.message[i].date}</date>
                            <h3>${data.message[i].sender}</h3>
                            <p>${data.message[i].content}</p>
                        </div>`
    }
    document.getElementById("slack").innerHTML = slackContent
}


msgRequest.addEventListener("load", loadMsg)

msgRequest.open('GET', 'messages.json')
msgRequest.send()
