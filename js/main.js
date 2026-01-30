<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About | RamdaJS Journal</title>
    <meta name="description" content="Learn about RamdaJS Journal, our mission, and the team behind it.">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/article.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="icon" type="image/x-icon" href="images/favicon.ico">
    <style>
        .about-hero {
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
            color: white;
            padding: 100px 0;
            text-align: center;
        }
        
        .about-hero h1 {
            font-size: 3.5rem;
            margin-bottom: 1rem;
            color: white;
        }
        
        .about-hero p {
            font-size: 1.2rem;
            max-width: 700px;
            margin: 0 auto;
            opacity: 0.9;
        }
        
        .mission-section {
            padding: 80px 0;
            background-color: var(--light);
        }
        
        .mission-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 40px;
            margin-top: 40px;
        }
        
        .mission-card {
            background: white;
            padding: 40px;
            border-radius: var(--radius);
            box-shadow: var(--shadow);
            transition: var(--transition);
        }
        
        .mission-card:hover {
            transform: translateY(-10px);
            box-shadow: var(--shadow-lg);
        }
        
        .mission-icon {
            font-size: 3rem;
            color: var(--primary);
            margin-bottom: 20px;
        }
        
        .team-section {
            padding: 80px 0;
            background-color: white;
        }
        
        .team-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
            margin-top: 40px;
        }
        
        .team-card {
            text-align: center;
            padding: 30px;
            border-radius: var(--radius);
            background: var(--light);
            transition: var(--transition);
        }
        
        .team-card:hover {
            background: white;
            box-shadow: var(--shadow);
        }
        
        .team-avatar {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
            margin: 0 auto 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 3rem;
        }
        
        .team-role {
            color: var(--primary);
            font-weight: 600;
            margin-bottom: 10px;
        }
        
        .team-bio {
            color: var(--gray);
            margin-bottom: 20px;
        }
        
        .team-social {
            display: flex;
            justify-content: center;
            gap: 15px;
        }
        
        .team-social a {
            color: var(--gray);
            transition: var(--transition);
        }
        
        .team-social a:hover {
            color: var(--primary);
        }
        
        .stats-section {
            padding: 60px 0;
            background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary) 100%);
            color: white;
        }
        
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 30px;
            text-align: center;
        }
        
        .stat-number {
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 10px;
        }
        
        .contact-section {
            padding: 80px 0;
            background-color: var(--light);
        }
        
        .contact-form {
            max-width: 600px;
            margin: 40px auto 0;
            background: white;
            padding: 40px;
            border-radius: var(--radius);
            box-shadow: var(--shadow);
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 500;
        }
        
        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 12px 16px;
            border: 1px solid var(--border);
            border-radius: var(--radius);
            font-family: 'Inter', sans-serif;
            font-size: 1rem;
            transition: var(--transition);
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(74, 111, 165, 0.1);
        }
    </style>
</head>
<body>
    <!-- Navigation (sama dengan index.html) -->
    <nav class="navbar">
        <div class="container nav-container">
            <a href="index.html" class="logo">
                <span class="logo-icon">λ</span>
                <span class="logo-text">RamdaJS <strong>Journal</strong></span>
            </a>
            
            <ul class="nav-menu">
                <li><a href="index.html">Home</a></li>
                <li><a href="index.html#articles">Articles</a></li>
                <li><a href="about.html" class="active">About</a></li>
                <li><a href="index.html#resources">Resources</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            
            <div class="nav-actions">
                <button class="theme-toggle" id="themeToggle" aria-label="Toggle dark mode">
                    <i class="fas fa-moon"></i>
                </button>
                <button class="menu-toggle" id="menuToggle" aria-label="Toggle mobile menu">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="about-hero">
        <div class="container">
            <h1>About RamdaJS Journal</h1>
            <p>Our mission is to make functional programming with Ramda.js accessible, practical, and enjoyable for JavaScript developers at all levels.</p>
        </div>
    </section>

    <!-- Mission Section -->
    <section class="mission-section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Our Mission & Values</h2>
                <p class="section-subtitle">What drives us to create quality content about functional programming</p>
            </div>
            
            <div class="mission-grid">
                <div class="mission-card">
                    <div class="mission-icon">
                        <i class="fas fa-graduation-cap"></i>
                    </div>
                    <h3>Education First</h3>
                    <p>We believe in breaking down complex functional programming concepts into digestible, practical lessons that developers can immediately apply in their projects.</p>
                </div>
                
                <div class="mission-card">
                    <div class="mission-icon">
                        <i class="fas fa-code"></i>
                    </div>
                    <h3>Practical Examples</h3>
                    <p>Every concept we teach is accompanied by real-world code examples and use cases, ensuring that learning translates directly to production-ready skills.</p>
                </div>
                
                <div class="mission-card">
                    <div class="mission-icon">
                        <i class="fas fa-users"></i>
                    </div>
                    <h3>Community Focus</h3>
                    <p>We're building a supportive community where developers can share knowledge, ask questions, and grow together in their functional programming journey.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section">
        <div class="container">
            <div class="stats-grid">
                <div class="stat-item">
                    <div class="stat-number">50+</div>
                    <p>Articles Published</p>
                </div>
                <div class="stat-item">
                    <div class="stat-number">25K+</div>
                    <p>Monthly Readers</p>
                </div>
                <div class="stat-item">
                    <div class="stat-number">100+</div>
                    <p>Code Examples</p>
                </div>
                <div class="stat-item">
                    <div class="stat-number">15</div>
                    <p>Countries Reached</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Team Section -->
    <section class="team-section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Meet Our Team</h2>
                <p class="section-subtitle">The developers and writers behind RamdaJS Journal</p>
            </div>
            
            <div class="team-grid">
                <div class="team-card">
                    <div class="team-avatar">
                        <i class="fas fa-user"></i>
                    </div>
                    <h3>Alex Chen</h3>
                    <div class="team-role">Founder & Lead Writer</div>
                    <p class="team-bio">Senior software engineer with 8+ years of experience in functional programming and JavaScript ecosystems.</p>
                    <div class="team-social">
                        <a href="#"><i class="fab fa-github"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
                
                <div class="team-card">
                    <div class="team-avatar">
                        <i class="fas fa-user"></i>
                    </div>
                    <h3>Maya Rodriguez</h3>
                    <div class="team-role">Technical Editor</div>
                    <p class="team-bio">Former engineering manager specializing in code quality, documentation, and developer education.</p>
                    <div class="team-social">
                        <a href="#"><i class="fab fa-github"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
                
                <div class="team-card">
                    <div class="team-avatar">
                        <i class="fas fa-user"></i>
                    </div>
                    <h3>David Kim</h3>
                    <div class="team-role">Content Strategist</div>
                    <p class="team-bio">Tech writer focused on creating engaging, accessible content for developers of all skill levels.</p>
                    <div class="team-social">
                        <a href="#"><i class="fab fa-github"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section" id="contact">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Get In Touch</h2>
                <p class="section-subtitle">Have questions, suggestions, or want to contribute? We'd love to hear from you.</p>
            </div>
            
            <form class="contact-form" id="contactForm">
                <div class="form-group">
                    <label for="name">Your Name</label>
                    <input type="text" id="name" name="name" required>
                </div>
                
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <input type="email" id="email" name="email" required>
                </div>
                
                <div class="form-group">
                    <label for="subject">Subject</label>
                    <input type="text" id="subject" name="subject" required>
                </div>
                
                <div class="form-group">
                    <label for="message">Your Message</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>
                
                <button type="submit" class="btn btn-primary">
                    <i class="fas fa-paper-plane"></i> Send Message
                </button>
            </form>
        </div>
    </section>

    <!-- Footer (sama dengan index.html) -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-col">
                    <a href="index.html" class="footer-logo">
                        <span class="logo-icon">λ</span>
                        <span class="logo-text">RamdaJS <strong>Journal</strong></span>
                    </a>
                    <p class="footer-description">
                        A practical guide to functional programming with Ramda.js. 
                        Tutorials, examples, and resources for JavaScript developers.
                    </p>
                </div>
                
                <div class="footer-col">
                    <h3>Quick Links</h3>
                    <ul class="footer-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="index.html#articles">Articles</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="index.html#resources">Resources</a></li>
                    </ul>
                </div>
                
                <div class="footer-col">
                    <h3>Legal</h3>
                    <ul class="footer-links">
                        <li><a href="#privacy">Privacy Policy</a></li>
                        <li><a href="#terms">Terms of Service</a></li>
                        <li><a href="#cookies">Cookie Policy</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; <span id="currentYear">2026</span> RamdaJS Journal. All rights reserved.</p>
                <p>Not affiliated with the official Ramda.js library.</p>
            </div>
        </div>
    </footer>

    <script src="js/main.js"></script>
    <script>
        // Set current year in footer
        document.getElementById('currentYear').textContent = new Date().getFullYear();
        
        // Mobile menu toggle
        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.querySelector('.nav-menu');
        
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.innerHTML = navMenu.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            themeToggle.innerHTML = document.body.classList.contains('dark-theme')
                ? '<i class="fas fa-sun"></i>'
                : '<i class="fas fa-moon"></i>';
        });
        
        // Contact form submission
        document.getElementById('contactForm').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We\'ll get back to you soon.');
            e.target.reset();
        });
    </script>
</body>
</html>
