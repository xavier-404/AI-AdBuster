# AI AdBuster

AI AdBuster is a browser extension designed to detect and transform advertisements into harmless text-based descriptions. It also includes optional modes to modify or completely remove ads from webpages.

## Features

- Detects advertisements using AI-powered detection.
- Replaces ads with text-based descriptions.
- **Vampire Mode**: Converts ads to grayscale.
- **Exorcism Mode**: Completely removes ads from the webpage.
- Seamless integration with existing web pages.
- Lightweight and efficient, ensuring minimal impact on browsing speed.

## Installation Guide

### 1️⃣ Clone the Repository
To get started, clone the repository from GitHub:
```sh
git clone https://github.com/xavier-404/AI-AdBuster.git
cd AI-AdBuster
```

### 2️⃣ Enable Developer Mode in Chrome
1. Open **Google Chrome** and navigate to:  
   `chrome://extensions/`
2. Enable **Developer Mode** (toggle in the top-right corner).
3. Click **"Load unpacked"** and select the `AI-AdBuster` folder.

### 3️⃣ Test the Extension
1. Click the **AI AdBuster icon** in the Chrome toolbar.
2. Open a webpage with ads.
3. Try different modes:
   - **Vampire Mode**: Ads turn grayscale.
   - **Exorcism Mode**: Ads are removed completely.

## How It Works

1. **Ad Detection**: The content script scans the webpage for known ad elements (iframes, images, and divs with ad-related class names).
2. **Transformation**: The detected ads are replaced with descriptive text.
3. **Modes**:
   - **Vampire Mode** applies a grayscale filter.
   - **Exorcism Mode** removes ad elements from the DOM.

## Testing the Extension

For testing purposes, you can visit the following sample websites with advertisements:
- [Aaj Tak](https://www.aajtak.in/)
- [The Hindu](https://www.thehindu.com/)

These websites contain advertisements that will be detected and transformed by AI AdBuster.

## Troubleshooting

- If the extension is not working, try **reloading the page**.
- Check **Chrome DevTools** (`F12` → Console) for errors.
- Modify `content.js` to enhance ad detection if necessary.

## Future Improvements

- Enhance AI detection using machine learning models.
- Improve the styling of transformed ads.
- Add more customization options for users.

## License

This project is open-source and available under the MIT License.

---

Happy Ad Busting! 🚀

