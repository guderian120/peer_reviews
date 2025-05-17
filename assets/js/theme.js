// Initialize theme from localStorage or prefer-color-scheme
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 
                    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.body.classList.toggle('dark-mode', savedTheme === 'dark');
  updateThemeIcon();
}

// Update the theme icon
function updateThemeIcon() {
  const icon = document.querySelector("#theme-toggle i");
  if (document.body.classList.contains("dark-mode")) {
    icon.classList.replace("fa-moon", "fa-sun");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
  }
}

// Toggle theme
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem('theme', document.body.classList.contains("dark-mode") ? 'dark' : 'light');
  updateThemeIcon();
});

// Initialize on load
initTheme();