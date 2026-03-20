function generateFlowers(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;

    // We define "Zones" to ensure flowers don't all clump together
    // Each zone has a [min, max] range for Top and Left
    const zones = [
        { t: [5, 20], l: [5, 25] },   // Top Left
        { t: [5, 20], l: [75, 95] },  // Top Right
        { t: [40, 60], l: [2, 10] },   // Middle Left (outside the bento box)
        { t: [40, 60], l: [90, 98] },  // Middle Right
        { t: [80, 95], l: [10, 30] },  // Bottom Left
        { t: [80, 95], l: [70, 90] }   // Bottom Right
    ];

    zones.forEach(zone => {
        const flower = document.createElement('img');
        flower.src = 'assets/fleur.svg';
        flower.className = 'scattered-flower';

        // Calculate a random spot ONLY within this specific zone
        const randomTop = Math.floor(Math.random() * (zone.t[1] - zone.t[0])) + zone.t[0];
        const randomLeft = Math.floor(Math.random() * (zone.l[1] - zone.l[0])) + zone.l[0];
        const randomRotate = Math.floor(Math.random() * 360);

        flower.style.top = randomTop + "%";
        flower.style.left = randomLeft + "%";
        flower.style.transform = `rotate(${randomRotate}deg)`;

        section.appendChild(flower);
    });
}

// Your Step 4 stays the same, but notice we don't need the 'count' anymore
// because the 'zones' array determines how many flowers (6 per section)
window.addEventListener('DOMContentLoaded', () => {
    generateFlowers('portfolio');
    generateFlowers('about');
    generateFlowers('contact');
});