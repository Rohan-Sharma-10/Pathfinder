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