// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')
const encodedEmail = document.querySelectorAll("[data-part1][data-part2][data-part3]")

const emailParts = encodedEmail[0].dataset
const decodedEmail = `${emailParts.part1}@${emailParts.part2}.${emailParts.part3}`
encodedEmail[0].setAttribute(
    "href", `mailto:${decodedEmail}`
)
 encodedEmail[0].textContent = `${decodedEmail}`

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

console.log(encodedEmail)
// function decodeEmail(encodedEmail) {
//   // Replace [at] and [dot] with "@" and "."
//   var email = encodedEmail.replace('[at]', '@').replace('[dot]', '.');

//   // Open the email client with the decoded email address
//   window.location.href = 'mailto:' + email;
// }
