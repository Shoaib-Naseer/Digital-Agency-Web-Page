window.onload = function digital_fn() {
  const toggle = document.querySelector('.toggle-btn');
  const collapse = document.querySelector('.collapse');

  toggle.addEventListener('click', function () {
    collapse.classList.toggle('active');
  });
};
