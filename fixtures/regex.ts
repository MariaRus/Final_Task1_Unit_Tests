export const REGEX_PHONENUMBER: RegExp = /^\d{12}$/;
export const REGEX_EMAIL: RegExp =
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const REGEX_PASSWORD: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;