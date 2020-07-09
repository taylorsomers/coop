export class BankInfo {
  async getBankInfo(zipCode) {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      myHeaders.append("Authorization", "Bearer LjFmvka3-P-SbV9v532_T0_kWJnzMaBh0ftJPbD7FZeX-bugBRQP8BHEfFRbnJoda2KW5HbWGckzk9P2B8D0gpPt2y6cuWMMovfWNxRLxeUKoJ_jVJVcn1hK_gYGX3Yx");
    
      const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      let response = await fetch(`https://cors-anywhere.herokuapp.com/api.yelp.com/v3/businesses/search?location=${ zipCode }&categories=Banks&limit=3&rating=4&term=credit%20union`, requestOptions)
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        console.log(response.statusText);
        jsonifiedResponse = false;
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