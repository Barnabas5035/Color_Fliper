const color = ['green', 'red', 'yellow', 'rgba(133,122,200)']

const btn = document.getElementById('btn')
const colors = document.querySelector('.color')

btn.addEventListener('click', function () {
  const randomNumber = getRandomNumber()
  console.log(randomNumber)
  document.body.style.backgroundColor = color[randomNumber]
  colors.textContent = color[randomNumber]
})
function getRandomNumber() {
  return Math.floor(Math.random() * color.length)
}
