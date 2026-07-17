# lovey-web-diary
A cozy, low-end mobile optimized digital scrapbook journal built exclusively for a couple. Secured via private Google Sign-In, it features an interactive pixel mascot, auto-updating milestone days-together counter widgets, a scrollable multi-themed timeline feed for rich text or media memory logging, and an inline music player dashboard tray.

# 📖 Our Shared Web-Diary Book

A cozy, intimate, and lightweight digital scrapbook designed to function like a physical notebook keepsake for a couple. Built with a warm aesthetic and heavily optimized to run flawlessly on low-end mobile viewports without sacrificing charm.

> "A living digital safe space tracking our milestones, memories, and everything in between."

---

## 🎨 Design Identity & Vibe
Inspired by tactile, handmade scrapbooks and sketch journals, this platform focuses on warmth, soft color blocking, and clean borders rather than sterile modern layouts.

* **Primary Backing:** Warm vanilla cream paper tones (`#FAF6EE`) to ease eye strain.
* **Ink Tone:** Soft espresso charcoal (`#2D2A26`) for a gentle, organic readable appearance.
* **Romantic Accents:** Deep primary love-pink (`#D5006D`) utilized for focal interactions.
* **Optimization Philosophy:** Avoids compute-heavy CSS backdrop blurs and drop-shadow filters, guaranteeing a buttery-smooth 60fps scrolling performance on lower-tier smartphone processors.

---

## ✨ Features & Core Architecture

### 🔐 1. Private Authentication
* **Google OAuth Portal:** Secure whitelist validation restricting access strictly to both partner accounts.
* **Persistent Session HUD:** Remembers your login state after the first entry—no repetitive login requests on subsequent visits.

### 🏠 2. Dynamic Journal Header & Greetings
* **Custom User Portal (Top Left):** Displays the logged-in user’s name alongside their customizable chibi profile avatar.
* **Handwritten Date Stamp (Top Right):** Features a stylized signature handwriting font family reflecting the real-time calendar date.
* **Smart Occasions Box:** An adaptive greet box that reveals celebratory custom notifications on birthdays, monthsaries, anniversaries, and global holidays.

### 📜 3. Interactive Multimedia Timeline
* **Multi-Format Post Engine:** Supports rich journal text, audio voice messages, checklists with interactive checkable boxes, portrait-constrained loop videos, and couple trivia quizzes.
* **Contextual Canvas Themes:** Entries shift their structural palette properties automatically based on selected moods (*Deep Appreciation, Apologies, Surprises, or Goal Tracking*).
* **Time-Lock Capsules:** The ability to close specific pages behind a custom passcode + clue string, or lock them behind a designated timestamp parameter until a date arrives in the future.
* **Sticker Commentary:** A responsive interaction layer allowing both users to paste stamp stickers and emoji feedback at the baseline of entry cards.

### 🗺 4. Navigation & Relationship HUD (Bottom Dock)
* **Dual Milestone Counter:** A persistent floating tracker displaying total elapsed days together and absolute days known since meeting.
* **Unified Action Toolbar:** Handles forward/backward chronological chapter navigation, controls a custom background music player tray, and opens settings for color themes and profile customization.
* **The Canvas Finalé:** A definitive terminal page built with an interactive drawing canvas for both your permanent digital signatures.

---

## 🚀 Setup & Local Deployment

### Prerequisites
Because this project utilizes Google Sign-In backend verification systems, it is built to integrate with a free **Google Firebase App Instance**.

### Installation
1. Clone your new repository template to your local workspace or mobile environment:
   ```bash
   git clone [https://github.com/YOUR_USERNAME/lovey-web-diary.git](https://github.com/YOUR_USERNAME/lovey-web-diary.git)
   cd lovey-web-diary