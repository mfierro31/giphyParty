// GIPHY API Key - t29gGoH6XugVE16kE6JsRosJIfu6JTrY
const key = 't29gGoH6XugVE16kE6JsRosJIfu6JTrY';
const form = document.querySelector('#searchform');
const input = document.querySelector('#search');
const gifDiv = document.querySelector('#gif-container');

async function getGif(q, api_key) {
  const res = await axios.get('http://api.giphy.com/v1/gifs/search', { params: { q, api_key } });
  const img = document.createElement('img');
  img.classList.add('m-3');
  img.classList.add('img-fluid');
  const gifArr = res.data.data;
  img.src = gifArr[Math.floor(Math.random() * 25)].images.downsized.url;
  gifDiv.append(img);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  getGif(input.value, key);
  input.value = '';
});

const removeBtn = document.querySelector('#remove-btn');
removeBtn.addEventListener('click', function () {
  gifDiv.innerHTML = '';
})