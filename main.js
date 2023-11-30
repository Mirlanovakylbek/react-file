let ul = document.querySelectorAll('img')
ul.forEach((el) => {
    el.addEventListener('click', (e) => {
        e.target.remove()
    })
})






















