function windchill(tmp, spd) {
    // const t = document.querySelector(".curtemp").textContent;
    // const speed = document.querySelector(".wspeed").textContent;
    const none = 'N/A';

    // console.log(tmp); //for testing
    // console.log(spd); //for testing
    let t = tmp;
    speed = spd;

    if (speed < 3  || t > 50) {
      
        // console.log("No windchill"); //for testing
        document.getElementById('wc').textContent = none;
        
    }
    else {
        const s = Math.pow(speed, .16)
        const wc = (35.74 + 0.6215 * t) - (35.75 * s) + (0.4275 * t * s);
        const result = wc.toFixed(1);
        // console.log("Has windchill"); //for testing
        document.getElementById(`wc`).textContent = `${result} °F`;
    }

    // f = 35.74 + 0.6215(t) − 35.75(s)0.16 + 0.4275(t)(s)0.16
}