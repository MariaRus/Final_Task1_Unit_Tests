import { INPUT_VALUE } from "./inputValue";
import { MESSAGES } from "./expectedMessages";

export const EXPECTED_VALUE = {
    expectedFirstNegativePhoneNumber: `${INPUT_VALUE.inputFirstNegativePhoneNumber} ${MESSAGES.negativePhoneNumber}`,
    expectedFirstPositivePhoneNumber: `${INPUT_VALUE.inputFirstPositivePhoneNumber} ${MESSAGES.positivePhoneNumber}`,
    expectedSecondNegativePhoneNumber: `${INPUT_VALUE.inputSecondNegativePhoneNumber} ${MESSAGES.negativePhoneNumber}`,
    expectedSecondPositivePhoneNumber: `${INPUT_VALUE.inputSecondPositivePhoneNumber} ${MESSAGES.positivePhoneNumber}`,

    expectedFirstNegativeEmail: `${INPUT_VALUE.inputFirstNegativeEmail} ${MESSAGES.negativeEmail}`,
    expectedFirstPositiveEmail: `${INPUT_VALUE.inputFirstPositiveEmail} ${MESSAGES.positiveEmail}`,
    expectedSecondNegativeEmail: `${INPUT_VALUE.inputSecondNegativeEmail} ${MESSAGES.negativeEmail}`,
    expectedSecondPositiveEmail: `${INPUT_VALUE.inputSecondPositiveEmail} ${MESSAGES.positiveEmail}`,

    expectedFirstNegativePassword: `${INPUT_VALUE.inputFirstNegativePassword} ${MESSAGES.negativePassword}`,
    expectedFirstPositivePassword: `${INPUT_VALUE.inputFirstPositivePassword} ${MESSAGES.positivePassword}`,
    expectedSecondNegativePassword: `${INPUT_VALUE.inputSecondNegativePassword} ${MESSAGES.negativePassword}`,
    expectedSecondPositivePassword: `${INPUT_VALUE.inputSecondPositivePassword} ${MESSAGES.positivePassword}`,
    expectedThirdNegativePassword: `${INPUT_VALUE.inputThirdNegativePassword} ${MESSAGES.negativePassword}`,
    expectedThirdPositivePassword: `${INPUT_VALUE.inputThirdPositivePassword} ${MESSAGES.positivePassword}`,
};