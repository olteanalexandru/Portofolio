# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js 14 and TypeScript, featuring internationalization, dark mode, and interactive features.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Internationalization**: Multi-language support (English and German) using next-intl
- **Dark Mode**: Built-in theme switcher with dark mode support
- **Interactive Components**: 
  - WhatsApp Integration for direct messaging
  - Contact form
  - Dynamic content loading
- **Modern UI**: Clean and professional interface with smooth transitions
- **SEO Optimized**: Built-in SEO best practices with Next.js
- **Content Management**: Integrated with Contentful CMS for easy content updates

## 🛠️ Technologies

### Core
- **Next.js 14**: React framework for production
- **TypeScript**: Static typing for better development experience
- **React 18**: UI library with latest features
- **Tailwind CSS**: Utility-first CSS framework

### Internationalization
- **next-intl**: Internationalization framework
- **i18next**: Powerful internationalization framework

### Content Management
- **Contentful**: Headless CMS for content management
- **GraphQL**: API query language for efficient data fetching

### UI/UX
- **Tailwind CSS**: For styling and responsive design
- **HeadlessUI**: Accessible UI components
- **React Icons**: Icon library

### Development Tools
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **Husky**: Git hooks
- **TypeScript**: Static type checking

## 🏗️ Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/         
│   ├── features/       # Feature-specific components
│   ├── shared/         # Reusable components
│   └── templates/      # Layout templates
├── i18n/               # Internationalization setup
├── lib/                # Utilities and configurations
└── styles/             # Global styles
```

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
- Copy `.env.example` to `.env`
- Fill in your Contentful and other required credentials

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) to view the site

## 🔧 Configuration

### Environment Variables

Create a `.env` file with the following variables:
```env
CONTENTFUL_SPACE_ID=
CONTENTFUL_ACCESS_TOKEN=
CONTENTFUL_PREVIEW_ACCESS_TOKEN=
CONTENTFUL_PREVIEW_SECRET=
NEXT_PUBLIC_BASE_URL=
NEXT_PUBLIC_WHATSAPP_NUMBER=
```

## 📱 Contact Features

The portfolio includes multiple ways for visitors to get in touch:
- WhatsApp integration for instant messaging
- Contact form for professional inquiries
- Social media links
- CV download option

## 🌐 Deployment

The site is configured for deployment on Vercel, offering:
- Automatic deployments
- Preview deployments for pull requests
- Environment variable management
- Edge functions support

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
