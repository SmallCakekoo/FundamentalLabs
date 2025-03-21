
const inputUser1 = document.querySelector('.inputuser1 input');
const inputUser2 = document.querySelector('.inputuser2 input');
const buttonUser1 = document.querySelector('.inputuserbtn1');
const buttonUser2 = document.querySelector('.inputuserbtn2');
const messagesContainer = document.querySelector('.messages');

function addMessage(content, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    
    if (sender === 'user1') {
        messageDiv.classList.add('sendme');
    }

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content');
    
    if (sender === 'user1') {
        contentDiv.classList.add('sendme');
    } else {
        contentDiv.classList.add('sent'); 
    }

    
    const textP = document.createElement('p');
    textP.textContent = content;

    
    contentDiv.appendChild(textP);
    messageDiv.appendChild(contentDiv);
    
    
    const img = document.createElement('img');
    if (sender === 'user1') {
        img.src = 'img/profile.jpeg';
    } else {
        img.src = 'img/profile4.jpeg';
    }
    img.width = 40;
    img.height = 40;
    img.classList.add('profile-pic');
    
    if (sender === 'user1') {
        messageDiv.appendChild(img); 
    } else {
        messageDiv.insertBefore(img, contentDiv); 
    }

    messagesContainer.prepend(messageDiv); 

    
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}
function sendMessage(event, sender) {
    event.preventDefault(); 
    const input = event.target.querySelector('input'); 
    const message = input.value;

    if (message.trim() !== '') {
        addMessage(message, sender); 
        input.value = ''; 
    }
}
