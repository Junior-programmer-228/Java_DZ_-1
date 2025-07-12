import type { Task } from '../types/task';

export const tasks: Task[] = [
  {
    id: '1',
    title: 'Fix login bug',
    description: 'Login page crashes on invalid input',
    category: 'Bug',
    status: 'To Do',
    priority: 'High',
  },
  {
    id: '2',
    title: 'Add user profile',
    description: 'Create user profile page',
    category: 'Feature',
    status: 'In Progress',
    priority: 'Medium',
  },
  {
    id: '3',
    title: 'Write docs for API',
    category: 'Documentation',
    status: 'Done',
    priority: 'Low',
    description: ''
  },
];