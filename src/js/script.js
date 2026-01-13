document.addEventListener('DOMContentLoaded', ()=>{
    const hamburger = document.querySelector('.hamburger')
    const headerNavigaion = document.querySelector('.header-navigation')

    if(hamburger && headerNavigaion){
        hamburger.addEventListener('click', ()=>{
            headerNavigaion.classList.toggle('navbar-in-view')
        })
    }

    const dropDowns = document.querySelectorAll('.drop-down')
    if(dropDowns){
        dropDowns.forEach((dropdown)=>{
            const dropButton = dropdown.querySelector('.drop-button')
            const dropbox = dropdown.querySelector('.drop-down-list')
            const icon = dropdown.querySelector('.drop-button svg')
            const links = dropdown.querySelectorAll('.menu-link')
            dropButton.addEventListener('click', (e)=>{
                e.stopPropagation()
                dropDowns.forEach((otherDrop)=>{
                    if(otherDrop !== dropdown){
                        other.querySelector('.drop-down-list').classList.add('hidden')
                        other.querySelector('.drop-button svg').classList.remove('icon-rotate')
                    }
                })
                dropbox.classList.toggle('hidden')
                icon.classList.toggle('icon-rotate', !dropbox.classList.contains('hidden'))
            })
            links.forEach((link)=>{
                link.addEventListener('click', ()=>{
                    dropbox.classList.add('hidden')
                    icon.classList.remove('icon-rotate')
                })
            })
        })
        document.addEventListener('click',()=>{
            dropDowns.forEach((dropdown)=>{
                dropdown.querySelector('.drop-down-list').classList.add('hidden')
                dropdown.querySelector('.drop-button svg').classList.remove('icon-rotate')
            })
        })
    }

    const docContainer = document.querySelector('.hero_section')
    const docIcons = document.querySelectorAll('.banner_icons')
    if(docContainer && docIcons){

        docContainer.addEventListener('mousemove' ,(event)=>{
            const rect = docContainer.getBoundingClientRect()
            const x = event.clientX - rect.left
            const y = event.clientY - rect.top
            const moveX = (x - rect.width / 2) / 15
            const moveY = (y - rect.height / 2) / 15

            docIcons.forEach((icon, i) =>{
                const speed = (i + 1) * 0.5
                icon.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`
            })
        })

        docContainer.addEventListener('mouseleave', ()=>{
            docIcons.forEach((icon) => {
              icon.style.transform = 'translate(0, 0)'
            })
        })
    }

    const header = document.querySelector('header')
    if(header){
        document.addEventListener('scroll', ()=>{
            if(scrollY > 10){
                header.classList.add('bg-white')
            }else{
                header.classList.remove('bg-white')
            }
        })
    }

    const faqs = document.querySelectorAll('.faq_container')
    
    if(faqs){
        faqs.forEach((faq) => {
        const answer = faq.querySelector('.answercont')
        const closeIcon = faq.querySelector('.close-faq')
        const openIcon = faq.querySelector('.open-faq')

        function faqIcon(){
        if (answer.classList.contains('open-answer')) {
            closeIcon.style.opacity = 1
            closeIcon.style.top = "50%"
            openIcon.style.opacity = 0
            openIcon.style.top = '50px'
        } else {
            closeIcon.style.opacity = 0
            closeIcon.style.top = "50px"
            openIcon.style.opacity = 1
            openIcon.style.top = '50%'
        }
        }
        faqIcon()

        faq.addEventListener('click', () => {

            faqs.forEach((otherFaq)=>{
                if (otherFaq !== faq) {
                const otherAnswer = otherFaq.querySelector('.answercont')
                const otherCloseIcon = otherFaq.querySelector('.close-faq')
                const otherOpenIcon = otherFaq.querySelector('.open-faq')
                otherAnswer.classList.remove('open-answer')
                otherCloseIcon.style.opacity = 0
                otherCloseIcon.style.top = "50px"
                otherOpenIcon.style.opacity = 1
                otherOpenIcon.style.top = "50%"
            }
            })

            answer.classList.toggle('open-answer')
            faqIcon()
        })

        })
    }

    const ctaIcons = document.querySelectorAll('.tech-man-icon')
    const ctaContainer = document.querySelector('.cta-section')
    if(ctaIcons && ctaContainer){
        ctaContainer.addEventListener('mousemove', (e) => {
            const rect = ctaContainer.getBoundingClientRect()
            const x = e.clientX - rect.left - rect.width / 2
            const y = e.clientY - rect.top - rect.height / 2

            ctaIcons.forEach((icon, i) => {
            const moveFactor = (i + 1) * 0.01
            icon.style.transform = `translate(${x * moveFactor}px, ${y * moveFactor}px)`
            })
        })
        ctaContainer.addEventListener('mouseleave', () => {
            ctaIcons.forEach((icon) => {
            icon.style.transform = 'translate(0, 0)'
            })
        })
    }

    const popForm = document.querySelector('.pop-form')
    const sendMessageButton = document.querySelectorAll('.send-message')

    if(sendMessageButton && popForm){
        const closeFormButton = popForm.querySelector('.close-form')
        sendMessageButton.forEach((button)=>{
            button.addEventListener('click', ()=>{
                window.scrollTo({ top: 0})
                popForm.classList.toggle('pop-view')
                document.body.style.overflow = 'hidden'
            })
            if (popForm.classList.contains('pop-view')) {
                document.body.style.overflow = 'hidden'
            } else {
                document.body.style.overflow = ''
            }
        })
        closeFormButton.addEventListener('click', ()=>{
            popForm.classList.toggle('pop-view')
            document.body.style.overflow = ''
        })
        popForm.addEventListener('click', (e)=>{
            if(e.target === popForm){
                popForm.classList.toggle('pop-view')
                document.body.style.overflow = ''
            }
        })
    }

    const otpInputs = document.querySelectorAll(".otp-container input")
    otpInputs.forEach((input, index) => {
        otpInputs[0].focus();
      input.addEventListener("input", (e) => {
        
        e.target.value = e.target.value.replace(/\D/g, "")

        if (e.target.value && index < otpInputs.length - 1) {
          otpInputs[index + 1].focus()
        }
      })

      input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && !input.value && index > 0) {
          otpInputs[index - 1].focus()
        }
      })
    })

    const otpForm = document.querySelector('.otp-form')
    const viewOtp = document.querySelectorAll('.view-otp')

    if(otpForm && viewOtp){
        const closeFormButton = otpForm.querySelector('.close-form')
        viewOtp.forEach((button)=>{
            button.addEventListener('click', ()=>{
                window.scrollTo({ top: 0})
                otpForm.classList.toggle('pop-view')
                document.body.style.overflow = 'hidden'
            })
            if (otpForm.classList.contains('pop-view')) {
                document.body.style.overflow = 'hidden'
            } else {
                document.body.style.overflow = ''
            }
        })
        closeFormButton.addEventListener('click', ()=>{
            otpForm.classList.toggle('pop-view')
            document.body.style.overflow = ''
        })
        otpForm.addEventListener('click', (e)=>{
            if(e.target === otpForm){
                otpForm.classList.toggle('pop-view')
                document.body.style.overflow = ''
            }
        })

        const verificationBox = document.querySelector('.otp-verification')
        const verifyButton = document.querySelector('.verify-otp')
        const otpContainer = document.querySelector('.otp-container')
        const editContainer = document.querySelector('.edit-container')
        const editNumber = document.querySelector('.edit-number')

        verifyButton.addEventListener('click', ()=>{
            otpContainer.querySelectorAll('input')[0].focus()
            verificationBox.classList.replace('flex', 'hidden')
            editContainer.classList.replace('hidden', 'flex')
            otpContainer.classList.replace('hidden', 'flex')
        })
        editNumber.addEventListener('click', ()=>{
            verificationBox.classList.replace('hidden', 'flex')
            editContainer.classList.replace('flex', 'hidden')
            otpContainer.classList.replace('flex', 'hidden')
        })
    }

    // SWIPER
    if(document.querySelector('.clinicSwiper')){
    const clinicSwiper = new Swiper(".clinicSwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }
    })
    }

    // SCROLL ANIMATIONS

    function scrollingElements(showClass,elementClass){
    if(elementClass.length != 0){
        const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
        entry.target.classList.add(showClass)
        }else{
        entry.target.classList.remove(showClass)
        null
        }
    })
    }, {
        threshold: 0.2
    })
    const elements = document.querySelectorAll(elementClass)
    elements.forEach((el)=>observer.observe(el))
    }
    }
    scrollingElements('left-show','.g-from-left')
    scrollingElements('right-show','.g-from-right')
    scrollingElements('bottom-show','.g-from-bottom')
    scrollingElements('card-show','.g-from-card')
})