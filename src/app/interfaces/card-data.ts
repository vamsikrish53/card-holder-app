export class CardData {
    username: string = null;
    totalSavedCards: string = null;
    debitCards: DebitCardDetails = new DebitCardDetails();
    creditCards: CreditCardDetails = new CreditCardDetails();
    aadharCards: AadharCardDetails = new AadharCardDetails();
    panCards: PanCardDetails = new PanCardDetails();
    drivingLicenses: DrivingLicenseDetails = new DrivingLicenseDetails();
    registrationCards: RegistraionCardDetails = new RegistraionCardDetails();
    passports: PassportDetails = new PassportDetails();
    voterCards: VoterCardDetails = new VoterCardDetails();
}

export class DebitCardDetails {
    total: number = 0;
    cards: DebitCard[] = [];
}

export class CreditCardDetails {
    total: number = 0;
    cards: CreditCard[] = [];
}

export class AadharCardDetails {
    total: number = 0;
    cards: AadharCard[] = [];
}

export class PanCardDetails {
    total: number = 0;
    cards: PanCard[] = [];
}

export class DrivingLicenseDetails {
    total: number = 0;
    cards: DrivingLicense[] = [];
}

export class RegistraionCardDetails {
    total: number = 0;
    cards: RegistraionCard[] = [];
}

export class VoterCardDetails {
    total: number = 0;
    cards: VoterCard[] = [];
}

export class PassportDetails {
    total: number = 0;
    cards: Passport[] = [];
}

export class DebitCard {
    id: string = null;
    name: string = null;
    number: number = null;
    expiryDate: string = null;
    cvv: number = null;
    bankName: string = null;
    frontImagePath: string = null;
    backImagePath: string = null;
}

export class CreditCard {
    id: string = null;
    name: string = null;
    number: number = null;
    expiryDate: string = null;
    cvv: number = null;
    bankName: string = null;
    frontImagePath: string = null;
    backImagePath: string = null;
}

export class AadharCard {
    id: string = null;
    name: string = null;
    number: number = null;
    frontImagePath: string = null;
    backImagePath: string = null;
}

export class PanCard {
    id: string = null;
    name: string = null;
    number: number = null;
    frontImagePath: string = null;
}

export class DrivingLicense {
    id: string = null;
    name: string = null;
    number: string = null;
    expiryDate: string = null;
    frontImagePath: string = null;
    backImagePath: string = null;
}

export class RegistraionCard {
    id: string = null;
    name: string = null;
    number: string = null;
    expiryDate: string = null;
    frontImagePath: string = null;
    backImagePath: string = null;
}

export class Passport {
    id: string = null;
    name: string = null;
    number: string = null;
    expiry: string = null;
    frontImagePath: string = null;
    backImagePath: string = null;
}

export class VoterCard {
    id: string = null;
    name: string = null;
    number: string = null;
    frontImagePath: string = null;
    backImagePath: string = null;
}
