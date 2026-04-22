document.addEventListener("DOMContentLoaded", () => {
    
    
    if (!sessionStorage.getItem("visto")) {
        alert("¡Welcome to my portfolio, Juan Camilo Gale!");
        sessionStorage.setItem("visto", "true");
    }

    
    const btn = document.getElementById("btn-change-about");
    const p = document.getElementById("about-text");

if (btn && p) {
    btn.addEventListener("click", () => {
        if (btn.textContent.includes("Professional")) {
            p.textContent = "As a future Systems Engineer at university, I focus on software development at riwi where I am taught that the code must be scalable and efficient, applying discipline and teamwork.";
            btn.textContent = "View Personal Profile";
            btn.style.backgroundColor = "#10b981"; 
        } else {
            p.textContent = "Hello, my name is Juan Camilo Gale. I am curious, I played basketball in Bogotá and Barranquilla and I study Systems Engineering at UniSimón.";
            btn.textContent = "View Professional Profile";
            btn.style.backgroundColor = "#2563eb";
        }
    });
}

    
    const cards = document.querySelectorAll(".dog-card");
    const info = document.getElementById("pet-info-box");
    const title = document.getElementById("dog-title");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            const nombre = card.querySelector("img").getAttribute("data-name");
            if (title) title.textContent = nombre;
            if (info) info.style.display = "block"; 
        });
    });
});