import createStripe from "stripe-client";
import { STRIPE_PUBLISHABLE_API, STRIPE_SECRET_KEY } from "../../../env";

const stripe = createStripe(STRIPE_PUBLISHABLE_API);

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const payRequest = (token, amount, name) => null;
