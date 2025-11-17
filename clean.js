const fs = require('fs');
const path = require('path');

class BuildCleaner {
  constructor() {
    this.pagesDir = path.join(__dirname, 'pages');
    this.backupDir = path.join(__dirname, 'backup');
  }

  // Restore original markdown files from backup
  restoreOriginalFiles() {
    if (!fs.existsSync(this.backupDir)) {
      console.log('❌ No backup directory found. Nothing to restore.');
      return;
    }

    const backupFiles = fs.readdirSync(this.backupDir)
      .filter(file => file.endsWith('.md'));

    if (backupFiles.length === 0) {
      console.log('❌ No backup files found.');
      return;
    }

    console.log(`🔄 Restoring ${backupFiles.length} original markdown files...`);

    for (const file of backupFiles) {
      const backupPath = path.join(this.backupDir, file);
      const targetPath = path.join(this.pagesDir, file);

      try {
        fs.copyFileSync(backupPath, targetPath);
        console.log(`  ✓ Restored ${file}`);
      } catch (error) {
        console.error(`  ✗ Failed to restore ${file}:`, error);
      }
    }

    console.log('✅ Original files restored successfully!');
  }

  // Clean build artifacts
  cleanBuildArtifacts() {
    const artifacts = ['backup', 'temp', 'node_modules'];

    console.log('🧹 Cleaning build artifacts...');

    for (const artifact of artifacts) {
      const artifactPath = path.join(__dirname, artifact);

      if (fs.existsSync(artifactPath)) {
        try {
          fs.rmSync(artifactPath, { recursive: true, force: true });
          console.log(`  ✓ Removed ${artifact}/`);
        } catch (error) {
          console.error(`  ✗ Failed to remove ${artifact}/:`, error);
        }
      } else {
        console.log(`  - ${artifact}/ not found (already clean)`);
      }
    }

    // Remove package files
    const packageFiles = ['package.json', 'package-lock.json', 'yarn.lock'];
    for (const file of packageFiles) {
      const filePath = path.join(__dirname, file);
      if (fs.existsSync(filePath)) {
        try {
          fs.unlinkSync(filePath);
          console.log(`  ✓ Removed ${file}`);
        } catch (error) {
          console.error(`  ✗ Failed to remove ${file}:`, error);
        }
      }
    }

    console.log('✅ Build artifacts cleaned!');
  }

  // Show current state
  showStatus() {
    console.log('📊 Current project status:');
    console.log('');

    const dirs = ['backup', 'temp', 'node_modules'];
    const files = ['package.json', 'build.js', 'clean.js'];

    console.log('Directories:');
    for (const dir of dirs) {
      const exists = fs.existsSync(path.join(__dirname, dir));
      console.log(`  ${exists ? '✓' : '✗'} ${dir}/`);
    }

    console.log('');
    console.log('Files:');
    for (const file of files) {
      const exists = fs.existsSync(path.join(__dirname, file));
      console.log(`  ${exists ? '✓' : '✗'} ${file}`);
    }

    console.log('');
    console.log('Markdown files in pages/:');
    if (fs.existsSync(this.pagesDir)) {
      const mdFiles = fs.readdirSync(this.pagesDir)
        .filter(file => file.endsWith('.md'));
      mdFiles.forEach(file => {
        console.log(`  ✓ ${file}`);
      });
    }
  }

  clean() {
    const args = process.argv.slice(2);
    const command = args[0];

    console.log('🧹 Build Cleaner for IDecodeNetworks Blog');
    console.log('');

    switch (command) {
      case 'restore':
        this.restoreOriginalFiles();
        break;
      case 'artifacts':
        this.cleanBuildArtifacts();
        break;
      case 'all':
        this.restoreOriginalFiles();
        this.cleanBuildArtifacts();
        break;
      case 'status':
        this.showStatus();
        break;
      default:
        console.log('Usage: node clean.js <command>');
        console.log('');
        console.log('Commands:');
        console.log('  restore    - Restore original markdown files from backup');
        console.log('  artifacts  - Remove build artifacts (backup, temp, node_modules)');
        console.log('  all        - Restore files and clean artifacts');
        console.log('  status     - Show current project status');
        console.log('');
        console.log('Examples:');
        console.log('  node clean.js restore    # Restore original files');
        console.log('  node clean.js artifacts  # Clean build files');
        console.log('  node clean.js all        # Full cleanup');
        console.log('  node clean.js status     # Check current state');
        break;
    }
  }
}

// Run the cleaner
const cleaner = new BuildCleaner();
cleaner.clean();
