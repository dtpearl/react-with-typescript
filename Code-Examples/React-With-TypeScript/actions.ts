import { Action } from 'redux';
import { Task } from './types';
import tasks from './resources/tasks.json';

export interface FetchTasksAction
  extends Action<'FETCH_TASKS'> {
  tasks: Task[];
}

export const fetchTasks = (): FetchTasksAction => ({
  type: 'FETCH_TASKS',
  tasks
});
