function windchill(tmp, spd) {
    // const t = document.querySelector("curtemp").textContent;
    // const speed = document.querySelector("wspeed").textContent;
    // const none = 'N/A';

    console.log(tmp);
    console.log(spd);
    t = tmp;
    speed = spd;

    if (t <= 80 && speed >= 3) {
        console.log("Has windchill");
    
        const s = Math.pow(speed, .16)
        const wc = (35.74 + 0.6215 * t) - (35.75 * s) + (0.4275 * t * s);
        const result = wc.toFixed(2);
        document.getElementById(`wc`).textContent = `${result} °Freckle`;
    }
    else {
        console.log("No windchill");
        document.getElementById('wc').textContent = none;
    }

    // f = 35.74 + 0.6215(t) − 35.75(s)0.16 + 0.4275(t)(s)0.16
}