// IDecodeNetworks Solutions - Main JavaScript Application

// Application state
let currentSection = 'home';

// Blog post content data
const blogPosts = {
    'basic-ip': {
        title: 'Basic IP Networking Within a LAN',
        category: 'Fundamentals',
        readTime: '15 min read',
        content: `
            <div class="blog-post-content">
                <div class="blog-post-header">
                    <h1 class="blog-post-title">Basic IP Networking Within a LAN</h1>
                    <div class="blog-post-meta">
                        <span class="badge bg-primary me-2">Fundamentals</span>
                        <span class="text-muted">15 min read</span>
                    </div>
                    <div class="blog-tags mt-3">
                        <span class="badge bg-secondary me-1">DNS</span>
                        <span class="badge bg-secondary me-1">DHCP</span>
                        <span class="badge bg-secondary me-1">ARP</span>
                        <span class="badge bg-secondary me-1">HTTP</span>
                        <span class="badge bg-secondary me-1">SCTP</span>
                        <span class="badge bg-secondary me-1">FTP</span>
                    </div>
                </div>
                <div class="blog-post-body">
                    <p>Local Area Networks (LANs) form the backbone of modern enterprise networking, enabling seamless communication between devices within a confined geographic area. Understanding how core protocols interact within a LAN environment is essential for network engineers and administrators.</p>
                    
                    <h3>The Foundation: IP Addressing in LANs</h3>
                    <p>Every device in a LAN requires a unique IP address to communicate. These addresses are typically assigned from private IP ranges defined in RFC 1918:</p>
                    <ul>
                        <li><code>10.0.0.0/8</code> - Class A private networks</li>
                        <li><code>172.16.0.0/12</code> - Class B private networks</li>
                        <li><code>192.168.0.0/16</code> - Class C private networks</li>    
                    </ul>
                    
                    <h3>DHCP: Dynamic Host Configuration Protocol</h3>
                    <p>DHCP automates the IP address assignment process, eliminating the need for manual configuration. When a device connects to the network, it follows the DORA process:</p>
                    <ol>
                        <li><strong>Discover</strong> - Client broadcasts a DHCP discover message</li>
                        <li><strong>Offer</strong> - DHCP server responds with an IP address offer</li>
                        <li><strong>Request</strong> - Client requests the offered IP address</li>
                        <li><strong>Acknowledge</strong> - Server confirms the lease</li>
                    </ol>
                    <p>Along with IP addresses, DHCP provides essential network parameters including subnet mask, default gateway, and DNS server addresses.</p>
                    
                    <h3>ARP: Address Resolution Protocol</h3>
                    <p>ARP bridges the gap between Layer 3 (IP) and Layer 2 (Ethernet) addressing. When a device needs to communicate with another device on the same subnet, it uses ARP to discover the MAC address associated with the target IP address.</p>
                    <p>The ARP process works as follows:</p>
                    <ol>
                        <li>Device A wants to communicate with Device B (knows IP, needs MAC)</li>
                        <li>Device A broadcasts an ARP request: "Who has IP 192.168.1.100?"</li>
                        <li>Device B responds with its MAC address</li>
                        <li>Device A caches this information in its ARP table</li>
                    </ol>
                    
                    <h3>DNS: Domain Name System</h3>
                    <p>DNS translates human-readable domain names into IP addresses. In a LAN environment, DNS resolution typically follows this hierarchy:</p>
                    <ol>
                        <li>Local host file lookup</li>
                        <li>Local DNS cache</li>
                        <li>Configured DNS servers (often the router or domain controller)</li>
                        <li>External DNS servers (if configured)</li>
                    </ol>
                    <p>Modern LANs often implement local DNS zones for internal resources, improving resolution speed and reducing external dependencies.</p>
                    
                    <h3>HTTP: Hypertext Transfer Protocol</h3>
                    <p>HTTP operates at the application layer and is fundamental to web-based services within LANs. In enterprise environments, HTTP traffic includes:</p>
                    <ul>
                        <li>Internal web applications and portals</li>
                        <li>RESTful API communications</li>
                        <li>Configuration interfaces for network devices</li>
                        <li>File sharing and collaboration platforms</li>
                    </ul>
                    <p>HTTP requests within a LAN benefit from low latency and high bandwidth, enabling responsive user experiences for internal applications.</p>
                    
                    <h3>FTP: File Transfer Protocol</h3>
                    <p>FTP provides a reliable method for transferring files within a LAN. It operates using two channels:</p>
                    <ul>
                        <li><strong>Control Channel (Port 21)</strong> - Commands and responses</li>
                        <li><strong>Data Channel</strong> - Actual file transfers</li>
                    </ul>
                    <p>In LAN environments, FTP is commonly used for:</p>
                    <ul>
                        <li>Backup and archival operations</li>
                        <li>Software distribution</li>
                        <li>Log file collection</li>
                        <li>Configuration file management</li>
                    </ul>
                    
                    <h3>SCTP: Stream Control Transmission Protocol</h3>
                    <p>SCTP combines the reliability of TCP with the message-oriented nature of UDP. Within LANs, SCTP is particularly valuable for:</p>
                    <ul>
                        <li>Real-time communications applications</li>
                        <li>Network signaling protocols</li>
                        <li>Applications requiring multi-homing support</li>
                        <li>Services needing ordered and unordered message delivery</li>
                    </ul>
                    <p>SCTP's multi-streaming capability allows multiple independent data streams within a single association, improving performance for complex applications.</p>
                    
                    <h3>Protocol Interaction Example</h3>
                    <p>Consider a typical scenario where a workstation accesses an internal web server:</p>
                    <ol>
                        <li><strong>DHCP</strong> assigns IP configuration to the workstation</li>
                        <li><strong>DNS</strong> resolves the web server's hostname to an IP address</li>
                        <li><strong>ARP</strong> discovers the MAC address of the default gateway</li>
                        <li><strong>HTTP</strong> establishes a connection to the web server</li>
                        <li>Additional <strong>FTP</strong> connections may be established for file downloads</li>
                    </ol>
                    
                    <h3>Best Practices for LAN Protocol Management</h3>
                    <ul>
                        <li>Implement DHCP reservations for critical servers</li>
                        <li>Configure appropriate DNS forwarders and caching</li>
                        <li>Monitor ARP table sizes and aging times</li>
                        <li>Use HTTPS instead of HTTP for sensitive applications</li>
                        <li>Implement SFTP or FTPS for secure file transfers</li>
                        <li>Consider SCTP for applications requiring enhanced reliability</li>
                    </ul>
                    
                    <h3>Conclusion</h3>
                    <p>Understanding how these fundamental protocols interact within a LAN environment is crucial for effective network design and troubleshooting. Each protocol serves a specific purpose, and their coordinated operation enables the seamless connectivity that modern organizations depend upon.</p>
                </div>
            </div>
        `
    },
    'basic-tcp': {
        title: 'Basic TCP Communication',
        category: 'Intermediate',
        readTime: '20 min read',
        content: `
            <div class="blog-post-content">
                <div class="blog-post-header">
                    <h1 class="blog-post-title">Basic TCP Communication</h1>
                    <div class="blog-post-meta">
                        <span class="badge bg-warning me-2">Intermediate</span>
                        <span class="text-muted">20 min read</span>
                    </div>
                    <div class="blog-tags mt-3">
                        <span class="badge bg-secondary me-1">TCP</span>
                        <span class="badge bg-secondary me-1">HTTP</span>
                        <span class="badge bg-secondary me-1">BGP</span>
                        <span class="badge bg-secondary me-1">Headers</span>
                    </div>
                </div>
                <div class="blog-post-body">
                    <p>Transmission Control Protocol (TCP) forms the reliable backbone of internet communications, providing ordered, error-checked delivery of data streams. Understanding TCP's inner workings is essential for network engineers working with application protocols and network optimization.</p>
                    
                    <h3>TCP Header Structure</h3>
                    <p>The TCP header contains 20 bytes of fixed fields plus optional fields, each serving specific purposes in connection management and data delivery:</p>
                    
                    <h4>Source and Destination Ports (32 bits)</h4>
                    <p>These 16-bit fields identify the sending and receiving application endpoints. Well-known ports include:</p>
                    <ul>
                        <li>Port 80 - HTTP</li>
                        <li>Port 443 - HTTPS</li>
                        <li>Port 179 - BGP</li>
                        <li>Port 22 - SSH</li>
                    </ul>
                    
                    <h4>Sequence Number (32 bits)</h4>
                    <p>Identifies the position of the first data byte in the segment relative to the entire data stream. This enables:</p>
                    <ul>
                        <li>Ordered delivery of segments</li>
                        <li>Detection of duplicate segments</li>
                        <li>Flow control mechanisms</li>
                    </ul>
                    
                    <h4>Control Flags (9 bits)</h4>
                    <p>These flags control connection state and data handling:</p>
                    <ul>
                        <li><strong>SYN</strong> - Synchronize sequence numbers (connection establishment)</li>
                        <li><strong>ACK</strong> - Acknowledgment field is valid</li>
                        <li><strong>FIN</strong> - Finished sending data (connection termination)</li>
                        <li><strong>RST</strong> - Reset connection (error condition)</li>
                        <li><strong>PSH</strong> - Push data to application immediately</li>
                        <li><strong>URG</strong> - Urgent pointer field is valid</li>
                    </ul>
                    
                    <h3>TCP Connection Establishment: Three-Way Handshake</h3>
                    <p>TCP uses a three-way handshake to establish reliable connections:</p>
                    
                    <h4>Step 1: SYN</h4>
                    <p>Client sends a SYN segment with initial sequence number and TCP options.</p>
                    
                    <h4>Step 2: SYN-ACK</h4>
                    <p>Server responds with SYN and ACK flags set, server's sequence number, and acknowledgment of client's sequence number.</p>
                    
                    <h4>Step 3: ACK</h4>
                    <p>Client acknowledges server's SYN, establishing the connection.</p>
                    
                    <h3>HTTP over TCP Example</h3>
                    <p>HTTP relies on TCP for reliable data delivery. The connection process involves the three-way handshake followed by HTTP request/response exchange.</p>
                    
                    <h3>BGP over TCP Example</h3>
                    <p>Border Gateway Protocol uses TCP port 179 for reliable route advertisement between autonomous systems. BGP's reliability requirements make TCP essential for accurate routing information exchange.</p>
                    
                    <h3>Conclusion</h3>
                    <p>TCP's sophisticated header structure and connection management enable reliable communication for critical applications like HTTP and BGP. Understanding these mechanisms allows network engineers to effectively troubleshoot connectivity issues and optimize application performance.</p>
                </div>
            </div>
        `
    },
    'advanced-tcp': {
        title: 'Advanced TCP Communication',
        category: 'Advanced',
        readTime: '25 min read',
        content: `
            <div class="blog-post-content">
                <div class="blog-post-header">
                    <h1 class="blog-post-title">Advanced TCP Communication</h1>
                    <div class="blog-post-meta">
                        <span class="badge bg-danger me-2">Advanced</span>
                        <span class="text-muted">25 min read</span>
                    </div>
                    <div class="blog-tags mt-3">
                        <span class="badge bg-secondary me-1">SACK</span>
                        <span class="badge bg-secondary me-1">Congestion Control</span>
                        <span class="badge bg-secondary me-1">Windowing</span>
                        <span class="badge bg-secondary me-1">Nagle</span>
                    </div>
                </div>
                <div class="blog-post-body">
                    <p>Advanced TCP features enable optimal performance across diverse network conditions, from high-speed data centers to constrained mobile networks. These mechanisms work together to maximize throughput while maintaining reliability and fairness.</p>
                    
                    <h3>Selective Acknowledgment (SACK)</h3>
                    <p>Traditional TCP uses cumulative acknowledgments, which can be inefficient when packets are lost or arrive out of order. SACK allows receivers to acknowledge non-contiguous blocks of correctly received data.</p>
                    
                    <h4>SACK Benefits</h4>
                    <ul>
                        <li><strong>Fast Recovery</strong> - Reduces time to recover from multiple packet losses</li>
                        <li><strong>Bandwidth Efficiency</strong> - Avoids retransmitting correctly received segments</li>
                        <li><strong>Better Performance</strong> - Particularly beneficial on high-bandwidth, high-latency networks</li>
                    </ul>
                    
                    <h3>TCP Congestion Control</h3>
                    <p>Congestion control prevents network collapse by adjusting transmission rates based on network conditions. Modern TCP implementations use sophisticated algorithms to balance throughput and fairness.</p>
                    
                    <h4>Modern Algorithms</h4>
                    <ul>
                        <li><strong>TCP Cubic</strong> - Optimized for high-bandwidth networks</li>
                        <li><strong>TCP BBR</strong> - Model-based congestion control</li>
                        <li><strong>TCP Reno</strong> - Traditional algorithm</li>
                    </ul>
                    
                    <h3>TCP Windowing Mechanisms</h3>
                    <p>Window management balances flow control and performance, ensuring receivers aren't overwhelmed while maximizing throughput.</p>
                    
                    <h3>Nagle Algorithm</h3>
                    <p>The Nagle algorithm reduces small packet overhead and improves network efficiency by combining small segments before transmission.</p>
                    
                    <h4>When to Disable Nagle</h4>
                    <ul>
                        <li>Interactive applications requiring low latency</li>
                        <li>Real-time systems</li>
                        <li>Request-response patterns</li>
                    </ul>
                    
                    <h3>Conclusion</h3>
                    <p>Advanced TCP features like SACK, sophisticated congestion control, intelligent windowing, and the Nagle algorithm work together to optimize network performance across diverse conditions. Understanding these mechanisms enables network engineers to diagnose performance issues, tune applications, and design networks that maximize TCP's capabilities.</p>
                </div>
            </div>
        `
    }
};

// Make functions globally available
window.showSection = showSection;
window.showBlogPost = showBlogPost;

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize the application
function initializeApp() {
    // Set up navigation
    showSection('home');
    
    // Initialize network animation
    initializeNetworkAnimation();
    
    // Set up form handlers
    setupFormHandlers();
    
    // Update navbar on scroll
    window.addEventListener('scroll', updateNavbarOnScroll);
}

// Show specific section
function showSection(sectionName) {
    console.log('showSection called with:', sectionName);
    
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    const targetSection = document.getElementById(sectionName);
    if (targetSection) {
        targetSection.classList.add('active');
        currentSection = sectionName;
        
        // Update navbar active state
        updateNavbarActive(sectionName);
        
        // Scroll to top
        window.scrollTo(0, 0);
        
        console.log('Section changed to:', sectionName);
    } else {
        console.error('Section not found:', sectionName);
    }
}

// Show blog post
function showBlogPost(postId) {
    console.log('showBlogPost called with:', postId);
    
    const blogPost = blogPosts[postId];
    if (blogPost) {
        const blogContent = document.getElementById('blog-content');
        if (blogContent) {
            blogContent.innerHTML = blogPost.content;
            showSection('blog-post');
        } else {
            console.error('blog-content element not found');
        }
    } else {
        console.error('Blog post not found:', postId);
    }
}

// Update navbar active state
function updateNavbarActive(sectionName) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        const text = link.textContent.toLowerCase().trim();
        if ((sectionName === 'home' && text === 'home') ||
            (sectionName === 'teaching' && text === 'teaching') ||
            (sectionName === 'contracts' && text === 'contract work') ||
            (sectionName === 'blog' && text === 'blog') ||
            (sectionName === 'blog-post' && text === 'blog') ||
            (sectionName === 'contact' && text === 'contact')) {
            link.classList.add('active');
        }
    });
}

// Update navbar appearance on scroll
function updateNavbarOnScroll() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(19, 52, 59, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.backgroundColor = 'var(--color-slate-900)';
            navbar.style.backdropFilter = 'none';
        }
    }
}

// Initialize network animation
function initializeNetworkAnimation() {
    const packet = document.getElementById('packet');
    if (!packet) return;
    
    // Define animation path coordinates
    const path = [
        { x: '20%', y: '20%' },  // node1
        { x: '80%', y: '20%' },  // node2
        { x: '50%', y: '50%' },  // node3
        { x: '20%', y: '80%' },  // node4
        { x: '80%', y: '80%' },  // node5
        { x: '20%', y: '20%' }   // back to node1
    ];
    
    let currentPathIndex = 0;
    
    function animatePacket() {
        if (!packet) return;
        
        const currentPos = path[currentPathIndex];
        packet.style.left = currentPos.x;
        packet.style.top = currentPos.y;
        
        currentPathIndex = (currentPathIndex + 1) % path.length;
        
        // Continue animation
        setTimeout(animatePacket, 800);
    }
    
    // Start animation
    animatePacket();
}

// Setup form handlers
function setupFormHandlers() {
    // Contract form handler
    const contractForm = document.getElementById('contractForm');
    if (contractForm) {
        contractForm.addEventListener('submit', handleContractFormSubmit);
    }
}

// Handle contract form submission
function handleContractFormSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const company = formData.get('company') || '';
    const contact = formData.get('contact') || '';
    const email = formData.get('email') || '';
    const phone = formData.get('phone') || '';
    const projectType = formData.get('project-type') || '';
    const urgency = formData.get('urgency') || '';
    const description = formData.get('description') || '';
    const budget = formData.get('budget') || '';
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Contract Request: ${company || 'New Project'}`);
    const body = encodeURIComponent(`
Contract Request Details:

Company: ${company || 'Not provided'}
Contact: ${contact || 'Not provided'}
Email: ${email || 'Not provided'}
Phone: ${phone || 'Not provided'}
Project Type: ${projectType || 'Not specified'}
Urgency: ${urgency || 'Not specified'}
Budget Range: ${budget || 'Not specified'}

Project Description:
${description || 'No description provided'}

---
Sent from IDecodeNetworks website
    `);
    
    const mailtoLink = `mailto:info@idecodenetworks.com?subject=${subject}&body=${body}`;
    
    // Open mailto link
    window.open(mailtoLink, '_blank');
    
    // Show success message
    showFormSuccessMessage('Contract request prepared! Your email client should open with the details.');
    
    // Reset form
    event.target.reset();
}

// Show form success message
function showFormSuccessMessage(message) {
    // Create success alert
    const alert = document.createElement('div');
    alert.className = 'alert alert-success alert-dismissible fade show';
    alert.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    // Insert at top of current section
    const currentSectionElement = document.querySelector('.section.active .container');
    if (currentSectionElement) {
        currentSectionElement.insertBefore(alert, currentSectionElement.firstChild);
        
        // Auto-dismiss after 5 seconds
        setTimeout(() => {
            if (alert.parentNode) {
                alert.remove();
            }
        }, 5000);
    }
}

// Smooth scrolling for anchor links
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Utility function to get current section
function getCurrentSection() {
    return currentSection;
}

// Handle window resize for responsive behavior
window.addEventListener('resize', function() {
    // Adjust network visualization if needed
    if (window.innerWidth < 768) {
        adjustNetworkVisualizationForMobile();
    }
});

// Adjust network visualization for mobile
function adjustNetworkVisualizationForMobile() {
    const networkContainer = document.querySelector('.network-container');
    if (networkContainer && window.innerWidth < 768) {
        networkContainer.style.height = '250px';
    }
}

// Export functions for potential external use
window.IDecodeNetworksApp = {
    showSection,
    showBlogPost,
    getCurrentSection,
    smoothScrollTo
};