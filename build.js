const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class MermaidPreRenderer {
  constructor() {
    this.pagesDir = path.join(__dirname, 'pages');
    this.tempDir = path.join(__dirname, 'temp');
    this.backupDir = path.join(__dirname, 'backup');
  }

  async init() {
    // Create temp and backup directories
    if (!fs.existsSync(this.tempDir)) {
      fs.mkdirSync(this.tempDir);
    }
    if (!fs.existsSync(this.backupDir)) {
      fs.mkdirSync(this.backupDir);
    }
  }

  // Extract Mermaid code blocks from markdown
  extractMermaidBlocks(content) {
    const mermaidRegex = /```mermaid\s*([\s\S]*?)```/g;
    const blocks = [];
    let match;

    while ((match = mermaidRegex.exec(content)) !== null) {
      blocks.push({
        fullMatch: match[0],
        code: match[1].trim(),
        index: match.index
      });
    }

    return blocks;
  }

  // Render Mermaid code to SVG using Mermaid CLI
  async renderMermaidToSvg(mermaidCode, index) {
    const inputFile = path.join(this.tempDir, `diagram-${index}.mmd`);
    const outputFile = path.join(this.tempDir, `diagram-${index}.svg`);

    try {
      // Write Mermaid code to temporary file
      fs.writeFileSync(inputFile, mermaidCode, 'utf8');

      // Use Mermaid CLI to convert to SVG with optimized settings
      execSync(`npx @mermaid-js/mermaid-cli -i "${inputFile}" -o "${outputFile}" --theme default --width 1200 --height 800 --configFile "${this.createMermaidConfig()}"`, {
        stdio: 'pipe',
        timeout: 30000
      });

      // Read the generated SVG
      const svgContent = fs.readFileSync(outputFile, 'utf8');

      // Clean up temp files
      if (fs.existsSync(inputFile)) fs.unlinkSync(inputFile);
      if (fs.existsSync(outputFile)) fs.unlinkSync(outputFile);

      return svgContent;
    } catch (error) {
      console.error(`Error rendering diagram ${index}:`, error.message);

      // Clean up temp files on error
      if (fs.existsSync(inputFile)) fs.unlinkSync(inputFile);
      if (fs.existsSync(outputFile)) fs.unlinkSync(outputFile);

      return `<div class="mermaid-fallback"><pre><code class="language-mermaid">${mermaidCode}</code></pre></div>`;
    }
  }

  // Process a single markdown file
  async processMarkdownFile(filePath) {
    console.log(`Processing ${path.basename(filePath)}...`);

    const content = fs.readFileSync(filePath, 'utf8');
    const mermaidBlocks = this.extractMermaidBlocks(content);

    if (mermaidBlocks.length === 0) {
      console.log(`  No Mermaid diagrams found in ${path.basename(filePath)}`);
      return;
    }

    console.log(`  Found ${mermaidBlocks.length} Mermaid diagram(s)`);

    let processedContent = content;

    // Process each Mermaid block
    for (let i = 0; i < mermaidBlocks.length; i++) {
      const block = mermaidBlocks[i];
      console.log(`  Rendering diagram ${i + 1}/${mermaidBlocks.length}...`);

      try {
        const svg = await this.renderMermaidToSvg(block.code, i);

        // Create a div with the SVG that will be styled properly
        const svgWrapper = `<div class="mermaid-svg">${svg}</div>`;

        // Replace the code block with the SVG
        processedContent = processedContent.replace(block.fullMatch, svgWrapper);

        console.log(`  ✓ Diagram ${i + 1} rendered successfully`);
      } catch (error) {
        console.error(`  ✗ Failed to render diagram ${i + 1}:`, error);
        // Keep original code block as fallback
      }
    }

    // Backup original file
    const backupPath = path.join(this.backupDir, path.basename(filePath));
    fs.copyFileSync(filePath, backupPath);

    // Write processed content
    fs.writeFileSync(filePath, processedContent);

    console.log(`  ✓ ${path.basename(filePath)} processed and saved`);
  }

  // Process all markdown files
  async processAllFiles() {
    const files = fs.readdirSync(this.pagesDir)
      .filter(file => file.endsWith('.md'))
      .map(file => path.join(this.pagesDir, file));

    console.log(`Found ${files.length} markdown files to process`);

    for (const file of files) {
      await this.processMarkdownFile(file);
    }
  }

  // Create Mermaid config file for better font sizing
  createMermaidConfig() {
    const configPath = path.join(this.tempDir, 'mermaid-config.json');
    const config = {
      theme: 'default',
      themeVariables: {
        fontSize: '14px',
        fontFamily: 'arial, sans-serif'
      },
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: 'basis',
        nodeSpacing: 50,
        rankSpacing: 50,
        diagramPadding: 20,
        padding: 15
      },
      sequence: {
        useMaxWidth: true,
        htmlLabels: true,
        diagramMarginX: 50,
        diagramMarginY: 10,
        actorMargin: 50,
        width: 150,
        height: 65,
        boxMargin: 10,
        boxTextMargin: 5,
        noteMargin: 10,
        messageMargin: 35,
        mirrorActors: true,
        bottomMarginAdj: 1,
        useMaxWidth: true
      },
      gantt: {
        useMaxWidth: true,
        htmlLabels: true,
        topPadding: 50,
        leftPadding: 75
      }
    };

    fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
    return configPath;
  }

  // Clean up temp files
  cleanup() {
    if (fs.existsSync(this.tempDir)) {
      fs.rmSync(this.tempDir, { recursive: true, force: true });
    }
  }

  async build() {
    console.log('🚀 Starting Mermaid diagram pre-rendering build...');
    console.log('');

    try {
      await this.init();
      await this.processAllFiles();
      this.cleanup();

      console.log('');
      console.log('✅ Build completed successfully!');
      console.log('📁 Original files backed up to backup/ directory');
      console.log('🌐 Ready for GitHub Pages deployment');

    } catch (error) {
      console.error('❌ Build failed:', error);
      process.exit(1);
    }
  }
}

// Run the build
const renderer = new MermaidPreRenderer();
renderer.build();
