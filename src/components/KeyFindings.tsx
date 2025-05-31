
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface FindingData {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

interface KeyFindingsProps {
  findings?: FindingData[];
}

const KeyFindings = ({ findings }: KeyFindingsProps) => {
  const defaultFindings: FindingData[] = [
    {
      title: "Model Accuracy Improvement",
      description: "Our machine learning model achieved 94% accuracy in medical image classification",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
      category: "Performance"
    },
    {
      title: "Processing Time Analysis",
      description: "Reduced data processing time by 67% compared to traditional methods",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop&crop=center",
      category: "Efficiency"
    },
    {
      title: "Feature Extraction Results",
      description: "Identified 15 key biomarkers with statistical significance > 0.95",
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop&crop=center",
      category: "Discovery"
    },
    {
      title: "Clinical Validation",
      description: "Successfully validated findings across 3 different healthcare institutions",
      imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop&crop=center",
      category: "Validation"
    }
  ];

  const findingsData = findings || defaultFindings;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Findings</h2>
        <p className="text-xl text-gray-600">
          Research results and breakthrough discoveries from our analysis
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {findingsData.map((finding, index) => (
          <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer bg-white border border-gray-200">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                  {finding.category}
                </span>
              </div>
              <CardTitle className="text-xl">{finding.title}</CardTitle>
              <CardDescription>{finding.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={finding.imageUrl}
                  alt={`${finding.title} graph`}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default KeyFindings;
