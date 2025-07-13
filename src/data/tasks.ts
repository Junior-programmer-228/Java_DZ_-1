import type { Task } from '../types/task';

export const tasks: Task[] = [
  {
    id: '1',
    title: 'Исправить баг авторизации',
    description: 'Ошибка при входе с Google-аккаунтом',
    category: 'Bug',
    status: 'To Do',
    priority: 'High',
  },
  {
    id: '2',
    title: 'Добавить поиск по задачам',
    description: 'Интеграция поиска по ключевым словам',
    category: 'Feature',
    status: 'In Progress',
    priority: 'Medium',
  },
];