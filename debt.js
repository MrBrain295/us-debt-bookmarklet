(function () {
  var url =
    "https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/debt_to_penny?sort=-record_date&format=json&page%5Bnumber%5D=1&page%5Bsize%5D=1";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      var amount = data.data[0].tot_pub_debt_out_amt;
      alert(
        "The United States total public outstanding debt is " +
          new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(amount),
      );
    })
    .catch((error) => console.error("Error:", error));
})();
