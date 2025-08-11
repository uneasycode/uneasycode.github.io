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
        "IP Addressing and Subnetting", 
        "Ethernet Fundamentals",
        "Basic Switching Concepts",
        "Introduction to Routing",
        "ARP and DHCP Basics",
        "Basic Network Troubleshooting"
      ]
    },
    {
      "level": "Intermediate", 
      "duration": "10 Weeks",
      "color": "warning",
      "icon": "fas fa-chart-line",
      "topics": [
        "VLAN Configuration and Trunking",
        "Spanning Tree Protocol (STP)",
        "OSPF and EIGRP Routing", 
        "Access Control Lists (ACLs)",
        "NAT and PAT Implementation",
        "VPN Fundamentals",
        "Quality of Service (QoS) Basics"
      ]
    },
    {
      "level": "Advanced",
      "duration": "12 Weeks", 
      "color": "danger",
      "icon": "fas fa-rocket",
      "topics": [
        "BGP Configuration and Optimization",
        "MPLS and VPN Technologies",
        "Advanced QoS Implementation",
        "Network Security and Firewalls", 
        "High Availability and Redundancy",
        "Network Automation Basics",
        "Performance Monitoring"
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
        "Troubleshooting Specific Issues",
        "Certification Preparation",
        "Project-Based Learning", 
        "Team Training Sessions",
        "Custom Lab Scenarios"
      ]
    }
  ],
  "skills": [
    {
      "title": "Data Center Design",
      "icon": "fas fa-building", 
      "description": "Complete data center network architecture, including redundancy planning and scalability considerations."
    },
    {
      "title": "Network Troubleshooting",
      "icon": "fas fa-tools",
      "description": "Rapid diagnosis and resolution of complex routing issues in provider networks and enterprise environments."
    },
    {
      "title": "Routing Optimization", 
      "icon": "fas fa-route",
      "description": "BGP optimization, OSPF tuning, and advanced routing protocol configuration for optimal performance."
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
      "client": "Fortune 500 Manufacturing Company",
      "duration": "6 Months",
      "type": "Complex", 
      "status": "Completed",
      "badge_color": "success",
      "description": "Complete network architecture overhaul for a 50,000 sq ft data center, implementing redundant spine-leaf topology with 99.99% uptime requirements."
    },
    {
      "title": "ISP Network Optimization",
      "client": "Regional Internet Service Provider",
      "duration": "3 Weeks",
      "type": "Critical",
      "status": "Critical", 
      "badge_color": "danger",
      "description": "Resolved critical BGP routing issues causing 15% packet loss and optimized network performance across 200+ edge routers."
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
      "client": "Healthcare Technology Company", 
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
      "id": "basic-ip",
      "title": "Basic IP Networking Within a LAN",
      "category": "Fundamentals", 
      "read_time": "15 min read",
      "description": "Explore how DNS, DHCP, ARP, HTTP, SCTP, and FTP protocols interact within a local area network environment.",
      "tags": ["DNS", "DHCP", "ARP", "HTTP"],
      "type": "embedded"
    },
    {
      "id": "basic-tcp",
      "title": "Basic TCP Communication", 
      "category": "Intermediate",
      "read_time": "20 min read",
      "description": "Understanding TCP header fields, connection negotiation, and practical examples using HTTP and BGP applications.",
      "tags": ["TCP", "HTTP", "BGP", "Headers"],
      "type": "embedded"
    },
    {
      "id": "advanced-tcp",
      "title": "Advanced TCP Communication",
      "category": "Advanced",
      "read_time": "25 min read", 
      "description": "Deep dive into SACK, congestion control, windowing mechanisms, and the Nagle algorithm for TCP optimization.",
      "tags": ["SACK", "Congestion Control", "Windowing", "Nagle"],
      "type": "embedded"
    },
    {
      "id": "rsvp",
      "title": "RSVP: Making Real-Time Internet Work",
      "category": "Fundamentals",
      "read_time": "10 min read",
      "description": "Understanding Resource ReSerVation Protocol and how it enables smooth video calls, gaming, and real-time applications.", 
      "tags": ["RSVP", "QoS", "Real-time", "Bandwidth"],
      "type": "markdown",
      "file": "pages/rsvp.md"
    },
    {
      "id": "isis-duplicate-ip",
      "title": "ISIS Duplicate IP Address Issues",
      "category": "Advanced",
      "read_time": "18 min read",
      "description": "Identifying and resolving duplicate IP address problems in ISIS networks that cause routing instability.",
      "tags": ["ISIS", "Troubleshooting", "IP Address", "Routing"], 
      "type": "markdown",
      "file": "pages/isis-duplicate-ip.md"
    },
    {
      "id": "rsvp-message-types", 
      "title": "RSVP Message Types & Fast Reroute",
      "category": "Advanced",
      "read_time": "22 min read",
      "description": "Deep dive into RSVP message flows and link protection fast reroute mechanisms in MPLS networks.",
      "tags": ["RSVP", "MPLS", "Fast Reroute", "Traffic Engineering"],
      "type": "markdown",
      "file": "pages/rsvp-message-types.md"
    }
  ]
};

// Embedded blog posts content
const embeddedBlogPosts = {
  "basic-ip": {
    title: "Basic IP Networking Within a LAN",
    content: `
      <h1>Basic IP Networking Within a LAN</h1>
      <p>Understanding how different protocols interact within a Local Area Network (LAN) is fundamental to network engineering. This article explores the interaction between DNS, DHCP, ARP, HTTP, SCTP, and FTP protocols in a typical LAN environment.</p>
      
      <h2>The Protocol Stack</h2>
      <p>In a typical LAN environment, multiple protocols work together to enable communication between devices. Each protocol serves a specific purpose:</p>
      
      <h3>DHCP (Dynamic Host Configuration Protocol)</h3>
      <p>DHCP automates the assignment of IP addresses, subnet masks, default gateways, and DNS servers to network devices. When a device connects to the network, it broadcasts a DHCP DISCOVER message to find available DHCP servers.</p>
      
      <h3>DNS (Domain Name System)</h3>
      <p>DNS translates human-readable domain names into IP addresses. This allows users to access websites using memorable names rather than numeric IP addresses. DNS operates on both TCP and UDP port 53.</p>
      
      <h3>ARP (Address Resolution Protocol)</h3>
      <p>ARP maps IP addresses to MAC addresses within the local network segment. Before any IP communication can occur, devices must know the hardware addresses of their communication partners.</p>
      
      <h2>Protocol Interactions</h2>
      <p>These protocols work together seamlessly:</p>
      <ol>
        <li>A device connects and uses DHCP to obtain network configuration</li>
        <li>When accessing a website, DNS resolves the domain name to an IP address</li>
        <li>ARP determines the MAC address for local communication</li>
        <li>HTTP/HTTPS carries the web traffic over TCP</li>
        <li>FTP may be used for file transfers, also over TCP</li>
      </ol>
      
      <h2>Practical Considerations</h2>
      <p>Understanding these interactions helps in troubleshooting network issues. Common problems include DHCP exhaustion, DNS resolution failures, and ARP table corruption. Network engineers must understand how these protocols interact to design efficient and reliable networks.</p>
    `
  },
  "basic-tcp": {
    title: "Basic TCP Communication",
    content: `
      <h1>Basic TCP Communication</h1>
      <p>Transmission Control Protocol (TCP) is one of the most important protocols in networking, providing reliable, connection-oriented communication between applications. This article examines TCP header fields, connection establishment, and practical applications.</p>
      
      <h2>TCP Header Structure</h2>
      <p>The TCP header contains several critical fields that enable reliable communication:</p>
      
      <h3>Key Header Fields</h3>
      <ul>
        <li><strong>Source and Destination Ports:</strong> Identify the sending and receiving applications</li>
        <li><strong>Sequence Number:</strong> Ensures data arrives in the correct order</li>
        <li><strong>Acknowledgment Number:</strong> Confirms receipt of data</li>
        <li><strong>Window Size:</strong> Implements flow control</li>
        <li><strong>Flags:</strong> Control connection state (SYN, ACK, FIN, RST, etc.)</li>
      </ul>
      
      <h2>Three-Way Handshake</h2>
      <p>TCP establishes connections using a three-way handshake:</p>
      <ol>
        <li><strong>SYN:</strong> Client sends synchronization request</li>
        <li><strong>SYN-ACK:</strong> Server acknowledges and sends its own SYN</li>
        <li><strong>ACK:</strong> Client acknowledges server's SYN</li>
      </ol>
      
      <h2>HTTP Over TCP</h2>
      <p>HTTP (Hypertext Transfer Protocol) relies on TCP for reliable web communication. When you browse a website:</p>
      <ul>
        <li>TCP establishes a connection to port 80 (HTTP) or 443 (HTTPS)</li>
        <li>HTTP requests are sent over the TCP connection</li>
        <li>The server responds with web content</li>
        <li>TCP ensures all data arrives correctly</li>
      </ul>
      
      <h2>BGP Over TCP</h2>
      <p>Border Gateway Protocol (BGP) also uses TCP (port 179) for routing information exchange between autonomous systems. BGP requires reliable delivery of routing updates, making TCP an ideal choice.</p>
      
      <h2>Connection Termination</h2>
      <p>TCP connections terminate using a four-way handshake with FIN flags, ensuring both sides agree to close the connection and all data has been transmitted successfully.</p>
    `
  },
  "advanced-tcp": {
    title: "Advanced TCP Communication",
    content: `
      <h1>Advanced TCP Communication</h1>
      <p>Beyond basic TCP functionality lies a sophisticated set of mechanisms designed to optimize performance and reliability. This article explores advanced TCP features including SACK, congestion control, windowing mechanisms, and the Nagle algorithm.</p>
      
      <h2>Selective Acknowledgment (SACK)</h2>
      <p>SACK allows receivers to acknowledge non-contiguous blocks of data, improving performance when packets are lost or reordered:</p>
      
      <h3>Benefits of SACK</h3>
      <ul>
        <li>Reduces unnecessary retransmissions</li>
        <li>Improves performance over high-latency links</li>
        <li>Better handling of packet reordering</li>
        <li>More efficient bandwidth utilization</li>
      </ul>
      
      <h2>TCP Congestion Control</h2>
      <p>TCP implements several algorithms to prevent network congestion:</p>
      
      <h3>Slow Start</h3>
      <p>Gradually increases the transmission rate to discover available bandwidth without overwhelming the network.</p>
      
      <h3>Congestion Avoidance</h3>
      <p>Once the network's capacity is approached, TCP increases the window size more conservatively to avoid congestion.</p>
      
      <h3>Fast Recovery</h3>
      <p>When packet loss is detected, TCP reduces its transmission rate quickly but recovers more gradually to maintain stability.</p>
      
      <h2>TCP Windowing</h2>
      <p>The TCP window mechanism provides flow control and enables efficient data transmission:</p>
      
      <h3>Receive Window</h3>
      <p>Advertised by the receiver to indicate available buffer space, preventing buffer overflow.</p>
      
      <h3>Congestion Window</h3>
      <p>Maintained by the sender to limit transmission rate based on network conditions.</p>
      
      <h2>Nagle Algorithm</h2>
      <p>The Nagle algorithm reduces the number of small packets transmitted by combining small amounts of data into larger segments:</p>
      
      <h3>Algorithm Rules</h3>
      <ol>
        <li>Send immediately if data is larger than MSS</li>
        <li>If outstanding data exists, buffer until ACK received</li>
        <li>If no outstanding data, send immediately</li>
      </ol>
      
      <h2>Performance Optimization</h2>
      <p>Modern TCP implementations include various optimizations:</p>
      <ul>
        <li><strong>TCP Fast Open:</strong> Reduces connection establishment overhead</li>
        <li><strong>Compound TCP:</strong> Combines loss-based and delay-based congestion control</li>
        <li><strong>TCP BBR:</strong> Google's bottleneck bandwidth and RTT-based algorithm</li>
      </ul>
      
      <h2>Practical Applications</h2>
      <p>Understanding these advanced mechanisms helps network engineers optimize application performance, troubleshoot connectivity issues, and design networks that efficiently handle various traffic patterns.</p>
    `
  }
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
  
  static renderBlogPosts() {
    const container = document.getElementById('blog-grid');
    if (!container) {
      console.log('Blog grid container not found');
      return;
    }
    
    console.log('Rendering blog posts...');
    container.innerHTML = appData.blog_posts.map(post => `
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
    
    // Add click handlers for blog posts
    setTimeout(() => {
      document.querySelectorAll('.blog-card').forEach(card => {
        card.addEventListener('click', () => {
          const postId = card.getAttribute('data-post-id');
          BlogManager.loadPost(postId);
        });
      });
    }, 100);
  }
}

// Blog Management
class BlogManager {
  static loadPost(postId) {
    console.log(`Loading blog post: ${postId}`);
    
    const post = appData.blog_posts.find(p => p.id === postId);
    if (!post) {
      console.error(`Post not found: ${postId}`);
      return;
    }
    
    const contentContainer = document.getElementById('blog-post-content');
    if (!contentContainer) {
      console.error('Blog post content container not found');
      return;
    }
    
    // Show loading state
    contentContainer.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i> Loading post...</div>';
    
    if (post.type === 'embedded') {
      // Load embedded content
      const embeddedPost = embeddedBlogPosts[postId];
      if (embeddedPost) {
        contentContainer.innerHTML = `
          <div class="blog-post-content">
            ${embeddedPost.content}
          </div>
        `;
        window.navigationManager.showSection('blog-post');
      } else {
        contentContainer.innerHTML = '<div class="error">Post content not found.</div>';
      }
    } else if (post.type === 'markdown') {
      // Simulate markdown loading
      setTimeout(() => {
        const markdownContent = BlogManager.getMarkdownContent(postId);
        contentContainer.innerHTML = `
          <div class="blog-post-content">
            ${markdownContent}
          </div>
        `;
        window.navigationManager.showSection('blog-post');
      }, 500);
    }
  }
  
  static getMarkdownContent(postId) {
    // Simulate markdown content since we can't load actual files
    const mockMarkdownPosts = {
      'rsvp': `
        <h1>RSVP: Making Real-Time Internet Work</h1>
        <p>In today's internet-driven world, real-time applications like video calls, online gaming, and live streaming have become essential. But how does the internet ensure these applications work smoothly without interruptions? The answer lies in a protocol called RSVP - Resource ReSerVation Protocol.</p>
        
        <h2>What is RSVP?</h2>
        <p>RSVP is a network protocol that allows applications to request specific Quality of Service (QoS) guarantees from the network. Think of it as making a reservation at a restaurant - you're asking the network to set aside certain resources (bandwidth, processing power) to ensure your data gets priority treatment.</p>
        
        <h2>How RSVP Works</h2>
        <p>RSVP operates on a simple principle: applications that need guaranteed performance can request it, and the network will try to accommodate these requests. Here's how it works:</p>
        
        <ol>
          <li><strong>Path Message:</strong> The sender announces its intention to transmit data</li>
          <li><strong>Reservation Request:</strong> The receiver requests specific resources</li>
          <li><strong>Resource Allocation:</strong> Network devices allocate the requested resources</li>
          <li><strong>Data Transmission:</strong> Traffic flows with guaranteed quality</li>
        </ol>
        
        <h2>Real-World Applications</h2>
        <p>RSVP is crucial for applications that can't tolerate delays or interruptions:</p>
        <ul>
          <li><strong>Video Conferencing:</strong> Ensures smooth video and audio without pixelation or delays</li>
          <li><strong>Online Gaming:</strong> Reduces latency for competitive gaming</li>
          <li><strong>Live Streaming:</strong> Prevents buffering and maintains consistent quality</li>
          <li><strong>VoIP Calls:</strong> Guarantees clear voice communication</li>
        </ul>
        
        <h2>Benefits and Challenges</h2>
        <p>While RSVP provides significant benefits, it also faces challenges:</p>
        
        <h3>Benefits:</h3>
        <ul>
          <li>Predictable network performance</li>
          <li>Better user experience for real-time applications</li>
          <li>Efficient resource utilization</li>
        </ul>
        
        <h3>Challenges:</h3>
        <ul>
          <li>Not all network devices support RSVP</li>
          <li>Complexity in large networks</li>
          <li>Potential for resource waste if reservations aren't used</li>
        </ul>
        
        <p>Understanding RSVP is essential for network engineers working with real-time applications and quality-sensitive traffic.</p>
      `,
      'isis-duplicate-ip': `
        <h1>ISIS Duplicate IP Address Issues</h1>
        <p>In ISIS (Intermediate System to Intermediate System) networks, duplicate IP address issues can cause significant routing instability and network outages. This article explores how to identify, diagnose, and resolve these challenging problems.</p>
        
        <h2>Understanding the Problem</h2>
        <p>Duplicate IP addresses in ISIS networks can occur due to several reasons:</p>
        <ul>
          <li>Configuration errors during network deployment</li>
          <li>Address reuse during network migrations</li>
          <li>Incorrect subnet planning</li>
          <li>Human error in manual configurations</li>
        </ul>
        
        <h2>Symptoms of Duplicate IP Issues</h2>
        <p>Network administrators should watch for these warning signs:</p>
        
        <h3>Routing Instability</h3>
        <ul>
          <li>Frequent LSP (Link State Packet) updates</li>
          <li>Oscillating routes in the routing table</li>
          <li>Inconsistent reachability to affected subnets</li>
        </ul>
        
        <h3>Performance Issues</h3>
        <ul>
          <li>Intermittent connectivity problems</li>
          <li>Increased packet loss</li>
          <li>Higher than normal latency</li>
        </ul>
        
        <h2>Diagnostic Techniques</h2>
        <p>Identifying duplicate IP issues requires systematic troubleshooting:</p>
        
        <h3>1. LSP Analysis</h3>
        <p>Examine ISIS LSPs for conflicting IP prefixes:</p>
        <pre><code>show isis database detail</code></pre>
        
        <h3>2. Routing Table Inspection</h3>
        <p>Look for multiple paths to the same destination:</p>
        <pre><code>show route protocol isis</code></pre>
        
        <h3>3. Network Topology Mapping</h3>
        <p>Create a comprehensive map of IP assignments to identify conflicts.</p>
        
        <h2>Resolution Strategies</h2>
        
        <h3>Immediate Fixes</h3>
        <ol>
          <li><strong>Isolate affected areas:</strong> Use area boundaries to contain the problem</li>
          <li><strong>Implement route filtering:</strong> Block problematic advertisements temporarily</li>
          <li><strong>Adjust metric values:</strong> Prefer one path over another until permanent fixes are applied</li>
        </ol>
        
        <h3>Long-term Solutions</h3>
        <ol>
          <li><strong>IP address audit:</strong> Comprehensive review of all network assignments</li>
          <li><strong>Documentation update:</strong> Maintain accurate IP allocation records</li>
          <li><strong>Automated monitoring:</strong> Implement tools to detect future conflicts</li>
          <li><strong>Change management:</strong> Establish processes to prevent recurrence</li>
        </ol>
        
        <h2>Prevention Best Practices</h2>
        <ul>
          <li>Use IP Address Management (IPAM) tools</li>
          <li>Implement automated configuration validation</li>
          <li>Regular network audits and documentation updates</li>
          <li>Proper testing procedures for network changes</li>
        </ul>
        
        <p>Resolving ISIS duplicate IP issues requires patience, systematic analysis, and careful planning to avoid disrupting production traffic.</p>
      `,
      'rsvp-message-types': `
        <h1>RSVP Message Types & Fast Reroute</h1>
        <p>Resource ReSerVation Protocol (RSVP) plays a crucial role in MPLS Traffic Engineering and Fast Reroute mechanisms. This deep dive explores RSVP message types and how link protection fast reroute works in modern MPLS networks.</p>
        
        <h2>RSVP Message Types</h2>
        <p>RSVP uses several message types to establish and maintain Label Switched Paths (LSPs):</p>
        
        <h3>Path Messages</h3>
        <p>Path messages are sent by the ingress LSR (Label Switch Router) to establish an LSP:</p>
        <ul>
          <li><strong>Purpose:</strong> Advertise the LSP requirements downstream</li>
          <li><strong>Content:</strong> Traffic specifications, route objects, and constraints</li>
          <li><strong>Processing:</strong> Each node records the previous hop and forwards downstream</li>
        </ul>
        
        <h3>Resv Messages</h3>
        <p>Reservation messages travel upstream to allocate resources:</p>
        <ul>
          <li><strong>Purpose:</strong> Reserve bandwidth and establish label bindings</li>
          <li><strong>Content:</strong> Label objects, bandwidth reservations, and confirmations</li>
          <li><strong>Processing:</strong> Resources are allocated at each hop</li>
        </ul>
        
        <h3>PathErr Messages</h3>
        <p>Path error messages indicate problems during LSP setup:</p>
        <ul>
          <li><strong>Triggers:</strong> Resource unavailability, routing loops, or constraint failures</li>
          <li><strong>Direction:</strong> Sent upstream toward the ingress LSR</li>
          <li><strong>Action:</strong> LSP setup is aborted or alternative paths are attempted</li>
        </ul>
        
        <h3>ResvErr Messages</h3>
        <p>Reservation error messages report resource allocation failures:</p>
        <ul>
          <li><strong>Causes:</strong> Insufficient bandwidth, label conflicts, or policy violations</li>
          <li><strong>Direction:</strong> Sent downstream toward the egress LSR</li>
          <li><strong>Response:</strong> Reservation is rolled back</li>
        </ul>
        
        <h2>RSVP Fast Reroute</h2>
        <p>Fast Reroute provides sub-50ms protection against link and node failures in MPLS networks.</p>
        
        <h3>Link Protection</h3>
        <p>Protects against individual link failures:</p>
        
        <h4>Setup Process:</h4>
        <ol>
          <li><strong>Backup tunnel creation:</strong> Point of Local Repair (PLR) establishes backup LSPs</li>
          <li><strong>Merge point identification:</strong> Determines where backup rejoins primary path</li>
          <li><strong>Path signaling:</strong> Primary LSP includes backup tunnel information</li>
        </ol>
        
        <h4>Failure Detection & Switching:</h4>
        <ol>
          <li><strong>Failure detection:</strong> PLR detects link failure (BFD, hardware signals)</li>
          <li><strong>Traffic redirection:</strong> Traffic immediately switches to backup tunnel</li>
          <li><strong>Notification:</strong> PLR sends PathErr to trigger new path computation</li>
          <li><strong>Path reoptimization:</strong> New primary path is established</li>
        </ol>
        
        <h3>Node Protection</h3>
        <p>Extends protection to cover entire node failures:</p>
        <ul>
          <li><strong>Next-Next Hop (NNHOP):</strong> Backup tunnel bypasses the next downstream node</li>
          <li><strong>Enhanced coverage:</strong> Protects against both link and node failures</li>
          <li><strong>Complexity trade-off:</strong> More backup tunnels required but better protection</li>
        </ul>
        
        <h2>Message Flow During Fast Reroute</h2>
        
        <h3>Normal Operation:</h3>
        <ol>
          <li>Path messages establish primary LSP</li>
          <li>Resv messages allocate resources and labels</li>
          <li>Traffic flows along primary path</li>
          <li>Periodic refresh maintains LSP state</li>
        </ol>
        
        <h3>Failure and Recovery:</h3>
        <ol>
          <li>Link failure detected at PLR</li>
          <li>Traffic immediately diverted to backup tunnel</li>
          <li>PathErr message sent to ingress LSR</li>
          <li>Ingress computes new path avoiding failed link</li>
          <li>New Path/Resv messages establish alternative LSP</li>
          <li>Traffic moves to new primary path</li>
          <li>Backup tunnel resources released</li>
        </ol>
        
        <h2>Advanced Considerations</h2>
        
        <h3>Bandwidth Protection</h3>
        <ul>
          <li><strong>Admission control:</strong> Backup tunnels must have sufficient bandwidth</li>
          <li><strong>Over-subscription:</strong> Statistical multiplexing of backup resources</li>
          <li><strong>Priority schemes:</strong> Higher priority traffic gets better protection</li>
        </ul>
        
        <h3>Scalability Challenges</h3>
        <ul>
          <li><strong>State explosion:</strong> Each protected LSP requires backup tunnel state</li>
          <li><strong>Tunnel management:</strong> Backup tunnels need lifecycle management</li>
          <li><strong>Resource optimization:</strong> Sharing backup tunnels across multiple LSPs</li>
        </ul>
        
        <h2>Best Practices</h2>
        <ul>
          <li><strong>Failure detection:</strong> Use BFD for rapid failure detection</li>
          <li><strong>Backup planning:</strong> Ensure backup paths have adequate resources</li>
          <li><strong>Testing:</strong> Regular failure simulation and recovery testing</li>
          <li><strong>Monitoring:</strong> Track protection coverage and switching statistics</li>
        </ul>
        
        <p>Understanding RSVP message flows and Fast Reroute mechanisms is essential for designing resilient MPLS networks that can recover from failures in milliseconds rather than seconds.</p>
      `
    };
    
    return mockMarkdownPosts[postId] || '<div class="error">Content not available for this post.</div>';
  }
}

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Content Loaded - Initializing application...');
  
  // Initialize navigation
  window.navigationManager = new NavigationManager();
  
  // Render content
  setTimeout(() => {
    ContentManager.renderTrainingTiers();
    ContentManager.renderSkills();
    ContentManager.renderPortfolio();
    ContentManager.renderTestingServices();
    ContentManager.renderOpenSourceTools();
    ContentManager.renderTestingProcess();
    ContentManager.renderBlogPosts();
    
    // Re-initialize navigation after content is rendered
    window.navigationManager.addAllNavigationListeners();
    
    console.log('IDecodeNetworks Solutions website initialized successfully!');
  }, 200);
});