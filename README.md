# Prabhakaran Panjalingam | Senior Android Engineer Portfolio

A premium, high-performance portfolio website showcasing over 10 years of expertise in Android SDK, AOSP, and Framework development. This project is built with a focus on modern aesthetics, fluid animations, and robust cloud-native deployment.

## 🚀 Live Demo
https://prabhakaranportfolio-347207725095.europe-west1.run.app/

---

## 🛠️ Tech Stack

### Core Frontend
- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

### Styling
- **CSS**: Vanilla CSS with a custom-built, premium design system (Glassmorphism, sleek gradients, and responsive layouts).

---

## 📂 Project Structure

- `src/data/resumeData.js`: Centralized data file for easy updates to your bio, experience, and skills.
- `Dockerfile`: Multi-stage build for containerizing the application.
- `nginx.conf`: Custom NGINX configuration for React routing (SPA support).
- `.github/workflows/deploy.yml`: Automated CI/CD pipeline for GitHub integration.

---

## 🚢 Deployment

### 1. Local Development
```bash
npm install
npm run dev
```

### 2. Google Cloud Run (Manual)
```bash
gcloud builds submit --config cloudbuild.yaml
```

### 3. Google Cloud Run (Continuous Deployment)
The easiest way to deploy is using the native GitHub integration in the Google Cloud Console:
1. Push your code to GitHub.
2. In [Cloud Run](https://console.cloud.google.com/run), click **Create Service**.
3. Select **"Continuously deploy from a repository"**.
4. Set up with Cloud Build and select your repository.
5. Use **Dockerfile** as the build type.

---

## ✨ Key Features
- **Modern & Responsive**: Pixel-perfect design that adapts to any screen size.
- **Micro-animations**: Subtle interactions powered by Framer Motion for a premium user experience.
- **Cloud Native**: Fully containerized with a production-ready NGINX configuration.
- **SEO Optimized**: Built with best practices for search engine visibility.

---

## 📧 Contact
- **LinkedIn**: [Prabhakaran Panjalingam](https://www.linkedin.com/in/prabhakaranpanjalingam/)
- **GitHub**: [github.com/prabhu37](https://github.com/prabhu37)
