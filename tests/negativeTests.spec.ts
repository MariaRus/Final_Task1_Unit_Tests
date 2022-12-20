import { RegistrationForm } from "../registrationForm/registrationForm";
import { expect } from "chai";
import { INPUT_VALUE } from "../fixtures/inputValue";
import { EXPECTED_VALUE } from "../fixtures/expectedValue";

describe("Registration form: negative tests", () => {
    it("First test for Phone Number validation", () => {
        expect(
            RegistrationForm.ValidatePhoneNumber(
                INPUT_VALUE.inputFirstNegativePhoneNumber
            )
        ).to.eql(EXPECTED_VALUE.expectedFirstNegativePhoneNumber);
    });

    it("Second test for Phone Number validation", () => {
        expect(
            RegistrationForm.ValidatePhoneNumber(
                INPUT_VALUE.inputSecondNegativePhoneNumber
            )
        ).to.eql(EXPECTED_VALUE.expectedSecondNegativePhoneNumber);
    });

    it("First test for Email validation", () => {
        expect(
            RegistrationForm.ValidateEmail(INPUT_VALUE.inputFirstNegativeEmail)
        ).to.eql(EXPECTED_VALUE.expectedFirstNegativeEmail);
    });

    it("Second test for Email validation", () => {
        expect(
            RegistrationForm.ValidateEmail(INPUT_VALUE.inputSecondNegativeEmail)
        ).to.eql(EXPECTED_VALUE.expectedSecondNegativeEmail);
    });

    it("First test for Password validation", () => {
        expect(
            RegistrationForm.ValidatePassword(INPUT_VALUE.inputFirstNegativePassword)
        ).to.eql(EXPECTED_VALUE.expectedFirstNegativePassword);
    });

    it("Second test for Password validation", () => {
        expect(
            RegistrationForm.ValidatePassword(INPUT_VALUE.inputSecondNegativePassword)
        ).to.eql(EXPECTED_VALUE.expectedSecondNegativePassword);
    });

    it("Third test for Password validation", () => {
        expect(
            RegistrationForm.ValidatePassword(INPUT_VALUE.inputThirdNegativePassword)
        ).to.eql(EXPECTED_VALUE.expectedThirdNegativePassword);
    });
});