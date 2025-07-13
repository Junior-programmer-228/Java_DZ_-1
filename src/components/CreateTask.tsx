import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';
import { TextField, Button, MenuItem } from '@mui/material';
import type { Task } from '../types/task';
import { v4 as uuidv4 } from 'uuid';

const CreateTask = () => {
  const { addTask } = useContext(TaskContext)!;
  const navigate = useNavigate();

  const [form, setForm] = useState<Task>({
    id: '',
    title: '',
    description: '',
    category: 'Feature',
    status: 'To Do',
    priority: 'Medium',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    addTask({ ...form, id: uuidv4() });
    navigate('/');
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Создать новую задачу</h2>

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
        {['Bug', 'Feature', 'Documentation', 'Refactor', 'Test'].map((c) => (
          <MenuItem value={c} key={c}>{c}</MenuItem>
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
        {['To Do', 'In Progress', 'Done'].map((s) => (
          <MenuItem value={s} key={s}>{s}</MenuItem>
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
        {['Low', 'Medium', 'High'].map((p) => (
          <MenuItem value={p} key={p}>{p}</MenuItem>
        ))}
      </TextField>

      <div style={{ marginTop: 20 }}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Создать
        </Button>
        <Button onClick={() => navigate('/')} style={{ marginLeft: 10 }}>
          Отмена
        </Button>
      </div>
    </div>
  );
};

export default CreateTask;