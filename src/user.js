export class User {
  constructor(firstName, lastName, street, state, zip, number, email, linkd, gitHub){
    this.firstName = firstName;
    this.lastName = lastName;
    this.street = street;
    this.state = state;
    this.zip = zip;
    this.number = number;
    this.email = email;
    this.linkd = linkd;
    this.gitHub = gitHub;
  }
  stateCheck(){
    let secStateOR = "https://sos.oregon.gov/business/Pages/domestic-limited-liability-companies-forms.aspx";
    if (this.state === "Oregon"){
      return secStateOR;
    } else if (this.state === "Washington"){

    }
  }
  zipCheck(){
    let zipCode = this.zip;
    return zipCode;
  }
}

