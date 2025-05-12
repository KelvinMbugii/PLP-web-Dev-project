# PLP-web-Dev-project

# Batian Travellers Website

A fully responsive travel website showcasing Batian Travellers' services, including travel offers, ideal destinations, testimonials, and more. The site is designed for both desktop and mobile platforms, featuring smooth navigation, theme toggle functionality, and email form submission.

## Project Structure
/batian-travelers
│
├── /Assets # Directory containing image assets
│ ├── Travels1.jpg  Background image for the header
│ ├── Travels3.jpg  Background image for the CTA section
│ ├── Travels5.jpg  Background image for the sub-header section
│ ├── Travels6.jpg  Image for ideal places section
│ ├── Travels7.jpg  Image for ideal places section
│ ├── Travels8.jpg  Image for ideal places section
│ └── User.png # Testimonial user image
│
├── index.html  Main page of the website
├── About.html  About page
├── Offers.html  Offers page
├── contact.html  Contact page
├── /index.css  Main CSS file containing styles for all sections
├── script.js  JavaScript file for menu toggle, theme switcher, and form handling
└── README.md  Project documentation (this file)

## Key Features

1. **Responsive Design**
   - The website adjusts its layout and elements based on the screen size (desktop and mobile).
   - Flexbox is used for layout management to ensure that elements align properly on various screen sizes.

2. **Navigation**
   - The header features a **sticky navigation bar** with links to Home, About, Offers, and Contact pages.
   - The navigation bar is responsive and turns into a side menu on mobile devices (via a hamburger icon).

3. **Theme Toggle**
   - The website has a **dark/light mode toggle** that allows users to switch themes.
   - The user's theme preference is saved in **localStorage** for persistence across sessions.

4. **Sections**
   - **Header**: Contains a background image, site title, tagline, and a CTA button to encourage users to book their travel.
   - **Offers Section**: Highlights different travel packages with varying durations and discounts.
   - **Ideal Places Section**: Showcases dream travel destinations with hover effects to display more information.
   - **Testimonials Section**: Displays user feedback with images and quotes.
   - **Footer**: Simple footer with company details.
   - **Contact Page**: Contains a form for submitting inquiries, with email functionality powered by **EmailJS**.

## Tools & Technologies

1. **HTML5**: Structure and semantics for the web pages.
2. **CSS3**: Styling for layout, colors, fonts, and responsiveness.
   - **Flexbox** for layout management.
   - **Media Queries** to make the website mobile responsive.
3. **JavaScript**: Adds interactivity, including:
   - Mobile menu toggle.
   - Theme toggle functionality.
   - Form handling using **EmailJS** to send messages.
4. **FontAwesome**: Icons for mobile menu and various sections (e.g., hamburger menu, close button).
5. **EmailJS**: For handling form submissions and sending email messages.


## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/KelvinMbugii/PLP-web-Dev-project.git

   
