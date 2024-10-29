function getResponse() {
    var userText = document.getElementById('userInput').value.toLowerCase();
    const chatContainer = document.getElementById("chatContainer");

    let newChatBox = document.createElement('div');
    newChatBox.classList.add('chatbox-2');  

    let botDiv = document.createElement('div');
    botDiv.classList.add('bot-2');

    let botMsg = document.createElement('p');
    botMsg.classList.add('botMsg');

    botDiv.appendChild(botMsg);
    newChatBox.appendChild(botDiv);
    chatContainer.appendChild(newChatBox);


    // Questions for bot responses
    if (userText.includes('hours')) {
        botMsg.innerHTML = "Our store hours are 9 AM to 6 PM.";
    } else if (userText.includes('payment')) {
        botMsg.innerHTML = "We accept credit cards, PayPal, and major payment gateways like Stripe.";
    } else if (userText.includes('track')) {
        botMsg.innerHTML = "You can track your order through the shipping confirmation email we sent.";
    } else if (userText.includes('return')) {
        botMsg.innerHTML = "You can return any item within 30 days of purchase, as long as it's in its original condition.";
    } else if (userText.includes('shipping')) {
        botMsg.innerHTML = "We offer standard and express shipping. it takes 1-3 business days.";
    } else if (userText.includes('order')) {
        botMsg.innerHTML = "To Check Your order status write Track!";
    } else {
        botMsg.innerHTML = "Sorry, I didn't understand that.";
    }

    chatContainer.scrollTop = chatContainer.scrollHeight;
    document.getElementById('userInput').value = "";
}
