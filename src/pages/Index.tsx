
import { useState } from "react";
import { Card } from "@/components/ui/card";
import FormSection from "@/components/FormSection";
import ResultDisplay from "@/components/ResultDisplay";

interface FormData {
  url: string;
  gender: string;
  type: string;
}

const Index = () => {
  const [formData, setFormData] = useState<FormData | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (data: FormData) => {
    setFormData(data);
    setIsSubmitted(true);
    console.log("Form submitted:", data);
    
    // The form data is ready to be used for API calls
    // Example API call would go here, using the data.url, data.gender, and data.type
    // You would typically use this data with fetch() or axios to call your API
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8 mt-4">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-3">URL & Gender Data Collector</h1>
          <p className="text-gray-600">Enter your information and view the results below</p>
        </header>
        
        <div className="grid gap-8">
          <Card className="p-6 shadow-lg">
            <FormSection onSubmit={handleFormSubmit} />
          </Card>
          
          {isSubmitted && formData && (
            <Card className="p-6 shadow-lg">
              <ResultDisplay data={formData} />
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
