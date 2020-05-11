import { DELETE_TASK, GET_ALL_TASKS, CHANGE_TASK } from './types';

export const getAllTasksAction = (data) => ({
    type: GET_ALL_TASKS,
    data
});

export const deleteTaskAction = (id) => ({
    type: DELETE_TASK,
    id
});

export const changingFieldAction = (data) => ({
    type: CHANGE_TASK,
    data
});
