# برنامه لیست وظایف
**فارسی**
یک پروژه ساده با استفاده از **HTML، JavaScript و Tailwind CSS** برای مدیریت وظایف روزانه. این برنامه از **localStorage** برای ذخیره وظایف به صورت پایدار استفاده می‌کند و تجربه کاربری ساده‌ای برای افزودن، تکمیل و حذف وظایف ارائه می‌دهد.

---

## امکانات

- **افزودن وظایف**: به راحتی وظایف جدید را به لیست اضافه کنید.
- **علامت‌گذاری به عنوان انجام‌شده**: با کلیک روی یک وظیفه، آن را خط بزنید تا نشان دهید انجام شده است.
- **حذف وظایف**: با کلیک روی دکمه حذف (×) کنار هر وظیفه، آن را از لیست حذف کنید.
- **ذخیره پایدار**: وظایف در localStorage مرورگر ذخیره می‌شوند، بنابراین حتی پس از بستن و باز کردن مرورگر، باقی می‌مانند.

---

## فناوری‌های استفاده شده

- **HTML**: برای ساختار برنامه.
- **JavaScript**: برای مدیریت تعاملات و استفاده از localStorage.
- **Tailwind CSS**: برای طراحی و ایجاد رابط کاربری واکنش‌گرا.

---

## نصب و راه‌اندازی

1. مخزن را کلون کنید:
   ```bash
   git clone https://github.com/yourusername/todo-list.git
   ```
2. به دایرکتوری پروژه بروید:
   ```bash
   cd todo-list
   ```
3. اگر Node.js را نصب نکرده‌اید، از [وب‌سایت رسمی Node.js](https://nodejs.org/) دانلود و نصب کنید.

4. پروژه را مقداردهی اولیه کرده و Tailwind CSS را نصب کنید:
   ```bash
   npm init -y
   npm install tailwindcss
   npx tailwindcss init
   ```

5. فایل CSS مخصوص Tailwind را بسازید:

   ```bash
   npm run build
   ```
   **یا**
   ```bash
   npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
   ```

6. فایل `index.html` را در مرورگر باز کنید:
   ```bash
   open index.html
   ```

---

## نحوه استفاده

1. **افزودن وظیفه**: از فیلد ورودی استفاده کنید، وظیفه خود را وارد کرده و روی "افزودن" کلیک کنید.
2. **علامت‌گذاری به عنوان انجام‌شده**: روی یک وظیفه کلیک کنید تا خطی روی آن کشیده شود و نشان دهد که انجام شده است.
3. **حذف وظیفه**: روی دکمه حذف (×) کنار یک وظیفه کلیک کنید تا از لیست حذف شود.
4. **ذخیره پایدار**: تمامی وظایف به صورت خودکار ذخیره شده و از localStorage بارگذاری می‌شوند.

---


**English**
# To-Do List Application

A simple **HTML, JavaScript, and Tailwind CSS** project for managing daily tasks. This application uses **localStorage** to save tasks persistently and provides an intuitive user experience for adding, completing, and deleting tasks.

---

## Features

- **Add Tasks**: Easily add new tasks to your to-do list.
- **Mark as Complete**: Click on a task to strike it through, indicating it has been completed.
- **Delete Tasks**: Remove tasks by clicking the delete (×) button next to them.
- **Persistent Storage**: Tasks are stored in the browser's localStorage, ensuring they remain available even after refreshing the page.

---

## Technologies Used

- **HTML**: For the structure of the application.
- **JavaScript**: For interactive functionality and localStorage management.
- **Tailwind CSS**: For styling and creating a responsive design.

---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/todo-list.git
   ```
2. Navigate to the project directory:
   ```bash
   cd todo-list
   ```
3. Install Node.js if you haven’t already. You can download it from [Node.js official site](https://nodejs.org/).

4. Initialize the project and install Tailwind CSS:
   ```bash
   npm init -y
   npm install tailwindcss
   npx tailwindcss init
   ```

5. Build your Tailwind CSS file:
   ```bash
   npm run build
   ```
   **or**
   ```bash
   npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
   ```

6. Open the `index.html` file in your browser:
   ```bash
   open index.html
   ```

---

## How to Use

1. **Add a Task**: Use the input field to type your task and press "Add".
2. **Mark as Completed**: Click on a task to draw a line through it, marking it as done.
3. **Delete a Task**: Click the delete (×) button next to a task to remove it from the list.
4. **Persistent Storage**: All tasks are automatically saved and loaded from localStorage.
