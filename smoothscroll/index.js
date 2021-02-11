// this code is take from dev ed youtube channel
const smoothScroll = (target, duration) => {
    var target = document.querySelector(target)
    var targetPosition = target.getBoundingClientRect() // this will give some properties like
    // top, right, left, bottom
    console.log(targetPosition)
    var targetPosition = targetPosition.top
    var startPosition = window.pageYOffset
    var distance = targetPosition - startPosition
    var startTime // this is null for now

    function animation(currentTime) {
        if (startTime == null) startTime = currentTime
        var timeElapsed = currentTime - startTime
        var run = ease(timeElapsed, startPosition, distance, duration)
        window.scrollTo(0, run)
        if (timeElapsed < duration) requestAnimationFrame(animation)
    }

    function ease(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t*t*t*t + b;
        t -= 2;
        return c/2*(t*t*t*t*t + 2) + b;
    }

    requestAnimationFrame(animation)
    }


document.querySelector('.second-container a')
    .addEventListener('click', 
    () => smoothScroll('.second-container', 500) )

document.querySelector('.first-container a')
    .addEventListener('click',
    () => smoothScroll('.second-container', 500) )

document.querySelector('.third-container a')
    .addEventListener('click',
    () => smoothScroll('.second-container', 500) )
