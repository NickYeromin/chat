const chat = document.querySelector('.chat')
const userName = document.querySelector('#username')
const textMessage = document.querySelector('#textmessage')
const btnSend = document.querySelector('#btnsend')

function newMessage(username,textmessage){
    
    const message = document.createElement('div')
    const user = document.createElement('span')
    const date = document.createElement('span')
    const msg = document.createElement('span')

    message.classList.add('message')
    user.classList.add('user')
    date.classList.add('date')
    msg.classList.add('msg')

    user.innerHTML = username
    date.innerHTML = `${new Date().getHours()}:${new Date().getMinutes()}`
    msg.innerHTML = textmessage

    chat.appendChild(message)
    message.appendChild(user) 
    user.appendChild(date)
    message.appendChild(msg) 


}
function RandomUserName(){
    return `User${Math.round(Math.random()*99999)}`
}

btnSend.addEventListener('click', () => {
    if(userName.value === "" || textMessage.value === ""){
        if(userName.value === ""){
        userName.value = RandomUserName()
    }
    if(textMessage.value === ""){
        alert('Please, enter your message')
    }
    }else{
        newMessage(userName.value,textMessage.value)
    }
})

