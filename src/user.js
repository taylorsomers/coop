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
    let orBizCenter = "https://bizcenter.org/";
    let secStateOR = "https://sos.oregon.gov/business/Pages/domestic-limited-liability-companies-forms.aspx";
    if (this.state === "Oregon"){
      return (secStateOR, orBizCenter);

    } else if (this.state === "Washington"){
    let waProjEq = "https://www.project-equity.org/wp-content/uploads/2019/09/Project-Equity-Washington-State-Small-Business-Closure-Crisis.pdf";
    let secStateWA = "https://www.sos.wa.gov/corps/limitedliabilitycompaniesllconlineandpaperregistrations.aspx";
    let waDevCenter = "https://wsbdc.org/"
      return (secStateWA, waDevCenter, waProjEq);
    }
  }
}

