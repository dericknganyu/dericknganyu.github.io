/**
 * main.js — Application Logic
 *
 * Responsibilities:
 *  1. Render dynamic sections from window.SITE_DATA (projects, publications, talks)
 *  2. Sticky nav scroll-spy via IntersectionObserver
 *  3. Mobile hamburger menu toggle
 *  4. Dark mode button click handler (persists to localStorage)
 *  5. Footer copyright year injection
 *
 * Depends on: data.js (must be loaded before this script)
 */

(function () {
  'use strict';

  /* ------------------------------------------------------------------
     Utility helpers
  ------------------------------------------------------------------ */
  function $(selector, parent) {
    return (parent || document).querySelector(selector);
  }

  function $$(selector, parent) {
    return Array.from((parent || document).querySelectorAll(selector));
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* ------------------------------------------------------------------
     1. Render Projects
  ------------------------------------------------------------------ */
  function renderProjectCard(project) {
    var tagsHtml = (project.tags || [])
      .map(function (t) { return '<span class="tag">' + escapeHtml(t) + '</span>'; })
      .join('');

    var linksHtml = '';
    if (project.links) {
      var linkDefs = [
        { key: 'github', label: 'GitHub' },
        { key: 'paper',  label: 'Paper'  },
        { key: 'demo',   label: 'Demo'   }
      ];
      linkDefs.forEach(function (def) {
        if (project.links[def.key]) {
          linksHtml += '<a href="' + escapeHtml(project.links[def.key]) + '" class="card-link" target="_blank" rel="noopener noreferrer">' + def.label + '</a>';
        }
      });
    }

    var linksSection = linksHtml
      ? '<div class="project-card__links">' + linksHtml + '</div>'
      : '';

    return [
      '<article class="project-card">',
        '<h3 class="project-card__title">' + escapeHtml(project.title) + '</h3>',
        '<p class="project-card__desc">' + escapeHtml(project.description) + '</p>',
        '<div class="project-card__tags">' + tagsHtml + '</div>',
        linksSection,
      '</article>'
    ].join('');
  }

  function renderProjects() {
    var container = $('#projects-grid');
    if (!container) return;
    var data = window.SITE_DATA && window.SITE_DATA.projects;
    if (!data || !data.length) {
      container.innerHTML = '<p class="text-muted">No projects listed yet.</p>';
      return;
    }
    container.innerHTML = data.map(renderProjectCard).join('');
  }

  /* ------------------------------------------------------------------
     2. Render Publications
  ------------------------------------------------------------------ */
  function getBadgeClass(type) {
    var map = {
      journal:    'badge-journal',
      conference: 'badge-conference',
      preprint:   'badge-preprint'
    };
    return map[type] || 'badge-conference';
  }

  function formatPubDate(year) {
    return year ? String(year) : '';
  }

  function renderPublicationItem(pub) {
    var badge = '<span class="badge ' + getBadgeClass(pub.type) + '">' + escapeHtml(pub.type || 'article') + '</span>';

    var linksHtml = '';
    if (pub.doi)   linksHtml += '<a href="' + escapeHtml(pub.doi)   + '" class="pub-link" target="_blank" rel="noopener noreferrer">DOI</a>';
    if (pub.arxiv) linksHtml += '<a href="' + escapeHtml(pub.arxiv) + '" class="pub-link" target="_blank" rel="noopener noreferrer">arXiv</a>';

    var linksSection = linksHtml
      ? '<div class="pub-item__links">' + linksHtml + '</div>'
      : '';

    var venueYear = [pub.venue, formatPubDate(pub.year)].filter(Boolean).join(' · ');

    return [
      '<article class="pub-item">',
        '<div class="pub-item__badge">' + badge + '</div>',
        '<div class="pub-item__body">',
          '<p class="pub-item__title">' + escapeHtml(pub.title) + '</p>',
          '<p class="pub-item__authors">' + escapeHtml(pub.authors) + '</p>',
          '<p class="pub-item__venue">' + escapeHtml(venueYear) + '</p>',
          linksSection,
        '</div>',
      '</article>'
    ].join('');
  }

  function renderPublications() {
    var container = $('#publications-list');
    if (!container) return;
    var data = window.SITE_DATA && window.SITE_DATA.publications;
    if (!data || !data.length) {
      container.innerHTML = '<p class="text-muted">No publications listed yet.</p>';
      return;
    }
    // Sort by year descending
    var sorted = data.slice().sort(function (a, b) { return (b.year || 0) - (a.year || 0); });
    container.innerHTML = '<div class="publications-list">' + sorted.map(renderPublicationItem).join('') + '</div>';
  }

  /* ------------------------------------------------------------------
     3. Render Talks
  ------------------------------------------------------------------ */
  function getTalkBadgeClass(type) {
    var map = {
      invited:     'badge-invited',
      contributed: 'badge-contributed',
      poster:      'badge-poster',
      workshop:    'badge-workshop'
    };
    return map[type] || 'badge-contributed';
  }

  function formatTalkDate(dateStr) {
    if (!dateStr) return '';
    // dateStr is "YYYY-MM"
    var parts = dateStr.split('-');
    if (parts.length < 2) return dateStr;
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var month = months[parseInt(parts[1], 10) - 1] || '';
    return month + ' ' + parts[0];
  }

  function renderTalkItem(talk) {
    var badge = '<span class="badge ' + getTalkBadgeClass(talk.type) + '">' + escapeHtml(talk.type || 'talk') + '</span>';
    var meta = [talk.event, talk.location, formatTalkDate(talk.date)].filter(Boolean).join(' &middot; ');

    return [
      '<article class="talk-item">',
        '<div class="talk-item__badge">' + badge + '</div>',
        '<div class="talk-item__body">',
          '<p class="talk-item__title">' + escapeHtml(talk.title) + '</p>',
          '<p class="talk-item__meta">' + meta + '</p>',
        '</div>',
      '</article>'
    ].join('');
  }

  function renderTalks() {
    var container = $('#talks-list');
    if (!container) return;
    var data = window.SITE_DATA && window.SITE_DATA.talks;
    if (!data || !data.length) {
      container.innerHTML = '<p class="text-muted">No talks listed yet.</p>';
      return;
    }
    // Sort by date descending
    var sorted = data.slice().sort(function (a, b) {
      return (b.date || '').localeCompare(a.date || '');
    });
    container.innerHTML = '<div class="talks-list">' + sorted.map(renderTalkItem).join('') + '</div>';
  }

  /* ------------------------------------------------------------------
     4. Scroll Spy — Active Nav Link via IntersectionObserver
  ------------------------------------------------------------------ */
  function initScrollSpy() {
    var sections = $$('main section[id]');
    var navLinks = $$('.nav__links a[href^="#"]');
    if (!sections.length || !navLinks.length) return;

    var navHeight = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--nav-height') || '64',
      10
    );

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            navLinks.forEach(function (link) { link.classList.remove('active'); });
            var id = entry.target.id;
            var activeLink = $('.nav__links a[href="#' + id + '"]');
            if (activeLink) activeLink.classList.add('active');
          }
        });
      },
      {
        // Top offset = nav height so sections are considered active when their
        // top edge crosses the bottom of the sticky nav.
        // Bottom offset = -60% means only the top 40% of the viewport triggers.
        rootMargin: '-' + navHeight + 'px 0px -60% 0px',
        threshold: 0
      }
    );

    sections.forEach(function (section) { observer.observe(section); });
  }

  /* ------------------------------------------------------------------
     5. Mobile Hamburger Menu
  ------------------------------------------------------------------ */
  function initMobileMenu() {
    var header = $('.site-header');
    var hamburger = $('.nav__hamburger');
    var navLinks = $('.nav__links');
    if (!header || !hamburger || !navLinks) return;

    hamburger.addEventListener('click', function () {
      var isOpen = header.classList.toggle('nav-open');
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      hamburger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });

    // Close menu when a nav link is clicked
    navLinks.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        header.classList.remove('nav-open');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-label', 'Open menu');
      }
    });

    // Close menu on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && header.classList.contains('nav-open')) {
        header.classList.remove('nav-open');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-label', 'Open menu');
        hamburger.focus();
      }
    });
  }

  /* ------------------------------------------------------------------
     6. Dark Mode Toggle
  ------------------------------------------------------------------ */
  function initThemeToggle() {
    var btn = $('#theme-toggle');
    if (!btn) return;

    btn.addEventListener('click', function () {
      var html = document.documentElement;
      var current = html.getAttribute('data-theme');
      var next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      try {
        localStorage.setItem('theme', next);
      } catch (e) {
        // Ignore if localStorage is unavailable
      }
      // Update aria-label
      btn.setAttribute('aria-label', next === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    });

    // Set initial aria-label based on current theme
    var current = document.documentElement.getAttribute('data-theme');
    btn.setAttribute('aria-label', current === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }

  /* ------------------------------------------------------------------
     7. Footer Year
  ------------------------------------------------------------------ */
  function setFooterYear() {
    var el = $('#footer-year');
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ------------------------------------------------------------------
     Init — run everything after DOM is ready
  ------------------------------------------------------------------ */
  function init() {
    renderProjects();
    renderPublications();
    renderTalks();
    initScrollSpy();
    initMobileMenu();
    initThemeToggle();
    setFooterYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // DOM already parsed (scripts at end of body)
    init();
  }

}());
