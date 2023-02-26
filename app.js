const chat = document.querySelector('.chat')
const userName = document.querySelector('#username')
const textMessage = document.querySelector('#textmessage')
const btnSend = document.querySelector('#btnsend')

function NewMessage(username,textmessage){
    
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
    const listUser = ['Henry','Ann','Borys']
    const listMsg = ['I love Ukraine','I want a live in Ukraine','Dobrij den everybody!']
    const msgList = [listUser,listMsg]

function DataBase(userName,textMessage){ // takes message in local database
    return msgList.push[listUser.push(userName),listMsg.push(textMessage)]
}
function UpdateMsgScreen(){ // deletes all msg update screen chat
    const msgElements = document.querySelectorAll('.message')
    for (const msg of msgElements) { // remove all msg
        msg.remove() 
    }

    for(i = 0; i < listUser.length; i++){// add new msg
        NewMessage(listUser[i],listMsg[i])
    }
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
        DataBase(userName.value,textMessage.value)
        UpdateMsgScreen()
    }
})