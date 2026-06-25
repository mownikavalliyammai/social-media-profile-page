// Select elements
const followBtn = document.getElementById("followBtn");
const editBtn = document.getElementById("editBtn");
const profileName = document.getElementById("profileName");
const profileUsername = document.getElementById("profileUsername");
const profileBio = document.getElementById("profileBio");
const followersCount = document.getElementById("followersCount");

// Load saved data when page opens
window.onload = function () {
    const savedName = localStorage.getItem("name");
    const savedUsername = localStorage.getItem("username");
    const savedBio = localStorage.getItem("bio");

    if (savedName) {
        profileName.innerText = savedName;
    }

    if (savedUsername) {
        profileUsername.innerText = savedUsername;
    }

    if (savedBio) {
        profileBio.innerText = savedBio;
    }
};

// Follow button functionality + followers count change
followBtn.addEventListener("click", function () {
    let count = parseInt(followersCount.innerText);

    if (followBtn.innerText === "Follow") {
        followBtn.innerText = "Following";
        followBtn.style.backgroundColor = "green";
        followersCount.innerText = count + 1;
    } else {
        followBtn.innerText = "Follow";
        followBtn.style.backgroundColor = "#00bfff";
        followersCount.innerText = count - 1;
    }
});

// Edit profile functionality + save in localStorage
editBtn.addEventListener("click", function () {
    const newName = prompt("Enter your name:");
    const newUsername = prompt("Enter your username:");
    const newBio = prompt("Enter your bio:");

    if (newName) {
        profileName.innerText = newName;
        localStorage.setItem("name", newName);
    }

    if (newUsername) {
        const formattedUsername = "@" + newUsername;
        profileUsername.innerText = formattedUsername;
        localStorage.setItem("username", formattedUsername);
    }

    if (newBio) {
        profileBio.innerText = newBio;
        localStorage.setItem("bio", newBio);
    }
});