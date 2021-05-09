import React from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";
import { cardTokenRequest } from "../../../services/checkout/checkout.service";

const CreditCardInput = ({ name, onSuccess }) => {
  const onChange = async (formData) => {
    const { status, values } = formData;
    const isIncomplete = Object.values(status).includes("incomplete");
    const expiry = values.expiry.split("/");
    const cardInformation = {
      number: values.number,
      exp_month: expiry[0],
      exp_year: expiry[1],
      cvc: values.cvc,
      name,
    };
    if (!isIncomplete) {
      const info = await cardTokenRequest(cardInformation);
      onSuccess(info);
    }
  };
  return <LiteCreditCardInput onChange={onChange} />;
};

export default CreditCardInput;
