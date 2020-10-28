function printError(element,msg) {
    document.getElementById(element).innerHTML = msg;
}

function validateForm() {
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var message = document.getElementById("message").value;

    var emailErr = mobileErr = messageErr = true;


    console.log(email,mobile,message)

    var emailRegex = /^\S+@\S+\.\S+$/;
    if (email == "" || emailRegex.test(email) == false) {
        printError("emailErr", "Email cannot be empty and must be valid")
    } else {
        emailErr = false;
    }

    var mobileRegex = /^\d+$/;
    if (mobile == "" || mobileRegex.test(mobile) == false) {
        printError("mobileErr", "Number cannot be empty and must be valid")
    } else {
        mobileErr = false;
    }

    if (message == "") {
        printError("messageErr", "Message field cannot be empty")
    } else {
        messageErr = false;
    }
    
    if (emailErr || mobileErr || messageErr == true) {
        return false;
    } else {
        printError("emailErr", "")
        printError("mobileErr", "")
        printError("messageErr", "")
        alert('Form submitted!')
    }

}

function createAlbum() {
    var description = document.getElementById("description").value
    var text = document.createTextNode(description)

    var newAlbum = document.createElement('div')
    newAlbum.setAttribute("class","col-md-4")

    var newCard = document.createElement('div')
    newCard.setAttribute("class","card mb-4 shadow-sm")

    var newImg = document.createElement('img')
    newImg.setAttribute("width","100%")
    newImg.setAttribute("height","225")
    newImg.setAttribute("src","#")

    var cardBody = document.createElement('div')
    cardBody.setAttribute("class","card-body")

    var newDescription = document.createElement('p')
    newDescription.setAttribute("class","card-text")
    newDescription.appendChild(text)

    cardBody.appendChild(newDescription)

    newCard.appendChild(newImg)
    newCard.appendChild(cardBody)

    newAlbum.appendChild(newCard)

    document.getElementById("albums").appendChild(newAlbum)
    document.getElementById("description").value = ''

    return true;
}