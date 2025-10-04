# Adding Your Photo

## 📸 How to Add Your Photo

1. **Prepare Your Photo:**
   - Use a professional headshot or clear portrait
   - Recommended size: 400x400 pixels or larger
   - Format: JPG, PNG, or WebP
   - Make sure it's well-lit and professional

2. **Add Your Photo:**
   - Save your photo as `nishanth-reddy.jpg`
   - Place it in this folder: `public/images/`
   - The portfolio will automatically display your photo

3. **Alternative Names:**
   If you want to use a different filename, update the image source in:
   `src/data/portfolioData.js` (line 46)

## 🎨 Photo Guidelines

- **Professional appearance**: Business casual or formal attire
- **Good lighting**: Well-lit, clear image
- **Neutral background**: Solid color or simple background
- **Head and shoulders**: Portrait orientation works best
- **High quality**: Clear, sharp image

## 🔧 Technical Details

The photo will be displayed as:
- Circular crop (120px diameter)
- Green glowing border
- Hover effects with scaling
- Responsive design for mobile devices

If no photo is found, a placeholder with an icon will be shown instead.
