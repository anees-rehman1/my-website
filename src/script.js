// DOM Elements
const counterBtn = document.getElementById('counter-btn');
const counterDisplay = document.getElementById('counter');
const currentTimeDisplay = document.getElementById('current-time');
const versionDisplay = document.getElementById('version');

// Counter functionality
let count = 0;
counterBtn.addEventListener('click', () => {
    count++;
    counterDisplay.textContent = count;
    
    // Add animation
    counterBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        counterBtn.style.transform = 'scale(1)';
    }, 150);
    
    // Change color based on count
    if (count % 10 === 0) {
        counterBtn.style.background = 'linear-gradient(45deg, #ff6b6b, #ffa726)';
        setTimeout(() => {
            counterBtn.style.background = 'linear-gradient(45deg, #00d4ff, #0099ff)';
        }, 500);
    }
});

// Update current time
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
    const dateString = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    currentTimeDisplay.textContent = `${dateString} at ${timeString}`;
}

// Simulate deployment status updates
function simulateDeployment() {
    const statusItems = document.querySelectorAll('.status-item');
    let delay = 0;
    
    statusItems.forEach((item, index) => {
        setTimeout(() => {
            if (index < 3) {
                item.classList.add('active');
                item.classList.remove('pending');
                item.querySelector('i').className = 'fas fa-check-circle';
            } else {
                item.querySelector('i').className = 'fas fa-check-circle';
                item.classList.add('active');
                item.classList.remove('pending');
                item.querySelector('span').textContent = 'Deployed!';
            }
        }, delay);
        delay += 1000; // 1 second delay between each status update
    });
}

// Set version number (can be updated from environment)
versionDisplay.textContent = '1.0.0';

// Initialize
updateTime();
setInterval(updateTime, 1000);

// Start deployment simulation after page loads
setTimeout(simulateDeployment, 2000);

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Add some fun hover effects
document.querySelectorAll('.tech-item, .card').forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.style.transition = 'all 0.3s ease';
    });
});

// Background animation
function createFloatingCircle() {
    const circle = document.createElement('div');
    circle.style.cssText = `
        position: fixed;
        width: ${Math.random() * 100 + 50}px;
        height: ${Math.random() * 100 + 50}px;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 50%;
        top: ${Math.random() * 100}vh;
        left: ${Math.random() * 100}vw;
        pointer-events: none;
        z-index: -1;
        animation: float 20s infinite linear;
    `;
    
    document.body.appendChild(circle);
    
    // Remove after animation
    setTimeout(() => {
        circle.remove();
    }, 20000);
}

// Add CSS for floating animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translate(0, 0) rotate(0deg);
        }
        25% {
            transform: translate(100px, 100px) rotate(90deg);
        }
        50% {
            transform: translate(0, 200px) rotate(180deg);
        }
        75% {
            transform: translate(-100px, 100px) rotate(270deg);
        }
        100% {
            transform: translate(0, 0) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// Create initial floating circles
for (let i = 0; i < 5; i++) {
    createFloatingCircle();
}

// Create new circles periodically
setInterval(createFloatingCircle, 3000);