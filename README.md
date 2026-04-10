<div align="center">

<h1>
  &lt;<strong>أحمد</strong> /&gt;
</h1>

<p>موقع بورتفوليو شخصي — مبني بـ HTML · CSS · JavaScript خالص</p>

[![Live Demo](https://img.shields.io/badge/🌐_معاينة_حية-ahmedtahaweb.netlify.app-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://ahmedtahaweb.netlify.app/)
[![License](https://img.shields.io/badge/License-Apache_2.0-D22128?style=for-the-badge&logo=apache&logoColor=white)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://ahmedtahaweb.netlify.app/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://ahmedtahaweb.netlify.app/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://ahmedtahaweb.netlify.app/)

</div>

---

## 🖥️ معاينة حية

> 🔗 **[https://ahmedtahaweb.netlify.app/](https://ahmedtahaweb.netlify.app/)**

---

## 📋 نظرة عامة

موقع بورتفوليو شخصي أحادي الصفحة (SPA) يعمل بدون أي إطارات عمل خارجية، مبني بـ Vanilla HTML/CSS/JS فقط. يدعم اتجاه النص من اليمين إلى اليسار (RTL) بالكامل ويعرض:

- **الرئيسية** — تعريف سريع مع تأثير الكتابة المتحركة  
- **نبذة عني** — معلومات شخصية ومسار التعلم  
- **المهارات** — شريط تقدم لكل مهارة تقنية (Ghidra, Cheat Engine, Memory Manipulation…)  
- **أعمالي** — معرض مشاريع مع فلترة (مواقع / تطبيقات / تصميم)  
- **الخبرات** — خط زمني للمسيرة التعليمية  
- **تواصل** — نموذج تواصل مع بيانات مباشرة  

---

## 🗂️ هيكلة المشروع

```
My-web/
│
├── index.html          # الهيكل الرئيسي للصفحة (RTL, Arabic)
│
├── css/
│   └── style.css       # جميع الأنماط — متغيرات CSS، ريسبونسف، أنيميشن
│
├── js/
│   └── main.js         # المنطق التفاعلي — قائمة التنقل، تأثير الكتابة،
│                       # فلترة المعرض، تأثيرات التمرير، نموذج التواصل
│
├── assets/
│   └── images/         # صور المشاريع والأيقونات
│
├── LICENSE             # رخصة Apache 2.0
└── README.md           # هذا الملف
```

---

## ⚙️ طريقة التشغيل

### الطريقة الأولى — فتح مباشر (الأسرع)

```bash
# استنسخ المستودع
git clone https://github.com/Ahmedtaha2008/My-web.git

# ادخل المجلد
cd My-web

# افتح الملف مباشرة في المتصفح
start index.html        # Windows
open index.html         # macOS
xdg-open index.html     # Linux
```

### الطريقة الثانية — سيرفر محلي (موصى به للتطوير)

> يُنصح باستخدام سيرفر محلي لتفادي مشاكل CORS عند تحميل الأصول.

**باستخدام VS Code + Live Server:**
1. ثبّت إضافة [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
2. افتح المجلد في VS Code
3. انقر بالزر الأيمن على `index.html` ← **Open with Live Server**
4. سيفتح الموقع تلقائياً على `http://127.0.0.1:5500`

**باستخدام Python:**
```bash
# Python 3
python -m http.server 8080

# افتح في المتصفح
http://localhost:8080
```

**باستخدام Node.js:**
```bash
npx serve .
```

---

## 🛠️ التقنيات المستخدمة

| التقنية | الاستخدام |
|---|---|
| **HTML5** | هيكل الصفحة، دعم RTL كامل |
| **CSS3** | متغيرات، Flexbox، Grid، أنيميشن، ريسبونسف |
| **JavaScript (ES6+)** | تفاعلية، Intersection Observer، تأثير الكتابة |

---

## 📄 الرخصة

هذا المشروع مرخص تحت **رخصة Apache 2.0** — راجع ملف [LICENSE](LICENSE) للتفاصيل الكاملة.

```
Copyright 2024 Ahmed Taha

Licensed under the Apache License, Version 2.0
```

---

<div align="center">

صُنع بـ ❤️ بواسطة **أحمد طه**

[![Portfolio](https://img.shields.io/badge/Portfolio-ahmedtahaweb.netlify.app-00C7B7?style=flat-square)](https://ahmedtahaweb.netlify.app/)

</div>
