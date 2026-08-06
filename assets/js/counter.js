const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const counters = entry.target.querySelectorAll(".counter");

            counters.forEach(counter=>{

                const target = +counter.dataset.target;

                let count = 0;

                const speed = target / 60;

                function update(){

                    count += speed;

                    if(count < target){

                        counter.innerText = Math.floor(count);

                        requestAnimationFrame(update);

                    }else{

                        counter.innerText = target;

                    }

                }

                update();

            });

            observer.unobserve(entry.target);

        }

    });

});

observer.observe(document.querySelector(".achievements"));