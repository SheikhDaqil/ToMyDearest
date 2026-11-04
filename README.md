# My Dearest Sakinah

Version 3 of the romantic letter website.

## Files
- `index.html` - website content and structure
- `style.css` - styling and animations
- `script.js` - envelope and music controls

## Preview
Open `index.html` in a modern browser. Google Fonts and the hosted music need an internet connection.

## Music troubleshooting
The music button is now independent from the envelope. Click **Play romantic music** at the top right to start it. Browsers require a direct user click before audio can play.

This version points to the MP3 listed on Orange Free Sounds. If that host is unavailable in your browser or network, download the MP3 from:
https://orangefreesounds.com/emotional-love-piano-melody/
Save it in this folder as `music.mp3`, then change the audio source in `index.html` to:
`<source src="music.mp3" type="audio/mpeg">`

This local-file method is the most reliable for GitHub Pages because the audio is served from the same repository as the site.

Music attribution: “Emotional Love Piano Melody” by Alexander, licensed under Creative Commons Attribution 4.0 International (CC BY 4.0).
Source: https://orangefreesounds.com/emotional-love-piano-melody/

## Publish with GitHub Pages
Upload `index.html`, `style.css`, and `script.js` to the repository root. If you use local music, upload `music.mp3` there too. Then go to Settings > Pages, select Deploy from a branch, choose `main` and `/ (root)`, and save.
