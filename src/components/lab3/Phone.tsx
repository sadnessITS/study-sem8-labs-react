import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";

function Phone() {
  const [value, setValue] = useState();
  return (
    <PhoneInput
      international
      defaultCountry="BY"
      value={value}
      onChange={setValue}
    />
  );
}

export default Phone;
