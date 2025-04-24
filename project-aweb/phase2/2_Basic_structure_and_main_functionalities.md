# Project Phase 2 - Basic Structure and Main Functionalities

## 1. Environment

### Local Development
The development environment used for the project is based on the following tools and technologies:

- **Operating System**: macOS
- **IDE/Editor**: Visual Studio Code
- **Version Control**: Git (with GitHub for repository management)
- **Backend Technologies**: Node.js, Express.js
- **Frontend Technologies**: React.js, Axios
- **Database**: PostgreSQL
- **Other Tools**: npm (for package management), dotenv (for environment variable management)

### Cloud Deployment
The application is deployed to Azure, leveraging the platform’s scalability and robustness for web hosting and database management.

**Azure Addresses:**
- **Frontend URL:** [https://dogs-language-app.azurestaticapps.net]([https://dogs-language-app.azurestaticapps.net](https://white-sea-005d2ea03.6.azurestaticapps.net/))
- **Backend URL:** [https://dogs-language-backend.azurewebsites.net](https://dogs-language-backend.azurewebsites.net)
- **Database:** Connected to Azure PostgreSQL for users information and efficient dog fact storage and retrieval.

## 2. Backend

**Hosted on GitHub:** [https://github.com/yourusername/dogfacts-backend]([https://github.com/yourusername/dogfacts-backend](https://github.com/ChenjingZhuang/backend-))

### **API Setup**
The backend of the Dog’s Language project is powered by **Express.js** to handle requests and **PostgreSQL** as the database. The server has a simple structure with two key routes: registration and login.

- **Register Route**: The `/register` endpoint allows users to register by sending an email and password. Passwords are hashed using **bcrypt** before being stored in the database.
- **Login Route**: The `/login` endpoint verifies user credentials by comparing the provided password with the hashed password stored in the database.

### **Database Connection**
- The backend connects to **PostgreSQL** using the `pg` library and utilizes **connection pooling** for efficiency. Upon server startup, the backend logs a success message once the connection to the database is established.

### **Code Example**:
```js
const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});

pool.connect()
    .then(() => console.log('Connected to PostgreSQL database'))
    .catch((err) => {
        console.error('Failed to connect to PostgreSQL:', err.stack);
        process.exit(1);
    });
```

---

## 3. Frontend

The frontend is built using **React.js**, which handles the user interface of the Dog’s Language project. The main components include:

- **Login and Register Pages**: Simple forms for user registration and login with input fields for email and password.
- **Search Bar**: A search feature to search for dog facts, accessible from the main page.
- **Navigation**: Tabbed navigation for different sections, such as “Body Language” and “Different Sounds”.
- **Authentication**: When users click on login/register, they are routed to the respective pages where they can enter their credentials.

### **Code Example**:
```jsx
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginPage from './LoginPage'; // Assuming LoginPage is created
import RegisterPage from './RegisterPage'; // Assuming RegisterPage is created

function App() {
    const [activeTab, setActiveTab] = useState('');
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <Router>
            <div className="app">
                <header className="header">
                    <h1>Interesting facts about Dog’s Language</h1>
                </header>
                <div className="auth-buttons">
                    <Link to="/login"><button className="auth-button">Login</button></Link>
                    <Link to="/register"><button className="auth-button">Register</button></Link>
                </div>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Routes>
            </div>
        </Router>
    );
}
```

---

## 4. Database

The database schema includes a `users` table for storing user data (email, password). Currently, the schema is set to use `username` for registration and login, but it needs to be changed to `email`.

### **Current Schema**:
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password TEXT NOT NULL
);
```

### **Planned Changes**:
- Change `username` to `email` as the unique identifier for users.
- Use the following SQL command to alter the table:

```sql
ALTER TABLE users
RENAME COLUMN username TO email;
```

---

## 5. Basic Structure and Architecture

The architecture follows a **client-server model**, with the **backend** handling API requests (authentication, fetching dog facts) and the **frontend** displaying the content and handling user interaction.

- **Frontend**: Built using React.js, responsible for rendering the UI and handling user input.
- **Backend**: Built with Express.js, managing the routes for user registration, login, and fetching dog facts from an external API.

The project follows a modular structure with a clear separation of concerns between the frontend and backend. 

---

## 6. Functionalities

### **User Registration**
- Users can register by providing an email and password. The password is hashed before storage in the database.

### **User Login**
- Users can log in by entering their email and password. The system verifies the email and checks the provided password against the stored hash.

### **Dog Facts API**
- The backend fetches data from an external dog facts API and returns the information to the frontend.

---

## 7. Code Quality and Documentation

### **Code Structure**
- The backend code is organized into modules, with separate files for routes, controllers, and database queries. The frontend uses a clean structure with components for each feature (e.g., Login, Register, Search).

### **Documentation**
- Each function is documented with inline comments explaining its purpose. There is also a **README.md** in the root of the project explaining the setup and usage.

---

## 8. Testing and Error Handling

### **Error Handling**
- Backend routes handle errors using `try/catch` blocks. Any errors are logged to the console, and the client receives an appropriate status code (e.g., 400 for bad requests, 500 for server errors).

### **Testing**
- Testing will be added in the later phases, using tools like **Jest** for unit and integration tests. At present, basic manual testing has been performed to check the user registration and login flows.

---

## 9. User Interface and Interaction

### **UI Design**
- The user interface is simple and intuitive. It allows users to register and log in easily. Once logged in, users can access different sections of the website, such as body language and different sounds.

### **Interactivity**
- The UI includes buttons for login and registration, which direct users to the respective pages. Feedback is provided for incorrect login credentials.

---

## Conclusion

The **Dog’s Language** project has successfully implemented basic functionalities for user registration and login, as well as integrating a third-party dog facts API. The database schema needs to be updated, and the frontend has the foundational structure in place. Future improvements include further testing, adding more interactive features, and refining the UI.

