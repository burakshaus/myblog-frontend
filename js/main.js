fetch('navbar.html').then(response=> response.text()).then(data => {
    document.getElementById('navbar').innerHTML = data;

    const navlinks = document.querySelector(".nav-links");
    const hamburger = document.querySelector(".hamburger");
    if (hamburger && navlinks){
        hamburger.addEventListener('click', ()=> {
             navlinks.classList.toggle('active');
        });
    }
});