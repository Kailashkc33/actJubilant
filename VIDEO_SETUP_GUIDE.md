# 🎥 Video Setup Guide for ACT Jubilant

## 📁 File Structure
```
public/
├── videos/
│   └── client-testimonial.mp4    # Your 20MB video (compress this)
├── images/
│   └── testimonials/
│       └── video-thumbnail.jpg   # Thumbnail image for video
```

## 🗜️ Video Compression Options

### Option 1: Online Compression (Easiest)
1. Go to [CloudConvert](https://cloudconvert.com/mp4-converter) or [FreeConvert](https://www.freeconvert.com/mp4-compressor)
2. Upload your 20MB video
3. Set compression to "Medium" or "High" quality
4. Target size: 2-5MB
5. Download compressed video

### Option 2: HandBrake (Free Desktop App)
1. Download [HandBrake](https://handbrake.fr/)
2. Open your video
3. Preset: "Web" or "Fast 1080p30"
4. Output: MP4
5. Start encoding

### Option 3: FFmpeg (Command Line)
```bash
# Install FFmpeg first, then run:
ffmpeg -i input-video.mp4 -vcodec libx264 -crf 28 -preset fast -acodec aac -b:a 128k output-video.mp4
```

## 📸 Thumbnail Image
- Create a thumbnail image (1200x675px recommended)
- Save as `video-thumbnail.jpg`
- Place in `/public/images/testimonials/`

## 🚀 Final Steps
1. **Compress your 20MB video** to 2-5MB
2. **Rename** to `client-testimonial.mp4`
3. **Place** in `/public/videos/`
4. **Create thumbnail** and place in `/public/images/testimonials/`
5. **Deploy** to Vercel

## ✅ Benefits of This Setup
- ✅ **Fast loading** - Video only loads when clicked
- ✅ **Mobile friendly** - Responsive design
- ✅ **SEO optimized** - Proper video markup
- ✅ **Accessible** - Screen reader friendly
- ✅ **Professional** - Custom play button and overlay

## 🎯 Performance Tips
- Keep video under 5MB for best performance
- Use MP4 format for maximum compatibility
- Add a compelling thumbnail to encourage clicks
- Consider creating a shorter 30-60 second version for social media
