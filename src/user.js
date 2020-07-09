export class User {
    constructor(firstName, lastName, street, city, state, zip, phone, email, linkedIn, gitHub) {
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
    stateCheck() {
        let orBizCenter = "https://bizcenter.org/";
        let secStateOR = "https://sos.oregon.gov/business/Pages/domestic-limited-liability-companies-forms.aspx";
        let aMalan = ["Audry", "Malan", "Cottage Grove, OR", "(307) 717 2559"];
        let orArr = [secStateOR, orBizCenter, aMalan];
        if (this.state === "Oregon") {
            return (orArr);

        } else if (this.state === "Washington") {
            let waProjEq = "https://www.project-equity.org/wp-content/uploads/2019/09/Project-Equity-Washington-State-Small-Business-Closure-Crisis.pdf";
            let secStateWA = "https://www.sos.wa.gov/corps/limitedliabilitycompaniesllconlineandpaperregistrations.aspx";
            let waDevCenter = "https://wsbdc.org/";
            let waArr = [waProjEq, secStateWA, waDevCenter];
            return (waArr);
        }
    }
}