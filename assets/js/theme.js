/**
 * theme.js — Dark Mode Flash Prevention
 *
 * IMPORTANT: This script is loaded synchronously in <head> (no defer, no async).
 * It runs before the first paint to prevent a flash of the wrong color scheme.
 *
 * Logic:
 * 1. Check localStorage for a saved theme preference.
 * 2. If none, fall back to the OS prefers-color-scheme.
 * 3. Set data-theme on <html> immediately.
 * 4. Add .no-transition class to suppress CSS transitions during initial apply,
 *    then remove it after first paint so transitions work normally thereafter.
 */
(function () {
  // Read saved preference or detect system preference
  var saved = null;
  try {
    saved = localStorage.getItem('theme');
  } catch (e) {
    // localStorage may be unavailable (private browsing, security policies)
  }

  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  var theme = saved || (prefersDark ? 'dark' : 'light');

  // Apply theme before paint
  document.documentElement.setAttribute('data-theme', theme);

  // Suppress transitions during the initial apply to prevent
  // all elements flashing their transition colors on page load
  document.documentElement.classList.add('no-transition');

  // Remove .no-transition after the browser has completed one paint frame
  // Using double rAF to ensure the class is removed after paint, not before
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      document.documentElement.classList.remove('no-transition');
    });
  });
}());
