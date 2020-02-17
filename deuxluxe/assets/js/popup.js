/*Amanda*/ 
const overlaySubscribe = document.getElementById('overlaySubscribe')
const signUpCross = document.getElementById('signUpCross')
let signupRemoved = false

//NEWSLETTER REMOVE
if (signUpCross) {

    signUpCross.onclick = () => {
        signUp.classList.remove('active')
        overlaySubscribe.style.display = "none"
        signupRemoved = true
    }

    //NEWSLETTER SCROLL
    let oldPopupScrollHeight = 0

    window.addEventListener('scroll', e => {
        const currentScrollHeight = window.scrollY

        console.log(window.scrollY)

        if (window.scrollY > 600) {
            overlaySubscribe.style.display = 'flex'
        }

        if (signupRemoved == true) {
            overlaySubscribe.style.display = 'none'
        }

        if (currentScrollHeight < oldPopupScrollHeight) {

            oldPopupScrollHeight = window.scrollY
        }

    })

}