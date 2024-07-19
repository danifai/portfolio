document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', e => {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    });

    document.addEventListener('mouseenter', () => {
        cursor.style.display = 'block';
    });

    document.addEventListener('mouseleave', () => {
        cursor.style.display = 'none';
    });

    const inIcon = document.querySelector('.fa-linkedin');

    
    inIcon.addEventListener('mouseover', () => {
        inIcon.classList.add('fa-bounce');
    });

    
    inIcon.addEventListener('mouseout', () => {
        inIcon.classList.remove('fa-bounce');
    });

    const gitIcon = document.querySelector('.fa-github');

    
    gitIcon.addEventListener('mouseover', () => {
        gitIcon.classList.add('fa-bounce');
    });

    
    gitIcon.addEventListener('mouseout', () => {
        gitIcon.classList.remove('fa-bounce');
    });

    const envIcon = document.querySelector('.fa-envelope');

    
    envIcon.addEventListener('mouseover', () => {
        envIcon.classList.add('fa-bounce');
    });

    
    envIcon.addEventListener('mouseout', () => {
        envIcon.classList.remove('fa-bounce');
    });

});