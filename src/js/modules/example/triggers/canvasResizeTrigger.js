let canvasTrigger =  () => {
    let canvas = document.querySelector('canvas')
        canvas.style.width = '100%'
        canvas.width = canvas.offsetWidth
}

export {
    canvasTrigger
}