const projects = [
    {
        title: 'Community Museum',
        description: 'Purpose of this page is to give kids and junior youth an easy and joyful webpage with information about the Community Science Museum',
        img: '/assets/image/Museum.png',
        link: 'https://github.com/RamtinMoshtagh/CommunityMuseum'
    },
    {
        title: 'FoodMood',
        description: 'Purpose of this page is for you to search and find delicious food recipes!',
        img: '/assets/image/FoodMood.png',
        link: 'https://github.com/RamtinMoshtagh/FoodMood'
    },
    {
        title: 'GameHub',
        description: 'Purpose if this page is to sell and buy used and new games accounts. You have probably used many hours on a game and come very far with loads of achievements. Now you can sell the account with all those achievements. Name your price!',
        img: '/assets/image/gamehub.png',
        link: 'https://github.com/RamtinMoshtagh/Gamehub'
    }
];

const portfolioDiv = document.getElementById('portfolio');

projects.forEach(project => {
    const projectHtml = `
        <div class="card">
            <img src="${project.img}" class="card-img-top" alt="${project.title}">
            <div class="card-body">
                <h5 class="card-title">${project.title}</h5>
                <p class="card-text">${project.description}</p>
                <a href="${project.link}" class="btn btn-primary" target="_blank">GitHub Repo</a>
            </div>
        </div>
    `;
    portfolioDiv.innerHTML += projectHtml;
});

