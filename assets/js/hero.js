document.addEventListener("DOMContentLoaded", () => {

    const progress = document.querySelector(".progress-fill");

    progress.style.width = "0%";

    setTimeout(() => {

        progress.style.transition = "width 1.8s ease";

        progress.style.width = "96%";

    }, 400);

});

const counters = document.querySelectorAll(".dashboard-metrics h3");

counters.forEach(counter => {

    const target = Number(counter.textContent.replace(/,/g,""));

    let current = 0;

    const increment = target / 80;

    const update = () => {

        current += increment;

        if(current < target){

            counter.textContent =
            Math.floor(current).toLocaleString();

            requestAnimationFrame(update);

        }else{

            counter.textContent =
            target.toLocaleString();

        }

    };

    update();

});

const hero = document.querySelector(".hero");

const layers = document.querySelectorAll("[data-speed]");

hero.addEventListener("mousemove", (e)=>{

    const rect = hero.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    const centerX = rect.width/2;

    const centerY = rect.height/2;

    layers.forEach(layer=>{

        const speed = layer.dataset.speed;

        const moveX = (x-centerX)/speed;

        const moveY = (y-centerY)/speed;

        layer.style.transform =
        `translate(${moveX}px,${moveY}px)`;

    });

});

hero.addEventListener("mouseleave",()=>{

    layers.forEach(layer=>{

        layer.style.transform="translate(0,0)";

    });

});
// Back to Top

const backToTop = document.getElementById("backToTop");

if (backToTop) {
    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}