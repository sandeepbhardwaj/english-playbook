export function initBaseLayout() {
  const mobileNavToggle = document.querySelector<HTMLButtonElement>('[data-mobile-nav-toggle]');
  const mobileNav = document.querySelector<HTMLElement>('[data-mobile-nav]');
  const backToTopButton = document.querySelector<HTMLButtonElement>('[data-back-to-top]');

  if (mobileNavToggle && mobileNav) {
    const closeMobileNav = () => {
      mobileNav.classList.remove('is-open');
      mobileNavToggle.setAttribute('aria-expanded', 'false');
    };

    mobileNavToggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('is-open');
      mobileNavToggle.setAttribute('aria-expanded', String(isOpen));
    });

    mobileNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMobileNav);
    });

    document.addEventListener('click', (event) => {
      const target = event.target;

      if (!(target instanceof Node)) {
        return;
      }

      if (!mobileNav.contains(target) && !mobileNavToggle.contains(target)) {
        closeMobileNav();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeMobileNav();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        closeMobileNav();
      }
    });
  }

  if (backToTopButton) {
    const toggleBackToTop = () => {
      backToTopButton.classList.toggle('is-visible', window.scrollY > 420);
    };

    backToTopButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    toggleBackToTop();
    window.addEventListener('scroll', toggleBackToTop, { passive: true });
  }
}
