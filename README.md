# My Portfolio

#### Video Demo: <URL HERE>

## Description

This updated portfolio website was developed as my final project for CS50. I took the opportunity to rebuild my portfolio by leveraging the tools and concepts acquired throughout the course, applying both foundational and advanced web development skills. The site is entirely client-side and deployed using GitHub Pages (github.io), which offers a reliable and free hosting solution suitable for static websites. Moving forward, I plan to purchase a custom domain and potentially implement backend functionality to enhance the site’s capabilities, such as server-side data handling and user authentication. For now, I’m pleased with the significant improvements compared to my previous portfolio in terms of design, functionality, and maintainability.

The project utilizes HTML, CSS, and JavaScript. While I had prior experience with HTML and CSS, my exposure to JavaScript was limited before this project. This experience allowed me to deepen my understanding of JavaScript fundamentals, including DOM manipulation, event handling, and asynchronous operations, enabling me to implement dynamic and interactive features that enhance user experience.

The site architecture consists of five main HTML pages along with two base files for the header and footer components. Since I didn’t have access to server-side templating engines like Jinja, I used JavaScript to dynamically inject the header and footer into each page. This strategy not only promotes maintainability by centralizing shared UI components but also ensures consistent design and behavior across the site, reducing code duplication and easing future updates.

For styling, I combined CSS with Bootstrap, taking advantage of Bootstrap’s responsive grid system and pre-built components to accelerate development while maintaining a clean, professional appearance. ChatGPT provided valuable guidance on organizing styles effectively to avoid redundancy and improve scalability. Given the potential complexity of CSS in larger projects, I prioritized keeping styles modular, well-structured, and documented to prevent style conflicts and facilitate ongoing maintenance.

Significant effort was also dedicated to responsive design, ensuring optimal functionality and appearance across a wide range of devices, from large desktop monitors to small mobile screens. For viewport widths under 768px, I applied a comprehensive set of layout and style modifications. These included enhancing the navigation bar for improved touch usability, adjusting typography for better readability on smaller screens, restructuring the contact form to fit narrow layouts without sacrificing accessibility, and redesigning the table on the About page to maintain clarity and usability on mobile devices.

## 🔧 Key Features and Functionality

This project was primarily focused on exploring JavaScript. Here are some of the features I implemented:

1. **Header/Footer Injection**  
   Utilized JavaScript to dynamically inject the header and footer into each HTML page, implementing a DRY (Don't Repeat Yourself) methodology on a static frontend. This approach improves maintainability and consistency across the site without relying on server-side templating. The injection is done on page load, ensuring that any updates to these components are automatically reflected site-wide.

2. **Resume Download**  
   Implemented a direct download feature for my resume in PDF format using a standard anchor tag with appropriate attributes to ensure compatibility and ease of access across all modern browsers. This feature allows potential employers or collaborators to easily save or print my resume from the site.

3. **Active Page Highlighting**  
   Developed a script to detect the current URL path and dynamically apply an "active" class to the corresponding navigation link. This visual cue improves user orientation and navigation clarity, making it immediately obvious which section of the site they are currently viewing.

4. **Dynamic Navbar Styling**  
   Added scroll-based event listeners in JavaScript to toggle the navbar's background color based on scroll position. This creates a visually adaptive experience—keeping the navbar transparent at the top of the page to maximize content visibility and turning it black as the user scrolls to enhance readability and navigation prominence.

5. **Responsive Paragraph Collapsing**  
   Developed a feature using JavaScript to collapse long paragraphs into toggleable sections on smaller screens. This approach maintains content accessibility while preventing information overload on mobile devices, resulting in a cleaner and more manageable interface.

6. **Client-Side Email Sending**  
   Integrated EmailJS to handle form submissions entirely on the client side, enabling users to send emails directly through the website without needing a backend server. I implemented form validation to improve data integrity and configured security measures within EmailJS to mitigate spam and abuse risks typically associated with client-side email handling.

## Final Thoughts

This project went smoothly and was a rewarding way to apply everything I learned in CS50. The course gave me a much deeper understanding of how computers and the web work, particularly the client-server model, front-end development, and programming fundamentals. I feel significantly more confident building functional, interactive websites that are both user-friendly and maintainable. Moving forward, I look forward to expanding this portfolio by adding backend support and further refining the design and features. I’m excited to continue building on this foundation and explore more advanced technologies to create even richer web experiences.
