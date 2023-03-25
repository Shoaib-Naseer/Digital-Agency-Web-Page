window.onload = function digital_fn() {
  const toggle = document.querySelector('.toggle-btn');
  const collapse = document.querySelector('.collapse');

  toggle.addEventListener('click', function () {
    collapse.classList.toggle('active');
  });

  let grid = document.querySelector(
    '#site-main .recent-work-area .images-flex'
  );

  let msnry = new Masonry(grid, {
    itemSelector: '.flex-item',
    gutter: 100,
    fitWidth: true,
  });

  var rellax = new Rellax('.rellax',{
    center:true
  });
};
