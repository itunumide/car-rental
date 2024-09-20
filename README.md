# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



RESET PASSWORD AND VERIFY ACCOUNT DOCUMENTATION
Created the reset_password-verify_account branch.
Created a folder forgotPassword inside pages folder which contains:

- LoginPlaceholder.jsx file. This is supposed to temporarily act as the Login page, since at the time of my     cloning wasn't available. I need to test the forget password in it to link to ResetPassword route. Once Login route is up, I will take out LoginPlaceholder.
- RequestEmail.jsx - 
- EmailSent.jsx
- ResetPasswordForm.jsx
-SuccessPage.jsx

Edited the App.jsx file to render the above routes, I also added handleSuccess and handleResend functions. The handleSuccess function saves the email (passed as prop from RequestEmail) of user upon success of reset password mail sent to their email, and redirects to next page in the flow. handleResend function handles resending the mail, in case user requests for a resend

Added custom colors to tailwind.config.js, since the color in use for this project - #FFCA08 isn't in tailwind docs. 