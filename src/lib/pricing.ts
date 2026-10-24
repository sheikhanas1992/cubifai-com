export type PlanId = "starter" | "growth" | "enterprise";
export type Billing = "monthly" | "annual";

export type PlanPrice = {
  id: PlanId;
  monthly: number;
  annualMonthly: number;
  from?: boolean;
  popular?: boolean;
};

export const VAT_RATE = 0.15;

export const PLANS: PlanPrice[] = [
  { id: "starter", monthly: 990, annualMonthly: 825 },
  { id: "growth", monthly: 2990, annualMonthly: 2492, popular: true },
  { id: "enterprise", monthly: 7900, annualMonthly: 6583, from: true },
];

export const priceFor = (plan: PlanPrice, billing: Billing) => (billing === "annual" ? plan.annualMonthly : plan.monthly);

export const formatSar = (n: number) => `SAR ${n.toLocaleString("en-US")}`;
