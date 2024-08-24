const image = document.getElementById('img')
const img = document.querySelectorAll('#img img')

let idx = 0

function carrousel(){
    idx++

    if (idx > img.length -1){
        idx = 0
    }

    image.style.transform = `translateX(${-idx * 45}rem)`
}

setInterval(carrousel, 1800)

// button into_more
document.getElementById('into_more').addEventListener('click', function(){
    document.getElementById('more').scrollIntoView({behavior: 'smooth'})
})

// button into_contact
document.getElementById('into_contact').addEventListener('click', function(){
    document.getElementById('contact').scrollIntoView({behavior: 'smooth'})
})