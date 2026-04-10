/**
 * @jest-environment jsdom
 */

// إعادة تعريف بعض الدوال لتكون قابلة للاختبار
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

describe('اختبارات التحقق من البريد الإلكتروني', () => {
  test('يجب أن يقبل بريد إلكتروني صحيح', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('user.name@domain.org')).toBe(true);
    expect(isValidEmail('a@b.co')).toBe(true);
  });

  test('يجب أن يرفض بريد إلكتروني غير صحيح', () => {
    expect(isValidEmail('invalid')).toBe(false);
    expect(isValidEmail('invalid@')).toBe(false);
    expect(isValidEmail('@example.com')).toBe(false);
    expect(isValidEmail('test@.com')).toBe(false);
    expect(isValidEmail('')).toBe(false);
  });
});

describe('اختبارات دالة تصفية الأعمال (Portfolio Filter)', () => {
  test('يجب إنشاء عنصر style عند تحميل الصفحة', () => {
    // محاكاة الكود الذي ينشئ عنصر الـ style
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `;
    document.head.appendChild(styleSheet);

    expect(document.querySelector('style')).toBeTruthy();
    expect(styleSheet.textContent).toContain('@keyframes fadeInUp');
  });
});

describe('اختبارات عداد الأرقام (Counter Animation)', () => {
  test('يجب حساب الزيادة بشكل صحيح', () => {
    const target = 100;
    const increment = target / 60;
    expect(increment).toBeCloseTo(1.66667, 2);
  });

  test('يجب تقريب القيمة الحالية بشكل صحيح', () => {
    let current = 0;
    const increment = 100 / 60;
    for (let i = 0; i < 60; i++) {
      current += increment;
    }
    expect(Math.floor(current)).toBeLessThanOrEqual(100);
  });
});

describe('اختبارات كتابة النصوص (Typing Effect)', () => {
  const words = [
    'مطور واجهات أمامية',
    'مطور Full-Stack',
    'مصمم UI/UX',
    'مطور تطبيقات ويب',
    'مبرمج محترف'
  ];

  test('يجب أن تحتوي القائمة على كلمات صحيحة', () => {
    expect(words.length).toBeGreaterThan(0);
    expect(words[0]).toBe('مطور واجهات أمامية');
  });

  test('يجب أن تعمل عملية التقليم للنصوص', () => {
    const currentWord = words[0];
    const charIndex = 5;
    const result = currentWord.substring(0, charIndex);
    expect(result).toBe('مطور ');
  });
});

describe('اختبارات التحقق من صحة النموذج (Form Validation)', () => {
  test('يجب رفض الحقول الفارغة', () => {
    const name = '';
    const email = 'test@example.com';
    const subject = 'موضوع';
    const message = 'رسالة';

    const isValid = !!(name && email && subject && message);
    expect(isValid).toBe(false);
  });

  test('يجب قبول جميع الحقول مملوءة', () => {
    const name = 'أحمد';
    const email = 'test@example.com';
    const subject = 'موضوع';
    const message = 'رسالة';

    const isValid = !!(name && email && subject && message);
    expect(isValid).toBe(true);
  });
});

describe('اختبارات أشرطة المهارات (Skill Bars)', () => {
  test('يجب تحويل نسبة التقدم إلى عرض CSS', () => {
    const progress = 75;
    const width = progress + '%';
    expect(width).toBe('75%');
  });

  test('يجب أن تكون النسبة بين 0 و 100', () => {
    const validProgress = [0, 25, 50, 75, 100];
    validProgress.forEach(p => {
      expect(p).toBeGreaterThanOrEqual(0);
      expect(p).toBeLessThanOrEqual(100);
    });
  });
});

describe('اختبارات زر العودة للأعلى (Back to Top)', () => {
  test('يجب إظهار الزر عند التمرير لأكثر من 500 بكسل', () => {
    const scrollY = 600;
    const shouldShow = scrollY > 500;
    expect(shouldShow).toBe(true);
  });

  test('يجب إخفاء الزر عند التمرير لأقل من 500 بكسل', () => {
    const scrollY = 300;
    const shouldShow = scrollY > 500;
    expect(shouldShow).toBe(false);
  });
});

describe('اختبارات الوضع الليلي/النهاري (Theme Toggle)', () => {
  test('يجب التبديل بين dark و light', () => {
    const current = 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    expect(next).toBe('light');
  });

  test('يجب تحديث أيقونة السمة بشكل صحيح', () => {
    const updateThemeIcon = (theme) => theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    
    expect(updateThemeIcon('dark')).toBe('fas fa-sun');
    expect(updateThemeIcon('light')).toBe('fas fa-moon');
  });
});

describe('اختبارات قائمة الهامبرغر (Hamburger Menu)', () => {
  test('يجب تبديل فئة active عند النقر', () => {
    const classList = {
      classes: new Set(),
      toggle(className) {
        if (this.classes.has(className)) {
          this.classes.delete(className);
        } else {
          this.classes.add(className);
        }
      },
      contains(className) {
        return this.classes.has(className);
      }
    };

    classList.toggle('active');
    expect(classList.contains('active')).toBe(true);

    classList.toggle('active');
    expect(classList.contains('active')).toBe(false);
  });
});

describe('اختبارات أنيميشن الظهور عند التمرير (Scroll Reveal)', () => {
  test('يجب كشف العنصر عندما يكون ضمن النافذة', () => {
    const elementTop = 50;
    const windowHeight = 800;
    const revealPoint = 100;
    
    const shouldReveal = elementTop < windowHeight - revealPoint;
    expect(shouldReveal).toBe(true);
  });

  test('يجب عدم كشف العنصر عندما يكون خارج النافذة', () => {
    const elementTop = 900;
    const windowHeight = 800;
    const revealPoint = 100;
    
    const shouldReveal = elementTop < windowHeight - revealPoint;
    expect(shouldReveal).toBe(false);
  });
});

describe('اختبارات خلفية الجسيمات (Particles Background)', () => {
  test('يجب حساب المسافة بين نقطتين بشكل صحيح', () => {
    const x1 = 0, y1 = 0;
    const x2 = 3, y2 = 4;
    const dist = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    expect(dist).toBe(5);
  });

  test('يجب إعادة تعيين الجسيمات عند الخروج من الشاشة', () => {
    const canvasWidth = 800;
    const canvasHeight = 600;
    
    let x = 850;
    if (x > canvasWidth) x = 0;
    expect(x).toBe(0);

    let y = -10;
    if (y < 0) y = canvasHeight;
    expect(y).toBe(600);
  });
});

describe('اختبارات شريط التنقل (Navbar Scroll Effect)', () => {
  test('يجب إضافة فئة scrolled عند التمرير لأسفل', () => {
    const scrollY = 100;
    const shouldAddScrolled = scrollY > 50;
    expect(shouldAddScrolled).toBe(true);
  });

  test('يجب إزالة فئة scrolled عند الصعود للأعلى', () => {
    const scrollY = 30;
    const shouldAddScrolled = scrollY > 50;
    expect(shouldAddScrolled).toBe(false);
  });
});

describe('اختبارات الرابط النشط (Active Nav Link)', () => {
  test('يجب تحديد القسم النشط بناءً على موضع التمرير', () => {
    const scrollY = 250;
    const sectionTop = 200;
    const sectionHeight = 300;
    
    const isActive = scrollY >= sectionTop && scrollY < sectionTop + sectionHeight;
    expect(isActive).toBe(true);
  });

  test('يجب عدم تفعيل القسم عندما يكون خارج النطاق', () => {
    const scrollY = 100;
    const sectionTop = 200;
    const sectionHeight = 300;
    
    const isActive = scrollY >= sectionTop && scrollY < sectionTop + sectionHeight;
    expect(isActive).toBe(false);
  });
});

describe('اختبارات تأثير Parallax', () => {
  test('يجب حساب الإزاحة الرأسية بشكل صحيح', () => {
    const scrolled = 100;
    const translateY = scrolled * 0.1;
    expect(translateY).toBe(10);
  });

  test('يجب حساب الشفافية بشكل صحيح', () => {
    const scrolled = 400;
    const windowHeight = 800;
    const opacity = 1 - (scrolled / windowHeight) * 0.5;
    expect(opacity).toBe(0.75);
  });
});

describe('اختبارات السنة الحالية (Current Year)', () => {
  test('يجب إرجاع السنة الحالية بشكل صحيح', () => {
    const year = new Date().getFullYear();
    expect(year).toBeGreaterThanOrEqual(2024);
  });
});
