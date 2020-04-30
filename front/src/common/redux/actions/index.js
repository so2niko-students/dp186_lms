import calculate from "./exampleAction";
import applicationLoad from "./example";
import { loginUserAction } from "./authActions";
import { studentRegistered, hideStudentRegisteredModal } from './studentRegistrationAction';
import { hideTeacherRegisteredModal, showTeacherRegisteredModal, teacherRegistered, hideTeacherResponseModal } from './teacherRegistrationAction';

export {
    applicationLoad,
    calculate,
    loginUserAction,
    studentRegistered,
    hideStudentRegisteredModal,
    hideTeacherRegisteredModal,
    showTeacherRegisteredModal,
    teacherRegistered,
    hideTeacherResponseModal
};
