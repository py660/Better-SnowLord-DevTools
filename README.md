# Custom Developer Console
- [x] Webpage Direct Editor (Pen)
- [x] Element Inspector (Magnifying Glass)
- [x] Partially Finished Main Console
- [x] Partially Finished HTML Inspector
- [x] Almost Done With Sources Viewer
- [ ] Add Settings - Night Mode
- [ ] Add More Tools

# Notes
My custom Developer Console isn't perfect, some secure sites disable inline-scripts, which breaks the console.

# Instructions
**Instructions without Console (Blocked by School, etc)**
1. Copy the Script from *bookmarklet.js*, or by using the code snippet below.
`javascript:(function()%7B(function()%20%7Bvar%20x%20%3D%20document.createElement(%22script%22)%3Bx.src%20%3D%20%22https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FSnowLord7%2Fdevconsole%40master%2Fmain.js%22%3Bx.onerror%20%3D%20alert(%22Error%20Loading%20Developer%20Console!%22)%3Bdocument.head.appendChild(x)%3B%7D)()%7D)()`
3. Add a New Bookmark With the Code From *Bookmarklet.txt* as the URL.
   1. If you don't see your bookmark bar, press *Ctrl + Shift + b*.
   1. For more help see the GIF below.
4. Click the Bookmark to Start the Developer Console.
![Adding Bookmark](https://media.discordapp.net/attachments/494518655200002072/557344351253168128/Dev.gif)

**Basic Instructions /w Console**
1. Open the Developer Console.
   1. Methods Include: Pressing *f12*
   1. Pressing *Ctrl + Shift + i*
   1. Right Clicking then Pressing '*Inspect*'
1. Copy the Script from *main.js*.
1. Paste the Script in the Developer Console.
1. Press *Enter* to Run the Script.
