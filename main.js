let toggle = document.querySelector("#header .toggle-button");
let collapse = document.querySelectorAll("#header .collapse");

toggle.addEventListener('click', function() {
    collapse.forEach(col => col.classList.toggle("collapse-toggle"));
});

// with masonry
var grid = document.querySelector('#posts .grid');
var msnry = new Masonry(grid, {
    // options...
    itemSelector: '.grid-item',
    columnWidth: 20
});