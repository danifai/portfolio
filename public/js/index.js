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

    // Function to open modal
    function openModal(modal, captionText, img) {
        modal.style.display = "block";
        captionText.innerHTML = img.alt;
        modal.querySelector('.modal-content').style.animationName = 'zoom';
    }

    // Function to close modal
    function closeModal(modal) {
        const modalContent = modal.querySelector('.modal-content');
        modalContent.style.animationName = 'zoom-out';
        setTimeout(() => {
            modal.style.display = "none";
            modalContent.style.animationName = 'zoom';
        }, 600); // Match the duration of the closing animation
    }

    viewCertificate.onclick = function() {
        openModal(modal, captionText, img);
    }

    span.onclick = function() {
        closeModal(modal);
    }

    viewCertificate2.onclick = function() {
        openModal(modal2, captionText2, fullstackImg);
    }

    spanFullstack.onclick = function() {
        closeModal(modal2);
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal(modal);
        } else if (event.target == modal2) {
            closeModal(modal2);
        }
    }

    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('copy-btn')) {
            // Verifiy if button shows "✔ Copied!"
            if (event.target.textContent.includes('Copied')) {
                return;
            }
            
            const copyTarget = event.target.getAttribute('data-copytarget');
            const copyText = document.querySelector(copyTarget).textContent;
            const textArea = document.createElement('textarea');
            textArea.value = copyText;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
    
            const originalText = event.target.textContent;
            event.target.textContent = '✔ Copied!';
            
            setTimeout(function() {
                event.target.textContent = originalText;
            }, 2000);
        }
    });
    
    
    document.addEventListener('click', function(event){
        if (event.target.id === 'whatsapp-btn') {
            const phoneNumber = "+5491158056091"; // Reemplaza con tu número de teléfono
            const message = "Hello, I would like to contact you.";
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        }
    });

    const toggleSpans = document.querySelectorAll('.toggle-span');
    const longTexts = document.querySelectorAll('.education-text');

    toggleSpans.forEach((toggleSpan, index) => {
        const longText = longTexts[index];
        toggleSpan.addEventListener('click', function() {
            const isExpanded = longText.style.maxHeight !== '20px' && longText.style.maxHeight !== '';

            if (isExpanded) {
                longText.style.maxHeight = '20px';
                toggleSpan.textContent = '...view more';
            } else {
                longText.style.maxHeight = longText.scrollHeight + 'px';
                toggleSpan.textContent = 'view less';
            }
        });
    });

    var scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    };

    // When the user clicks on the button, scroll to the top of the document
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

});