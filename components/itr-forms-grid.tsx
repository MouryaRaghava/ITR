import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const itrForms = [
  {
    id: "itr1",
    title: "ITR-1 Return Filing (Sahaj)",
    items: [
      "Resident Individuals",
      "Income less than or equal to ₹50 Lakhs",
      "Income from Salary",
      "One House Property",
      "Income from Other Sources",
      "Pension Income"
    ]
  },
  {
    id: "itr2",
    title: "ITR-2 Return Filing",
    items: [
      "Every Income from ITR-1",
      "Capital Gains",
      "Sale of Mutuals/ Equity Shares",
      "More than One House Property",
      "Income from Crypto",
      "Holding directorship in a Company",
      "Foreign Income/ Foreign Asset"
    ]
  },
  {
    id: "itr3",
    title: "ITR-3 Return Filing",
    items: [
      "Every Income from ITR-2",
      "Business & Profession Income",
      "Income from Crypto",
      "Partner in any Firm",
      "Holding directorship in a Company",
      "Unlisted Equity Shares",
      "Foreign Income/ Foreign Asset"
    ]
  },
  {
    id: "itr4",
    title: "ITR-4 Return Filing (Sugam)",
    items: [
      "Resident Individuals or HUF's",
      "Income less than or equal to ₹50 Lakhs",
      "Salary/ Pension Income",
      "One House Property",
      "Income from Other Sources",
      "Sources Business/ Profession Income (Presumptive Income)"
    ]
  },
  {
    id: "itr5",
    title: "ITR-5 Return Filing",
    items: [
      "Partnership Firms",
      "Limited Liability Partnership (LLP)",
      "AOP's",
      "BOI's"
    ]
  },
  {
    id: "itr6 and itr7",
    title: "ITR-6 Return Filing, ITR-7 Return Filing",
    items: [
      "Companies not claiming Exemption under section 11",
      "Person/ Companies under Section 139 (4A)/ Section 139 (4B)/ Section 139 (4C)/ Section 139 (4D)"
    ]
  }
];

export function ITRFormsGrid() {
  return (
    <section className="py-16 px-4 sm:px-8 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 perspective-1000">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl text-white font-bold mb-2">Types of ITR Forms?</h2>
          <p className="text-white max-w-xl mx-auto">
            We will guide you as to which ITR Form is applicable to you as per your details.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {itrForms.map((form) => (
            <Card key={form.id} className="bg-white/10 backdrop-blur-md border-b border-white hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-white font-semibold">{form.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-white font-bold mb-4">To be filed by:</p>
                <ul className="text-white-100 space-y-2">
                  {form.items.map((item, index) => (
                    <li key={index} className="text-white flex items-start text-sm">
                      <span className="mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}