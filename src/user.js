export class User {
  constructor(firstName, lastName, street, city, state, zip, phone, email, linkedIn, gitHub){
    this.firstName = firstName;
    this.lastName = lastName;
    this.street = street;
    this.city = city;//add city property
    this.state = state;
    this.zip = zip;
    this.phone = phone;//change from 'number' to 'phone'
    this.email = email;
    this.linkedIn = linkedIn;//change from 'linkd' to 'linkedIn'
    this.gitHub = gitHub;
  }
}
