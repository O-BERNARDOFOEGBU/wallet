const currencyFormatter = new Intl.NumberFormat(`en-US`, {
  currency: "USD",
  style: "currency",
  currencyDisplay: "code",
});

export default currencyFormatter;
