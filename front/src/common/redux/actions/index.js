import calculate from "./exampleAction";
import applicationLoad from "./example";
import { loginUserAction } from "./authActions";
import { studentRegistered, hideStudentRegisteredModal } from './studentRegistrationAction';

export default {
    applicationLoad,
    calculate,
    loginUserAction,
    studentRegistered,
    hideStudentRegisteredModal,
};
