# 🚀 My-web - Personal Portfolio Website

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <br><br>
  <img src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge" alt="License">
  <img src="https://img.shields.io/badge/Arabic-RTL-blue?style=for-the-badge" alt="Arabic RTL">
  <img src="https://img.shields.io/badge/Responsive-✓-brightgreen?style=for-the-badge" alt="Responsive">
</p>

<p align="center">
  <strong>موقع شخصي احترافي يعرض أعمالي ومهاراتي في البرمجة والهندسة العكسية</strong>
  <br>
  <em>Professional personal portfolio showcasing my work in programming & reverse engineering</em>
</p>

---

## 📋 فهرس المحتويات

- [👀 معاينة حية](#-معاينة-حية)
- [✨ المميزات](#-المميزات)
- [🛠 التقنيات المستخدمة](#-التقنيات-المستخدمة)
- [📁 هيكلية المشروع](#-هيكلية-المشروع)
- [🚀 طريقة التشغيل](#-طريقة-التشغيل)
- [🎨 التخصيص](#-التخصيص)
- [📱 التوافق](#-التوافق)
- [🤝 المساهمة](#-المساهمة)
- [📄 الرخصة](#-الرخصة)
- [👨‍💻 عن المطور](#-عن-المطور)

---

## 👀 معاينة حية

> 🔗 [شاهد الموقع مباشرة](#) *(يتم التحديث قريباً)*

---

## ✨ المميزات

### 🎨 التصميم والواجهة
- ✅ **دعم الوضع الليلي/النهاري** مع حفظ التفضيل في `localStorage`
- ✅ **تصميم متجاوب** يعمل على جميع الشاشات (موبايل، تابلت، ديسكتوب)
- ✅ **خلفية جسيمات تفاعلية** تتفاعل مع حركة الماوس
- ✅ **أنيميشن سلسة** عند التمرير والظهور (Scroll Reveal)
- ✅ **خط عربي احترافي** (Cairo) لدعم اللغة العربية بشكل مثالي

### ⚡ التفاعلية
- ✅ **تأثير الكتابة التلقائية** لعرض المسميات الوظيفية
- ✅ **شريط تنقل ذكي** يتغير عند التمرير مع قائمة هامبرغر للموبايل
- ✅ **أشرطة المهارات** مع أنيميشن عند الظهور
- ✅ **تصفية المشاريع** حسب الفئة (تطبيقات، مواقع، تصميم)
- ✅ **نموذج تواصل** مع التحقق من صحة البيانات ومحاكاة الإرسال

### 🧰 إضافات احترافية
- ✅ **شاشة تحميل أنيقة** عند فتح الموقع
- ✅ **زر العودة للأعلى** يظهر عند التمرير
- ✅ **تمرير سلس** بين أقسام الصفحة
- ✅ **تأثير Parallax** خفيف في القسم الرئيسي
- ✅ **إحصائيات رقمية** مع أنيميشن العد

---

## 🛠 التقنيات المستخدمة

| التقنية | الوصف | الإصدار |
|---------|-------|---------|
| **HTML5** | هيكلية الصفحة ودلالات الويب | Semantic HTML |
| **CSS3** | التصميم، الأنيميشن، المتغيرات، الوضع الليلي | CSS Variables, Flexbox, Grid |
| **JavaScript** | التفاعلية، الأنيميشن، معالجة النماذج | Vanilla ES6+ |
| **Font Awesome** | أيقونات احترافية | v6.x |
| **Google Fonts** | خط Cairo للعربية | Latest |

---

## 📁 هيكلية المشروع

```
My-web/
├── 📄 index.html          # الصفحة الرئيسية (هيكلية المحتوى)
├── 🎨 style.css           # ملف التنسيقات (تصميم، أنيميشن، تجاوب)
├── ⚙️ script.js           # ملف الجافاسكريبت (تفاعلية، وظائف)
├── 📄 README.md           # ملف التوثيق (هذا الملف)
└── 📁 .github/            # إعدادات جيتهاب (اختياري)
    └── workflows/
        └── deploy.yml     # نشر تلقائي (مثال)
```

---

## 🚀 طريقة التشغيل

### الخيار 1: التشغيل المحلي

```bash
# 1️⃣ استنساخ المستودع
git clone https://github.com/Ahmedtaha2008/My-web.git

# 2️⃣ الدخول للمجلد
cd My-web

# 3️⃣ فتح الملف مباشرة في المتصفح
# أو استخدام خادم محلي:
# مع Python
python -m http.server 8000
# أو مع Node.js
npx serve
```

ثم افتح: `http://localhost:8000`

### الخيار 2: النشر على GitHub Pages

1. اذهب إلى **Settings** > **Pages** في المستودع
2. اختر الفرع `main` والمجلد `/ (root)`
3. اضغط **Save** وسيتم نشر الموقع خلال دقائق

### الخيار 3: النشر على منصات أخرى

| المنصة | الأمر |
|--------|-------|
| **Netlify** | اسحب مجلد المشروع وأفلته في لوحة التحكم |
| **Vercel** | `vercel --prod` |
| **Cloudflare Pages** | اربط مستودع جيتهاب من لوحة التحكم |

---

## 🎨 التخصيص

### تعديل الألوان
افتح `style.css` وعدل متغيرات الألوان في `:root`:

```css
:root {
  --primary: #6c5ce7;        /* اللون الأساسي */
  --secondary: #00cec9;      /* اللون الثانوي */
  --accent: #fd79a8;         /* لون التمييز */
  --gradient: linear-gradient(135deg, #6c5ce7, #00cec9);
  /* ... بقية المتغيرات */
}
```

### تعديل المحتوى الشخصي
افتح `index.html` وعدل البيانات في الأقسام:
- 👤 **المعلومات الشخصية**: الاسم، البريد، الموقع
- 💼 **الخبرات**: العناوين، التواريخ، الوصف
- 🛠 **المهارات**: الأسماء والنسب المئوية
- 📁 **المشاريع**: العناوين، الصور، الروابط

### إضافة مشاريع جديدة
```html
<!-- انسخ هذا القالب في قسم المشاريع -->
<div class="portfolio-card" data-category="apps" data-aos="fade-up">
  <div class="portfolio-image">
    <div class="portfolio-placeholder">🎮</div>
    <div class="portfolio-overlay">
      <div class="overlay-content">
        <a href="#" class="overlay-link"><i class="fas fa-link"></i></a>
        <a href="#" class="overlay-link"><i class="fab fa-github"></i></a>
      </div>
    </div>
  </div>
  <div class="portfolio-info">
    <h3>اسم المشروع</h3>
    <p>وصف مختصر للمشروع</p>
    <div class="portfolio-tags">
      <span>HTML</span>
      <span>CSS</span>
      <span>JS</span>
    </div>
  </div>
</div>
```

---

## 📱 التوافق

| المتصفح | الإصدار | الحالة |
|---------|---------|--------|
| 🟢 Chrome | 80+ | ✅ مدعوم |
| 🟢 Firefox | 75+ | ✅ مدعوم |
| 🟢 Safari | 14+ | ✅ مدعوم |
| 🟢 Edge | 80+ | ✅ مدعوم |
| 🟢 Mobile | iOS/Android | ✅ متجاوب |

---

## 🤝 المساهمة

المساهمات مرحب بها! 🎉

```bash
# 1️⃣ قم بعمل Fork للمستودع
# 2️⃣ أنشئ فرعاً جديداً (git checkout -b feature/AmazingFeature)
# 3️⃣ قم بتعديل الكود وإضافة الميزة
# 4️⃣ أرسل التغييرات (git commit -m 'Add: AmazingFeature')
# 5️⃣ افتح Pull Request
```

### 🐛 الإبلاغ عن مشكلة
إذا وجدت خطأً، يرجى فتح **Issue** جديد مع:
- وصف واضح للمشكلة
- خطوات إعادة الإنتاج
- لقطات شاشة إن أمكن
- بيئة التشغيل (متصفح، نظام)

---

## 📄 الرخصة

هذا المشروع مرخص تحت **MIT License** - راجع ملف [LICENSE](LICENSE) للتفاصيل.

```
MIT License

Copyright (c) 2026 Ahmed Taha

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 👨‍💻 عن المطور

```yaml
الاسم: أحمد طه
المسمى: طالب ثانوي | مطور هاوي | باحث في الهندسة العكسية
📍 الموقع: بسـيون، الغربية، مصر
📧 البريد: Ahmedtaha2742008@gmail.com
🔗 GitHub: @Ahmedtaha2008
```

### 🛠 مجالات الاهتمام
- 🔍 **الهندسة العكسية** للألعاب والتطبيقات
- 🎮 **تعديل الألعاب** باستخدام Cheat Engine و Ghidra
- 💻 **تطوير الويب** (HTML/CSS/JS)
- 🧠 **التعلم الذاتي** في علوم الحاسب

### 📬 تواصل معي

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Ahmedtaha2008)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:Ahmedtaha2742008@gmail.com)

---

<p align="center">
  <strong>صُنع بـ ❤️ بواسطة أحمد طه</strong>
  <br><br>
  ⭐ <em>إذا أعجبك المشروع، لا تنسَ وضع نجمة للمستودع!</em> ⭐
</p>

<p align="center">
  <sub>آخر تحديث: أبريل 2026</sub>
</p>
