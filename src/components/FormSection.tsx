
import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

interface FormData {
  url: string;
  gender: string;
  type: string;
}

interface FormSectionProps {
  onSubmit: (data: FormData) => void;
}

const FormSection = ({ onSubmit }: FormSectionProps) => {
  const [url, setUrl] = useState("");
  const [gender, setGender] = useState("male");
  const [type, setType] = useState("Magician");
  const [urlError, setUrlError] = useState("");

  const validateUrl = (value: string): boolean => {
    try {
      new URL(value);
      setUrlError("");
      return true;
    } catch {
      setUrlError("Please enter a valid URL (including http:// or https://)");
      return false;
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (!url) {
      setUrlError("URL is required");
      return;
    }
    
    if (!validateUrl(url)) {
      return;
    }

    onSubmit({
      url,
      gender,
      type
    });

    toast.success("Form submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-xl font-semibold text-blue-800 mb-4">Enter Information</h2>
      
      <div className="space-y-3">
        <div>
          <Label htmlFor="url" className="text-base">URL</Label>
          <Input
            id="url"
            type="text"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              if (urlError) validateUrl(e.target.value);
            }}
            placeholder="https://example.com"
            className={`mt-1 ${urlError ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
          />
          {urlError && <p className="text-red-500 text-sm mt-1">{urlError}</p>}
        </div>

        <div>
          <Label className="text-base block mb-2">Gender</Label>
          <RadioGroup defaultValue="male" value={gender} onValueChange={setGender} className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" />
              <Label htmlFor="male" className="cursor-pointer">Male</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female" />
              <Label htmlFor="female" className="cursor-pointer">Female</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="other" id="other" />
              <Label htmlFor="other" className="cursor-pointer">Other</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label htmlFor="type" className="text-base block mb-2">Type</Label>
          <Select value={type} onValueChange={setType}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Magician">Magician</SelectItem>
              <SelectItem value="Disney">Disney</SelectItem>
              <SelectItem value="Boxer">Boxer</SelectItem>
              <SelectItem value="Astronaut">Astronaut</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button 
        type="submit" 
        className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors"
      >
        Submit
      </Button>
    </form>
  );
};

export default FormSection;
