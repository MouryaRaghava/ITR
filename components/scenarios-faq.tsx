'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function ScenariosFAQ() {
  const scenarios = [
    "Are you a salaried person and engaged in Sale/ Purchase of Shares or Mutuals during the FY?",
    "Do you have Income from Freelancing?",
    "Have you switched your Job during the FY and you have Multiple Employers during the Year?",
    "You don't have your Form 16 available with you?",
    "Have you earned any Dividend during the Financial Year?",
    "Have you Invested in Stock Market / Mutual Funds during the Financial Year?",
    "Do you have any Capital Gain/Loss during the Financial Year?",
    "Do you have any Income from Business / Profession?",
    "Are you a Partner in any Firm or Director in any Company?",
    "Do you have any Rental Income along with other Income Sources during the Financial Year?",
    "Have you received Arrears of Salary during the Financial Year?"
  ]

  return (
    <section className="py-16 px-6 sm:px-8 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
          Do you also have any of the following Scenario's?
        </h2>
        <p className="text-center text-gray-600 mb-8">
          We have got you covered! Call Now!
        </p>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {scenarios.map((scenario, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-sm sm:text-base">
                {scenario}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm sm:text-base">
                Contact our experts to get personalized assistance with this scenario.
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
