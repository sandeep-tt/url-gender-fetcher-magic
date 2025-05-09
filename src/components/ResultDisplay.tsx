
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface FormData {
  url: string;
  gender: string;
  type: string;
}

interface ResultDisplayProps {
  data: FormData;
}

const ResultDisplay = ({ data }: ResultDisplayProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-blue-800 mb-4">Result</h2>
      
      <div className="grid gap-3">
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-500">URL</p>
          <p className="text-base break-all bg-blue-50 p-2 rounded">{data.url}</p>
        </div>
        
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-500">Gender</p>
          <div>
            <Badge variant="outline" className="bg-blue-50">
              {data.gender.charAt(0).toUpperCase() + data.gender.slice(1)}
            </Badge>
          </div>
        </div>
        
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-500">Type</p>
          <div>
            <Badge variant="outline" className="bg-blue-50">
              {data.type.charAt(0).toUpperCase() + data.type.slice(1)}
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultDisplay;
