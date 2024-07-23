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
    
    const menuToggle = document.getElementById('menu-toggle');
    const navContainer = document.getElementById('nav-container');
    const navLinks = document.querySelectorAll('.nav-link');
    const showCivil = document.getElementById('show-civil-xp');
    const civilContainer = document.getElementById('civil-container');
    const projetctsContainer = document.getElementById("projects");
    const lastItXp = document.getElementById("last-it-xp");
    const viewCertificate = document.getElementById("view-certificate");
    const viewCertificate2 = document.getElementById("view-certificate-2");
    const modal = document.getElementById("myModal");
    const modal2 = document.getElementById("myModal-2");
    const span = document.querySelector("#myModal .close");
    const spanFullstack = document.querySelector("#myModal-2 .close");
    const captionText = document.getElementById("caption");
    const captionText2 = document.getElementById("caption-2");
    const img = document.getElementById("python-img");
    const fullstackImg = document.getElementById("fullstack-img");

    menuToggle.addEventListener('click', function() {
        navContainer.classList.toggle('open');
    });

    showCivil.addEventListener('click', function() {
        civilContainer.classList.toggle('show');
        showCivil.classList.toggle('active');

        if (civilContainer.classList.contains('show')) {
            projetctsContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
            lastItXp.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });

    viewCertificate.onclick = function(){
        modal.style.display = "block";
        captionText.innerHTML = img.alt;
    }

    span.onclick = function() { 
        modal.style.display = "none";
    }

    viewCertificate2.onclick = function(){
        modal2.style.display = "block";
        captionText2.innerHTML = fullstackImg.alt;
    }

    spanFullstack.onclick = function() {
        modal2.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        } else if (event.target == modal2) {
            modal2.style.display = "none";
        }
    }

});