export class BankInfo {
  async getBankInfo(zipCode) {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      myHeaders.append("Authorization", "Bearer APIKEY");
    
      const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      let response = await fetch(`https://api.yelp.com/v3/businesses/search?location=${ zipCode }&catagories=Banks&limit=3&rating=4&term=credit%20union`, requestOptions)
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        console.log(response.statusText);
        // jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch(error) {
      return false;
    }
  }
}
(async () => {
  let bankInfo = new BankInfo();
  const response = await bankInfo.getBankInfo(97405);
  console.log(response.businesses);
})();
