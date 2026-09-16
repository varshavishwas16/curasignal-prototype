# Getting Started with CuraSignal AI

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/varshavishwas16/curasignal-prototype.git
cd curasignal-prototype

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
curasignal-prototype/
├── app/
│   ├── layout.tsx           # Root layout & metadata
│   ├── page.tsx             # Landing page (/)
│   ├── globals.css          # Global Tailwind styles
│   └── app/
│       └── page.tsx         # Full app route (/app)
├── components/
│   ├── CuraSignalApp.tsx    # Main application (Companion + Dashboard)
│   └── LandingPage.tsx      # Landing page component
├── public/                  # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── README.md
```

---

## 🎯 Features

### 1. **Landing Page** (`/`)
- Hero section with tagline
- Vision & Mission statements
- Feature overview
- Persona descriptions (CuraMitra + Command Center)
- Tech stack showcase
- Call-to-action buttons

### 2. **Full Application** (`/app`)

#### CuraMitra Patient Companion Tab
- ✅ Multilingual support (English, हिंदी, मराठी)
- ✅ Voice input simulation (microphone button)
- ✅ Photo/rash upload (camera button)
- ✅ Quick symptom chips
- ✅ Real-time chat interface
- ✅ Patient telemetry card
- ✅ Bedside scales (Pain VAS, Morse Fall Risk)
- ✅ Emergency triage banner

#### Site Investigator Dashboard Tab
- ✅ KPI metrics (Enrollment, Critical AEs, AYUSH Alerts, ASHA Sync)
- ✅ Active trial protocol view
- ✅ Patient roster table
- ✅ CTCAE severity grading
- ✅ Concomitant medication tracking
- ✅ Action buttons (SAE Dossier, Dose Log)

---

## 🛠 Build & Deploy

### Development
```bash
npm run dev
```
Server runs at `http://localhost:3000`

### Production Build
```bash
npm run build
npm start
```

### Lint
```bash
npm run lint
```

---

## 🌍 Multilingual Support

**Supported Languages:**
- **English** (en) - Default
- **हिंदी** (hi) - Hindi
- **मराठी** (mr) - Marathi

All UI strings, placeholders, and alert messages adapt dynamically based on language selection.

---

## 🎨 Styling

**Framework:** Tailwind CSS 3.3
- Dark theme (slate-950, slate-900, slate-800)
- Accent colors: rose-500, cyan-500, amber-500, emerald-500
- Responsive grid layouts
- Smooth animations & transitions

**Custom Utilities:**
- `.no-scrollbar` - Hide scrollbars on horizontal scroll containers
- `.animate-in` - Fade-in animation

---

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (single column)
- **Tablet**: 640px - 1024px (2 columns)
- **Desktop**: > 1024px (3-4 columns)

---

## 🔐 Security & Compliance

- ✅ TypeScript for type safety
- ✅ Client-side rendering with Next.js
- ✅ No sensitive data stored (demo mode)
- ✅ HIPAA-ready architecture (future API integration)
- ✅ CTCAE v5.0 grading standards

---

## 📊 API Integration (Future)

The app is structured for easy backend integration:

```typescript
// Example: Connect to real patient data
const fetchPatientData = async (patientId: string) => {
  const response = await fetch(`/api/patients/${patientId}`);
  return response.json();
};
```

**Planned Endpoints:**
- `GET /api/patients` - List enrolled subjects
- `POST /api/symptoms` - Log patient symptoms
- `GET /api/trials` - Retrieve trial protocols
- `POST /api/adverse-events` - Report AEs
- `GET /api/drugs` - Drug interaction database

---

## 🧪 Testing

Add test files in `__tests__/`:
```bash
npm run test
```

---

## 📦 Dependencies

**Core:**
- `react@18.2.0` - UI library
- `react-dom@18.2.0` - DOM rendering
- `next@14.0.0` - React framework

**UI:**
- `lucide-react@0.292.0` - Icon library
- `tailwindcss@3.3.0` - CSS framework

**Dev:**
- `typescript@5.0.0` - Type checking
- `autoprefixer@10.4.0` - CSS vendor prefixes

---

## 🚢 Deployment Options

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
CMD ["npm", "start"]
```

### GitHub Pages
Not supported (requires backend API)

---

## 🐛 Common Issues

### Issue: Port 3000 already in use
```bash
npx kill-port 3000
npm run dev
```

### Issue: TypeScript errors
```bash
npm run lint
# Fix errors, then retry
```

### Issue: Tailwind styles not loading
```bash
rm -rf .next
npm run dev
```

---

## 📚 Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev)
- [CTCAE v5.0 Grading](https://ctep.cancer.gov/protocoldevelopment/electronic_applications/ctc.htm)

---

## 📞 Support

- **Email**: support@curasignal.io
- **Emergency**: Call 112 (India)
- **GitHub Issues**: [Report bugs](https://github.com/varshavishwas16/curasignal-prototype/issues)

---

## 📄 License

MIT License - See LICENSE file for details

---

## 🙌 Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

**CuraSignal AI** — *Continuous Oncology Vigilance & Clinical Trial Triage* 🏥❤️
