const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/
    return regex.test(email)
}


const email = 'example@gmail.com'
console.log(validateEmail(email))


const moveRight = (block, distance) => {
    const parentWidth = block.parentElement.clientWidth
    const blockWidth = block.clientWidth;
    const currentPosition = parseInt(block.style.left) || 0

    if (currentPosition + blockWidth < parentWidth) {
        block.style.left = ${currentPosition + distance}px
        setTimeout(() => moveRight(block, distance), 100)
    }
}


const smallBlock = document.getElementById('smallBlock')
moveRight(smallBlock, 5)