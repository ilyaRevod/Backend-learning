# Blog API & Frontend (Express, EJS, Axios)

This is a simple blog project built using **Node.js, Express, EJS, and Axios**. It consists of two main parts:

- A **backend API** running on port `4000` that provides CRUD operations for blog posts.
- A **frontend server** running on port `3000` that interacts with the API to display, create, edit, and delete posts.

## Features

- Fetch all posts from the API
- View a single post
- Create a new post
- Edit an existing post
- Delete a post

## Technologies Used

- **Node.js** & **Express.js** - Backend framework
- **EJS** - Template engine for rendering views
- **Axios** - For making API requests
- **Body-parser** - Middleware for parsing request bodies
- **CSS** - Styling for the frontend
- And more

## Installation & Setup

### 1. Clone the repository:

```bash
cd repo-name
```

### 2. Install dependencies:

```bash
npm i
```

### 3. Start the backend API (Port 4000):

```bash
node index.js
```

### 4. Start the frontend server (Port 3000):

```bash
node server.js
```

### 5. Open in Browser:

Visit `http://localhost:3000` to view the blog.

## API Endpoints

| Method | Endpoint     | Description               |
| ------ | ------------ | ------------------------- |
| GET    | `/posts`     | Get all posts             |
| GET    | `/posts/:id` | Get a specific post by ID |
| POST   | `/posts`     | Create a new post         |
| PATCH  | `/posts/:id` | Update a post (partial)   |
| DELETE | `/posts/:id` | Delete a post             |

## Future Improvements

- Add **MongoDB** or **PostgreSQL** for persistent storage instead of an in-memory array.
- Implement **user authentication** (JWT or session-based login).
- Add **better error handling** and validation for API requests.

---

# راهنمای پروژه (فارسی)

این یک پروژه‌ی وبلاگی ساده با استفاده از **Node.js, Express, EJS, و Axios** است. این پروژه شامل دو بخش اصلی است:

- **بک‌اند API** که روی پورت `4000` اجرا می‌شود و عملیات CRUD را برای پست‌های وبلاگ انجام می‌دهد.
- **فرانت‌اند** که روی پورت `3000` اجرا شده و از API برای نمایش، ایجاد، ویرایش و حذف پست‌ها استفاده می‌کند.

## ویژگی‌ها

- نمایش لیست تمام پست‌ها
- مشاهده‌ی یک پست خاص
- ایجاد پست جدید
- ویرایش یک پست موجود
- حذف یک پست

## نصب و راه‌اندازی

### ۱. کلون کردن مخزن:

```bash
cd repo-name
```

### ۲. نصب پکیج‌ها:

```bash
npm i
```

### ۳. اجرای سرور API (پورت 4000):

```bash
node index.js
```

### ۴. اجرای سرور فرانت‌اند (پورت 3000):

```bash
node server.js
```

### ۵. مشاهده در مرورگر:

مرورگر را باز کرده و آدرس `http://localhost:3000` را وارد کنید.

## بهبودهای آینده

- اضافه کردن **پایگاه داده MongoDB** یا **PostgreSQL** به جای ذخیره‌ی داده در آرایه
- پیاده‌سازی **احراز هویت کاربران** (JWT یا سشن‌بیس)
- بهبود **مدیریت خطاها** و اعتبارسنجی ورودی‌ها در API

---

**Developed by [Ilya Revod](https://github.com/ilyaRevod)**
