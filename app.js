var images = document.querySelectorAll('.image img')
var closeBtn = document.querySelector('.close-btn')
var prevBtn = document.querySelector('.btn.prev-btn')
var nextBtn = document.querySelector('.btn.next-btn')
var gallery = document.querySelector('.gallery')
var galleryImg = document.querySelector('.gallery-inner img')

var currentIndex = 0

function showGallery() {
    if (currentIndex == 0) {
        prevBtn.classList.add('hide')
    } else {
        prevBtn.classList.remove('hide')
    }

    if (currentIndex == images.length -1) {
        nextBtn.classList.add('hide')
    } else {
        nextBtn.classList.remove('hide')
    }

    galleryImg.src = images[currentIndex].src;
    gallery.classList.add('show')
}

images.forEach((image, index) => {
    image.addEventListener('click', function() {
        currentIndex = index
        showGallery()
    })
})

document.addEventListener('keydown', function (e) {
    if (e.keyCode == 27) {
        gallery.classList.remove('show')
    }
})

closeBtn.addEventListener('click', function(){
    gallery.classList.remove('show')
})

prevBtn.addEventListener('click', function () {
    if (currentIndex > 0) {
        currentIndex--
        showGallery()
    }
})

nextBtn.addEventListener('click', function () {
    if (currentIndex < images.length - 1) {
        currentIndex++
        showGallery()
    }
})