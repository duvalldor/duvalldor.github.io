//get all imgs with data-src attribute
const imagesToLoad = document.querySelectorAll(`img[data-src]`);

//replace the src with data-src and remove the attribute data-src.
const loadImages = (image) => {
    image.setAttribute(`src`, image.getAttribute(`data-src`));
    image.onload = () => {
        image.removeAttribute(`data-src`);
    };
};
//optional parameters being set for the IntersectionalObserver
//brought from line 27
const imgOptions = {
    rootMargin: `0px 0px 50px 0px`,
    threshold: 1,
};

//first check to see if Intersection Observer is supported by the brower
if (`IntersectionObserver` in window) {
    const imgObserver = new IntersectionObserver(items => {
        items.forEach(item => {
            if (item.isIntersecting) {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions);  //sends to line 12 - const imgO
    
    //Loop through each img and check status and load if necessary
    imagesToLoad.forEach(img => {
        imgObserver.observe(img);
    });
}
else {
    //just Load ALL images if not supported
    imagesToLoad.forEach(img => {
        loadImages(img);
    });
}
   