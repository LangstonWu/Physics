// Physics Data
const physicsTopics = [
    { id: 1, title: "Mechanics", icon: "fas fa-cogs", color: "topic-mechanics", description: "Motion, forces, energy, momentum, and circular motion.", slides: 15, flashcards: 80, questions: 120, completed: 40 },
    { id: 2, title: "Heat", icon: "fas fa-thermometer-half", color: "topic-heat", description: "Temperature, heat transfer, thermal properties, and gas laws.", slides: 12, flashcards: 65, questions: 110, completed: 30 },
    { id: 3, title: "Waves", icon: "fas fa-wave-square", color: "topic-waves", description: "Wave properties, sound, light, reflection, and refraction.", slides: 18, flashcards: 90, questions: 140, completed: 25 },
    { id: 4, title: "Electricity", icon: "fas fa-bolt", color: "topic-electricity", description: "Electric circuits, current, voltage, resistance, and power.", slides: 16, flashcards: 85, questions: 130, completed: 35 },
    { id: 5, title: "Magnetism", icon: "fas fa-magnet", color: "topic-magnetism", description: "Magnetic fields, electromagnetism, and electromagnetic induction.", slides: 14, flashcards: 70, questions: 115, completed: 20 },
    { id: 6, title: "Atomic Physics", icon: "fas fa-atom", color: "topic-atomic", description: "Radioactivity, nuclear reactions, and particle physics.", slides: 13, flashcards: 60, questions: 105, completed: 15 },
    { id: 7, title: "Space Physics", icon: "fas fa-globe-asia", color: "topic-space", description: "Gravity, orbits, stars, and the universe.", slides: 10, flashcards: 50, questions: 95, completed: 10 }
];

// Sample Slides Data for Mechanics
const mechanicsSlides = [
    {
        title: "Introduction to Mechanics",
        content: `<p><strong>Mechanics</strong> is the branch of physics that deals with the motion of objects and the forces that cause motion.</p>
            <h4>Key Concepts:</h4>
            <ul>
                <li><strong>Kinematics:</strong> Describes motion without considering causes</li>
                <li><strong>Dynamics:</strong> Studies forces and their effects on motion</li>
                <li><strong>Statics:</strong> Deals with objects at rest or in equilibrium</li>
            </ul>
            <div class="formula">v = u + at</div>
            <p>Where v = final velocity, u = initial velocity, a = acceleration, t = time</p>`
    },
    {
        title: "Newton's Laws of Motion",
        content: `<h4>First Law (Law of Inertia):</h4>
            <p>An object at rest stays at rest, and an object in motion stays in motion with constant velocity, unless acted upon by a net external force.</p>
            
            <h4>Second Law:</h4>
            <div class="formula">F = ma</div>
            <p>Force equals mass times acceleration. The acceleration is directly proportional to the net force and inversely proportional to mass.</p>
            
            <h4>Third Law:</h4>
            <p>For every action, there is an equal and opposite reaction.</p>`
    },
    {
        title: "Forces and Free Body Diagrams",
        content: `<p>A <strong>free body diagram</strong> shows all the forces acting on an object.</p>
            <h4>Common Forces:</h4>
            <ul>
                <li><strong>Weight (W = mg):</strong> Force due to gravity</li>
                <li><strong>Normal Force (N):</strong> Support force perpendicular to surface</li>
                <li><strong>Tension (T):</strong> Force through a string or cable</li>
                <li><strong>Friction (f):</strong> Opposes motion</li>
                <li><strong>Applied Force (F):</strong> Push or pull</li>
            </ul>
            <p>In equilibrium, the net force is zero: ΣF = 0</p>`
    }
];

// Sample Flashcards Data
const flashcards = [
    {
        front: "What is Newton's First Law of Motion?",
        back: "An object at rest stays at rest, and an object in motion stays in motion with constant velocity, unless acted upon by a net external force. Also known as the Law of Inertia."
    },
    {
        front: "Define acceleration.",
        back: "Acceleration is the rate of change of velocity with time. It is a vector quantity measured in m/s². a = (v - u)/t"
    },
    {
        front: "What is the formula for kinetic energy?",
        back: "Kinetic Energy = ½mv², where m is mass in kg and v is velocity in m/s. Measured in Joules (J)."
    },
    {
        front: "What is the principle of conservation of energy?",
        back: "Energy cannot be created or destroyed, only transformed from one form to another. Total energy in a closed system remains constant."
    },
    {
        front: "Define momentum.",
        back: "Momentum = mass × velocity (p = mv). It is a vector quantity measured in kg·m/s. Momentum is conserved in isolated systems."
    }
];

// Sample Quiz Questions (100+ questions would be in full implementation)
const quizQuestions = [
    {
        question: "Which of the following is a scalar quantity?",
        options: ["Velocity", "Force", "Speed", "Acceleration"],
        correct: 2,
        explanation: "Speed is a scalar quantity as it has magnitude only. Velocity, force, and acceleration are vector quantities as they have both magnitude and direction."
    },
    {
        question: "A car accelerates from rest to 20 m/s in 5 seconds. What is its acceleration?",
        options: ["1 m/s²", "2 m/s²", "4 m/s²", "5 m/s²"],
        correct: 2,
        explanation: "Using a = (v - u)/t = (20 - 0)/5 = 4 m/s²"
    },
    {
        question: "What is the weight of a 50 kg object on Earth? (g = 10 m/s²)",
        options: ["5 N", "50 N", "500 N", "5000 N"],
        correct: 2,
        explanation: "Weight = mass × gravity = 50 × 10 = 500 N"
    },
    {
        question: "Which law explains why passengers continue moving forward when a car suddenly stops?",
        options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Conservation of Energy"],
        correct: 0,
        explanation: "Newton's First Law (Inertia): Objects in motion tend to stay in motion unless acted upon by an external force."
    },
    {
        question: "What is the SI unit of force?",
        options: ["Joule", "Watt", "Newton", "Pascal"],
        correct: 2,
        explanation: "The newton (N) is the SI unit of force. 1 N = 1 kg·m/s²"
    },
    {
        question: "A force of 10 N acts on a 2 kg mass. What is the acceleration?",
        options: ["0.2 m/s²", "2 m/s²", "5 m/s²", "20 m/s²"],
        correct: 2,
        explanation: "Using F = ma, a = F/m = 10/2 = 5 m/s²"
    },
    {
        question: "Which of the following experiences the greatest gravitational force on Earth?",
        options: ["A 1 kg feather", "A 10 kg book", "A 100 kg person", "All experience the same gravitational acceleration"],
        correct: 2,
        explanation: "Gravitational force = mg. While acceleration due to gravity (g) is constant, force depends on mass, so heavier objects experience greater force."
    },
    {
        question: "What is the momentum of a 5 kg object moving at 2 m/s?",
        options: ["2.5 kg·m/s", "5 kg·m/s", "10 kg·m/s", "20 kg·m/s"],
        correct: 2,
        explanation: "Momentum p = mv = 5 × 2 = 10 kg·m/s"
    },
    {
        question: "In the equation v² = u² + 2as, what does 's' represent?",
        options: ["Speed", "Displacement", "Time", "Acceleration"],
        correct: 1,
        explanation: "In kinematics equations, 's' represents displacement (distance with direction), measured in meters."
    },
    {
        question: "What type of energy is stored in a stretched spring?",
        options: ["Kinetic energy", "Thermal energy", "Elastic potential energy", "Chemical energy"],
        correct: 2,
        explanation: "A stretched or compressed spring stores elastic potential energy, given by E = ½kx² where k is the spring constant."
    }
];

// Application State
let currentTopic = 1; // Default to Mechanics
let currentSlide = 0;
let currentFlashcard = 0;
let currentQuestion = 0;
let userAnswers = [];
let quizScore = 0;

// DOM Elements
const topicsGrid = document.getElementById('topicsGrid');
const studyModal = document.getElementById('studyModal');
const closeModal = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const tabButtons = document.querySelectorAll('.tab-btn');
const slideContent = document.getElementById('slideContent');
const slideTitle = document.getElementById('slideTitle');
const slideCounter = document.getElementById('slideCounter');
const flashcardElement = document.getElementById('flashcard');
const flashcardFront = document.getElementById('flashcardFront');
const flashcardBack = document.getElementById('flashcardBack');
const flashcardCounter = document.getElementById('flashcardCounter');
const quizQuestion = document.getElementById('quizQuestion');
const quizOptions = document.getElementById('quizOptions');
const quizCounter = document.getElementById('quizCounter');
const quizProgress = document.getElementById('quizProgress');
const quizTopic = document.getElementById('quizTopic');
const quizResults = document.getElementById('quizResults');
const quizScoreElement = document.getElementById('quizScore');
const scoreMessage = document.getElementById('scoreMessage');
const scoreDetails = document.getElementById('scoreDetails');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    renderTopics();
    setupEventListeners();
    updateProgress();
});

// Render Physics Topics
function renderTopics() {
    topicsGrid.innerHTML = '';
    
    physicsTopics.forEach(topic => {
        const topicCard = document.createElement('div');
        topicCard.className = `topic-card ${topic.color}`;
        topicCard.innerHTML = `
            <div class="topic-icon">
                <i class="${topic.icon}"></i>
            </div>
            <h3>${topic.title}</h3>
            <p>${topic.description}</p>
            <div class="topic-stats">
                <span><i class="fas fa-sliders-h"></i> ${topic.slides} slides</span>
                <span><i class="fas fa-layer-group"></i> ${topic.flashcards} cards</span>
                <span><i class="fas fa-question-circle"></i> ${topic.questions} Qs</span>
            </div>
        `;
        
        topicCard.addEventListener('click', () => openTopic(topic.id));
        topicsGrid.appendChild(topicCard);
    });
}

// Open a specific topic
function openTopic(topicId) {
    currentTopic = topicId;
    const topic = physicsTopics.find(t => t.id === topicId);
    modalTitle.textContent = `${topic.title} - Study Materials`;
    quizTopic.textContent = topic.title;
    openStudyModal('slides');
    loadTopicSlides();
}

// Open study modal with specific mode
function openStudyModal(mode) {
    document.getElementById('backNav').classList.add('show');
    studyModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Reset all tabs
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.slide-container, .flashcard-container, .quiz-container')
        .forEach(container => container.classList.remove('active'));
    
    // Activate selected mode
    document.querySelector(`.tab-btn[data-tab="${mode}"]`).classList.add('active');
    document.getElementById(`${mode}Content`).classList.add('active');
    
    // Load content for the mode
    switch(mode) {
        case 'slides':
            loadTopicSlides();
            break;
        case 'flashcards':
            loadFlashcards();
            break;
        case 'quiz':
            
            startQuiz();
            break;
    }
}

// Load slides for current topic
function loadTopicSlides() {
    currentSlide = 0;
    updateSlide();
}

function updateSlide() {
    const slides = mechanicsSlides; // In full app, would load based on currentTopic
    if (slides.length === 0) return;
    
    const slide = slides[currentSlide];
    slideTitle.textContent = slide.title;
    slideContent.innerHTML = slide.content;
    slideCounter.textContent = `Slide ${currentSlide + 1} of ${slides.length}`;
    
    // Update button states
    document.getElementById('prevSlide').disabled = currentSlide === 0;
    document.getElementById('nextSlide').disabled = currentSlide === slides.length - 1;
}

// Load flashcards
function loadFlashcards() {
    currentFlashcard = 0;
    updateFlashcard();
}

function updateFlashcard() {
    if (flashcards.length === 0) return;
    
    const card = flashcards[currentFlashcard];
    flashcardFront.textContent = card.front;
    flashcardBack.textContent = card.back;
    flashcardCounter.textContent = `Card ${currentFlashcard + 1} of ${flashcards.length}`;
    
    // Reset flip state
    flashcardElement.classList.remove('flipped');
    
    // Update button states
    document.getElementById('prevFlashcard').disabled = currentFlashcard === 0;
    document.getElementById('nextFlashcard').disabled = currentFlashcard === flashcards.length - 1;
}

// Quiz Functions
function startQuiz() {
    currentQuestion = 0;
    userAnswers = new Array(quizQuestions.length).fill(null);
    quizScore = 0;
    
    document.getElementById('quizResults').classList.add('hidden');
    document.getElementById('quizContent').classList.remove('hidden');
    document.getElementById('showResults').classList.add('hidden');
    document.getElementById('nextQuestion').classList.remove('hidden');
    
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestion >= quizQuestions.length) {
        showResults();
        return;
    }
    
    const question = quizQuestions[currentQuestion];
    quizQuestion.textContent = `Q${currentQuestion + 1}: ${question.question}`;
    quizCounter.textContent = `Question ${currentQuestion + 1} of ${quizQuestions.length}`;
    quizProgress.style.width = `${((currentQuestion) / quizQuestions.length) * 100}%`;
    
    // Clear previous options
    quizOptions.innerHTML = '';
    
    // Create new options
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'quiz-option';
        if (userAnswers[currentQuestion] === index) {
            optionElement.classList.add('selected');
        }
        
        optionElement.innerHTML = `
            <div class="option-letter">${String.fromCharCode(65 + index)}</div>
            <span>${option}</span>
        `;
        
        optionElement.addEventListener('click', () => selectAnswer(index));
        quizOptions.appendChild(optionElement);
    });
    
    // ========== ADD SHOW RESULTS BUTTON HERE ==========
    // Show Results Button
    let showResultsBtn = document.getElementById('showResultsBtn');
    const answeredCount = userAnswers.filter(answer => answer !== null).length;
    const totalQuestions = quizQuestions.length;
    
    if (!showResultsBtn) {
        showResultsBtn = document.createElement('button');
        showResultsBtn.id = 'showResultsBtn';
        showResultsBtn.className = 'btn';
        showResultsBtn.style.backgroundColor = '#f39c12';
        showResultsBtn.style.color = 'white';
        showResultsBtn.style.marginLeft = '10px';
        showResultsBtn.style.border = 'none';
        showResultsBtn.style.padding = '10px 15px';
        showResultsBtn.style.borderRadius = '5px';
        showResultsBtn.style.cursor = 'pointer';
        showResultsBtn.innerHTML = '<i class="fas fa-chart-bar"></i> Show Results';
        showResultsBtn.onclick = function() {
            if (answeredCount === 0) {
                alert("Please answer at least one question first!");
                return;
            }
            const correct = userAnswers.filter((ans, idx) => ans === quizQuestions[idx].correct).length;
            const percentage = Math.round((correct / answeredCount) * 100);
            alert(`📊 Quiz Results:\n\n✅ Correct: ${correct}/${answeredCount}\n📈 Score: ${percentage}%\n${percentage >= 70 ? '🎉 Excellent!' : '📚 Keep studying!'}`);
        };
        
        // Add to quiz navigation
        const quizNav = document.querySelector('.quiz-nav');
        if (quizNav) {
            quizNav.appendChild(showResultsBtn);
        }
    }
    
    // Update button text
    showResultsBtn.innerHTML = `<i class="fas fa-chart-bar"></i> Show Results (${answeredCount}/${totalQuestions})`;
    showResultsBtn.style.display = answeredCount > 0 ? 'inline-block' : 'none';
    // ========== END SHOW RESULTS BUTTON ==========
    
    // Update button states  <-- This is line 330
    document.getElementById('prevQuestion').disabled = currentQuestion == 0;
    // Update button states
    document.getElementById('prevQuestion').disabled = currentQuestion === 0;
    document.getElementById('nextQuestion').disabled = currentQuestion === quizQuestions.length - 1;
}

function selectAnswer(optionIndex) {
    // Remove selection from all options
    document.querySelectorAll('.quiz-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Add selection to clicked option
    event.target.closest('.quiz-option').classList.add('selected');
    
    // Store answer
    userAnswers[currentQuestion] = optionIndex;
}

    // Refresh show results button
    const btn = document.getElementById('showResultsBtn');
    if (btn) btn.click();

}
function showResults() {
    // Calculate score
    quizScore = 0;
    quizQuestions.forEach((question, index) => {
        if (userAnswers[index] === question.correct) {
            quizScore++;
        }
    });
    
    const percentage = Math.round((quizScore / quizQuestions.length) * 100);
    
    // Update results display
    quizScoreElement.textContent = percentage;
    scoreDetails.textContent = `You answered ${quizScore} out of ${quizQuestions.length} questions correctly`;
    
    // Set message based on score
    if (percentage >= 90) {
        scoreMessage.textContent = "Excellent! You've mastered this topic!";
    } else if (percentage >= 70) {
        scoreMessage.textContent = "Good job! Keep practicing to improve.";
    } else if (percentage >= 50) {
        scoreMessage.textContent = "Not bad! Review the materials and try again.";
    } else {
        scoreMessage.textContent = "Keep practicing! Review the slides and flashcards.";
    }
    
    // Show results, hide quiz
    document.getElementById('quizResults').classList.remove('hidden');
    document.getElementById('quizContent').classList.add('hidden');
}

// Update progress display
function updateProgress() {
    const totalTopics = physicsTopics.length;
    const completedTopics = physicsTopics.filter(t => t.completed > 50).length;
    const percentage = Math.round((completedTopics / totalTopics) * 100);
    
    document.getElementById('overallProgress').style.width = `${percentage}%`;
    document.getElementById('progressText').textContent = 
        `${percentage}% complete • ${completedTopics}/${totalTopics} topics mastered`;
}

// Setup event listeners
function setupEventListeners() {
    // Close modal
    closeModal.addEventListener('click', () => {
        studyModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // ===== BACK BUTTON =====
    document.getElementById('backButton').addEventListener('click', function() {
        studyModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        document.getElementById('backNav').classList.remove('show');
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === studyModal) {
            studyModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Tab switching
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tab = button.getAttribute('data-tab');
            
            // Update active tab
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Show selected content
            document.querySelectorAll('.slide-container, .flashcard-container, .quiz-container')
                .forEach(container => container.classList.remove('active'));
            document.getElementById(`${tab}Content`).classList.add('active');
            
            // Load content if needed
            if (tab === 'slides') loadTopicSlides();
            else if (tab === 'flashcards') loadFlashcards();
            else if (tab === 'quiz') startQuiz();
        });
    });
    
    // Slide navigation
    document.getElementById('prevSlide').addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlide();
        }
    });
    
    document.getElementById('nextSlide').addEventListener('click', () => {
        const slides = mechanicsSlides;
        if (currentSlide < slides.length - 1) {
            currentSlide++;
            updateSlide();
        }
    });
    
    // Flashcard navigation
    document.getElementById('prevFlashcard').addEventListener('click', () => {
        if (currentFlashcard > 0) {
            currentFlashcard--;
            updateFlashcard();
        }
    });
    
    document.getElementById('nextFlashcard').addEventListener('click', () => {
        if (currentFlashcard < flashcards.length - 1) {
            currentFlashcard++;
            updateFlashcard();
        }
    });
    
    // Flip flashcard on click
    flashcardElement.addEventListener('click', () => {
        flashcardElement.classList.toggle('flipped');
    });
    
    // Quiz navigation
    document.getElementById('prevQuestion').addEventListener('click', () => {
        if (currentQuestion > 0) {
            currentQuestion--;
            loadQuestion();
        }
    });
    
    document.getElementById('nextQuestion').addEventListener('click', () => {
        if (currentQuestion < quizQuestions.length - 1) {
            currentQuestion++;
            loadQuestion();
        } else {
            showResults();
        }
    });
    
    // Restart quiz
    document.getElementById('restartQuiz').addEventListener('click', () => {
        startQuiz();
    });
    
    // Mobile menu
    document.getElementById('mobileMenuBtn').addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                document.querySelector('.nav-links').style.display = 'none';
            }
        });
    });
    
    // Watch video button
    document.getElementById('watchVideoBtn').addEventListener('click', (e) => {
        e.preventDefault();
        alert('Video player would open here. In a real app, this would launch a video modal or redirect to a video page.');
    });
}
