import {
    REGEX_PHONENUMBER,
    REGEX_EMAIL,
    REGEX_PASSWORD,
} from "../fixtures/regex";
import { MESSAGES } from "../fixtures/expectedMessages";

export class RegistrationForm {
    static ValidatePhoneNumber(inputPhoneNumber: string): string {
        if (inputPhoneNumber.match(REGEX_PHONENUMBER)) {
            return `${inputPhoneNumber} ${MESSAGES.positivePhoneNumber}`;
        } else {
            return `${inputPhoneNumber} ${MESSAGES.negativePhoneNumber}`;
        }
    }

    static ValidateEmail(inputEmail: string): string {
        if (inputEmail.match(REGEX_EMAIL)) {
            return `${inputEmail} ${MESSAGES.positiveEmail}`;
        } else {
            return `${inputEmail} ${MESSAGES.negativeEmail}`;
        }
    }

    static ValidatePassword(inputPassword: string): string {
        if (inputPassword.match(REGEX_PASSWORD)) {
            return `${inputPassword} ${MESSAGES.positivePassword}`;
        } else {
            return `${inputPassword} ${MESSAGES.negativePassword}`;
        }
    }
}