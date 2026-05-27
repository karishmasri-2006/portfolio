import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

// Updated projects - Todo App removed
const projects = [
  {
    id: 1,
    title: 'E-commerce Website',
    description: 'Full-stack Amazon clone with user authentication, product catalog, shopping cart, and payment integration. Built using React, Node.js, Express, and PostgreSQL.',
    image: 'https://via.placeholder.com/400x250/F59E0B/FFFFFF?text=E-commerce',
    github: 'https://github.com/yourname/ecommerce-website',
    demo: ''
  },
  {
    id: 2,
    title: 'Thiranex Portfolio Website', 
    description: 'Responsive portfolio built for Thiranex internship. React frontend with Node.js API backend. Showcases projects, skills, and contact info. Fully responsive design.',
    image: 'https://via.placeholder.com/400x250/06B6D4/FFFFFF?text=Portfolio',
    github: 'https://github.com/yourname/portfolio',
    demo: 'http://localhost:5173'
  }
];

app.get('/', (req, res) => {
  res.json({ message: 'Portfolio API is running!' });
});

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.get('/api/projects/:id', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  if (!project) return res.status(404).json({ error: 'Project not found' });
  res.json(project);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Test API: http://localhost:${PORT}/api/projects`);
});