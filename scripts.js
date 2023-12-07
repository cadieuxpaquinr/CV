document.getElementById('homeBtn').addEventListener('click', function() {
    alert('Home button clicked!');
    // Add your logic or page navigation code here
});

document.getElementById('projectsBtn').addEventListener('click', function() {
    window.open("https://github.com/cadieuxpaquinr");
});

document.getElementById('aboutMeBtn').addEventListener('click', function() {
    alert('About me button clicked!');
    // Add your logic or page navigation code here
});

document.getElementById('contactBtn').addEventListener('click', function() {
    window.open("https://www.linkedin.com/in/raphael-cadieux-paquin/");
});

document.getElementById('frenchBtn').addEventListener('click', function() {
    alert('French button clicked!');
    // Add your logic or page navigation code here
});

document.addEventListener('DOMContentLoaded', function() {
    function isMobileDevice() {
        return window.innerWidth <= 800 && window.innerHeight <= 1000;
    }

    if (isMobileDevice()) {
        window.location.href = 'mobile.html';
    }
});
