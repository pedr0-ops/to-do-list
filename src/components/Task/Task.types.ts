export interface ITaskProps {
  id: number;
  title: string;
  completed: boolean;
  setCompleted: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}
