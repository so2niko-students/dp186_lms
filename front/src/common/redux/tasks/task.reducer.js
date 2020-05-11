import * as types from './types';

const tasksState = {
    tasks: [],
    page: 1,
    total: 0,
    limit: 0,
}

export function tasks(state = tasksState, action) {
    const { response } = action;

    switch (action.type) {
        case types.GET_ALL_TASKS_SUCCESS:
            return { ...state, tasks: response.data.data, page: response.data.page, total: response.data.total, limit: response.data.limit, };
        case types.DELETE_TASK_SUCCESS:
            return { ...state, tasks: state.tasks.filter((task) => task.id !== response.data.id) };
        case types.CHANGE_TASK_SUCCESS:
            return { ...state };
        default:
            return { ...state };
    }
};