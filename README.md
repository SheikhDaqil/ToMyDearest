# For You, Always — Romantic Website

A responsive static website combining an animated envelope/letter with a multi-section romantic experience.

## Preview
Open `index.html` in a modern browser. Internet is required for Google Fonts and the hosted background music.

## Personalise before publishing
Edit `index.html`:
- Change “my favourite person” and other headings to your partner's name/nickname.
- Rewrite the letter and ending so they sound like you.
- Replace the three memory placeholder cards with your own photos. For example, replace `<div class="photo-placeholder"><span>♡</span></div>` with `<img src="images/first-date.jpg" alt="Our first date">` and add matching CSS for `.memory-card img`.
- Add your images to an `images` folder in this repository.

## Music
The page uses “Emotional Love Piano Melody” by Alexander, provided by Orange Free Sounds under Creative Commons Attribution 4.0. The audio begins only after the visitor clicks the envelope (browser autoplay restrictions). If the remote audio host changes its URL, download the track from its source page and place it in this folder as `music.mp3`, then change the audio source in `index.html` to `music.mp3`.

Attribution: Emotional Love Piano Melody by Alexander, https://orangefreesounds.com/emotional-love-piano-melody/, licensed under CC BY 4.0.

## Publish on GitHub Pages
1. Create a GitHub repository and upload `index.html`, `style.css`, `script.js`, and any image/music files.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select `main` and `/ (root)`, then save.
5. Open the Pages URL shown there.

No build process or server-side code is required.
