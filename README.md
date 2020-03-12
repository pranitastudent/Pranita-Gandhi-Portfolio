[Portfolio](https://pranita-gandhi.netlify.com/)

# Pranita Gandhi Portfolio

## Project Entrails

<p> Welcome to my portfolio. The portfolio allows the user to learn: About Me, Skills, visualise my projects (view site and code) and contact me, view my social media presence and download my CV as needed.</p>

## UX Design - User Experience

<p> The user can view my portfolio on all media devices: desktop, laptop, mobile, 4K television screens without compromise in resolution or pixilation. The user can view : about me ( details who I am and what I do), work history through a timeline, Skills Set (Visually appealing through spinning chips with images), projects (visually appealing through flip cards to view a screen shot of my project and technologies used) and additionally the user can view the code/site through buttons. The user is able to Contact me via the Contact Form or email address at the bottom. Additionally the user can download my CV if they wish to.</p> 

## User Stories
<ul>
<li>As a recruiter/user I should be able to view the website on all browsers and media types: desktop, laptops, mobiles and widescreen television screens without compromise in resolution or pixilation.</li>
<li> As a recruiter/user I should be able to navigate easily through the website : Home, About, Skills, Projects and Contact divisions.</li>
<li> As a recruiter/user I should be notified if the contact form has been submitted successfully.</li>
</ul>

## Wireframes

<p> The wireframes for the website were created in Balsamiq and can be found at:

 [wireframes](). Each wireframe contains three mock-ups which include; desktops and for responsive design; tablets and mobiles.</p>

## Features

### Existing Features

<ul>
<li> Fixed Navbar: Home, About, Skills, Projects, Contact sections - all easy to navigate due to fixed navbar and smooth scroll implementation (scroll spy).</li>
<li> Home: The user is able to click on the fixed navbar or back-to the top button to return to the home showcase image.</li>
<li> About: The user is able to click on the fixed navbar or back-to the top button to return to the about section : work history (timeline), photo of me and textual description of personal summary.</li>
<li> Skills: The user is able to click on the fixed navbar or back-to the top button to return to the skills section. Each skill is a chip element. The user able to hover each image to spin it. </li>
<li> Projects: The user is able to click on the fixed navbar or back-to the top button to return to the projects section. Each project is a card element which flips back and forth. The front side shows an image of the project and back end shows the technologies used. Underneath each card, two buttons are present : View Code and View Site for the user to view code  respectively.</li>
<li>Contact: The user is able to click on the fixed navbar or back-to the top button to return to the contacts section. The contact form contains inbuilt html form validation and uses EmailJS to send data. Once the form is submitted an alert pops up to let the user know the form has been submitted.</li>
<li> Back-to-the-top-button: User can scroll back to the top using the back to the top button </li> 
</ul>

### Features to implement
<ul>
<li> Further CSS animations of transition and transformation to be added to flip cards. </li>
</ul>

## Technologies Used

<p> The Portfolio is a static Front-End website which uses: HTML5, CSS3, jQuery, JavaScript and Materialize 0.100.2 as a Front-End framework. </p>

### IDE

<ul>
<li><a href="https://code.visualstudio.com/">Visual Studio Code</a></li>Visual Studio Code was used as the chosen IDE and all code was written in Visual Studio Code.
</ul>

### Front-end Technologies and Frameworks

<ul>

<li><a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"> HTML5 </a></li> HTML 5 was used to create the structure of webpage with the necessary elements.
<li><a href="https://www.w3.org/Style/CSS/Overview.en.html"> SASS </a></li> SASS was used to write custom SCSS styles which are complied by Node into CSS the webpage with the necessary attributes.
<li><a href="https://nodejs.org/en/"> Node.JS </a></li> Node.JS is used a complier for SASS to compile SCSS to CSS.
<li><a href="https://materializecss.com/"> Materialize 0.1.00.2 </a> </li>  The Materialize framework is used to style the webpage alongside custom CSS and the grid system is adhered to.
<li><a href ="https://www.javascript.com/">JavaScript</a></li> JavaScript was used to write the send function for the contact form and create the typewriter effect.
<li><a href = "https://jquery.com/">JQuery</a></li>JQuery is used to create the back-to-the top button function and date function enabling the website to contain appropriate year date. 
<li><a href="https://fontawesome.com/">Font Awesome</a></li> Font Awesome is used to add icons to text to make it visually appealing.

</ul>

### Version Control

<ul>

<li><a href = "https://git-scm.com/">Git</a></li>Git is used as a version control system to add, commit and push files to the local repository.

</ul>

### Deployment

<li><a href ="https://pranita-gandhi.netlify.com/">Pranita | Portfolio</a> Netlify is used as a free server to deploy the static Front-End website. 


## Testing Code

<ul>

<li><a href = "https://validator.w3.org/">WC3 Mark-up Validation Service</a></li> WC3 was used to validate HTML Code.
<li><a href = "https://jigsaw.w3.org/css-validator/">WC3 CSS Validation Service</a></li> WC3 CSS was used to validate CSS Code.
<li><a href ="https://pypi.org/project/autopep8/">autopep8</a></li> autopep8 was used confirm python code to the PEP8 standard. 
<li><a href = "https://jshint.com/">JS Hint</a></li>JS Hint was used to validate JavaScript and JQuery.

</ul>

## Responsive Design Testing

The website was tested on various screen sizes which include mobile and tablet devices. The website was found to be fully functional and has been tested on the following browsers:

<ul>
<li>Google Chrome </li>
<li> Microsoft Edge </li>
<li> Opera</li>
<li> Mozilla Firefox</li>
</ul>

The website was testing on the following devices and found to display code elements and attributes correctly without compromising pixilation of images. 

<ul>
<li> Desktop </li>
<li> Laptop with HiDPI</li>
<li> Laptop with MDPI </li>
<li> Pixel 2 </li>
<li> Pixel 2L </li>
<li> Galaxy S5 </li>
<li> iPhone 5/SE  </li>
<li> iPhone 6/7/8 </li>
<li> iPhone 6/7/8 plus </li>
<li> iPhone X </li>
<li> iPad </li>
<li> iPad Mini </li>
<li> iPad Pro </li>
</ul>

### Contact Form - Manuel Testing

<ol>
<li> User tries to submit form with no data entered - warning message flashes on name field to enter data.</li>
<li> User tries to submit form with only name entered - warning message flashes on email field (required field).</li>
<li> User tries to submit form with only name and email entered - warning message flashes on message field (required field).</li>
<li> User enters data in all required fields - name, email and message - form submits and alert flashes up to inform successful submission. Once clicked on the form refreshes. </li>
</ol>

### Responsive Design

<p>On mobile view elements stack on top of each as required for example: about me on top of skills. </p>

## Testing User Stories

<ul>
<li> The recruiter/user is able to navigate through all links smoothly using back-to-the top button and fixed navbar. </li>
<li> The recruiter/user is able to easily fill the contact form and alerts flash up if data is missed or incorrect through HTML form validation. </li>
<li> The recruiter/user is alerted if the form is submitted successfully and if the form fails to submit through alerts. </li>
<li> The recruiter/user is able to view skills in a visually pleasingly way through spinning chip elements.</li>
<li> The recruiter/user is able to view the code and site of the 2 Front-End projects and 2 Back-Projects. The user is able to easily grasp the main technologies used as shown on the back of each card and view a screenshot of the projects on the front of each card.</li>
<ul>

