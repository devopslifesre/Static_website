// Subject details data
const subjectDetails = {
    mathematics: {
        title: 'Mathematics',
        chapters: [
            {
                name: 'Algebra',
                topics: ['Linear Equations', 'Quadratic Equations', 'Polynomials', 'Matrices'],
                progress: 70,
                resources: 12
            },
            {
                name: 'Calculus',
                topics: ['Limits', 'Derivatives', 'Integration', 'Differential Equations'],
                progress: 45,
                resources: 15
            },
            {
                name: 'Trigonometry',
                topics: ['Ratios', 'Identities', 'Equations', 'Heights & Distances'],
                progress: 80,
                resources: 8
            },
            {
                name: 'Geometry',
                topics: ['Lines & Angles', 'Triangles', 'Circles', 'Coordinate Geometry'],
                progress: 60,
                resources: 10
            }
        ],
        stats: {
            totalVideos: 24,
            totalNotes: 18,
            totalQuestions: 450,
            avgScore: 72
        }
    },
    physics: {
        title: 'Physics',
        chapters: [
            {
                name: 'Mechanics',
                topics: ['Motion', 'Forces', 'Work & Energy', 'Rotational Motion'],
                progress: 55,
                resources: 14
            },
            {
                name: 'Thermodynamics',
                topics: ['Heat', 'Laws of Thermodynamics', 'Kinetic Theory', 'Entropy'],
                progress: 30,
                resources: 8
            },
            {
                name: 'Optics',
                topics: ['Reflection', 'Refraction', 'Lenses', 'Wave Optics'],
                progress: 40,
                resources: 10
            },
            {
                name: 'Modern Physics',
                topics: ['Quantum', 'Nuclear', 'Relativity', 'Semiconductors'],
                progress: 25,
                resources: 12
            }
        ],
        stats: {
            totalVideos: 32,
            totalNotes: 21,
            totalQuestions: 380,
            avgScore: 68
        }
    },
    chemistry: {
        title: 'Chemistry',
        chapters: [
            {
                name: 'Physical Chemistry',
                topics: ['Mole Concept', 'Atomic Structure', 'Chemical Bonding', 'Thermodynamics'],
                progress: 50,
                resources: 15
            },
            {
                name: 'Organic Chemistry',
                topics: ['Hydrocarbons', 'Alcohols', 'Carbonyl Compounds', 'Biomolecules'],
                progress: 35,
                resources: 18
            },
            {
                name: 'Inorganic Chemistry',
                topics: ['Periodic Table', 'Coordination Compounds', 'Metallurgy', 'p-Block Elements'],
                progress: 40,
                resources: 12
            }
        ],
        stats: {
            totalVideos: 28,
            totalNotes: 15,
            totalQuestions: 320,
            avgScore: 65
        }
    },
    biology: {
        title: 'Biology',
        chapters: [
            {
                name: 'Botany',
                topics: ['Plant Kingdom', 'Morphology', 'Anatomy', 'Physiology'],
                progress: 75,
                resources: 20
            },
            {
                name: 'Zoology',
                topics: ['Animal Kingdom', 'Human Physiology', 'Reproduction', 'Evolution'],
                progress: 80,
                resources: 22
            },
            {
                name: 'Cell Biology',
                topics: ['Cell Structure', 'Cell Division', 'Biomolecules', 'Genetics'],
                progress: 65,
                resources: 15
            }
        ],
        stats: {
            totalVideos: 45,
            totalNotes: 32,
            totalQuestions: 520,
            avgScore: 81
        }
    },
    english: {
        title: 'English',
        chapters: [
            {
                name: 'Grammar',
                topics: ['Tenses', 'Parts of Speech', 'Sentence Structure', 'Punctuation'],
                progress: 60,
                resources: 10
            },
            {
                name: 'Vocabulary',
                topics: ['Synonyms', 'Antonyms', 'Idioms', 'One Word Substitution'],
                progress: 55,
                resources: 12
            },
            {
                name: 'Comprehension',
                topics: ['Reading Skills', 'Inference', 'Summary Writing', 'Critical Analysis'],
                progress: 45,
                resources: 8
            }
        ],
        stats: {
            totalVideos: 18,
            totalNotes: 12,
            totalQuestions: 280,
            avgScore: 70
        }
    },
    gk: {
        title: 'General Knowledge',
        chapters: [
            {
                name: 'History',
                topics: ['Ancient India', 'Medieval India', 'Modern India', 'World History'],
                progress: 50,
                resources: 18
            },
            {
                name: 'Geography',
                topics: ['Physical Geography', 'Indian Geography', 'World Geography', 'Environment'],
                progress: 45,
                resources: 15
            },
            {
                name: 'Polity',
                topics: ['Constitution', 'Governance', 'Political Systems', 'Rights & Duties'],
                progress: 40,
                resources: 12
            },
            {
                name: 'Current Affairs',
                topics: ['National', 'International', 'Sports', 'Awards'],
                progress: 35,
                resources: 20
            }
        ],
        stats: {
            totalVideos: 36,
            totalNotes: 24,
            totalQuestions: 620,
            avgScore: 62
        }
    }
};

// Function to show subject details in modal
function showSubjectDetails(subject) {
    const data = subjectDetails[subject];
    if (!data) return;
    
    const modal = document.getElementById('subjectModal');
    const modalTitle = document.getElementById('modalSubjectTitle');
    const modalBody = document.getElementById('modalBody');
    
    modalTitle.textContent = data.title;
    
    // Build modal content
    let content = `
        <div class="subject-detail-stats">
            <div class="stat-item">
                <i class="fas fa-video"></i>
                <span>${data.stats.totalVideos} Videos</span>
            </div>
            <div class="stat-item">
                <i class="fas fa-file-pdf"></i>
                <span>${data.stats.totalNotes} Notes</span>
            </div>
            <div class="stat-item">
                <i class="fas fa-question-circle"></i>
                <span>${data.stats.totalQuestions} Questions</span>
            </div>
            <div class="stat-item">
                <i class="fas fa-chart-line"></i>
                <span>Avg. Score: ${data.stats.avgScore}%</span>
            </div>
        </div>
        
        <h3>Chapters & Topics</h3>
        <div class="chapters-container">
    `;
    
    data.chapters.forEach(chapter => {
        content += `
            <div class="chapter-card">
                <div class="chapter-header">
                    <h4>${chapter.name}</h4>
                    <span class="chapter-resources">${chapter.resources} resources</span>
                </div>
                <div class="chapter-topics">
                    ${chapter.topics.map(topic => `<span class="topic-tag">${topic}</span>`).join('')}
                </div>
                <div class="chapter-progress">
                    <div class="progress-info">
                        <span>Progress</span>
                        <span>${chapter.progress}%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress" style="width: ${chapter.progress}%; background: #3498db"></div>
                    </div>
                </div>
            </div>
        `;
    });
    
    content += `
        </div>
        <div class="action-buttons">
            <button class="btn-primary" onclick="startLearning('${subject}')">
                <i class="fas fa-play"></i> Start Learning
            </button>
            <button class="btn-secondary" onclick="takeTest('${subject}')">
                <i class="fas fa-pencil-alt"></i> Take Practice Test
            </button>
        </div>
    `;
    
    modalBody.innerHTML = content;
    modal.style.display = 'block';
    
    // Add CSS for modal content
    addModalStyles();
}

// Function to close modal
function closeModal() {
    document.getElementById('subjectModal').style.display = 'none';
}

// Function to add modal-specific styles
function addModalStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .subject-detail-stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 1rem;
            margin-bottom: 2rem;
            padding: 1rem;
            background: #f8f9fa;
            border-radius: 10px;
        }
        
        .stat-item {
            display: flex;
            align-items: center;
            gap: 10px;
            color: #2c3e50;
        }
        
        .stat-item i {
            font-size: 1.2rem;
            color: #3498db;
        }
        
        .chapters-container {
            max-height: 400px;
            overflow-y: auto;
            padding-right: 1rem;
        }
        
        .chapter-card {
            background: #f8f9fa;
            border-radius: 10px;
            padding: 1rem;
            margin-bottom: 1rem;
        }
        
        .chapter-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }
        
        .chapter-header h4 {
            color: #2c3e50;
            font-size: 1.1rem;
        }
        
        .chapter-resources {
            color: #7f8c8d;
            font-size: 0.9rem;
        }
        
        .chapter-topics {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-bottom: 1rem;
        }
        
        .topic-tag {
            background: white;
            padding: 0.3rem 0.8rem;
            border-radius: 15px;
            font-size: 0.85rem;
            color: #3498db;
            border: 1px solid #3498db;
        }
        
        .action-buttons {
            display: flex;
            gap: 1rem;
            margin-top: 2rem;
        }
        
        .btn-primary, .btn-secondary {
            padding: 0.8rem 1.5rem;
            border: none;
            border-radius: 8px;
            font-size: 1rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            transition: all 0.3s;
        }
        
        .btn-primary {
            background: #3498db;
            color: white;
            flex: 2;
        }
        
        .btn-primary:hover {
            background: #2980b9;
        }
        
        .btn-secondary {
            background: #eef2f7;
            color: #2c3e50;
            flex: 1;
        }
        
        .btn-secondary:hover {
            background: #e2e8f0;
        }
    `;
    
    document.head.appendChild(style);
}

// Function to start learning
function startLearning(subject) {
    alert(`Starting learning for ${subjectDetails[subject].title}`);
    closeModal();
    // Here you would typically navigate to the learning page
}

// Function to take test
function takeTest(subject) {
    alert(`Starting practice test for ${subjectDetails[subject].title}`);
    closeModal();
    // Here you would typically navigate to the test page
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('subjectModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to navigation links on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
