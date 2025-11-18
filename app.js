// IDecodeNetworks Solutions - Main JavaScript

// Application Data
const appData = {
  "company": {
    "name": "IDecodeNetworks Solutions",
    "tagline": "Expert Network Engineering Solutions",
    "description": "Providing patient, attentive guidance for network engineers and comprehensive contract solutions for networking professionals"
  },
  "contact": {
    "email": "info@idecodenetworks.com",
    "support": "support@idecodenetworks.com",
    "whatsapp": "https://wa.me/message/3TJ6KSSRUDJ4P1"
  },
  "services": [
    {
      "title": "Training Programs",
      "icon": "fas fa-graduation-cap",
      "description": "From beginner to advanced networking courses with hands-on experience",
      "section": "teaching"
    },
    {
      "title": "Expert Assistance", 
      "icon": "fas fa-handshake",
      "description": "Expert network engineering solutions for complex infrastructure projects",
      "section": "expert-assistance"
    },
    {
      "title": "Testing Services",
      "icon": "fas fa-flask",
      "description": "Comprehensive network testing using open source platforms and tools",
      "section": "testing"
    },
    {
      "title": "Technical Blog",
      "icon": "fas fa-blog", 
      "description": "In-depth articles on networking protocols and best practices",
      "section": "blog"
    }
  ],
  "training_tiers": [
    {
      "level": "Beginners",
      "duration": "8 Weeks",
      "color": "success",
      "icon": "fas fa-seedling",
      "topics": [
        "OSI Model and TCP/IP Stack",
        "Ethernet Fundamentals",
        "ARP and DHCP Basics",
        "Introduction to Routing",
        "Interior Gateway Routing Protocols",
        "Basic Network Troubleshooting"
      ]
    },
    {
      "level": "Intermediate", 
      "duration": "10 Weeks",
      "color": "warning",
      "icon": "fas fa-chart-line",
      "topics": [
        "OSPF and ISIS Routing", 
        "Border Gateway Protocol(BGP)", 
        "LDP and RSVP for building MPLS control plane", 
        "Traffic Engineering", 
        "VPN Fundamentals",
        "Access Control Lists (ACLs)"
      ]
    },
    {
      "level": "Advanced",
      "duration": "12 Weeks", 
      "color": "danger",
      "icon": "fas fa-rocket",
      "topics": [
        "Advanced TCP concepts",
        "Tunneling Protocols for Routing",
        "Segment Routing",
        "Layer 2 VPNs and EVPNs",
        "Quality of Service (QoS) Basics",
        "Network Automation Basics",
        "Best Practices for Networking"


      ]
    },
    {
      "level": "AdHoc",
      "duration": "Flexible Duration",
      "color": "info", 
      "icon": "fas fa-cogs",
      "topics": [
        "Protocol-Specific Deep Dives",
        "Vendor-Specific Configurations",
        "Network Programming using Python",
        "Automation Tools - Ansible",
        "Advanced QoS Concepts", 
        "Testing Network Protocols"
      ]
    }
  ],
  "skills": [
    {
      "title": "Data Center Design",
      "icon": "fas fa-building", 
      "description": "Complete data center architecture, including redundancy planning and scalability considerations."
    },
    {
      "title": "Network Troubleshooting",
      "icon": "fas fa-tools",
      "description": "Rapid diagnosis and resolution of complex routing issues in provider networks and enterprise environments."
    },
    {
      "title": "Routing Optimization", 
      "icon": "fas fa-route",
      "description": "BGP optimization, IGP tuning, and advanced routing configuration for optimal performance."
    },
    {
      "title": "Network Security",
      "icon": "fas fa-shield-alt",
      "description": "Security architecture design, firewall configuration, and network segmentation strategies."
    },
    {
      "title": "Performance Analysis",
      "icon": "fas fa-chart-line", 
      "description": "Network performance monitoring, capacity planning, and optimization recommendations."
    },
    {
      "title": "Infrastructure Migration",
      "icon": "fas fa-cogs",
      "description": "Planning and executing network infrastructure migrations with minimal downtime."
    }
  ],
  "portfolio": [
    {
      "title": "Enterprise Data Center Redesign",
      "client": "Manufacturing Company",
      "duration": "6 Months",
      "type": "Complex", 
      "status": "Completed",
      "badge_color": "success",
      "description": "Complete network architecture overhaul for a large data center, implementing redundant spine-leaf topology with 99.99% uptime requirements."
    },
    {
      "title": "ISP Network Optimization",
      "client": "Regional Internet Service Provider",
      "duration": "3 Weeks",
      "type": "Critical",
      "status": "Critical", 
      "badge_color": "danger",
      "description": "Resolved critical BGP routing issues causing 50% packet loss and optimized network performance across 200+ edge routers."
    },
    {
      "title": "Campus Network Segmentation", 
      "client": "Large University",
      "duration": "4 Months",
      "type": "Security Focus",
      "status": "Security Focus",
      "badge_color": "warning",
      "description": "Implemented micro-segmentation strategy for 15,000+ devices across multiple campus locations with enhanced security policies."
    },
    {
      "title": "Cloud Migration Network Design",
      "client": "Healthcare Company", 
      "duration": "2 Months",
      "type": "Cloud",
      "status": "Cloud",
      "badge_color": "info", 
      "description": "Designed hybrid cloud connectivity solution with redundant VPN tunnels and optimized routing for HIPAA compliance."
    }
  ],
  "testing_services": [
    {
      "title": "Pre-Production Testing",
      "icon": "fas fa-flask",
      "description": "Validate network designs and configurations before deployment in production environments."
    },
    {
      "title": "Multi-Vendor Verification",
      "icon": "fas fa-check-double",
      "description": "Test interoperability and compatibility across different vendor equipment and solutions."
    },
    {
      "title": "Feature Validation",
      "icon": "fas fa-cogs",
      "description": "Comprehensive testing of specific features and protocols to ensure proper functionality."
    },
    {
      "title": "Performance Analysis",
      "icon": "fas fa-chart-line",
      "description": "Benchmark network performance, throughput, latency, and scalability characteristics."
    },
    {
      "title": "Compliance Testing",
      "icon": "fas fa-shield-alt",
      "description": "Verify adherence to industry standards, regulatory requirements, and security policies."
    },
    {
      "title": "Test Report Generation",
      "icon": "fas fa-file-alt",
      "description": "Detailed documentation and analysis to support decision-making and planning."
    }
  ],
  "open_source_tools": [
    {
      "name": "GNS3",
      "icon": "fas fa-network-wired",
      "description": "Network simulation platform"
    },
    {
      "name": "EVE-NG",
      "icon": "fas fa-server",
      "description": "Multi-vendor virtual environment"
    },
    {
      "name": "Mininet",
      "icon": "fas fa-sitemap",
      "description": "SDN prototyping/emulation"
    },
    {
      "name": "Containerlab",
      "icon": "fas fa-cube",
      "description": "Container-based network labs"
    },
    {
      "name": "CORE",
      "icon": "fas fa-project-diagram",
      "description": "Open research emulator"
    },
    {
      "name": "Kathara",
      "icon": "fas fa-layer-group",
      "description": "Container network emulation"
    }
  ],
  "testing_process": [
    {
      "step": 1,
      "title": "Requirements Analysis",
      "description": "Define testing scope, objectives, and success criteria based on your network requirements."
    },
    {
      "step": 2,
      "title": "Lab Environment Setup",
      "description": "Configure virtual testing environment using appropriate open source tools and platforms."
    },
    {
      "step": 3,
      "title": "Configuration Implementation",
      "description": "Implement network configurations and topologies matching your production design."
    },
    {
      "step": 4,
      "title": "Test Execution",
      "description": "Execute comprehensive test scenarios including normal operation and failure conditions."
    },
    {
      "step": 5,
      "title": "Results Analysis",
      "description": "Analyze test results, identify issues, and validate performance against requirements."
    },
    {
      "step": 6,
      "title": "Report & Recommendations",
      "description": "Deliver detailed test reports with findings, recommendations, and deployment guidance."
    }
  ],
  "blog_posts": [
    {
      "id": "rsvp",
      "file": "pages/rsvp.md"
    },
    {
      "id": "isis-duplicate-ip",
      "file": "pages/isis-duplicate-ip.md"
    },
    {
      "id": "isis-adjacency",
      "file": "pages/isis-adjacency.md"
    },
    {
      "id": "rsvp-message-types",
      "file": "pages/rsvp-message-types.md"
    },
    {
      "id": "ospf-fundamentals",
      "file": "pages/ospf-routing-fundamentals.md"
    },
    {
      "id": "tcp-network-devices",
      "file": "pages/testing-tcp-network-devices.md"
    },
    {
      "id": "ansible-beginners",
      "file": "pages/ansible-for-network-engineers-beginners.md"
    }
  ]
};



// Navigation functionality
class NavigationManager {
  constructor() {
    this.currentSection = 'home';
    this.init();
  }
  
  init() {
    console.log('Initializing navigation...');
    
    // Handle browser back/forward
    window.addEventListener('popstate', (e) => {
      const section = e.state?.section || 'home';
      this.showSection(section, false);
    });
    
    // Set initial state after DOM is ready
    setTimeout(() => {
      this.addAllNavigationListeners();
      this.showSection('home', false);
    }, 100);
  }
  
  addAllNavigationListeners() {
    // Get all elements with data-section attribute
    const sectionLinks = document.querySelectorAll('[data-section]');
    console.log(`Found ${sectionLinks.length} section links`);
    
    sectionLinks.forEach((link, index) => {
      // Remove existing listeners to prevent duplicates
      const newLink = link.cloneNode(true);
      link.parentNode.replaceChild(newLink, link);
      
      newLink.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const targetSection = newLink.getAttribute('data-section');
        console.log(`Navigation clicked: ${targetSection} (link ${index + 1})`);
        
        if (targetSection) {
          this.showSection(targetSection);
        }
      });
      
      console.log(`Added listener to link ${index + 1}: ${newLink.getAttribute('data-section')}`);
    });
  }
  
  showSection(sectionName, updateHistory = true) {
    console.log(`Showing section: ${sectionName}`);
    
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
      section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionName);
    if (targetSection) {
      targetSection.classList.add('active');
      this.currentSection = sectionName;
      
      // Update navigation active state
      this.updateNavigation(sectionName);
      
      // Update browser history
      if (updateHistory) {
        history.pushState({ section: sectionName }, '', `#${sectionName}`);
      }
      
      // Scroll to top
      window.scrollTo(0, 0);
      
      console.log(`Successfully showed section: ${sectionName}`);
    } else {
      console.error(`Section not found: ${sectionName}`);
    }
  }
  
  updateNavigation(activeSection) {
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-section') === activeSection) {
        link.classList.add('active');
      }
    });
  }
}

// Content Managers
class ContentManager {
  static renderTrainingTiers() {
    const container = document.getElementById('training-tiers');
    if (!container) {
      console.log('Training tiers container not found');
      return;
    }
    
    console.log('Rendering training tiers...');
    container.innerHTML = appData.training_tiers.map(tier => `
      <div class="col-lg-6 col-xl-3">
        <div class="training-tier tier-${tier.color}">
          <div class="tier-header">
            <div>
              <i class="${tier.icon} tier-icon"></i>
              <h3 class="tier-level">${tier.level}</h3>
              <p class="tier-duration">${tier.duration}</p>
            </div>
          </div>
          <ul class="tier-topics">
            ${tier.topics.map(topic => `<li>${topic}</li>`).join('')}
          </ul>
          <div class="mt-4 text-center">
            <a href="#contact" class="btn btn-primary contact-btn" data-section="contact">
              <i class="fas fa-envelope me-2"></i>Enroll Now
            </a>
          </div>
        </div>
      </div>
    `).join('');
  }
  
  static renderSkills() {
    const container = document.getElementById('skills-grid');
    if (!container) {
      console.log('Skills grid container not found');
      return;
    }
    
    console.log('Rendering skills...');
    container.innerHTML = appData.skills.map(skill => `
      <div class="col-md-6 col-lg-4">
        <div class="skill-card">
          <div class="skill-icon">
            <i class="${skill.icon}"></i>
          </div>
          <h4>${skill.title}</h4>
          <p>${skill.description}</p>
        </div>
      </div>
    `).join('');
  }
  
  static renderPortfolio() {
    const container = document.getElementById('portfolio-grid');
    if (!container) {
      console.log('Portfolio grid container not found');
      return;
    }
    
    console.log('Rendering portfolio...');
    container.innerHTML = appData.portfolio.map(project => `
      <div class="col-lg-6">
        <div class="portfolio-card">
          <div class="portfolio-header">
            <div>
              <h4 class="portfolio-title">${project.title}</h4>
              <p class="portfolio-client">${project.client}</p>
            </div>
            <span class="status status--${project.badge_color}">${project.status}</span>
          </div>
          <div class="portfolio-meta">
            <span class="portfolio-duration">${project.duration}</span>
            <span class="portfolio-type">${project.type}</span>
          </div>
          <p class="portfolio-description">${project.description}</p>
        </div>
      </div>
    `).join('');
  }

  static renderTestingServices() {
    const container = document.getElementById('testing-services-grid');
    if (!container) {
      console.log('Testing services container not found');
      return;
    }

    console.log('Rendering testing services...');
    container.innerHTML = appData.testing_services.map(service => `
      <div class="col-md-6 col-lg-4">
        <div class="testing-card">
          <div class="testing-icon">
            <i class="${service.icon}"></i>
          </div>
          <h4>${service.title}</h4>
          <p>${service.description}</p>
        </div>
      </div>
    `).join('');
  }

  static renderOpenSourceTools() {
    const container = document.getElementById('open-source-tools-grid');
    if (!container) {
      console.log('Open source tools container not found');
      return;
    }

    console.log('Rendering open source tools...');
    container.innerHTML = appData.open_source_tools.map(tool => `
      <div class="col-md-6 col-lg-4">
        <div class="tool-card">
          <div class="tool-icon">
            <i class="${tool.icon}"></i>
          </div>
          <h5>${tool.name}</h5>
          <p>${tool.description}</p>
        </div>
      </div>
    `).join('');
  }

  static renderTestingProcess() {
    const container = document.getElementById('testing-process-grid');
    if (!container) {
      console.log('Testing process container not found');
      return;
    }

    console.log('Rendering testing process...');
    container.innerHTML = appData.testing_process.map(process => `
      <div class="col-md-6 col-lg-4">
        <div class="process-card">
          <div class="process-number">${process.step}</div>
          <h5>${process.title}</h5>
          <p>${process.description}</p>
        </div>
      </div>
    `).join('');
  }
  
  static async renderBlogPosts() {
    const container = document.getElementById('blog-grid');
    if (!container) {
      console.log('Blog grid container not found');
      return;
    }

    console.log('Rendering blog posts...');

    // Show loading state
    container.innerHTML = '<div class="text-center py-5"><i class="fas fa-spinner fa-spin fa-2x"></i><p class="mt-3">Loading blog posts...</p></div>';

    try {
      // Load metadata for all posts with individual error handling
      const postPromises = appData.blog_posts.map(async (post) => {
        try {
          console.log(`Loading metadata for post: ${post.id}`);
          const metadata = await BlogManager.loadPostMetadata(post.id);
          console.log(`Successfully loaded metadata for: ${post.id}`, metadata ? 'success' : 'failed');
          return metadata;
        } catch (error) {
          console.error(`Error loading metadata for ${post.id}:`, error);
          return null;
        }
      });

      const posts = await Promise.allSettled(postPromises);
      const validPosts = posts
        .filter(result => result.status === 'fulfilled' && result.value !== null)
        .map(result => result.value);

      console.log(`Successfully loaded ${validPosts.length} blog posts out of ${appData.blog_posts.length}`);

      if (validPosts.length === 0) {
        container.innerHTML = '<div class="text-center py-5"><i class="fas fa-exclamation-triangle fa-2x text-warning"></i><p class="mt-3">No blog posts could be loaded. Check console for details.</p></div>';
        return;
      }

      container.innerHTML = validPosts.map(post => `
        <div class="col-lg-6">
          <div class="blog-card" data-post-id="${post.id}">
            <div class="blog-header">
              <span class="blog-category">${post.category}</span>
              <span class="blog-read-time">${post.read_time}</span>
            </div>
            <h3 class="blog-title">${post.title}</h3>
            <p class="blog-description">${post.description}</p>
            <div class="blog-tags">
              ${post.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
            </div>
          </div>
        </div>
      `).join('');

      console.log('Blog posts rendered successfully, adding click handlers...');

      // Add click handlers for blog posts
      setTimeout(() => {
        const blogCards = document.querySelectorAll('.blog-card');
        console.log(`Adding click handlers to ${blogCards.length} blog cards`);

        blogCards.forEach((card, index) => {
          card.addEventListener('click', () => {
            const postId = card.getAttribute('data-post-id');
            console.log(`Blog card clicked: ${postId}`);
            BlogManager.loadPost(postId);
          });
        });
      }, 100);

    } catch (error) {
      console.error('Critical error rendering blog posts:', error);
      container.innerHTML = '<div class="text-center py-5"><i class="fas fa-exclamation-triangle fa-2x text-warning"></i><p class="mt-3">Critical error loading blog posts. Check console.</p></div>';
    }
  }
}

// Blog Management
class BlogManager {
  static cache = new Map();

  static parseFrontmatter(markdown) {
    const lines = markdown.split('\n');
    if (lines[0] !== '---') {
      return { frontmatter: {}, content: markdown };
    }

    let endIndex = -1;
    for (let i = 1; i < lines.length; i++) {
      if (lines[i] === '---') {
        endIndex = i;
        break;
      }
    }

    if (endIndex === -1) {
      return { frontmatter: {}, content: markdown };
    }

    const frontmatterLines = lines.slice(1, endIndex);
    const content = lines.slice(endIndex + 1).join('\n');

    const frontmatter = {};
    frontmatterLines.forEach(line => {
      const colonIndex = line.indexOf(':');
      if (colonIndex > 0) {
        const key = line.substring(0, colonIndex).trim();
        let value = line.substring(colonIndex + 1).trim();

        // Remove quotes if present
        if ((value.startsWith('"') && value.endsWith('"')) ||
            (value.startsWith("'") && value.endsWith("'"))) {
          value = value.slice(1, -1);
        }

        // Parse arrays (comma-separated)
        if (value.startsWith('[') && value.endsWith(']')) {
          value = value.slice(1, -1).split(',').map(item => item.trim().replace(/['"]/g, ''));
          frontmatter[key] = value;
        } else {
          frontmatter[key] = value;
        }
      }
    });

    return { frontmatter, content };
  }

  // Check if content has pre-rendered Mermaid SVGs
  static hasPreRenderedMermaid(content) {
    return content.includes('<div class="mermaid-svg">') || content.includes('<svg');
  }

  static async fetchMarkdown(filePath) {
    try {
      const response = await fetch(filePath);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      return await response.text();
    } catch (error) {
      console.error(`Error fetching ${filePath}:`, error);
      return null;
    }
  }

  static async loadPostMetadata(postId) {
    const post = appData.blog_posts.find(p => p.id === postId);
    if (!post) {
      console.error(`Post not found: ${postId}`);
      return null;
    }

    // Clear cache to ensure fresh Mermaid processing (temporary fix)
    // TODO: Remove this line before production
    // BlogManager.cache.clear();

    if (BlogManager.cache.has(postId)) {
      return BlogManager.cache.get(postId);
    }

    try {
      const markdown = await BlogManager.fetchMarkdown(post.file);
      if (!markdown) {
        console.error(`Failed to load markdown for ${postId}`);
        return null;
      }

      const { frontmatter, content } = BlogManager.parseFrontmatter(markdown);

      console.log(`Processing content for ${postId}, content length: ${content.length}`);

      let finalizedContent;

      // Check if content has pre-rendered Mermaid SVGs (from build process)
      if (BlogManager.hasPreRenderedMermaid(content)) {
        console.log(`Content has pre-rendered Mermaid SVGs, using as-is`);
        // Parse markdown normally - SVGs are already embedded
        finalizedContent = marked.parse(content);
        console.log(`Parsed HTML content length: ${finalizedContent.length}`);
      } else {
        // Legacy processing for content with Mermaid code blocks
        console.log(`Content has Mermaid code blocks, processing for client-side rendering`);

        // First parse the markdown normally
        const htmlContent = marked.parse(content);

        console.log(`Parsed HTML content length: ${htmlContent.length}`);

        // Then replace the generated pre/code blocks with mermaid divs
        // Marked.js converts ```mermaid...``` to <pre><code class="language-mermaid">...</code></pre>
        finalizedContent = htmlContent.replace(
          /<pre><code class="language-mermaid">([\s\S]*?)<\/code><\/pre>/g,
          (match, mermaidCode) => {
            const cleanedCode = mermaidCode.trim()
              .replace(/</g, '<')
              .replace(/>/g, '>')
              .replace(/&/g, '&')
              .replace(/"/g, '"')
              .replace(/&#39;/g, "'")
              .replace(/&nbsp;/g, ' ')
              .replace(/\\n/g, '\n'); // Convert literal \n to actual newlines

            console.log(`Original Mermaid code: ${mermaidCode.substring(0, 50)}...`);
            console.log(`Cleaned Mermaid code: ${cleanedCode.substring(0, 50)}...`);
            return `<div class="mermaid">${cleanedCode}</div>`;
          }
        );
      }

      // Estimate read time (assuming 200 words per minute)
      const wordCount = content.split(/\s+/).length;
      const readTime = Math.ceil(wordCount / 200);

      const metadata = {
        id: postId,
        title: frontmatter.title || 'Untitled',
        category: frontmatter.category || 'Uncategorized',
        description: frontmatter.description || '',
        tags: frontmatter.tags || [],
        read_time: `${readTime} min read`,
        content: finalizedContent
      };

      BlogManager.cache.set(postId, metadata);
      return metadata;
    } catch (error) {
      console.error(`Error loading post metadata for ${postId}:`, error);
      return null;
    }
  }

  static async loadPost(postId) {
    console.log(`Loading blog post: ${postId}`);

    const contentContainer = document.getElementById('blog-post-content');
    if (!contentContainer) {
      console.error('Blog post content container not found');
      return;
    }

    // Show loading state
    contentContainer.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin me-2"></i>Loading post...</div>';

    const metadata = await BlogManager.loadPostMetadata(postId);
    if (!metadata) {
      contentContainer.innerHTML = '<div class="error">Post content could not be loaded.</div>';
      return;
    }

    contentContainer.innerHTML = `
      <div class="blog-post-content">
        ${metadata.content}
      </div>
    `;

    // Process Mermaid diagrams with proper error handling and fallbacks
    setTimeout(async () => {
      try {
        const mermaidElements = contentContainer.querySelectorAll('.mermaid');
        console.log(`Found ${mermaidElements.length} Mermaid elements to process`);

        // Process diagrams sequentially to avoid conflicts
        for (let index = 0; index < mermaidElements.length; index++) {
          const element = mermaidElements[index];
          try {
            const diagramContent = element.textContent.trim();
            console.log(`Processing diagram ${index + 1}, content length: ${diagramContent.length}`);

            // Check if Mermaid is available
            if (typeof mermaid === 'undefined' || !mermaid.render) {
              console.warn('Mermaid library not available, showing code block fallback');
              element.className = 'mermaid-unavailable';
              element.innerHTML = `<pre class="mermaid-code"><code class="language-mermaid">${diagramContent}</code></pre>`;
              continue;
            }

            // Only proceed if content looks like valid Mermaid syntax
            if (diagramContent.startsWith('graph ') ||
                diagramContent.startsWith('flowchart ') ||
                diagramContent.includes('-->') ||
                diagramContent.includes('->')) {

              console.log(`Attempting to render diagram ${index + 1} with Mermaid`);

              // Add error boundary for individual diagram rendering
              try {
                const { svg } = await mermaid.render(`mermaid-${postId}-${index}`, diagramContent);
                element.innerHTML = svg;
                element.className = 'mermaid-rendered';
                console.log(`Successfully rendered diagram ${index + 1}`);
              } catch (renderError) {
                console.error(`Mermaid render failed for diagram ${index + 1}:`, renderError);
                // Fallback within try-catch
                element.className = 'mermaid-error';
                element.innerHTML = `<div class="mermaid-fallback"><p><strong>Mermaid Diagram:</strong></p><pre><code class="language-mermaid">${diagramContent}</code></pre></div>`;
              }

            } else {
              console.warn(`Skipping diagram ${index + 1} - content doesn't match known Mermaid patterns`);
              element.className = 'mermaid-invalid-syntax';
              element.innerHTML = `<div class="mermaid-fallback"><p><strong>Diagram (unsupported syntax):</strong></p><pre><code>${diagramContent}</code></pre></div>`;
            }
          } catch (diagramError) {
            console.error(`Error processing diagram ${index + 1}:`, diagramError);
            // Ultimate fallback
            element.className = 'mermaid-failed';
            const fallbackContent = element.textContent || 'Diagram unavailable';
            element.innerHTML = `<div class="mermaid-fallback"><p><strong>Diagram Error:</strong></p><pre><code>${fallbackContent}</code></pre></div>`;
          }
        }
      } catch (overallError) {
        console.error('Critical error in Mermaid processing:', overallError);
        // Don't let Mermaid errors break the post display
      }
    }, 500); // Increased timeout to ensure Mermaid is fully loaded

    window.navigationManager.showSection('blog-post');
  }
  

}

// Initialize application
document.addEventListener('DOMContentLoaded', async () => {

  // Initialize Mermaid with theme detection
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const mermaidTheme = isDarkMode ? 'dark' : 'default';

  mermaid.initialize({
    startOnLoad: false,
    theme: mermaidTheme,
    securityLevel: 'loose'
  });

  console.log(`DOM Content Loaded - Initializing application with Mermaid theme: ${mermaidTheme}...`);

  // Configure Marked.js with basic configuration
  marked.setOptions({
    gfm: true,
    breaks: false,
    pedantic: false
  });

  // Initialize navigation
  window.navigationManager = new NavigationManager();

  // Render content
  setTimeout(async () => {
    ContentManager.renderTrainingTiers();
    ContentManager.renderSkills();
    ContentManager.renderPortfolio();
    ContentManager.renderTestingServices();
    ContentManager.renderOpenSourceTools();
    ContentManager.renderTestingProcess();
    await ContentManager.renderBlogPosts();

    // Re-initialize navigation after content is rendered
    window.navigationManager.addAllNavigationListeners();

    console.log('IDecodeNetworks Solutions website initialized successfully!');
  }, 200);
});
