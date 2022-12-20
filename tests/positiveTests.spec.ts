import { RegistrationForm } from "../registrationForm/registrationForm";
import { expect } from "chai";
import { INPUT_VALUE } from "../fixtures/inputValue";
import { EXPECTED_VALUE } from "../fixtures/expectedValue";

describe("Registration form: positive tests", () => {
    it("First test for Phone Number validation", () => {
        expect(
            RegistrationForm.ValidatePhoneNumber(
                INPUT_VALUE.inputFirstPositivePhoneNumber
            )
        ).to.eql(EXPECTED_VALUE.expectedFirstPositivePhoneNumber);
    });

    it("Second test for Phone Number validation", () => {
        expect(
            RegistrationForm.ValidatePhoneNumber(
                INPUT_VALUE.inputSecondPositivePhoneNumber
            )
        ).to.eql(EXPECTED_VALUE.expectedSecondPositivePhoneNumber);
    });

    it("First test for Email validation", () => {
        expect(
            RegistrationForm.ValidateEmail(INPUT_VALUE.inputFirstPositiveEmail)
        ).to.eql(EXPECTED_VALUE.expectedFirstPositiveEmail);
    });

    it("First test for Email validation", () => {
        expect(
            RegistrationForm.ValidateEmail(INPUT_VALUE.inputSecondPositiveEmail)
        ).to.eql(EXPECTED_VALUE.expectedSecondPositiveEmail);
    });

    it("First test for Password validation", () => {
        expect(
            RegistrationForm.ValidatePassword(INPUT_VALUE.inputFirstPositivePassword)
        ).to.eql(EXPECTED_VALUE.expectedFirstPositivePassword);
    });

    it("Second test for Password validation", () => {
        expect(
            RegistrationForm.ValidatePassword(INPUT_VALUE.inputSecondPositivePassword)
        ).to.eql(EXPECTED_VALUE.expectedSecondPositivePassword);
    });

    it("Third test for Password validation", () => {
        expect(
            RegistrationForm.ValidatePassword(INPUT_VALUE.inputThirdPositivePassword)
        ).to.eql(EXPECTED_VALUE.expectedThirdPositivePassword);
    });
});