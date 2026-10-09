
document.getElementById('year').textContent =
  new Date().getFullYear();

const notice = document.getElementById('notice');
const orderBtn = document.getElementById('orderBtn');

orderBtn.addEventListener('click', function (event) {
  event.preventDefault();

  notice.textContent =
    'Bu demo sayt. Haqiqiy Telegram manzilini keyin qo‘shamiz.';

  notice.classList.add('show');

  setTimeout(function () {
    notice.classList.remove('show');
  }, 3000);
});