import { CALC } from './types';

const calculate = (s, a, b) => ({ type: CALC, sign: s, a, b });

export default calculate;
