export interface QuizQuestion {
  id: string;
  question: string;
  options: { value: string; label: string; correct: boolean }[];
}

export interface VideoLesson {
  title: string;
  description: string;
  embedId?: string;
}

export interface ResourceItem {
  title: string;
  description?: string;
  href?: string;
}

export interface TrainingCourse {
  id: string;
  slug: string;
  title: string;
  description: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  progress?: string;
  status?: 'not-started' | 'in-progress' | 'completed';
  videos: VideoLesson[];
  quizQuestions: QuizQuestion[];
  resources: ResourceItem[];
}

const PLACEHOLDER_VIDEO = 'dQw4w9WgXcQ'; // Replace with real YouTube IDs per course

export const TRAINING_COURSES: TrainingCourse[] = [
  {
    id: 'intro',
    slug: 'intro',
    title: 'Introduction to Our Coffee Shop',
    description: 'Brand values, store layout, and your role in the team.',
    duration: '15 min',
    difficulty: 'Beginner',
    progress: '0%',
    status: 'not-started',
    videos: [
      { title: 'Welcome & Store Tour', description: 'Quick overview of the space, equipment, and where everything lives.', embedId: PLACEHOLDER_VIDEO },
      { title: 'Our Values and Culture', description: 'What we stand for and how we work as a team.', embedId: PLACEHOLDER_VIDEO },
    ],
    quizQuestions: [
      { id: 'i1', question: 'Where can staff find the opening checklist?', options: [{ value: 'a', label: 'In the back office', correct: true }, { value: 'b', label: 'On the POS only', correct: false }, { value: 'c', label: 'Manager’s phone', correct: false }] },
      { id: 'i2', question: 'What should you do when you first arrive for your shift?', options: [{ value: 'a', label: 'Clock in and check in with the shift lead', correct: true }, { value: 'b', label: 'Start making drinks immediately', correct: false }, { value: 'c', label: 'Take a break first', correct: false }] },
    ],
    resources: [
      { title: 'Employee handbook', description: 'Policies and expectations' },
      { title: 'Store layout map', description: 'Floor plan and station locations' },
    ],
  },
  {
    id: 'barista-basics',
    slug: 'barista-basics',
    title: 'Barista Basics',
    description: 'Espresso extraction, grind size, and shot timing.',
    duration: '30 min',
    difficulty: 'Beginner',
    progress: '0%',
    status: 'not-started',
    videos: [
      { title: 'Espresso Basics', description: 'Pulling a perfect shot: dose, time, and volume.', embedId: PLACEHOLDER_VIDEO },
      { title: 'Grind Size and Dose', description: 'How to adjust grind and dose for consistency.', embedId: PLACEHOLDER_VIDEO },
      { title: 'Tamping and Distribution', description: 'Even distribution and level tamping.', embedId: PLACEHOLDER_VIDEO },
    ],
    quizQuestions: [
      { id: 'b1', question: 'What is the correct order for building a latte?', options: [{ value: 'a', label: 'Milk, then espresso, then foam', correct: false }, { value: 'b', label: 'Espresso, then steamed milk, then foam', correct: true }, { value: 'c', label: 'Foam, milk, espresso', correct: false }] },
      { id: 'b2', question: 'A double shot should typically run for how long?', options: [{ value: 'a', label: '15–20 seconds', correct: false }, { value: 'b', label: '25–32 seconds', correct: true }, { value: 'c', label: '45+ seconds', correct: false }] },
    ],
    resources: [
      { title: 'Espresso recipe card', description: 'Dose, yield, time standards' },
      { title: 'Drink build guide', description: 'Recipes and build order' },
    ],
  },
  {
    id: 'espresso-machine',
    slug: 'espresso-machine',
    title: 'Espresso Machine Fundamentals',
    description: 'Machine operation, cleaning, and troubleshooting.',
    duration: '25 min',
    difficulty: 'Beginner',
    progress: '40%',
    status: 'in-progress',
    videos: [
      { title: 'Machine Overview', description: 'Components, buttons, and daily startup.', embedId: PLACEHOLDER_VIDEO },
      { title: 'Backflush and Cleaning', description: 'Daily and weekly machine cleaning.', embedId: PLACEHOLDER_VIDEO },
      { title: 'Common Issues and When to Call', description: 'When to fix it yourself vs. call for service.', embedId: PLACEHOLDER_VIDEO },
    ],
    quizQuestions: [
      { id: 'e1', question: 'When should you backflush the group heads?', options: [{ value: 'a', label: 'Only when the machine is broken', correct: false }, { value: 'b', label: 'At least daily, or per store procedure', correct: true }, { value: 'c', label: 'Once a month', correct: false }] },
      { id: 'e2', question: 'The machine is not pulling shots. What should you do first?', options: [{ value: 'a', label: 'Check grind and dose, then inform supervisor if it persists', correct: true }, { value: 'b', label: 'Dismantle the group head', correct: false }, { value: 'c', label: 'Ignore and use the other group', correct: false }] },
    ],
    resources: [
      { title: 'Machine manual (quick reference)', description: 'Startup and shutdown steps' },
      { title: 'Cleaning schedule', description: 'Daily and weekly tasks' },
    ],
  },
  {
    id: 'milk-latte-art',
    slug: 'milk-latte-art',
    title: 'Milk Steaming and Latte Art Basics',
    description: 'Steaming technique and simple latte art.',
    duration: '20 min',
    difficulty: 'Intermediate',
    progress: '0%',
    status: 'not-started',
    videos: [
      { title: 'Steaming Milk', description: 'Texture, temperature, and avoiding bubbles.', embedId: PLACEHOLDER_VIDEO },
      { title: 'Latte Art: Heart and Rosetta', description: 'Basic patterns step by step.', embedId: PLACEHOLDER_VIDEO },
    ],
    quizQuestions: [
      { id: 'm1', question: 'Ideal milk temperature for lattes is approximately?', options: [{ value: 'a', label: 'Room temperature', correct: false }, { value: 'b', label: '60–65°C (140–150°F)', correct: true }, { value: 'c', label: 'Boiling', correct: false }] },
      { id: 'm2', question: 'To get silky microfoam you should:', options: [{ value: 'a', label: 'Stretch only at the start, then roll', correct: true }, { value: 'b', label: 'Keep the wand at the surface the whole time', correct: false }, { value: 'c', label: 'Steam at full power only', correct: false }] },
    ],
    resources: [
      { title: 'Milk steaming cheat sheet', description: 'Times and technique' },
      { title: 'Latte art practice guide', description: 'Patterns and progression' },
    ],
  },
  {
    id: 'customer-service',
    slug: 'customer-service',
    title: 'Customer Service Excellence',
    description: 'Greeting, order taking, and handling complaints.',
    duration: '25 min',
    difficulty: 'Beginner',
    progress: '0%',
    status: 'not-started',
    videos: [
      { title: 'Greeting and Order Taking', description: 'Warm, clear, and efficient service.', embedId: PLACEHOLDER_VIDEO },
      { title: 'Customer Service Best Practices', description: 'How to handle common situations.', embedId: PLACEHOLDER_VIDEO },
      { title: 'Handling Complaints', description: 'Stay calm, listen, and resolve.', embedId: PLACEHOLDER_VIDEO },
    ],
    quizQuestions: [
      { id: 'c1', question: 'A customer says their drink is too cold. What should you do first?', options: [{ value: 'a', label: 'Offer to remake it with warmer milk', correct: true }, { value: 'b', label: 'Tell them it was made to standard', correct: false }, { value: 'c', label: 'Refuse to change it', correct: false }] },
      { id: 'c2', question: 'A customer is upset about a long wait. You should:', options: [{ value: 'a', label: 'Apologise, offer a small gesture if appropriate, escalate if needed', correct: true }, { value: 'b', label: 'Explain that it’s busy and they can leave', correct: false }, { value: 'c', label: 'Ignore them', correct: false }] },
    ],
    resources: [
      { title: 'Service standards guide', description: 'Quality and speed expectations' },
      { title: 'Complaint handling steps', description: 'Listen, apologise, resolve, escalate' },
    ],
  },
  {
    id: 'cashier-pos',
    slug: 'cashier-pos',
    title: 'Cashier and POS Training',
    description: 'Using the POS, payments, and closing the register.',
    duration: '20 min',
    difficulty: 'Beginner',
    progress: '0%',
    status: 'not-started',
    videos: [
      { title: 'POS Overview', description: 'Screens, buttons, and order flow.', embedId: PLACEHOLDER_VIDEO },
      { title: 'Payments and Refunds', description: 'Card, cash, and refund process.', embedId: PLACEHOLDER_VIDEO },
      { title: 'End of Day and Cash Handling', description: 'Closing the till and safe procedures.', embedId: PLACEHOLDER_VIDEO },
    ],
    quizQuestions: [
      { id: 'p1', question: 'Before giving a refund you should:', options: [{ value: 'a', label: 'Get manager approval when required by policy', correct: true }, { value: 'b', label: 'Always refund without checking', correct: false }, { value: 'c', label: 'Never give refunds', correct: false }] },
      { id: 'p2', question: 'When closing the register you must:', options: [{ value: 'a', label: 'Count cash, reconcile, and secure per procedure', correct: true }, { value: 'b', label: 'Leave cash for the next shift', correct: false }, { value: 'c', label: 'Only lock the drawer', correct: false }] },
    ],
    resources: [
      { title: 'POS quick reference', description: 'Common actions and shortcuts' },
      { title: 'Cash handling policy', description: 'Till and safe procedures' },
    ],
  },
  {
    id: 'hygiene-safety',
    slug: 'hygiene-safety',
    title: 'Hygiene, Cleaning, and Safety',
    description: 'Daily cleaning tasks and food safety rules.',
    duration: '20 min',
    difficulty: 'Beginner',
    progress: '0%',
    status: 'not-started',
    videos: [
      { title: 'Food Safety Basics', description: 'Hand washing, cross-contamination, temperatures.', embedId: PLACEHOLDER_VIDEO },
      { title: 'Daily Cleaning Tasks', description: 'What to clean and when.', embedId: PLACEHOLDER_VIDEO },
      { title: 'Safety and Emergencies', description: 'Reporting and emergency procedures.', embedId: PLACEHOLDER_VIDEO },
    ],
    quizQuestions: [
      { id: 'h1', question: 'When should you wash your hands during a shift?', options: [{ value: 'a', label: 'Only at the start', correct: false }, { value: 'b', label: 'After handling money, before handling food', correct: true }, { value: 'c', label: 'Only when they look dirty', correct: false }] },
      { id: 'h2', question: 'Where should cleaning chemicals be stored?', options: [{ value: 'a', label: 'Away from food and labelled', correct: true }, { value: 'b', label: 'Next to the syrup bottles', correct: false }, { value: 'c', label: 'Under the sink only', correct: false }] },
    ],
    resources: [
      { title: 'Cleaning checklist', description: 'Daily and weekly tasks' },
      { title: 'Safety instructions', description: 'Emergency and equipment safety' },
    ],
  },
  {
    id: 'opening-closing',
    slug: 'opening-closing',
    title: 'Opening and Closing Procedures',
    description: 'Checklists and responsibilities for open and close.',
    duration: '25 min',
    difficulty: 'Intermediate',
    progress: '0%',
    status: 'not-started',
    videos: [
      { title: 'Opening the Store', description: 'Startup checklist and first tasks.', embedId: PLACEHOLDER_VIDEO },
      { title: 'Closing the Store', description: 'Closing checklist and handover.', embedId: PLACEHOLDER_VIDEO },
    ],
    quizQuestions: [
      { id: 'o1', question: 'During closing, which task is essential before leaving?', options: [{ value: 'a', label: 'Turn off all lights only', correct: false }, { value: 'b', label: 'Clean equipment, restock, secure cash, set alarm', correct: true }, { value: 'c', label: 'Lock the door only', correct: false }] },
      { id: 'o2', question: 'Who is responsible for the opening checklist?', options: [{ value: 'a', label: 'The designated opener or shift lead', correct: true }, { value: 'b', label: 'The first customer', correct: false }, { value: 'c', label: 'Whoever arrives last', correct: false }] },
    ],
    resources: [
      { title: 'Opening checklist', description: 'Start-of-day duties' },
      { title: 'Closing checklist', description: 'End-of-day duties' },
    ],
  },
  {
    id: 'delivery-orders',
    slug: 'delivery-orders',
    title: 'Handling Uber Eats / DoorDash Orders',
    description: 'Accepting, preparing, and handing off delivery orders.',
    duration: '15 min',
    difficulty: 'Beginner',
    progress: '0%',
    status: 'not-started',
    videos: [
      { title: 'Accepting and Reading Orders', description: 'Tablet flow and order details.', embedId: PLACEHOLDER_VIDEO },
      { title: 'Packaging and Handoff', description: 'Pack correctly and hand off to the driver.', embedId: PLACEHOLDER_VIDEO },
    ],
    quizQuestions: [
      { id: 'd1', question: 'A delivery order is missing an item. What should you do?', options: [{ value: 'a', label: 'Ignore it; the customer can contact the app', correct: false }, { value: 'b', label: 'Note it, inform the manager, follow store policy for refund/replacement', correct: true }, { value: 'c', label: 'Cancel the entire order', correct: false }] },
      { id: 'd2', question: 'Before handing an order to the driver you should:', options: [{ value: 'a', label: 'Confirm items match the ticket and bag is sealed/labelled', correct: true }, { value: 'b', label: 'Just hand over any bag', correct: false }, { value: 'c', label: 'Let the driver pack it', correct: false }] },
    ],
    resources: [
      { title: 'Delivery platform guide', description: 'Tablet and app basics' },
      { title: 'Packaging standards', description: 'Bags, labels, and extras' },
    ],
  },
  {
    id: 'team-communication',
    slug: 'team-communication',
    title: 'Team Communication and Service Standards',
    description: 'Handoffs, support, and consistent service.',
    duration: '20 min',
    difficulty: 'Beginner',
    progress: '0%',
    status: 'not-started',
    videos: [
      { title: 'Handoffs and Breaks', description: 'How to hand off your station clearly.', embedId: PLACEHOLDER_VIDEO },
      { title: 'Service Standards', description: 'Consistency and quality as a team.', embedId: PLACEHOLDER_VIDEO },
    ],
    quizQuestions: [
      { id: 't1', question: 'When going on break you should:', options: [{ value: 'a', label: 'Tell your lead, hand off tasks, and return on time', correct: true }, { value: 'b', label: 'Leave without telling anyone', correct: false }, { value: 'c', label: 'Skip handoff if it’s busy', correct: false }] },
      { id: 't2', question: 'A colleague is overwhelmed. You should:', options: [{ value: 'a', label: 'Offer to help within your role and inform the lead', correct: true }, { value: 'b', label: 'Ignore and focus only on your station', correct: false }, { value: 'c', label: 'Take over their station without asking', correct: false }] },
    ],
    resources: [
      { title: 'Service standards guide', description: 'Quality and speed standards' },
      { title: 'Handoff checklist', description: 'What to communicate when switching', },
    ],
  },
];

export function getCourseBySlug(slug: string): TrainingCourse | undefined {
  return TRAINING_COURSES.find((c) => c.slug === slug);
}
