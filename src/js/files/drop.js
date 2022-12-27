const drop = document.querySelector('.drop')
const dropList = document.querySelector('.drop__list')

drop.addEventListener('click', () => {
      drop.classList.toggle('_active')
      dropList.classList.toggle('_active')
  })

