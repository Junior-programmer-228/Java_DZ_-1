import { useTasks } from '../context/TaskContext';
import TaskItem from './TaskItem';
import TaskFilter from './TaskFilter';
import Grid from '@mui/material/Grid';
import { Typography, Button, Box } from '@mui/material';
import { useState } from 'react';
import type { Category, Status, Priority } from '../types/task';
import { useNavigate } from 'react-router-dom';

const TaskList = () => {
  const { tasks } = useTasks();
  const navigate = useNavigate();

  const [status, setStatus] = useState<Status | 'Все'>('Все');
  const [category, setCategory] = useState<Category | 'Все'>('Все');
  const [priority, setPriority] = useState<Priority | 'Все'>('Все');

  const filteredTasks = tasks.filter((task) => {
    return (
      (status === 'Все' || task.status === status) &&
      (category === 'Все' || task.category === category) &&
      (priority === 'Все' || task.priority === priority)
    );
  });

  return (
    <Box p={3}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4">Менеджер задач</Typography>
        <Button variant="contained" color="primary" onClick={() => navigate('/create')}>
          Добавить задачу
        </Button>
      </Box>

      <TaskFilter
        status={status}
        setStatus={setStatus}
        category={category}
        setCategory={setCategory}
        priority={priority}
        setPriority={setPriority}
      />

      {filteredTasks.length === 0 ? (
        <Typography variant="body1" sx={{ mt: 4 }}>
          Задачи не найдены.
        </Typography>
      ) : (
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {filteredTasks.map((task) => (
            <Grid key={task.id} sx={{ gridColumn: { xs: 'span 12', sm: 'span 6', md: 'span 4' } }}>
              <TaskItem task={task} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default TaskList;