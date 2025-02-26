// Name Entry Validation
function submitName() {
    var name = document.getElementById("nameInput").value.trim();

    // If name is NOT Lina, ask to be honest
    if (name.toLowerCase() !== "lina") {
        alert("🤨 Be honest! Enter your REAL name.");
        return;
    }

    // Store the name and move to the next page
    localStorage.setItem("userName", name);
    window.location.href = "sec.html";
}

// Set Name and Handle Video
document.addEventListener("DOMContentLoaded", function() {
    var userName = localStorage.getItem("userName");
    if (userName) {
        document.getElementById("userName").textContent = userName;
        document.getElementById("userButton").textContent = userName;
    }

    var video = document.getElementById("introVideo");
    video.onended = function() {
        document.getElementById("question").classList.remove("hidden");
    };
});

// Move "Your Name" Button on Hover
document.getElementById("userButton").addEventListener("mouseover", function() {
    var button = this;
    var container = document.querySelector(".button-container");

    var newX = Math.random() * (container.offsetWidth - button.offsetWidth);
    var newY = Math.random() * (container.offsetHeight - button.offsetHeight);

    button.style.transform = `translate(${newX}px, ${newY}px) rotate(${Math.random() * 360}deg)`;
    button.style.transition = "transform 0.3s ease-in-out";
});

// Play Video on Button Click
document.getElementById("playVideoButton").addEventListener("click", function() {
    var video = document.getElementById("introVideo");
    video.muted = false;
    video.play();
    this.style.display = "none"; // Hide button after click
});

// Ahmad Button Triggers Fun Effects
document.getElementById("ahmadButton").addEventListener("click", function() {
    var catImage = document.getElementById("laughingCat");
    var catSound = document.getElementById("catSound");

    catImage.classList.remove("hidden");
    catSound.play();

    // Confetti Explosion
    confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 }
    });

    // Screen Shake
    document.body.classList.add("shake");
    setTimeout(() => document.body.classList.remove("shake"), 500);

    // Background Color Flashing
    let colors = ["#ff0000", "#00ff00", "#0000ff", "#ff00ff"];
    let i = 0;
    let interval = setInterval(() => {
        document.body.style.backgroundColor = colors[i % colors.length];
        i++;
        if (i > 20) clearInterval(interval);
    }, 200);
});
document.getElementById("ahmadButton").addEventListener("click", function() {
    let catSound = document.getElementById("catSound");
    catSound.volume = 1.0;  // Ensure full volume
    catSound.currentTime = 0;  // Restart sound each click
    catSound.play().catch(error => console.error("Audio play blocked:", error));
});
function triggerFireworks() {
    let fireworksContainer = document.createElement("div");
    fireworksContainer.classList.add("fireworks-container");
    document.body.appendChild(fireworksContainer);

    for (let i = 0; i < 15; i++) {  // More fireworks!
        setTimeout(() => {
            let firework = document.createElement("div");
            firework.classList.add("firework");
            firework.style.left = `${Math.random() * 100}%`;
            firework.style.top = `${Math.random() * 60 + 20}%`;
            firework.style.backgroundColor = getRandomColor();
            fireworksContainer.appendChild(firework);

            setTimeout(() => firework.remove(), 1500);
        }, i * 200);
    }

    setTimeout(() => fireworksContainer.remove(), 5000);
}

function getRandomColor() {
    let colors = ["#ff0000", "#00ff00", "#0000ff", "#ffcc00", "#ff33cc"];
    return colors[Math.floor(Math.random() * colors.length)];
}
function shakeScreen() {
    document.body.classList.add("shake");
    setTimeout(() => document.body.classList.remove("shake"), 500);
}
function playCatSound() {
    let catSound = document.getElementById("catSound");
    catSound.volume = 1.0;
    catSound.currentTime = 0;
    catSound.play().catch(error => console.error("Audio play blocked:", error));
}
document.getElementById("ahmadButton").addEventListener("click", function() {
    shakeScreen();   // Screen Shake Effect 🔥
    triggerFireworks();  // Explosive Fireworks 🎆
    playCatSound();  // Laughing Cat Sound 🐱😂

    // Background Flashing
    let colors = ["#ff0000", "#00ff00", "#0000ff", "#ffcc00"];
    let i = 0;
    let interval = setInterval(() => {
        document.body.style.backgroundColor = colors[i % colors.length];
        i++;
        if (i > 20) clearInterval(interval);
    }, 150);
});
