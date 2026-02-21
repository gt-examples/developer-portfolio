# Developer Portfolio

A multilingual developer portfolio showcasing projects, experience, and contact information — fully translated with General Translation.

**[Live Demo](https://developer-portfolio.generaltranslation.dev)** | **[General Translation Docs](https://generaltranslation.com/docs)**

## About

This example app demonstrates how to internationalize a personal developer portfolio using `gt-next`. All page content, navigation, metadata, and form labels are translated across five locales (English, Spanish, Japanese, Chinese, and French) using wide `<T>` wrapping for natural, context-aware translations.

## GT Features Used

- `<T>` — JSX translation with wide wrapping
- `getGT` — Server-side string translations (metadata)
- `LocaleSelector` — Built-in language picker
- `loadTranslations` — Local translation file storage
- `createNextMiddleware` — Automatic locale routing

## Getting Started

```bash
git clone https://github.com/gt-examples/developer-portfolio.git
cd developer-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Built With

- [Next.js](https://nextjs.org)
- [General Translation](https://generaltranslation.com) (gt-next)
- [Tailwind CSS](https://tailwindcss.com)
