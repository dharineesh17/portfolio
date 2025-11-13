// Data for portfolio sections
const portfolioData = {
    products: [
        { id: 1, title: 'DoPomodoro', description: 'A responsive Pomodoro timer web app to boost productivity through structured focus and break sessions.', tech: 'HTML5, CSS3, JavaScript', image: './assets/products/dopomodoro.png', link: 'https://dharineesh17.github.io/dopomodoro/', linkText: 'Try' },
        { id: 2, title: 'QB Code', description: 'A web app to generate customizable QR codes and barcodes with color, logo, and format options.', tech: 'HTML5, CSS3, JavaScript, QRCode.js, JsBarcode, Html5-QRCode.', image: './assets/products/qbcode.png', link: 'https://dharineesh17.github.io/qbcode/', linkText: 'Try' },
        { id: 3, title: 'Monochrome Magic', description: 'A responsive web app that converts images into stunning black & white art with 15+ creative monochrome filters.', tech: 'HTML5, CSS3, JavaScript', image: './assets/products/monochromeMagic.png', link: 'https://dharineesh17.github.io/monochromemagic/', linkText: 'Try' },
        { id: 4, title: 'AgeVerse', description: 'A visually engaging web app that tracks your age, milestones, and life stats in real time — including birthdays, heartbeats, fun conversions, and progress charts. All data is processed locally for complete privacy.', tech: 'HTML, Tailwind CSS, JavaScript', image: './assets/products/ageverse.png', link: 'https://dharineesh17.github.io/ageverse/', linkText: 'Try' },
        { id: 5, title: 'TaskMate', description: 'A responsive, dark-themed to-do list app for managing tasks with titles, descriptions, timestamps, and local storage — all in a sleek, mobile-friendly interface.', tech: 'HTML, Tailwind CSS, JavaScript', image: './assets/products/taskMate.png', link: 'https://dharineesh17.github.io/taskmate/', linkText: 'Try' },
        { id: 6, title: 'Easy Quotation', description: 'A responsive web app to generate simple billing quotations with tax, and export options in PNG or PDF format.', tech: 'HTML, Tailwind CSS, JavaScript', image: './assets/products/easyQuotation.png', link: 'https://dharineesh17.github.io/EasyQuotation/', linkText: 'Try' },
    ],

    softwares: [
        { id: 1, title: 'Photo Capture Web App', description: 'Real-Time Photo Capture Web App that fetches details, enables webcam capture with live preview, and auto-saves images with verified names for structured logging.', tech: 'HTML5, Tailwind CSS, JavaScript, PHP', image: './assets/products/photoCapturingApp.png', link: './PCSDemo.html', linkText: 'View Demo' },
        { id: 2, title: 'Voter Data Management App', description: 'A PHP-based data cleaning platform that verifies, corrects, enriches, and updates voter records with live translation, validation, journaling, and audit tracking.', tech: 'HTML5, CSS, Tailwind CSS, JavaScript, PHP, MySQL', image: './assets/products/trichySou.png', link: '', linkText: '' },
        { id: 3, title: 'Dental Clinic Management Web App', description: 'Developed a web-based application for dental clinic to manage patient records, daily treatment entries, pharmacy and material inventory, and appointments.', tech: 'HTML5, CSS, Tailwind CSS, JavaScript, PHP, MySQL', image: './assets/products/dental.png', link: '', linkText: '' },
        
    ],

    games: [
        { id: 1, title: 'BattleHands', description: 'A colorful, browser-based Rock Paper Scissors game with sound effects, responsive UI, animations, and persistent scoring.', tech: 'HTML, CSS3, Tailwind CSS, JavaScript', image: './assets/games/battleHands.png', link: 'https://dharineesh17.github.io/battlehands/', linkText: 'Play' },
        { id: 2, title: 'Tic Tac Toe ', description: 'A simple and fun Tic Tac Toe game with emoji avatars, sound effects, and two game modes: play with a friend or against the computer. Mobile-friendly and dark-themed.', tech: 'HTML, CSS3, Tailwind CSS, JavaScript', image: './assets/games/tictactoe.png', link: 'https://dharineesh17.github.io/tictactoe/', linkText: 'Play' },
        { id: 3, title: 'Memory Game', description: 'A responsive dark-themed memory matching game with sound, timer, and animations', tech: 'HTML, CSS3, Tailwind CSS, JavaScript', image: './assets/games/memoryGame.png', link: 'https://dharineesh17.github.io/memorygame/', linkText: 'Play' },
    ],
    appChallenges: [
        { id: 1, title: 'Under 25 Dating App',  challenge: 'Under 25 App Frontend Challenge - Build a dating website with HTML & CSS only, showcasing creativity, clean UI, and youthful aesthetics.' , description: 'A Gen Z-inspired dating website built using only HTML and CSS for the Under 25 App Challenge. Features include a vibrant landing page, swipe-style animated profile cards, love stories, and testimonials — all wrapped in a fully responsive, mobile-friendly design.', tech: 'HTML5, CSS3', image: './assets/under25/under25Dating.png', link: 'https://dharineesh17.github.io/under25datingapp/', linkText: 'View App' },
        { id: 2, title: 'Fun Personality Quiz App',  challenge: 'Under 25 App Frontend Challenge - Build a personality quiz using only HTML, CSS & JavaScript, with a fun concept, smooth UI, and Gen Z-friendly vibe.' , description: 'A quirky and engaging web quiz that helps users discover whether they’re “Sandwich” or “Moon Material” based on their answers to funny, Indian-themed questions. The app is mobile-friendly, visually vibrant, and designed to entertain while demonstrating frontend skills and creativity.', tech: 'HTML5, CSS3, JavaScript', image: './assets/under25/under25PersonalityQuiz.png', link: 'https://dharineesh17.github.io/under25PersonalityQuizWebApp/', linkText: 'View App' },
        { id: 3, title: 'Color Convertor',  challenge: 'Built for the Under 25 App Frontend Challenge using HTML, CSS, and JavaScript only — focusing on creativity, mobile responsiveness, and interactive web experience.' , description: 'A colorful and responsive web app that allows users to upload an image and apply various monochrome filters like Black & White, Grayscale, Sepia, and Duotone — with real-time preview and easy download.', tech: 'HTML5, CSS3, JavaScript', image: './assets/under25/under25ColorConvertor.png', link: 'https://dharineesh17.github.io/colorConvertor/', linkText: 'View App' },
        { id: 4, title: 'Pomodrama',  challenge: 'Built for the Under 25 App Frontend Challenge using HTML, CSS, and JavaScript. Focused on clean UI, originality, and relatable UX — no templates or external libraries used.' , description: 'A clean, glassmorphic Pomodoro timer web app that helps users stay focused, take timely breaks, and stay motivated — with a touch of dramatic flair. It makes productivity feel more fun, especially for students and professionals who need a little push to stay on track.', tech: 'HTML5, CSS3, JavaScript', image: './assets/under25/under25Pomodrama.png', link: 'https://dharineesh17.github.io/pomodrama/', linkText: 'View App' },
        { id: 5, title: 'Movie Bot',  challenge: 'Built for the Under 25 App Frontend Challenge - Create a chatbot that responds to moods using only frontend tools, originality, and personality-driven UX.' , description: 'A mood-based movie recommendation chatbot built with HTML, CSS, and JavaScript for the Under 25 App Frontend Challenge. The bot responds to emotional vibes like sad, angry, heartbroken, and nostalgic with sassy Gen Z comebacks and curated film lists across Hollywood and major Indian languages. Includes fun loading animations, meme drops, and a mobile-first responsive UI.', tech: 'HTML5, CSS3, JavaScript', image: './assets/under25/under25MovieBot.png', link: 'https://dharineesh17.github.io/genzmoviebot/', linkText: 'View App' },
        { id: 6, title: 'Mood Detector',  challenge: 'Built for the Under 25 App Frontend Challenge using only HTML, CSS, and JavaScript, this project focuses on UX, emotional intelligence, and creative self-expression.' , description: 'Mood Detector is a vibrant, interactive web app that helps users explore their emotional state through a mood quiz and generates a personalized, downloadable mood card. It supports native sharing and social-friendly formats like Instagram stories.', tech: 'HTML5, CSS3, JavaScript, html2canvas, Web Share API', image: './assets/under25/under25MoodDetector.png', link: 'https://dharineesh17.github.io/mooddetector/', linkText: 'View App' },
        // { id: 4, title: '',  challenge: '' , description: '', tech: 'HTML5, CSS3, JavaScript', image: './assets/under25', link: '', linkText: 'View App' },

        
        
        // { id: 3, title: '',  challenge: '' , description: '', tech: 'HTML5, CSS3, JavaScript', image: './assets/under25', link: '', linkText: 'View App' },
        // { id: 2, title: 'Real-time Chat App', description: 'A simple real-time chat application using WebSockets.', tech: 'Node.js, Socket.IO', image: 'https://placehold.co/400x250/1a202c/e2e8f0?text=Chat+App', link: '#', linkText: 'View Code' },
        // { id: 3, title: 'Markdown Previewer', description: 'A web-based markdown editor with live preview.', tech: 'React', image: 'https://placehold.co/400x250/1a202c/e2e8f0?text=Markdown', link: '#', linkText: 'View Code' },
    ],
    websites: [
        { id: 1, title: 'MukeshPacks', description: 'A dynamic, SEO-optimized product showcase web application for packaging materials with database-driven product listings, multi-unit pricing (kg & pcs), image galleries, and detailed product descriptions.', tech: 'HTML5, Tailwind CSS, JavaScript, PHP, MySQL', image: './assets/products/mukeshpacks.png', link: 'https://mukeshpacks.com/', linkText: 'Visit Site' },
        // { id: 2, title: 'Portfolio Website', description: 'Developed a responsive personal portfolio web application with a sleek dark theme, engaging animations, and a custom splash screen, designed to showcase projects and skills.', tech: 'HTML5, CSS3, JavaScript, TailwindCSS', image: './assets/sites/portfolio.png', link: 'https://dharineesh17.github.io/porfolio/', linkText: 'Visit Site' },
        { id: 3, title: 'Resume Website', description: 'A modern, responsive resume website showcasing my projects, skills, and experiences. Designed to deliver a seamless user experience across devices with clean layout and interactive features.', tech: 'HTML5, CSS3, JavaScript', image: './assets/sites/resume.png', link: 'https://dharineesh17.github.io/resume/', linkText: 'Visit Site' },
        { id: 4, title: 'Restaurant Website', description: 'A modern and responsive restaurant website designed to showcase the menu, share the story behind the restaurant, and provide an enquiry form. It features a clean layout, engaging visuals, and a user-friendly experience across all devices.', tech: 'HTML5, CSS3, JavaScript, Bootstrap', image: './assets/sites/restaurant1.png', link: 'https://dharineesh17.github.io/srirangaatiffenstall/', linkText: 'Visit Site' },
        { id: 5, title: 'TrichyMango.in', description: 'A responsive and modern promotional website that highlights seasonal mango varieties and pricing. Designed to provide a clear, bilingual, and mobile-friendly shopping experience with easy contact options.', tech: 'HTML5, CSS3, JavaScript', image: './assets/sites/trichyMango.png', link: 'https://dharineesh17.github.io/trichymango.in/', linkText: 'Visit Site' },
        { id: 6, title: 'Jeev FaceWash Cream', description: 'A responsive and modern product landing website for showcasing a homemade natural face wash cream. Designed to engage users with smooth animations, product highlights, and mobile-friendly UI.', tech: 'HTML5, CSS3, JavaScript, TailwindCSS', image: './assets/sites/jeev.png', link: 'https://dharineesh17.github.io/jeevfacewashcream/', linkText: 'Visit Site' },
        { id: 7, title: 'Green Batter', description: 'A responsive single-page promotional website for showcasing fresh dosa batter and chutneys. Features include a splash animation, multi-language support (English & Tamil), and mobile-friendly navigation—all built with a vibrant green-themed UI.', tech: 'HTML5, CSS3, JavaScript, TailwindCSS', image: './assets/sites/greenBatter.png', link: 'https://dharineesh17.github.io/greenbatter/', linkText: 'Visit Site' },
        
        // { id: 2, title: '', description: '', tech: 'HTML5, CSS3, JavaScript', image: './assets/sites/resume.png', link: '', linkText: 'Visit Site' },
        // { id: 2, title: 'Company Landing Page', description: 'A modern and responsive landing page for a startup.', tech: 'Next.js, Tailwind CSS', image: 'https://placehold.co/400x250/1a202c/e2e8f0?text=Landing+Page', link: '#', linkText: 'Visit Site' },
        // { id: 3, title: 'Portfolio v1', description: 'My previous iteration of a personal portfolio website.', tech: 'HTML, CSS, JS', image: 'https://placehold.co/400x250/1a202c/e2e8f0?text=Old+Portfolio', link: '#', linkText: 'Visit Site' },
    ],
    // graphicDesigns: [
    //     { id: 1, title: 'Brand Logo Design', description: 'Minimalist logo design for a tech startup.', tools: 'Adobe Illustrator', image1: './assets/easyQuotation.png', link: './assets/easyQuotation.png', linkText: 'View Design' },
    //     { id: 2, title: 'Event Poster', description: 'Promotional poster for a web development workshop.', tools: 'Adobe Photoshop', image: 'https://placehold.co/400x250/1a202c/e2e8f0?text=Event+Poster', link: '#', linkText: 'View Design' },
    //     { id: 3, title: 'UI/UX Mockup', description: 'Mockup for a mobile banking application interface.', tools: 'Figma', image: 'https://placehold.co/400x250/1a202c/e2e8f0?text=UI/UX+Mockup', link: '#', linkText: 'View Design' },
    // ],
    // skillDiary: [
    //     { id: 1, title: 'Brand Logo Design', description: 'Minimalist logo design for a tech startup.', tools: 'Adobe Illustrator', image: 'https://placehold.co/400x250/1a202c/e2e8f0?text=Logo+Design', link: '#', linkText: 'View Design' },
    //     { id: 2, title: 'Event Poster', description: 'Promotional poster for a web development workshop.', tools: 'Adobe Photoshop', image: 'https://placehold.co/400x250/1a202c/e2e8f0?text=Event+Poster', link: '#', linkText: 'View Design' },
    //     { id: 3, title: 'UI/UX Mockup', description: 'Mockup for a mobile banking application interface.', tools: 'Figma', image: 'https://placehold.co/400x250/1a202c/e2e8f0?text=UI/UX+Mockup', link: '#', linkText: 'View Design' },
    // ],
};
// Function to create a section card
function createSectionCard(item) {
    const card = document.createElement('div');
    card.className = 'bg-gray-800 rounded-xl shadow-2xl p-6 flex flex-col items-center text-justify max-w-sm w-full border border-gray-700 card-animate';
    card.innerHTML = `
        ${item.image ? `<img src="${item.image}" alt="${item.title}" class="w-full h-40 object-cover rounded-lg mb-4 border border-gray-600" onerror="this.onerror=null;this.src='https://placehold.co/400x250/1a202c/e2e8f0?text=${item.title.replace(/\s/g, '+')}';" />` : `<img src="${item.image1}" alt="${item.title}" class="w-full h-100 object-cover rounded-lg mb-4 border border-gray-600" onerror="this.onerror=null;this.src='https://placehold.co/400x250/1a202c/e2e8f0?text=${item.title.replace(/\s/g, '+')}';" />`}
        
        <h3 class="text-2xl font-semibold text-white mb-2">${item.title}</h3>
        ${item.challenge ? `<p class="text-gray-300 text-sm mb-4 flex-grow">${item.challenge}</p>` : ''}
        <p class="text-gray-300 text-sm mb-4 flex-grow">${item.description}</p>
        <p class="text-purple-300 text-xs font-mono mb-4">
            <span class="font-bold">Tech/Tools:</span> ${item.tech || item.tools}
        </p>
        ${item.link ? `<a href="${item.link}" target="_blank" rel="noopener noreferrer" class="mt-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-6 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg">${item.linkText || 'View Project'}</a>` : ''}
    `;
    return card;
}
// Function to populate sections with cards
function populateSection(sectionId, data) {
    const container = document.getElementById(sectionId);
    if (container) {
        data.forEach(item => {
            container.appendChild(createSectionCard(item));
        });
    }
}

// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};
const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
};
const observer = new IntersectionObserver(observerCallback, observerOptions);
// Header animation and general load logic
window.addEventListener('load', () => {
    const header = document.getElementById('header');
    header.classList.remove('-translate-y-full', 'opacity-0');
    header.classList.add('translate-y-0', 'opacity-100');
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    // Populate portfolio sections
    populateSection('products-container', portfolioData.products);
    populateSection('softwares-container', portfolioData.softwares);
    populateSection('games-container', portfolioData.games);
    populateSection('app-challenges-container', portfolioData.appChallenges);
    populateSection('websites-container', portfolioData.websites);
    // populateSection('graphic-designs-container', portfolioData.graphicDesigns);
    // populateSection('skill-diary-container', portfolioData.skillDiary);
    // Observe elements for scroll animations after content is loaded
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    document.querySelectorAll('.card-animate').forEach(el => observer.observe(el));
    // Initialize particles.js
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 5,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    } else {
        console.error("particlesJS is not defined. Ensure particles.min.js is loaded correctly.");
    }
});
// Smooth scrolling for navigation links and hamburger menu toggle
const navMenu = document.getElementById('nav-menu');
const hamburgerButton = document.getElementById('hamburger-button');
// console.log(hamburgerButton);
hamburgerButton.addEventListener('click', () => {
    navMenu.classList.toggle('is-open');
});
document.querySelectorAll('#nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // Close menu after clicking a link on small screens
        if (window.innerWidth < 768) {
            navMenu.classList.remove('is-open');
        }
    });
});
// Header link active state on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.header-link');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 100 && pageYOffset < sectionTop + sectionHeight - 100) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('text-white');
        if (link.href.includes(current)) {
            link.classList.add('text-white');
        }
    });
});