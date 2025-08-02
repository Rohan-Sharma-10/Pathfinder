import { DegreeCard } from "@/components/DegreeCard";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

export interface DegreeField {
  id: string;
  title: string;
  image: string;
  description?: string;
}

export interface DegreeCardProps {
  field: DegreeField;
  onExplore: (fieldId: string) => void;
}

const Fields = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const degreeFields: DegreeField[] = [
    {
      id: "medicine",
      title: "Medicine & Healthcare",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
    },
    {
      id: "engineering",
      title: "Engineering & Technology", 
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
    },
    {
      id: "commerce",
      title: "Commerce & Finance",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      id: "arts",
      title: "Arts & Design",
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=400&h=300&fit=crop"
    },
    {
      id: "law",
      title: "Law & Justice",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop"
    },
    {
      id: "management",
      title: "Management & Business",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
    },
    {
      id: "media",
      title: "Media & Communication",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop"
    },
    {
      id: "social",
      title: "Social Work & Psychology",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop"
    },
    {
      id: "international",
      title: "International Relations",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop"
    },
    {
      id: "science",
      title: "Science & Research",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop"
    }
  ];

  const handleExplore = (fieldId: string) => {
    if (fieldId === "medicine") {
      navigate("/fields/medicine-healthcare");
      return;
    }
    if (fieldId === "engineering") {
      navigate("/fields/engineering-technology");
      return;
    }
    if (fieldId === "commerce") {
      navigate("/fields/commerce-finance");
      return;
    }
    if (fieldId === "arts") {
      navigate("/fields/arts-design");
      return;
    }
    if (fieldId === "law") {
      navigate("/fields/law-justice");
      return;
    }
    if (fieldId === "management") {
      navigate("/fields/management-business");
      return;
    }
    if (fieldId === "media") {
      navigate("/fields/media-communication");
      return;
    }
    if (fieldId === "social") {
      navigate("/fields/soialwork-psychology");
    }
    if (fieldId === "international") {
      navigate("/fields/international-relations")
    }
    if (fieldId === "science") {
      navigate("/fields/science-research")
    }
    
    // const field = degreeFields.find(f => f.id === fieldId);
    // toast({
    //   title: "Coming Soon!",
    //   description: `Detailed information about ${field?.title} will be available soon.`,
    // });
  };

  return (
    <div className="min-h-screen deep-purple-bg py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Explore Degree Options After 12th Grade
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover your perfect career path from a wide range of degree options. Each field offers unique opportunities for growth and success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {degreeFields.map((field) => (
            <DegreeCard
              key={field.id}
              field={field}
              onExplore={handleExplore}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Can't find what you're looking for? <span className="text-primary font-medium cursor-pointer hover:underline">Contact us</span> for personalized guidance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Fields;