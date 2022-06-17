
// Select some elements...

// code moves header to left side of page
let header = document.querySelector('#page-header')
header.style.textAlign = "left"

// code makes dog image class have a border of 50 px
let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
    dogImages[i].style.borderRadius = '50px'
}

// code moves dog name class to left side of page
let dogNames = document.querySelectorAll('.dog-name')
for(let i = 0; i < dogNames.length; i++){
    dogNames[i].style.textAlign = 'left'
}

// code makes footer text color orange
let footer = document.querySelector('.footer')
footer.style.color = 'orange'
