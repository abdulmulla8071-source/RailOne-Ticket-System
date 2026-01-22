# 🚆 RailOne Ticket Booking System

RailOne Ticket System is a full-stack web application developed to provide an online railway ticket booking experience.  
This system allows users to create an account, login securely, book railway tickets, book platform tickets, view their profile, and access information about the system.

The project is designed to understand real-world full-stack development using Node.js, Express.js, MongoDB, and frontend web technologies.

---

## 🔧 Technologies Used

Frontend: HTML, CSS, JavaScript  
Backend: Node.js, Express.js  
Database: MongoDB  

---

## 🔁 Complete Project Workflow & Features

### 🔐 User Login
After successful login, the user is redirected to the *Train Home Page*.

---

### 🏠 Train Home Page
The home page contains a navigation menu with the following options:

- Journey Ticket
- Platform Ticket
- Booking History
- Profile
- About

All ticket-related operations are accessible from this home page.

---

## 🚆 Journey Ticket Booking Process

1. User selects *Journey Ticket* from the home page.
2. User enters journey details:
   - From Station
   - To Station
3. User proceeds to the *Fare Page*.
4. On the fare page, user fills required passenger details.
5. System displays train and fare details.
6. User clicks on *Book Ticket*.
7. User is redirected to the *Payment Page*.
8. User selects *UPI payment method*.
9. User scans the QR code.
10. After successful payment, a *Payment Successful* alert is shown.
11. User clicks the *OK* button.
12. User is redirected to the *Train Ticket Receipt Page*.
13. User can view complete ticket details.

---

## 🚉 Platform Ticket Booking Process

1. User selects *Platform Ticket* from the home page.
2. User enters platform ticket details:
   - Station Name
   - Number of Persons
   - Payment Method
3. User clicks on *Book Platform Ticket*.
4. User is redirected to the *Platform Payment Page*.
5. Platform ticket details are displayed.
6. User clicks the *Next* button.
7. A *Payment Successful alert box* appears.
8. User clicks the *OK* button.
9. User is redirected to the *Platform Ticket Receipt Page*.
10. User can view the platform ticket receipt.

---

## 📜 Booking History

1. User selects *Booking History* from the home page.
2. User can view all previously booked:
   - Journey Tickets
   - Platform Tickets
3. User clicks on *View* option.
4. Ticket receipt is displayed.
5. User can *download the receipt* for future use.

---

## 👤 Profile Section

- User can view personal profile information.
- Displays user account details.

---

## ℹ️ About Section

- Displays complete information about the *RailOne Ticket System*.
- Provides system overview and project description.

---

## ⚙️ System Highlights

- Full authentication-based system
- Secure ticket booking flow
- Separate journey and platform ticket modules
- Digital ticket receipt generation
- Booking history management
- Clean and user-friendly interface
- MongoDB database integration
- Node.js and Express.js backend handling

---

## 📂 Project Folder Structure
RailOne-Ticket-System
│
├── public
│   ├── css
│   ├── js
│   └── images
│
├── views
│   ├── signup.html
│   ├── login.html
│   ├── booking.html
│   ├── platformTicket.html
│   ├── profile.html
│   └── about.html
│
├── routes
│   ├── authRoutes.js
│   ├── bookingRoutes.js
│   └── userRoutes.js
│
├── models
│   ├── userModel.js
│   └── ticketModel.js
│
├── server.js
├── package.json
├── README.md
└── .gitignore

---

## ⚙️ Installation and Setup

Follow the steps below to run the project on your local system.

Step 1: Install Node.js  
Download and install Node.js from https://nodejs.org

Step 2: Clone the repository  

```bash
git clone https://github.com/abdulmulla8071/RailOne-Ticket-System.git

---
 Step 3: Open the project folder:
After cloning, open the project folder using the following command:

Bash
cd RailOne-Ticket-System

---
Step 4: install project dependensies:
npm install

---
Step 5:Configure MongoDB:
mongodb://localhost:27017/railone

---
Step 6: Start the Server:
npm start
or
node server.js

---
Step 7: Open in browser:
http://localhost:3000 (for example)

---
🔐 Environment Variables (Optional)
Create a .env file in the root directory:
PORT=3000
MONGODB_URI=your_mongodb_connection_string

**🙏***

----
---

## 🚀 *Future Enhancements*

- Online payment gateway integration  
- Live seat availability system  
- Ticket download in PDF format  
- Email and SMS ticket confirmation  
- Admin dashboard for managing trains and users  
- Booking history and cancellation feature  
- Improved UI/UX design  

---

## 👨‍💻 *Developer Details*

*Developer Name:* Abdul Maheboob Mulla  
*Ed.Course:* Computer Science  
*Project Name:* RailOne Ticket Booking System  
*Technology Stack:* HTML, CSS, JavaScript, Node.js, Express.js, MongoDB  

*GitHub Profile:*  
https://github.com/abdulmulla8071  

---

## 📘 *Conclusion*

RailOne Ticket Booking System is a complete full-stack web application developed for learning and academic purposes.  
This project helped in understanding real-world concepts such as user authentication, backend development, database connectivity, and ticket booking workflow.

Through this project, practical knowledge of Node.js, Express.js, and MongoDB was gained, making it a strong foundation for future full-stack development projects.

---

✨ **Thank you for taking the time to explore this project.  
Your support and feedback are always appreciated.** 🚀
