import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';
import { TextField, Button, MenuItem, Typography, Paper } from '@mui/material';
import type { Task } from '../types/task';

const TaskDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const context = useContext(TaskContext);

  if (!context) return null;

  const { tasks, updateTask } = context;

  const task = tasks.find((t) => t.id === id);
  const [form, setForm] = useState<Task | undefined>(task ? { ...task } : undefined);

  if (!form) {
    return <Typography variant="h6" style={{ padding: 20 }}>Задача не найдена</Typography>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    updateTask(form);
    navigate('/');
  };

  return (
    <Paper elevation={3} style={{ padding: 24, maxWidth: 600, margin: '40px auto' }}>
      <Typography variant="h5" gutterBottom>Редактирование задачи</Typography>

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
        multiline
        minRows={3}
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

      <div style={{ marginTop: 24 }}>
        <Button
          onClick={handleSave}
          variant="contained"
          color="primary"
        >
          Сохранить
        </Button>
        <Button
          onClick={() => navigate('/')}
          style={{ marginLeft: 12 }}
        >
          Отмена
        </Button>
      </div>
    </Paper>
  );
};

export default TaskDetails;