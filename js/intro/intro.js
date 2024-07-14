const sobreMim = document.getElementById("aboutme-text");

function toggleDisplay(sectionId) {
    var habilidades = document.querySelector(".abilities");
    var pCText = document.getElementById("p-c-text");

    if (sectionId === "act1") {
        if (sobreMim.style.display === "none") {
            sobreMim.style.display = "block";
            sobreMim.style.alignItems = "center";
            sobreMim.style.justifyContent = "center";
            pCText.style.display = "none"
            habilidades.style.display = "none";
        } else {
            sobreMim.style.display = "none";
            habilidades.style.display = "block";
        }
    } else if (sectionId === "p-c") {
        if (pCText.style.display === "none") {
            pCText.style.display = "block";
            pCText.style.alignItems = "center";
            pCText.style.justifyContent = "center";
            habilidades.style.display = "none";
            sobreMim.style.display = "none";
        } else {
            pCText.style.display = "none";
            habilidades.style.display = "block";
        }
    }
}

document.getElementById("act1").onclick = function() {
    toggleDisplay("act1");
};

document.getElementById("p-c").onclick = function() {
    toggleDisplay("p-c");
};

function toggleEmail() {
    var textContainer = document.getElementById("aboutme-text");
    var email = textContainer.querySelector('.bx.bxs-envelope');
    var emailSpan = document.createElement("span");
    emailSpan.textContent = "victorhugosoaresferreira6@gmail.com";
    textContainer.replaceChild(emailSpan, email);
    emailSpan.style.paddingTop = "32px"
}

function togglePhone() {
    var textContainer = document.getElementById("aboutme-text");
    var phone = textContainer.querySelector('.bx.bxs-phone');
    var phoneSpan = document.createElement("span");
    phoneSpan.textContent = "+55 (11) 97032-1202";
    textContainer.replaceChild(phoneSpan, phone);
}

document.getElementById("html-logo").onclick = function() {
    showDialog("html");
};

document.getElementById("css-logo").onclick = function() {
    showDialog("css");
};

document.getElementById("js-logo").onclick = function() {
    showDialog("js");
};

function showDialog(languages) {
    var overlay = document.createElement("div");
    overlay.className = "dialog-overlay";
    overlay.id = "dialog-overlay";
    document.body.appendChild(overlay);

    var dialogBox = document.createElement("div");
    dialogBox.className = "dialog-box";
    dialogBox.id = "dialog-box";

    var dialogText = document.createElement("p");
    dialogText.textContent = "Deseja ver o código-fonte?";
    dialogBox.appendChild(dialogText);

    var buttonsDiv = document.createElement("div");
    buttonsDiv.className = "dialog-buttons";

    var yesButton = document.createElement("button");
    yesButton.className = "dialog-button";
    yesButton.textContent = "Sim";
    if (languages === "html") {
    yesButton.onclick = function() {
        window.open('html/html.html', '_blank');
        closeDialog();
    }
    } else if (languages === "css") {
        yesButton.onclick = function() {
        window.open('css/css.html', '_blank');
        closeDialog();
        }
    } else if (languages === "js") {
        yesButton.onclick = function() {
        window.open('js/js.html', '_blank');
        closeDialog();
        }
    };

    var noButton = document.createElement("button");
    noButton.className = "dialog-button";
    noButton.textContent = "Não";
    noButton.onclick = function() {
        closeDialog();
    };

    buttonsDiv.appendChild(yesButton);
    buttonsDiv.appendChild(noButton);

    dialogBox.appendChild(buttonsDiv);

    document.body.appendChild(dialogBox);

    overlay.style.display = "block";
    dialogBox.style.display = "block";
}

function closeDialog() {
    var dialogBox = document.getElementById("dialog-box");
    var overlay = document.getElementById("dialog-overlay");

    if (dialogBox) {
        document.body.removeChild(dialogBox);
    }
    if (overlay) {
        document.body.removeChild(overlay);
    }
}