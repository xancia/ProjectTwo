import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type DisplaySelectProps = {
    setDisplay: (value: number) => void;
  };

const DisplaySelect: React.FC<DisplaySelectProps> = ({setDisplay}) => {
    const handleValueChange = (value: string) => {
        setDisplay(Number(value)); 
      };

  return (
    <div className="py-4">
    <Select onValueChange={handleValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Display Amount" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Display Amount</SelectLabel>
          <SelectItem value="10">10 (default)</SelectItem>
          <SelectItem value="20">20</SelectItem>
          <SelectItem value="50">50</SelectItem>
          <SelectItem value="100">All</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
  );
};

export default DisplaySelect;
