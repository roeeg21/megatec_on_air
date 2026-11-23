/**
 * Megatec Modern Animations
 * Scroll-reveal effects and sticky header with backdrop blur
 * Uses IntersectionObserver for performance
 */

(function() {
  'use strict';

  // ============================================
  // SCROLL REVEAL ANIMATIONS
  // ============================================

  function initScrollReveal() {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Show all elements immediately if user prefers reduced motion
      document.querySelectorAll('.reveal, .reveal-fade, .reveal-scale').forEach(function(el) {
        el.classList.add('revealed');
      });
      return;
    }

    // Create IntersectionObserver
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -80px 0px', // Trigger 80px before element enters viewport
      threshold: 0.1
    };

    const revealObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Unobserve after revealing (one-time animation)
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all reveal elements
    document.querySelectorAll('.reveal, .reveal-fade, .reveal-scale').forEach(function(el) {
      revealObserver.observe(el);
    });
  }

  // ============================================
  // AUTO-ADD REVEAL CLASSES TO SECTIONS
  // ============================================

  function autoAddRevealClasses() {
    // Add reveal class to major sections if they don't have it
    const sectionSelectors = [
      '.products-grid',
      '.industries-grid',
      '.news-section',
      '.cta-section',
      'section h2.title',
      'section h2.title_he',
      '.page_container section'
    ];

    sectionSelectors.forEach(function(selector) {
      document.querySelectorAll(selector).forEach(function(el) {
        if (!el.classList.contains('reveal') &&
            !el.classList.contains('reveal-fade') &&
            !el.classList.contains('reveal-scale')) {
          el.classList.add('reveal');
        }
      });
    });

    // Add stagger to grid containers
    document.querySelectorAll('.products-grid, .industries-grid').forEach(function(grid) {
      grid.classList.add('reveal-stagger');
      // Add reveal to children
      Array.from(grid.children).forEach(function(child) {
        child.classList.add('reveal');
      });
    });
  }

  // ============================================
  // STICKY HEADER WITH BACKDROP BLUR
  // ============================================

  function initStickyHeader() {
    const header = document.querySelector('.header');
    if (!header) return;

    let lastScrollY = 0;
    let ticking = false;

    function updateHeader() {
      const scrollY = window.scrollY;

      if (scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      lastScrollY = scrollY;
      ticking = false;
    }

    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
      }
    }, { passive: true });

    // Initial check
    updateHeader();
  }

  // ============================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ============================================

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#' || targetId === '#!' || targetId.startsWith('#!')) return;

        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
          const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight - 20;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // ============================================
  // ENHANCED HOVER EFFECTS FOR CARDS
  // ============================================

  function initCardEffects() {
    // Add card-lift class to product and industry cards if not present
    document.querySelectorAll('.product-card-home, .industry-card, .news-card').forEach(function(card) {
      if (!card.classList.contains('card-lift')) {
        card.classList.add('card-lift');
      }
    });
  }

  // ============================================
  // INITIALIZE ALL
  // ============================================

  function init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', onReady);
    } else {
      onReady();
    }
  }

  function onReady() {
    autoAddRevealClasses();
    initScrollReveal();
    initStickyHeader();
    initSmoothScroll();
    initCardEffects();
  }

  // Start initialization
  init();

})();
