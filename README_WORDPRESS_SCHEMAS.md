# Headless WordPress & ACF Schema Mapping Guide

This document maps all the visual and dynamic sections of the portfolio website to their respective WordPress REST API endpoints and **Advanced Custom Fields (ACF)** field groups.

---

## 🌐 1. Base Configuration

- **WordPress Site URL**: `https://linen-viper-649141.hostingersite.com`
- **REST API Base**: `https://linen-viper-649141.hostingersite.com/wp-json/wp/v2`
- **Contact Form 7 REST API**: `https://linen-viper-649141.hostingersite.com/wp-json/contact-form-7/v1/contact-forms/{FORM_ID}/feedback`

### Environment Variables (.env)
```env
VITE_WORDPRESS_URL=https://linen-viper-649141.hostingersite.com
VITE_CF7_FORM_ID=1
```

---

## 📝 2. Blog & Insights Post Schema (`/posts`)

- **REST Endpoint**: `/wp-json/wp/v2/posts?_embed`
- **WordPress Native Fields Used**:
  - `title.rendered` ➔ Article Title
  - `excerpt.rendered` ➔ Snippet / Preview text
  - `content.rendered` ➔ Full HTML Article Body
  - `date` ➔ Published Date (formatted e.g. `OCTOBER 14, 2024`)
  - `_embedded['wp:featuredmedia'][0].source_url` ➔ Featured Header Image
  - `_embedded['wp:term'][0]` ➔ Categories
  - `_embedded['wp:term'][1]` ➔ Tags

### ACF Field Group: `Blog Post Details`
Attach this field group to **Post Type = Post**.

| Field Name | Field Key (Slug) | Field Type | Description / Example |
| :--- | :--- | :--- | :--- |
| **Read Time** | `read_time` | Text | e.g. `8 MIN READ` |
| **Snippet** | `snippet` | Text Area | Short catchy preview text (overrides excerpt if filled) |
| **Key Takeaway** | `key_takeaway` | Text Area / WYSIWYG | Highlight block at top of post |
| **Author Name** | `author_name` | Text | Defaults to `Miguel Nwobu` |
| **Author Role** | `author_role` | Text | Defaults to `Growth Director & Systems Architect` |
| **Author Avatar** | `author_avatar` | Image / URL | URL to author portrait image |
| **Author Bio** | `author_bio` | Text Area | Author bio snippet |

---

## 💼 3. Portfolio Projects Schema (`/project` Custom Post Type)

To manage projects cleanly, create a **Custom Post Type** named `project` (slug: `project`).  
*Note: Make sure "Show in REST API" is toggled **ON** in CPT UI settings.*

- **REST Endpoint**: `/wp-json/wp/v2/project?_embed`
- **WordPress Native Fields Used**:
  - `title.rendered` ➔ Project Title (e.g., *From ₦12M to ₦30M Monthly Revenue on a Fixed Ad Budget*)
  - `slug` ➔ Unique URL Slug ID (e.g. `classic-kids-care`)

### ACF Field Group: `Project Case Study Details`
Attach this field group to **Post Type = Project**.

| Field Name | Field Key (Slug) | Field Type | Description / Example |
| :--- | :--- | :--- | :--- |
| **Card Tag** | `tag` | Text | e.g. `Classic Kids Care · Skincare` |
| **Subtitle** | `subtitle` | Text Area | High-impact sub-headline explaining the achievement |
| **Hero Image** | `image` | Image / URL | Featured project case study banner image |
| **Image Alt Text** | `alt` | Text | Accessible description of project image |
| **Category** | `category` | Text | e.g. `Organic Children's Skincare & E-commerce` |
| **Client Name** | `client_name` | Text | e.g. `Classic Kids Care` |
| **Industry** | `business_industry` | Text | e.g. `Organic Children's Skincare & Retail` |
| **Project Date** | `project_date` | Text | e.g. `Jan 2024 — Apr 2024` |
| **Project URL** | `project_url` | URL | e.g. `https://classickidscare.com` |
| **Role** | `role` | Text | e.g. `Growth Strategist & Systems Architect` |
| **Metrics** | `metrics` | Repeater | Array containing `label` (Text) & `value` (Text) e.g. `Monthly Revenue: ₦30M` |
| **Overview** | `overview` | Text Area / WYSIWYG | Background and client story |
| **Challenge** | `challenge` | Text Area | The core problem or revenue ceiling |
| **Solution** | `solution` | Text Area | The growth strategy and technical execution |
| **Results** | `results` | Text Area / Repeater | Key outcome bullet points (one per line) |
| **Deliverables** | `deliverables` | Text Area / Repeater | Key assets created (one per line) |
| **Tech Stack** | `tech_stack` | Text Area / Repeater | Technologies used e.g. `WordPress`, `WooCommerce`, `Meta Ads` |

---

## 📬 4. Contact Form 7 Schema & Integration

Create a new form in WordPress under **Contact ➔ Add New**.

### Form Markup Structure:
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

### Form REST Callpoint:
When a user submits the modal form on the frontend website, the app posts to:
`POST https://linen-viper-649141.hostingersite.com/wp-json/contact-form-7/v1/contact-forms/{FORM_ID}/feedback`

With fields:
- `your-name`
- `your-email`
- `your-subject`
- `your-message`

---

## 🔄 5. REST API Callpoints Summary Table

| Frontend Component | WordPress REST Callpoint | Fallback Behavior |
| :--- | :--- | :--- |
| **Blog & Insights Section** | `GET /wp-json/wp/v2/posts?_embed` | Fallback to static 3 articles |
| **Portfolio & Projects Section** | `GET /wp-json/wp/v2/project?_embed` | Fallback to static 3 case studies |
| **Contact Modal Submission** | `POST /wp-json/contact-form-7/v1/contact-forms/{ID}/feedback` | Graceful confirmation & local log |
