gsap.registerPlugin(Flip);

const links = document.querySelectorAll('.nav-item a');
const activeNav = document.querySelector('.active-nav')

links.forEach(link => {
  link.addEventListener('click', () => {
    // turns nav text back to white
    gsap.to(links, { color: 'white' });
    if (document.activeElement === link) {
      gsap.to(links, { color: '#385ae0' });
    }

    // move link line to active link
    const state = Flip.getState(activeNav)
    link.appendChild(activeNav)
    Flip.from(state, {
      duration: 0.5,
      absolute: true,
    })
  });
});