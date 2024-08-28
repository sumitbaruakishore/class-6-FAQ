const faqs = Array.from(document.querySelectorAll('.faq'))

const faqToggle = (event) => {
  const currentTarget = event.currentTarget;

  if (currentTarget.classList.contains('active')) 
  {
    faqs.map((faq) => faq.classList.remove('active'))
  } 
  else 
  {
    faqs.map((faq) => faq.classList.remove('active'))
    currentTarget.classList.add('active');
  }


}

faqs.map((faq) => faq.addEventListener('click', faqToggle))