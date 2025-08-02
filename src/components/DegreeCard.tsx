import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DegreeCardProps } from "@/pages/Fields";

export const DegreeCard = ({ field, onExplore }: DegreeCardProps) => {
  return (
    <Card className="group cursor-pointer overflow-hidden border-border/50 gradient-card backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 hover:border-accent/50">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={field.image}
          alt={field.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
          {field.title}
        </h3>
        <Button
          onClick={() => onExplore(field.id)}
          className="w-full gradient-primary hover:opacity-90 text-primary-foreground font-medium transition-all duration-300 group-hover:shadow-lg group-hover:shadow-accent/40 border-0"
        >
          Explore More
        </Button>
      </CardContent>
    </Card>
  );
};