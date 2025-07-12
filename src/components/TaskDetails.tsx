import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';
import { TextField, Button, MenuItem } from '@mui/material';
import type { Task } from '../types/task';

const TaskDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, updateTask } = useContext(TaskContext)!;

  const task = tasks.find((t) => t.id === id);

  if (!task) return <div>Задача не найдена</div>;

  const [form, setForm] = useState<Task>({ ...task });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const categories: Record<string, string> = {
    Bug: 'Баг',
    Feature: 'Функция',
    Documentation: 'Документация',
    Refactor: 'Рефакторинг',
    Test: 'Тест',
  };

  const statuses: Record<string, string> = {
    'To Do': 'К выполнению',
    'In Progress': 'В процессе',
    Done: 'Сделано',
  };

  const priorities: Record<string, string> = {
    Low: 'Низкий',
    Medium: 'Средний',
    High: 'Высокий',
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Редактирование задачи</h2>

      <TextField
        label="Заголовок"
        name="title"
        fullWidth
        margin="normal"
        value={form.title}
        onChange={handleChange}
      />
      <TextField
        label="Описание"
        name="description"
        fullWidth
        margin="normal"
        value={form.description}
        onChange={handleChange}
      />
      <TextField
        select
        label="Категория"
        name="category"
        fullWidth
        margin="normal"
        value={form.category}
        onChange={handleChange}
      >
        {Object.entries(categories).map(([value, label]) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        label="Статус"
        name="status"
        fullWidth
        margin="normal"
        value={form.status}
        onChange={handleChange}
      >
        {Object.entries(statuses).map(([value, label]) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        label="Приоритет"
        name="priority"
        fullWidth
        margin="normal"
        value={form.priority}
        onChange={handleChange}
      >
        {Object.entries(priorities).map(([value, label]) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </TextField>

      <div style={{ marginTop: 20 }}>
        <Button onClick={handleSave} variant="contained" color="primary">
          Сохранить
        </Button>
        <Button onClick={() => navigate('/')} style={{ marginLeft: 10 }}>
          Отмена
        </Button>
      </div>
    </div>
  );

  function handleSave() {
    updateTask(form);
    navigate('/');
  }
};

export default TaskDetails;