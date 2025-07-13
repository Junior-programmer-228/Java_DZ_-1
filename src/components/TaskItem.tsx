import { Card, CardContent, Typography, Chip, Button, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import type { Task } from '../types/task';

const TaskItem = ({ task }: { task: Task }) => {
  const navigate = useNavigate();
  const context = useContext(TaskContext);

  if (!context) return null;

  const { deleteTask } = context;

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>{task.title}</Typography>
        {task.description && (
          <Typography variant="body2" color="text.secondary">
            {task.description}
          </Typography>
        )}

        <div style={{ marginTop: 10, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Chip label={task.category} color="primary" size="small" />
          <Chip label={task.status} color="secondary" size="small" />
          <Chip label={task.priority} color="default" size="small" />
        </div>
      </CardContent>

      <CardActions>
        <Button
          size="small"
          startIcon={<EditIcon />}
          onClick={() => navigate(`/task/${task.id}`)}
        >
          Редактировать
        </Button>
        <Button
          size="small"
          startIcon={<DeleteIcon />}
          color="error"
          onClick={() => deleteTask(task.id)}
        >
          Удалить
        </Button>
      </CardActions>
    </Card>
  );
};

export default TaskItem;