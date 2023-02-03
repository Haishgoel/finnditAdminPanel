import { environment } from "../../app/environment/environment.local";

export var DATE_REGEX = 'dd/MM/yyyy, hh:mm a';
export var NAME_REGEX = '^[a-zA-Z ]*$';

export var MOBILE_REGEX = '^[0-9.]*$';

// export var NO_SPACE_REGEX = '[0-9a-zA-Z][0-9a-zA-Z ]+';

export var EMAIL_REGEX =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// export var SPACE_REGEX =  /^[a-zA-Z][a-zA-Z0-9. ]+$/;
export var SPACE_REGEX =  /((?!.*[\s])(?=.*[A-Z])(?=.*\d))/;
export var Percentage_REGEX =  /^([1-9]|[1-9][0-9]|100)$/;

export var PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&])/;

export let URL_REGEX = /^(http?|ftp|https):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(app|com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;

export var LIMIT = 10;

export var MAX_SIZE = 3;


export var MAX_IMAGE_SIZE = 5000000;
export const Month_Dates = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
export const Week_Days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
export const Year_Months=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'sep', 'Oct', 'Nov', 'Dec'];
export const Week_Number=[0,1,2,3,4,5,6];
export const Year_Number=[0,1,2,3,4,5,6,7,8,9,10,11]

export const USER_STATUS_FILTER = [{ key: 0, value: 'Select', selected: true }, { key: 1, value: 'Active Users', selected: false }, { key: 2, value: 'Deactivated Users', selected: false }];

export const GENDER_FILTER = [{ key: 0, value: 'Select', selected: true }, { key: 1, value: 'Male', selected: false },
  { key: 2, value: 'Female', selected: false }];

export const AGE_FILTER_FROM = [{ key: 0, value: 'Select', selected: true }, { key: 1, value: '10', selected: false },
  { key: 2, value: '20', selected: false }];

export const LIMIT_RECORD_LIST = [{ key: 1, value: 10, selected: true },
  { key: 2, value: 20, selected: false }, { key: 3, value: 50, selected: false }, { key: 4, value: 100, selected: false },
  { key: 5, value: 200, selected: false }];

export const PLAN_FILTER = [{ key: 0, value: 'Select', selected: true }, { key: 1, value: 'Free', selected: false },
  { key: 2, value: 'Premium', selected: false }];

export const AGE_FILTER_TO = [{ key: 0, value: 'Select', selected: true }, { key: 1, value: '20', selected: false },
  { key: 2, value: '30', selected: false }];