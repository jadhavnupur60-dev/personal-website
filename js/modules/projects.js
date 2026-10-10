export function loadProjects() {
    const projects = [
        { 
            title: "Project One", 
            description: "A responsive web app built with vanilla JavaScript.", 
            image: "assets/images/project1.jpg" 
        },
        { 
            title: "Project Two", 
            description: "An accessible dashboard styled with modular CSS.", 
            image: "assets/images/project2.jpg" 
        }
    ];

    const grid = document.getElementById('projects-grid');
    grid.innerHTML = projects.map(p => `
        <div class="card">
            <img src="${p.image}" alt="${p.title}" class="card-img">
            <h3>${p.title}</h3>
            <p>${p.description}</p>
        </div>
    `).join('');
}