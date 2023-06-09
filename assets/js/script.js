document.addEventListener('DOMContentLoaded', initPortfolio);
function initPortfolio() {
    const projects = getProjects();
    const portfolioDiv = document.getElementById('portfolio');
    portfolioDiv.innerHTML = createProjectCardsHTML(projects);
}
function getProjects() {
    return [
        {
            title: 'Community Museum',
            description: 'Purpose of this page is to give kids and junior youth an easy and joyful webpage with information about the Community Science Museum',
            img: '/assets/image/Museum.png',
            link: 'https://github.com/RamtinMoshtagh/CommunityMuseum',
            website: 'https://communitymuseum2022.netlify.app'
        },
        {
            title: 'FoodMood',
            description: 'Purpose of this page is for you to search and find delicious food recipes!',
            img: '/assets/image/FoodMood.png',
            link: 'https://github.com/RamtinMoshtagh/FoodMood',
            website: 'https://foodmoodie.netlify.app'
        },
        {
            title: 'GameHub',
            description: 'Purpose if this page is to sell and buy used and new games accounts. You have probably used many hours on a game and come very far with loads of achievements. Now you can sell the account with all those achievements. Name your price!',
            img: '/assets/image/gamehub.png',
            link: 'https://github.com/RamtinMoshtagh/Gamehub',
            website: 'https://game-universe.netlify.app'
        }
    ];
}
function createProjectCardsHTML(projects) {
    return projects.map(createProjectCardHTML).join("");
}
function createProjectCardHTML({ title, description, img, link, website }) {
    return `
        <div class="card">
            <img src="${img}" class="card-img-top" alt="${title}">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${description}</p>
                <a href="${link}" class="btn btn-primary" target="_blank">GitHub Repo</a>
                <a href="${website}" class="btn btn-secondary" target="_blank">Visit Site</a>
            </div>
        </div>
    `;
}