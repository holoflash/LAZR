function laserPointer() {
    const container = document.createElement("div");
    container.classList.add("container");

    const laser = document.createElement("div");
    laser.classList.add("laser");

    container.appendChild(laser);

    let timesCaught = 0;
    let animationSpeed = "2s";
    container.addEventListener("animationend", changePosition, true);
    laser.addEventListener("mouseover", laserCaught);
    laser.addEventListener("click", laserCaught);

    function laserCaught() {
        timesCaught++;
        if (timesCaught === 12) {
            animationSpeed = "2s";
            timesCaught = 0;
        }
        else {
            animationSpeed = `${2 - (timesCaught * 0.1)}s`;
            laser.style.animationDuration = animationSpeed;
            changePosition();
        }
    }

    function changePosition(event) {
        const targetLaser = event ? event.target || event.currentTarget : laser;
        targetLaser.style.animationName = "none";
        requestAnimationFrame(() => {
            targetLaser.style.animationName = "";
        });
        const { offsetWidth, offsetHeight } = targetLaser;
        targetLaser.style.setProperty("--xA", targetLaser.style.getPropertyValue("--xB"));
        targetLaser.style.setProperty("--yA", targetLaser.style.getPropertyValue("--yB"));
        targetLaser.style.setProperty("--xB", `${Math.floor(Math.random() * (window.innerWidth - offsetWidth + 1))}px`);
        targetLaser.style.setProperty("--yB", `${Math.floor(Math.random() * (window.innerHeight - offsetHeight + 1))}px`);
    }
    document.body.append(container);
}

laserPointer();
