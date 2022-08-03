// animate patterend sections on scroll into view
const callback = (entries) => 
  entries.forEach(entry => 
    entry.isIntersecting && entry.target.classList.add('show')
  );

const observer = new IntersectionObserver(callback);
const animate = document.querySelectorAll('.fade-in');
animate.forEach(div => observer.observe(div));