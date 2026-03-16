document.querySelectorAll('.flower').forEach(flower => {
    flower.computedStyleMap.top = Math.random() * 80 + '%';  //random top (0-80%);
    flower.computedStyleMap.left = Math.random() * 90 + '%'; //random left (0-90%)
    flower.style.transform = `rotate(${Math.random() * 360}deg)`; // Random spin 
 });