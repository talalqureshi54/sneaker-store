# LUXURY FOOTWEAR NEXT.JS PLATFORM - PRODUCTION SETUP

Features included:
1. Luxury White Theme (Apple/Nike clean aesthetic with Emerald Green accents)
2. Admin Dashboard protected by Master PIN: `9922`
3. 1-Click Multi-Image Shoe Publisher
4. Dynamic Category Engine (Add categories that show up live on homepage filter)
5. Custom Pages Engine (Create any policy page like Size Guide or Return Policy)
6. WhatsApp Direct Order Funnel with Open Parcel Guarantee

---------------------------------------------------------
HOW TO DEPLOY ON GITHUB & VERCEL:
---------------------------------------------------------
1. Extract this zip file on your computer.
2. In your GitHub account, create a new repository: `luxury-kicks-store`.
3. Drag and drop all extracted files & folders (`src`, `package.json`, `tailwind.config.ts`, etc.) into GitHub and click "Commit changes".
4. Go to vercel.com -> "Add New Project" -> Import your `luxury-kicks-store`.
5. Under "Environment Variables", add:
   - `NEXT_PUBLIC_ADMIN_PIN` = `9922`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER` = `923001234567` (replace with your number)
   - `NEXT_PUBLIC_SUPABASE_URL` = (optional: your supabase project url)
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = (optional: your supabase anon key)
6. Click "Deploy". In 60 seconds, your luxury store will be 100% live!
