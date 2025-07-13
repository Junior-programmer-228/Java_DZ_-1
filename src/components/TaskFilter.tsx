import type { FC } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, type SelectChangeEvent } from '@mui/material';
import type { Category, Status, Priority } from '../types/task';

interface FilterProps {
  status: Status | 'Все';
  setStatus: (status: Status | 'Все') => void;
  category: Category | 'Все';
  setCategory: (category: Category | 'Все') => void;
  priority: Priority | 'Все';
  setPriority: (priority: Priority | 'Все') => void;
}

const TaskFilter: FC<FilterProps> = ({
  status,
  setStatus,
  category,
  setCategory,
  priority,
  setPriority,
}) => {
  return (
    <Box display="flex" gap={2} mb={3} flexWrap="wrap">
      <FormControl fullWidth>
        <InputLabel>Статус</InputLabel>
        <Select value={status} onChange={(e: SelectChangeEvent) => setStatus(e.target.value as Status | 'Все')} label="Статус">
          <MenuItem value="Все">Все</MenuItem>
          <MenuItem value="To Do">To Do</MenuItem>
          <MenuItem value="In Progress">In Progress</MenuItem>
          <MenuItem value="Done">Done</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Категория</InputLabel>
        <Select value={category} onChange={(e: SelectChangeEvent) => setCategory(e.target.value as Category | 'Все')} label="Категория">
          <MenuItem value="Все">Все</MenuItem>
          <MenuItem value="Bug">Bug</MenuItem>
          <MenuItem value="Feature">Feature</MenuItem>
          <MenuItem value="Documentation">Documentation</MenuItem>
          <MenuItem value="Refactor">Refactor</MenuItem>
          <MenuItem value="Test">Test</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Приоритет</InputLabel>
        <Select value={priority} onChange={(e: SelectChangeEvent) => setPriority(e.target.value as Priority | 'Все')} label="Приоритет">
          <MenuItem value="Все">Все</MenuItem>
          <MenuItem value="Low">Low</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="High">High</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default TaskFilter;