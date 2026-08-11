const findTheOldest = function(people) {
    let oldestPerson = {};
    let thisYear = new Date().getFullYear();
    let oldestAge = 0;
    let currentAge = 0;
    people.map(person => {
        if (Object.entries(oldestPerson).length === 0) {
            oldestPerson = person;
            if (!("yearOfDeath" in oldestPerson)) {
                oldestAge = thisYear - oldestPerson.yearOfBirth
                return;
            }
            oldestAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;
            return;
        }

        if (!"yearOfDeath" in person) {
            currentAge = thisYear - person.yearOfBirth
            if (currentAge > oldestAge) {
                oldestPerson = person;
                oldestAge = currentAge;
                return;
            } else return;
        }

        currentAge = person.yearOfDeath - person.yearOfBirth;

        if (currentAge > oldestAge) {
            oldestPerson = person;
            oldestAge = currentAge;
            return;
        }
    });

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
