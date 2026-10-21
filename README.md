# HRFlow – HR Management Dashboard Documentation

HRFlow is a responsive HR management dashboard UI template built with HTML5, CSS3, JavaScript, Bootstrap 5, jQuery, Font Awesome, and Google Fonts.


## 1. Package Structure


HRFlow/
│
├── index.html            # Login page and account-related modals
├── dashboard.html        # Main HR dashboard
├── employees.html        # Employee management page
├── attendence.html       # Attendance tracking page
├── paroll.html           # Payroll management page
├── leave.html            # Leave management page
├── recruitment.html      # Recruitment page
├── performance.html      # Performance tracking page
├── holidays.html         # Holiday calendar page
├── inbox.html            # Messages page
├── assest.html           # Asset management page
│
├── style.css             # Custom styles and layout
├── script.js             # Frontend JavaScript logic
│
└── assets/
    └── logo.png          # Brand logo

    Note: Keep the original filenames unchanged because the navigation links refer to these exact filenames.

## 2. Installation and Setup

    Extract the downloaded HRFlow.zip file.

    Open the extracted HRFlow folder.

    Keep the original folder structure and filenames unchanged.

    Open index.html in a modern browser, such as Google Chrome, Mozilla Firefox, Microsoft Edge, or Safari.

    Navigate between the dashboard pages using the sidebar menu.

    Local Development: Open the project folder in Visual Studio Code and run it using the Live Server extension.

    Internet Requirement: Bootstrap, jQuery, Font Awesome, and Google Fonts are loaded through CDN links. An active internet connection is required to load these external resources correctly.

## 3. Configuration and Customization

HRFlow is a static HTML template and does not require a separate configuration file.

A. Page Content

Open the relevant HTML file in a code editor to update page content, headings, labels, tables, and other interface elements.

    Edit index.html to customize the login page.

    Edit dashboard.html to customize the dashboard.

    Edit employees.html to customize the employee management page.

    Edit leave.html to customize the leave management page.

B. Brand Logo

The logo image is located at: assets/logo.png

    To replace the logo, add your image to the assets folder and keep the filename logo.png.

    If you use a different filename or location, update the corresponding image path in the HTML files.

C. Styles and Fonts

The main custom stylesheet is style.css. Edit this file to customize:

    Colors and backgrounds

    Typography and font sizes

    Spacing and layout

    Buttons, cards, and other UI elements

    Responsive styling

    The template uses the Plus Jakarta Sans font from Google Fonts.

D. Login Page and Forms

The login page is index.html. It contains the login form and account-related modals. Relevant element IDs include:

    Login form: loginForm

    Login ID field: loginId

    Password field: password

    CAPTCHA field: captcha

    Forgot-password modal: forgotPassModal

    Password-reset email field: resetEmail

    Registration modal: registerModal

    Registration fields: regName, regEmail, and regPass

To customize these forms, edit the corresponding HTML elements in index.html.

E. JavaScript

The main JavaScript file is script.js. Use this file to modify or extend the frontend interactions implemented in the template.

    Tip: When changing form element IDs or classes, check whether the corresponding selectors are also used in script.js and update them as needed.

F. Sidebar Navigation

The dashboard pages use a sidebar for navigation (<aside id="sidebar">). To change navigation labels or destinations, edit the corresponding sidebar markup in the relevant HTML files.

The navigation uses these exact page filenames:

    dashboard.html

    employees.html

    attendence.html

    paroll.html

    leave.html

    recruitment.html

    performance.html

    holidays.html

    inbox.html

    assest.html

Keep the filenames and relative paths consistent to ensure the navigation links work correctly.

## 4. External Dependencies

Dependency	Version / Resource	Purpose
Bootstrap	5.3.0	Responsive layout and UI components
jQuery	3.7.1	JavaScript library
Font Awesome	6.5.1	Icons
Google Fonts	Plus Jakarta Sans	Typography

These resources are loaded through CDN links in the HTML files. If you change a dependency version, update the relevant CDN URL.

## 5. Backend Integration

HRFlow is a frontend UI template. It does not include a backend server or database configuration. To implement live application functionality, you can connect the frontend to your own backend using technologies such as Node.js, PHP, Python, or another suitable framework.

Possible integrations include:

    User authentication

    Employee records and database management

    Payroll processing

    Leave request management

    Recruitment data management

    Note: Backend integration requires additional development. Configure the relevant form handlers and API requests in script.js and connect them to your backend endpoints as needed.

## 6. Troubleshooting

Page or navigation link does not open

    Confirm that the relevant HTML file exists.

    Check that its filename matches the link exactly.

    Keep all HTML files in the same project folder unless you update the paths.

Logo does not appear

    Confirm that the image exists at assets/logo.png.

    Check the image path in the relevant HTML file.

Styles or icons do not load

    Confirm that style.css exists in the project folder.

    Check your internet connection for CDN-hosted resources.

    Verify the dependency URLs in the HTML files.

JavaScript interactions do not work

    Confirm that script.js exists in the project folder.

    Check that the HTML files reference the correct script path.

    Inspect the browser developer console for JavaScript errors.
