class Agent {
    constructor(name, image, description, roleDisplayName, abilitiesDisplay) {
        this.name = name; // Nombre del agente
        this.image = image; // Imagen del agente
        this.description = description; // Descripción del agente
        this.roleDisplayName = roleDisplayName; // Nombre del rol del agente
        this.abilitiesDisplay = abilitiesDisplay; // Habilidades del agente
    }
    
    // La card que se verá en la web
    htmlCard() {
        return `
        <div class="agent-card">
            <img src="${this.image}" alt="${this.name}" class="agent-image">
            <div class="agent-info">
                <h2 class="agent-name">${this.name}</h2>
                <p class="agent-role">${this.roleDisplayName}</p>
                <p class="agent-desc">${this.description}</p>
                <h3>Habilidades:</h3>
                <ul class="abilities-list">
                    ${this.abilitiesDisplay.map(ability => `<li>${ability}</li>`).join('')}
                </ul>
            </div>
        </div>
        `;
    }
    
    
}

let agents = [];


async function getAgents() {
    const response = await fetch('https://valorant-api.com/v1/agents');
    const json = await response.json();
    const data = json["data"];
    const addedNames = new Set(); // Conjunto para rastrear nombres ya añadidos

    for (let agentJson of data) {
        const roleDisplayName = agentJson.role ? agentJson.role.displayName : null;
        const abilitiesDisplay = agentJson.abilities 
            ? agentJson.abilities.map(ability => ability.displayName) 
            : [];

        // Solo añadir agentes con rol conocido y nombre no duplicado, esto es porque había un Sova repetido
        if (roleDisplayName && roleDisplayName !== "Unknown Role" && !addedNames.has(agentJson.displayName)) {
            const agent = new Agent(
                agentJson.displayName,
                agentJson.displayIcon,
                agentJson.description,
                roleDisplayName,
                abilitiesDisplay
            );
            agents.push(agent);
            addedNames.add(agentJson.displayName); // Añadir nombre al conjunto
        }
    }
    renderAgents();
}

getAgents();

function renderAgents() {
    const container = document.getElementById("agents-container");
    container.innerHTML = ""; // Limpiar el contenedor antes de renderizar

    for (let agent of agents) {
        container.innerHTML += agent.htmlCard();
    }
}

function filterAgents(event) {
    const searchTerm = event.target.value.toLowerCase();

    if (searchTerm === "") {
        renderAgents();
    } else {
        const filteredAgents = agents.filter(agent => {
            return agent.name.toLowerCase().includes(searchTerm);
        });
        renderFilter(filteredAgents);
    }
}

function renderFilter(filteredAgents) {
    const container = document.getElementById("agents-container");
    container.innerHTML = ""; // Limpiar el contenedor antes de renderizar filtros

    for (let agent of filteredAgents) {
        container.innerHTML += agent.htmlCard();
    }
}

// Escuchar cambios en la barra de búsqueda
document.getElementById('search').addEventListener('input', filterAgents);
