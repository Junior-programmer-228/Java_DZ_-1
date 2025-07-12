import { Card, CardContent, Typography, Chip, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import type { Task } from '../types/task';

interface Props {
  task: Task;
}

const categoryLabels: Record<string, string> = {
  Bug: 'Баг',
  Feature: 'Функция',
  Documentation: 'Документация',
  Refactor: 'Рефакторинг',
  Test: 'Тест',
};

const statusLabels: Record<string, string> = {
  'To Do': 'К выполнению',
  'In Progress': 'В процессе',
  Done: 'Сделано',
};

const priorityLabels: Record<string, string> = {
  Low: 'Низкий',
  Medium: 'Средний',
  High: 'Высокий',
};

const TaskItem = ({ task }: Props) => {
  return (
    <Card style={{ margin: 10 }}>
      <CardContent>
        <Typography variant="h6">{task.title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {task.description}
        </Typography>

        <div style={{ marginTop: 10, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Chip label={categoryLabels[task.category]} color="primary" size="small" />
          <Chip label={statusLabels[task.status]} color="secondary" size="small" />
          <Chip label={priorityLabels[task.priority]} variant="outlined" size="small" />
        </div>

        <div style={{ marginTop: 10 }}>
          <Button component={Link} to={`/task/${task.id}`} size="small">
            Редактировать
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskItem;