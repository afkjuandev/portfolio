const GITHUB_USER = 'afkjuandev';
const projectsContainer = document.getElementById('github-projects');
const techGrid = document.getElementById('tech-grid');

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('hidden') === false;
    menuToggle.setAttribute('aria-expanded', isOpen);
    menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');

    const spans = menuToggle.querySelectorAll('span');
    if (isOpen) {
        spans[0].style.transform = 'translateY(8px) rotate(45deg)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'translateY(-8px) rotate(-45deg)';
    } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
    }
});

mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Abrir menu');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '';
        spans[2].style.transform = '';
    });
});

const techCategories = [
    {
        title: 'Frontend',
        icon: 'fa-solid fa-palette',
        techs: [
            { name: 'HTML5', icon: 'fa-brands fa-html5', color: '#e34c26' },
            { name: 'CSS3', icon: 'fa-brands fa-css3-alt', color: '#1572b6' },
            { name: 'JavaScript', icon: 'fa-brands fa-js', color: '#f7df1e' },
            { name: 'TypeScript', icon: 'fa-solid fa-code', color: '#3178c6' },
            { name: 'React', icon: 'fa-brands fa-react', color: '#61dafb' },
            { name: 'Next.js', icon: 'fa-solid fa-n', color: '#000000' },
            { name: 'Tailwind CSS', icon: 'fa-brands fa-css3-alt', color: '#06b6d4' },
        ],
    },
    {
        title: 'Backend',
        icon: 'fa-solid fa-server',
        techs: [
            { name: 'Node.js', icon: 'fa-brands fa-node-js', color: '#339933' },
            { name: 'Express', icon: 'fa-solid fa-bolt', color: '#000000' },
            { name: 'JWT', icon: 'fa-solid fa-key', color: '#d63aff' },
            { name: 'Zod', icon: 'fa-solid fa-shield-halved', color: '#3068b7' },
            { name: 'Prisma', icon: 'fa-solid fa-diamond', color: '#2d3748' },
        ],
    },
    {
        title: 'Banco de Dados',
        icon: 'fa-solid fa-database',
        techs: [
            { name: 'PostgreSQL', icon: 'fa-solid fa-elephant', color: '#336791' },
            { name: 'MySQL', icon: 'fa-solid fa-database', color: '#4479a1' },
            { name: 'SQLite', icon: 'fa-solid fa-cube', color: '#003b57' },
        ],
    },
    {
        title: 'Ferramentas',
        icon: 'fa-solid fa-wrench',
        techs: [
            { name: 'Git', icon: 'fa-brands fa-git-alt', color: '#f05032' },
            { name: 'GitHub', icon: 'fa-brands fa-github', color: '#181717' },
            { name: 'Docker', icon: 'fa-brands fa-docker', color: '#2496ed' },
            { name: 'Figma', icon: 'fa-brands fa-figma', color: '#a259ff' },
            { name: 'Insomnia', icon: 'fa-solid fa-moon', color: '#4000bf' },
            { name: 'Vite', icon: 'fa-solid fa-bolt', color: '#646cff' },
            { name: 'Webpack', icon: 'fa-solid fa-cubes', color: '#8dd6f9' },
            { name: 'npm', icon: 'fa-brands fa-npm', color: '#cb3837' },
        ],
    },
];

function renderTechnologies() {
    techGrid.innerHTML = techCategories.map(category => `
        <div>
            <div class="flex items-center gap-2 mb-4">
                <i class="${category.icon} text-sky-500" aria-hidden="true"></i>
                <h3 class="text-base sm:text-lg font-bold text-slate-700 uppercase tracking-wider">${category.title}</h3>
            </div>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                ${category.techs.map(tech => `
                    <div class="group flex flex-col items-center gap-2 sm:gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5
                        transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-sky-300 hover:bg-white cursor-default">
                        <i class="${tech.icon} text-2xl sm:text-3xl transition-transform duration-300 group-hover:scale-110"
                           style="color: ${tech.color}" aria-hidden="true"></i>
                        <span class="text-xs sm:text-sm font-medium text-slate-700 group-hover:text-sky-600 transition-colors text-center">
                            ${tech.name}
                        </span>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

const languageColors = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    Python: '#3572A5',
    Java: '#b07219',
    HTML: '#e34c26',
    CSS: '#563d7c',
    'C++': '#f34b7d',
    C: '#555555',
    Go: '#00ADD8',
    Rust: '#dea584',
    Ruby: '#701516',
    PHP: '#4F5D95',
    Dart: '#00B4AB',
    Kotlin: '#A97BFF',
    Swift: '#F05138',
    Shell: '#89e051',
    Vue: '#41b883',
    Svelte: '#ff3e00',
};

async function fetchProjects() {
    try {
        const res = await fetch(
            `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=9`
        );
        if (!res.ok) throw new Error('Erro ao buscar repositórios');
        const repos = await res.json();
        renderProjects(repos);
    } catch {
        projectsContainer.innerHTML = `
            <div class="col-span-full text-center py-12 text-slate-400">
                <i class="fa-solid fa-triangle-exclamation text-3xl mb-3" aria-hidden="true"></i>
                <p>Não foi possível carregar os projetos.</p>
            </div>`;
    }
}

function renderProjects(repos) {
    if (!repos.length) {
        projectsContainer.innerHTML = `
            <div class="col-span-full text-center py-12 text-slate-400">
                Nenhum repositório encontrado.
            </div>`;
        return;
    }

    projectsContainer.innerHTML = repos.map(repo => {
        const langColor = languageColors[repo.language] || '#6b7280';
        return `
            <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer"
                class="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 sm:p-6
                shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-300">

                <div>
                    <div class="flex items-center gap-3 mb-3">
                        <span class="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600
                            group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <i class="fa-solid fa-folder-open text-base sm:text-lg" aria-hidden="true"></i>
                        </span>
                        <h3 class="text-base sm:text-lg font-semibold text-slate-800 truncate group-hover:text-blue-600 transition-colors">
                            ${repo.name}
                        </h3>
                    </div>
                    <p class="text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-3 mb-4">
                        ${repo.description || '<em class="text-slate-400">Sem descrição</em>'}
                    </p>
                </div>

                <div class="flex items-center justify-between text-[11px] sm:text-xs text-slate-400 pt-3 border-t border-slate-100">
                    <div class="flex items-center gap-3 sm:gap-4">
                        ${repo.language ? `
                            <span class="flex items-center gap-1.5">
                                <span class="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full shrink-0" style="background-color: ${langColor}" aria-hidden="true"></span>
                                ${repo.language}
                            </span>
                        ` : ''}
                        <span class="flex items-center gap-1">
                            <i class="fa-solid fa-star text-amber-400" aria-hidden="true"></i>
                            ${repo.stargazers_count}
                        </span>
                        <span class="flex items-center gap-1">
                            <i class="fa-solid fa-code-fork" aria-hidden="true"></i>
                            ${repo.forks_count}
                        </span>
                    </div>
                    <i class="fa-solid fa-arrow-up-right-from-square opacity-0 group-hover:opacity-100 transition-opacity text-blue-500" aria-hidden="true"></i>
                </div>

            </a>`;
    }).join('');
}

fetchProjects();
renderTechnologies();
