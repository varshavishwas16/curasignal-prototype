# Deployment Guide for CuraSignal AI

## 🚀 Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

### Step 1: Push to GitHub
Ensure your code is pushed to your GitHub repository.

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with your GitHub account
3. Click "New Project"
4. Select `curasignal-prototype` repository
5. Vercel will auto-detect Next.js configuration
6. Click "Deploy"

**Deployment URL will be:** `https://curasignal-prototype.vercel.app`

---

## 📦 Deploy to Netlify

### Step 1: Build Locally
```bash
npm run build
```

### Step 2: Connect to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "New site from Git"
4. Select `curasignal-prototype` repository
5. Set build command: `npm run build`
6. Set publish directory: `.next`
7. Click "Deploy"

---

## 🐳 Deploy with Docker

### Create Dockerfile
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY package*.json ./

EXPOSE 3000
CMD ["npm", "start"]
```

### Build & Run
```bash
docker build -t curasignal-ai .
docker run -p 3000:3000 curasignal-ai
```

---

## ☁️ Deploy to AWS

### Using AWS Amplify
1. Connect your GitHub repo to AWS Amplify
2. Set build settings:
   - Build command: `npm run build`
   - Start command: `npm start`
3. Deploy automatically on every push

### Using EC2
```bash
# SSH into your EC2 instance
ssh -i your-key.pem ec2-user@your-instance-ip

# Install Node.js
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install -y nodejs

# Clone repo
git clone https://github.com/varshavishwas16/curasignal-prototype.git
cd curasignal-prototype

# Install & build
npm install
npm run build

# Start with PM2
sudo npm install -g pm2
pm2 start npm --name "curasignal" -- start
pm2 startup
pm2 save
```

---

## 🌐 Custom Domain Setup

### For Vercel
1. In Vercel dashboard → Settings → Domains
2. Add your custom domain (e.g., `curasignal.io`)
3. Update DNS records at your domain registrar

### Example DNS Records
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.19.165
```

---

## 📊 Environment Variables

Create `.env.local`:
```env
NEXT_PUBLIC_API_URL=https://api.curasignal.io
NEXT_PUBLIC_APP_NAME=CuraSignal AI
NODE_ENV=production
```

---

## ✅ Pre-Deployment Checklist

- [ ] All code pushed to GitHub
- [ ] No console errors: `npm run lint`
- [ ] Build successful: `npm run build`
- [ ] Responsive design tested
- [ ] All multilingual strings work
- [ ] Emergency alert banner triggers correctly
- [ ] Chat interface sends/receives messages
- [ ] Tab switching works (Companion ↔ Investigator)

---

## 📈 Post-Deployment Testing

After deployment, verify:

### Landing Page (`/`)
- [ ] Hero section displays correctly
- [ ] Vision & Mission visible
- [ ] All CTAs link to `/app`
- [ ] Footer links work

### App Page (`/app`)
- [ ] Page loads without errors
- [ ] Language selector works (EN, HI, MR)
- [ ] Tab switching works
- [ ] Chat interface functional
- [ ] Quick symptom chips respond to clicks
- [ ] Emergency banner displays on fever trigger
- [ ] Investigator dashboard shows data

### Mobile
- [ ] Responsive layout on 375px width
- [ ] Touch interactions work
- [ ] Text readable on small screens

---

## 🔒 Security Checklist

- [ ] HTTPS enabled (automatic on Vercel)
- [ ] No sensitive data in code
- [ ] Environment variables protected
- [ ] CORS headers configured
- [ ] CSP headers set (if needed)

---

## 📊 Monitoring & Analytics

### Add Google Analytics (Optional)
```bash
npm install next-google-analytics
```

### Add Sentry Error Tracking (Optional)
```bash
npm install @sentry/nextjs
```

---

## 🆘 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Styles Not Loading
- Ensure `tailwind.config.js` is in root
- Check `content` paths in config
- Rebuild: `npm run build`

### App Runs Slow
- Check Network tab in DevTools
- Optimize images
- Consider code splitting

---

## 📞 Support

If you need help deploying:
- [Vercel Docs](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/learn/basics/deploying-nextjs-app)
- [GitHub Issues](https://github.com/varshavishwas16/curasignal-prototype/issues)

---

**Your CuraSignal AI is now live! 🎉**
