# IDecodeNetworks Blog - Build Process

This repository contains the source code for the IDecodeNetworks technical blog website. The blog features Mermaid diagrams that are pre-rendered for compatibility with GitHub Pages.

## Problem Solved

The original blog had Mermaid diagrams that worked locally but failed on GitHub Pages due to Content Security Policy (CSP) restrictions. This build process pre-renders all Mermaid diagrams to static SVG images, ensuring they work on all platforms.

## Build Process Overview

1. **Development**: Edit markdown files in the `pages/` directory with Mermaid code blocks as usual
2. **Build**: Run the build script to convert Mermaid diagrams to SVG
3. **Deploy**: Deploy the processed files to GitHub Pages

## Installation

1. Install Node.js (version 16 or higher)
2. Clone this repository
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Development Workflow

1. **Edit blog posts**: Modify `.md` files in the `pages/` directory
2. **Test locally**: Use the development server
   ```bash
   npm run dev
   ```
3. **Build for production**: Pre-render Mermaid diagrams
   ```bash
   npm run build
   ```
4. **Deploy**: Commit and push the built files to GitHub Pages

### Build Commands

- `npm run build` - Process all markdown files and pre-render Mermaid diagrams
- `npm run dev` - Start local development server (Python)
- `npm run clean` - Clean build artifacts and restore original files

### Clean Commands

The `clean.js` script provides additional cleanup options:

```bash
# Restore original markdown files from backup
node clean.js restore

# Remove build artifacts (node_modules, temp, backup)
node clean.js artifacts

# Full cleanup (restore + artifacts)
node clean.js all

# Show current project status
node clean.js status
```

## File Structure

```
├── pages/              # Blog post markdown files
├── backup/             # Original markdown files (created during build)
├── temp/               # Temporary files during build
├── package.json        # Node.js dependencies and scripts
├── build.js            # Main build script
├── clean.js            # Cleanup and restore script
├── app.js              # Frontend JavaScript
├── style.css           # Stylesheets
├── index.html          # Main HTML file
└── CNAME               # GitHub Pages domain configuration
```

## How It Works

### Build Process

1. **Extract Mermaid Blocks**: Scans all `.md` files for ```mermaid code blocks
2. **Render to SVG**: Uses Puppeteer and Mermaid.js to convert diagrams to SVG
3. **Replace Content**: Substitutes code blocks with `<div class="mermaid-svg">` containing the SVG
4. **Backup Originals**: Saves original markdown files to `backup/` directory

### JavaScript Handling

The frontend JavaScript (`app.js`) detects whether content has pre-rendered SVGs or needs client-side rendering:

- **Pre-rendered content**: Displays SVG directly (works on GitHub Pages)
- **Development content**: Falls back to client-side Mermaid rendering

## Deployment to GitHub Pages

1. Run the build process:
   ```bash
   npm run build
   ```

2. Commit and push the changes:
   ```bash
   git add .
   git commit -m "Build: Pre-render Mermaid diagrams"
   git push origin main
   ```

3. GitHub Pages will serve the processed files with working diagrams.

## Local Development

For local development with live Mermaid rendering:

1. Restore original files:
   ```bash
   node clean.js restore
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Open `http://localhost:8000` in your browser

## Troubleshooting

### Diagrams Not Showing

1. Check browser console for errors
2. Ensure build process completed successfully
3. Verify SVG content in processed markdown files

### Build Failures

1. Check Node.js version (16+ required)
2. Ensure all dependencies are installed
3. Check file permissions in `pages/` directory

### Restore Original Files

If you need to revert to original markdown files:

```bash
node clean.js restore
```

## Technical Details

- **Mermaid Rendering**: Uses Puppeteer to run Mermaid.js in a headless browser
- **SVG Optimization**: Generated SVGs are responsive and styled for the blog theme
- **Error Handling**: Build process continues even if individual diagrams fail
- **Backup System**: Original files are preserved for development workflow

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make changes to markdown files or code
4. Test locally with `npm run dev`
5. Build and test production version with `npm run build`
6. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
