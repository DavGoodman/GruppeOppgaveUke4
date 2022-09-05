//Model
let inputs = ["hey", "what's up?", "how are you?", "i'm good", "how's the weather?", "what's your name?"]
let svar = ["hello", "Nothing much", "Im doing fine thanks", "Fuck you", "It's pouring", "My name is Dani2000"]
let answer = ""
let inputVal = ""
let chatterChat = ""

//view
updateView();
function updateView() {
    document.querySelector('.container').innerHTML = /*HTML*/`
        
        <h2 class="contact">Mike</h2>
        <div class="chatterBox">
        ${chatterChat}
        </div>
        <div class="user-inputs">
        <textarea class="msg" oninput="inputVal = this.value" rows="20" cols="50"></textarea>
        <button onclick="answerFunc()" class="send">send</button>
        </div>
    `;
}


//controller
function answerFunc() {
    let svarInd = inputs.indexOf(inputVal.toLowerCase()) // -1
    if (svarInd == -1) {answer = "i dont understand"}
    else {answer = svar[svarInd]}
    chatterChat += `
    <div class="text-user">
    <div class="inner-text-user">${inputVal}</div>
    <img class="user-img" src="https://www.denofgeek.com/wp-content/uploads/2013/07/288895.jpg?fit=636%2C488" alt="walt">
    </div>`
    updateView()
    setTimeout(botAnswer, 3000)
}


function botAnswer(){
    chatterChat += `
    <div class="text-bot">
    <img class="bot-img" src="https://upload.wikimedia.org/wikipedia/en/e/ea/Mike_Ehrmantraut_BCS_S3.png" alt="mike">
    <div class="inner-text-bot">${answer}</div>
    </div>`
    updateView()
}
// $(document).scroll(function () {
//     localStorage['page'] = document.URL;
//     localStorage['scrollTop'] = $(document).scrollTop();
//   });
    