# Employee Management System (Full-Stack CRUD)

A modern, responsive Full-Stack Employee Management application built with **Angular 19** and **Spring Boot 3**. This application allows users to perform complete CRUD (Create, Read, Update, Delete) operations on employee data, featuring a polished UI with Angular Material.

---

## 🚀 Features

* **Full CRUD Functionality**: Add, edit, view, and delete employees seamlessly.
* **Advanced Table Features**: 
  * Real-time filtering/search.
  * Functional pagination and sorting.
* **Polished UI**: Built using **Angular Material** to ensure a professional look with consistent, high-quality UI components like Mat-Table, Mat-Dialog, and Mat-Form-Fields.
* **RESTful Backend**: Robust API built with Spring Boot and PostgreSQL for data persistence.

---

## 📸 Screenshots

### Dashboard & Table View
> ![Dashboard View](PUT_LINK_TO_DASHBOARD_IMAGE_HERE)
*The main dashboard featuring the Mat-Table with pagination and filtering.*

### Add/Edit Employee Form
> ![Form View](PUT_LINK_TO_FORM_IMAGE_HERE)
*Interactive dialog for adding and updating employee details.*

---

## 🛠 Tech Stack

**Frontend:**
* **Angular** (Standalone Components)
* **Angular Material** (Table, Paginator, Sort, Dialog, Form Fields)
* **Reactive Forms** for data validation
* **HttpClient** for backend communication

**Backend:**
* **Spring Boot 3** (Java 17+)
* **Spring Data JPA** for database interaction
* **PostgreSQL** Database

---

## ⚙️ Installation & Setup

### 1. Backend Setup (Spring Boot)
1. Navigate to the `employee-management-system-backend` folder.
2. Update `src/main/resources/application.properties` with your MySQL credentials.
3. Run the application via your IDE or terminal:
   ```bash
   mvn spring-boot:run
4. The server will start on http://localhost:8080.

### 2. Frontend Setup (Angular)
1. Navigate to the `employee-management-system-frontend` folder.
2. Install dependencies:
   ```bash
   npm install
3. Run the development server:
   ```bash
   ng serve
4. The app will be available at http://localhost:4200.

## 📝 License
Distributed under the MIT License.
