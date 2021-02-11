// This will start scroll when the browser refreshes

const upSpeed = 20
const downSpeed = upSpeed
const smoothScroll = (target, e) => {
    // This function is recursive
    // this is the smooth scroll function
    e.preventDefault()
    var target = document.querySelector(target) // finding the element to reach
    var top = target.offsetTop // this is the top position of the destination element
    var startPosition = window.pageYOffset // this is how far we have scrolled in Y axis (can just use scrollY)
    var distance = top - startPosition
    var toCover = 0 // this variable is going to change for us to go down
    function animation() {
        if ( distance > -downSpeed ) {
            if (distance > 0) distance -= downSpeed
            else return
            toCover += downSpeed // to cover is increase every time bc it is a value that is 
            // static to the page not relative to the position
            scroll(0,toCover)

        } else {
            // for going up I had to use a different approach this is better so feel free to use this as your
            // approach to go down as well
            if (distance < upSpeed) distance += upSpeed
            else return
            scroll(0, (scrollY - upSpeed))
        }
        requestAnimationFrame(animation)
    }

    requestAnimationFrame(animation)
}


// adding the event listeners
// first getting the elements and used the callback method will take destination class as argument 
document.querySelector('.first-container a')
    .addEventListener('click',
    (e) => smoothScroll('.second-container', e, 500) )

document.querySelector('.second-container a')
    .addEventListener('click', 
    (e) => smoothScroll('.first-container', e, 500) )

document.querySelector('.third-container a')
    .addEventListener('click',
    (e) => smoothScroll('.first-container', e, 500) )
