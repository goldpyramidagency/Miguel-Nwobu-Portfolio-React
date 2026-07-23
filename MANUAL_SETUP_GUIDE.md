# Manual Setup & Deployment Guide

This guide outlines all the manual steps required to connect your WordPress backend, update your CV file, and deploy your portfolio website to Vercel.

---

## 📄 1. Adding Your CV PDF for Download

To enable visitors to download your actual CV when clicking the "Download CV" button:

1. **Option A: Public Folder (Recommended for Vercel)**
   - Save your CV as a PDF named `Miguel_Nwobu_CV.pdf`.
   - Place `Miguel_Nwobu_CV.pdf` directly inside the `public/` directory of this repository:
     `/public/Miguel_Nwobu_CV.pdf`
   - When deployed, it will be accessible at `https://your-domain.vercel.app/Miguel_Nwobu_CV.pdf`.
   - The "Download CV" buttons in `CVModal.tsx`, `Hero.tsx`, and `AboutPage.tsx` will automatically download this file.

2. **Option B: WordPress Media Library**
   - Upload your CV PDF to your WordPress Media Library (`https://linen-viper-649141.hostingersite.com/wp-admin/upload.php`).
   - Copy the Direct File URL (e.g., `https://linen-viper-649141.hostingersite.com/wp-content/uploads/2026/07/Miguel_Nwobu_CV.pdf`).
   - Update `cvPdfUrl` in `CVModal.tsx`.

---

## ⚙️ 2. WordPress Setup (Hostinger Dashboard)

Log into your WordPress Admin panel at:
👉 **`https://linen-viper-649141.hostingersite.com/wp-admin/`**

### Step A: Install Required Plugins
Navigate to **Plugins ➔ Add New** and install:
1. **Advanced Custom Fields (ACF)** (Free or Pro) — *Required for custom metrics & project fields.*
2. **Custom Post Type UI (CPT UI)** — *Required to create the 'project' post type.*
3. **Contact Form 7** — *Required to receive lead submissions.*
4. **JWT Authentication for WP REST API** or **WP REST Allow CORS** (Optional, if CORS blocks API requests).

### Step B: Create Custom Post Type `project`
Using CPT UI:
1. Go to **CPT UI ➔ Add/Edit Post Types**.
2. **Post Type Slug**: `project`
3. **Plural Label**: `Projects`
4. **Single Label**: `Project`
5. In **Settings**, ensure **"Show in REST API"** is set to **True** (REST API base slug: `project`).
6. Click **Save Post Type**.

### Step C: Configure ACF Field Groups
Refer to `README_WORDPRESS_SCHEMAS.md` in this repository for the exact field names and keys.
1. Go to **Custom Fields ➔ Add New**.
2. Title: `Project Details`.
3. Add fields: `tag`, `subtitle`, `client_name`, `business_industry`, `project_date`, `project_url`, `role`, `metrics`, `overview`, `challenge`, `solution`, `results`, `deliverables`, `tech_stack`.
4. Set Rules: Show this field group if **Post Type is equal to Project**.
5. Save Field Group.

### Step D: Set Up Contact Form 7
1. Go to **Contact ➔ Add New**.
2. Title: `Start a Project Brief`.
3. Paste the provided form structure into the Form tab:
   ```html
   <label> Your name
       [text* your-name autocomplete:name] </label>

   <label> Your email
       [email* your-email autocomplete:email] </label>

   <label> Subject
       [text* your-subject] </label>

   <label> Your message (optional)
       [textarea your-message] </label>

   [submit "Submit"]
   ```
4. Click **Save**.
5. Note the Shortcode ID (e.g. `[contact-form-7 id="123" title="Start a Project Brief"]`). The number `123` is your `VITE_CF7_FORM_ID`.

---

## 🚀 3. Deploying to Vercel

### Step A: Push Code to GitHub
1. Export or commit this project repository to your GitHub account.

### Step B: Import Project in Vercel
1. Log into your Vercel Dashboard ([vercel.com](https://vercel.com)).
2. Click **Add New ➔ Project**.
3. Select your GitHub repository.

### Step C: Configure Environment Variables
In the Vercel project configuration screen, add the following **Environment Variables**:

| Key | Value | Description |
| :--- | :--- | :--- |
| `VITE_WORDPRESS_URL` | `https://linen-viper-649141.hostingersite.com` | Base Headless WP URL |
| `VITE_CF7_FORM_ID` | `1` *(or your CF7 ID)* | Contact Form 7 ID |

### Step D: Build & Deploy
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- Click **Deploy**. Your site will be live on Vercel in less than 60 seconds!
