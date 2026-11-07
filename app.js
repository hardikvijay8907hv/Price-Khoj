const form = document.getElementById('searchForm');
const input = document.getElementById('product');
const results = document.getElementById('results');
const empty = document.getElementById('empty');
const queryTitle = document.getElementById('queryTitle');
const amazonLink = document.getElementById('amazonLink');
const flipkartLink = document.getElementById('flipkartLink');

function compareProduct(value) {
  const query = value.trim();
  if (!query) {
    input.focus();
    return;
  }
  const encoded = encodeURIComponent(query);
  queryTitle.textContent = query;
  amazonLink.href = 'https://www.amazon.in/s?k=' + encoded;
  flipkartLink.href = 'https://www.flipkart.com/search?q=' + encoded;
  results.hidden = false;
  empty.hidden = true;
  results.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  compareProduct(input.value);
});

document.querySelectorAll('[data-search]').forEach(function (button) {
  button.addEventListener('click', function () {
    input.value = button.dataset.search;
    compareProduct(input.value);
  });
});
