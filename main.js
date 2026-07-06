/* WeCraft Solutions site — dependency-free progressive enhancement. */
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
document.body.classList.add('js');

/* scroll reveals */
{
  const items = document.querySelectorAll('[data-h]');
  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('in'));
  } else {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          const el = e.target;
          setTimeout(() => el.classList.add('in'), (i % 4) * 80);
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    items.forEach((el) => io.observe(el));
  }
}

/* nav: scrolled state + mobile toggle */
{
  const nav = document.getElementById('nav');
  if (!nav.classList.contains('scrolled')) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('on');
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => {
        toggle.classList.remove('on');
        links.classList.remove('open');
      })
    );
  }
}
