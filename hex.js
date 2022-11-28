const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 'A', 'B', 'C', 'D']

const btn = document.getElementById('btn')
const hex = document.querySelector('.color')

btn.addEventListener('click', function () {
  let hexNum = '#'
  for (let i = 0; i < 6; i++) {
    hexNum += numbers[getRandomNumber()]
  }

  hex.textContent = hexNum
  document.body.style.backgroundColor = hexNum
})
function getRandomNumber() {
  return Math.floor(Math.random() * numbers.length)
}
