// Observer Interface
class Observer {
    update(phoneNumber) {}
}

// Concrete Observer 1
class PhoneNumberObserver extends Observer {
    update(phoneNumber) {
        console.log("Phone number:", phoneNumber);
    }
}

// Concrete Observer 2
class DialingObserver extends Observer {
    update(phoneNumber) {
        console.log("Now Dialing", phoneNumber);
    }
}

// Subject (Observable)
class Telephone {
    constructor() {
        this.phoneNumbers = [];
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(phoneNumber) {
        this.observers.forEach(observer => observer.update(phoneNumber));
    }

    addPhoneNumber(phoneNumber) {
        this.phoneNumbers.push(phoneNumber);
    }

    removePhoneNumber(phoneNumber) {
        this.phoneNumbers = this.phoneNumbers.filter(num => num !== phoneNumber);
    }

    dialPhoneNumber(phoneNumber) {
        if (this.phoneNumbers.includes(phoneNumber)) {
            this.notifyObservers(phoneNumber);
            console.log("Dialing", phoneNumber);
        } else {
            console.log("Phone number not found.");
        }
    }
}

// Example usage:
const telephone = new Telephone();

const observer1 = new PhoneNumberObserver();
const observer2 = new DialingObserver();

telephone.addObserver(observer1);
telephone.addObserver(observer2);

telephone.addPhoneNumber("1234567890");
telephone.dialPhoneNumber("1234567890");
telephone.removePhoneNumber("1234567890");
telephone.dialPhoneNumber("1234567890");  // Should not dial as number is removed
