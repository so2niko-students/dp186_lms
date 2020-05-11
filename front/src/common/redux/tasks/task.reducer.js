import * as types from './types';

const tasksState = {
    tasks: [],
    page: 1,
    total: 0,
    limit: 0,
}

export function tasks(state = tasksState, action) {
    console.log(action)
    const { payload } = action;
    switch (action.type) {
        case types.GET_ALL_TASKS_SUCCESS:
            return { ...state, tasks: payload.data, page: payload.page, total: payload.total, limit: payload.limit, };
        case types.DELETE_TASK_SUCCESS:
            return { ...state, tasks: state.tasks.filter((task) => task.id !== payload.id) };
        case types.CHANGE_TASK_SUCCESS:
            return { ...state };
        default:
            return { ...state };
    }
};