# Kelajak — Zamonaviy onlayn kutubxona

Bu loyiha HTML, CSS va JavaScript yordamida yaratilgan statik frontend demo bo‘lib, unda bosh sahifa, qidiruv, kategoriyalar, premium katalog, favorites, o‘qish interfeysi va 20 ta kitob mavjud.

## Ishga tushirish

1. Loyihani ishga tushirish uchun terminalda quyidagi buyruqni bajaring:

   ```bash
   cd c:/Users/User/Desktop/web
   python -m http.server 8000
   ```

2. Brauzerda quyidagi manzilni oching:

   ```text
   http://localhost:8000/
   ```

## Xususiyatlar

- Glassmorphism uslubidagi premium dizayn
- 20 ta takrorlanmaydigan kitoblar katalogi
- Qidiruv va filtrlash (kitob, muallif, janr, til, tur)
- Sevimlilar ro‘yxati va o‘qishni davom ettirish
- Kitob tafsilotlari modal oynasi
- Kitob o‘qish rejimi: boblar, qidiruv, matnni belgilash, shrift o‘lchami, sepia/tungi rejim
- Bepul va PRO kitoblar
- Mobil uyumdorlik va responciv layout

## Backend va ma’lumotlar bazasi

Bu demo ma’lumotlar bazasi ulanmagan holda ishlaydi. Barcha ma’lumotlar brauzerdagi JavaScript obyekti ichida mavjud. Maqsad — frontend UX va funksionalligini isbotlashdir.

Agar loyiha real backendga o‘tkazilsa, quyidagi sxema tavsiya etiladi:

- users
- books
- chapters
- categories
- favorites
- reading_progress
- bookmarks
- notes
- purchases
- subscriptions

### SQL/DB namunasi

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  full_name TEXT,
  email TEXT UNIQUE,
  password_hash TEXT,
  avatar_url TEXT,
  is_pro BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE books (
  id UUID PRIMARY KEY,
  title TEXT,
  author TEXT,
  genre TEXT,
  description TEXT,
  language TEXT,
  pages INT,
  read_time TEXT,
  type TEXT CHECK (type IN ('free', 'premium')),
  price NUMERIC,
  cover_url TEXT,
  is_featured BOOLEAN DEFAULT FALSE,
  is_new BOOLEAN DEFAULT FALSE,
  is_recommended BOOLEAN DEFAULT FALSE
);

CREATE TABLE chapters (
  id UUID PRIMARY KEY,
  book_id UUID REFERENCES books(id),
  chapter_number INT,
  title TEXT,
  content TEXT
);

CREATE TABLE categories (
  id UUID PRIMARY KEY,
  name TEXT UNIQUE
);

CREATE TABLE favorites (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  book_id UUID REFERENCES books(id)
);

CREATE TABLE reading_progress (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  book_id UUID REFERENCES books(id),
  chapter_index INT,
  percent_complete INT,
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE bookmarks (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  book_id UUID REFERENCES books(id),
  chapter_index INT,
  highlighted_text TEXT
);

CREATE TABLE notes (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  book_id UUID REFERENCES books(id),
  note TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE purchases (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  book_id UUID REFERENCES books(id),
  amount NUMERIC,
  status TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE subscriptions (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  plan TEXT,
  status TEXT,
  started_at TIMESTAMP,
  expires_at TIMESTAMP
);
```

## Tavsiya etiladigan backend stack

- Frontend: Next.js / React + TypeScript
- Styling: Tailwind CSS
- Animatsiyalar: Framer Motion
- Backend: Supabase / serverless API / Node.js
- Auth: Supabase Auth yoki NextAuth
- Storage: Supabase Storage
- Payments: Stripe / Payme / Click / Uzcard integration

## Note

Bu loyiha qonuniy ishlatishga mo‘ljallangan, ruxsatli asarlar va ochiq ma’lumotlar asosida tayyorlangan. Real produktsiya uchun har bir kitob uchun litsenziya va server tomonidan tekshiruv talab etiladi.
