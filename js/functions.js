var heart_value = false;

function toggleHeart() {
    heart_value = !heart_value;
    document.querySelector('#heart').src = (heart_value) ? './img/heart-full.png' : './img/heart-empty.png';
}

function clickStar(value) {
    let stars = document.querySelector('.stars');
    stars.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        let star = document.createElement('img');
        star.setAttribute('onclick', `clickStar(${i + 1})`);
        star.src = (value - 1 < i) ? './img/star-empty.png' : './img/star-full.png';
        stars.appendChild(star);
    }
}