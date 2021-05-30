const t = document.querySelector("#temp").textContent;
const speed = document.querySelector("#speed").textContent;
const none = 'N/A';

if (t <= 50 && speed >= 3) {
    
    const s = Math.pow(speed, .16)
    const wc = (35.74 + 0.6215 * t) - (35.75 * s) + (0.4275 * t * s);
    const result = wc.toFixed(2);
    document.querySelector(`#wc`).textContent = `${result} °F`;
}   
else {
    document.querySelector('#wc').textContent = none;
}

// f = 35.74 + 0.6215(t) − 35.75(s)0.16 + 0.4275(t)(s)0.16