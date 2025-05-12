/*----------------- Javascript for Toggle Menu -----------------*/
var navLinks = document.getElementById("nav-links");
function showMenu(){
    navLinks.style.right = "0";
}
function hiddemenu(){
    navLinks.style.right = "-200px";
}


/* ------------- Form Handler -------------*/

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_3wwq5y3';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
/*----------------------- Toggle Theme for the form in the contact page--------------------------*/
document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("theme-toggle");
  
    if (!toggleBtn) {
      console.error("Theme toggle button not found.");
      return;
    }
  
    // Apply saved theme
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
    const applyTheme = (isDark) => {
      document.body.classList.toggle("dark-theme", isDark);
      localStorage.setItem("theme", isDark ? "dark" : "light");
      toggleBtn.textContent = isDark ? "Light Mode" : "Dark Mode"; // text shows next mode
      toggleBtn.setAttribute("aria-pressed", isDark.toString());
    };
  
    applyTheme(savedTheme === "dark" || (!savedTheme && prefersDark));
  
    toggleBtn.addEventListener("click", () => {
      const isCurrentlyDark = document.body.classList.contains("dark-theme");
      applyTheme(!isCurrentlyDark); // switch mode
    });
  });
  