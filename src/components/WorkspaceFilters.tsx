
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const WorkspaceFilters = () => {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          placeholder="Search by Workspace Name / Client Name"
          className="pl-10 w-80"
        />
      </div>
      
      <Select defaultValue="all-types">
        <SelectTrigger className="w-32">
          <SelectValue placeholder="All Types" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all-types">All Types</SelectItem>
          <SelectItem value="criminal">Criminal</SelectItem>
          <SelectItem value="civil">Civil</SelectItem>
        </SelectContent>
      </Select>

      <Select defaultValue="all-status">
        <SelectTrigger className="w-32">
          <SelectValue placeholder="All Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all-status">All Status</SelectItem>
          <SelectItem value="active">Active</SelectItem>
          <SelectItem value="completed">Completed</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default WorkspaceFilters;
