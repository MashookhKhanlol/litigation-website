
import { MoreHorizontal } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface Workspace {
  name: string;
  client: string;
  opponent: string;
  case: string;
  areaOfLaw: string;
  timeline: string;
}

interface WorkspaceListProps {
  workspaces: Workspace[];
}

const WorkspaceList = ({ workspaces }: WorkspaceListProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Workspace Name</TableHead>
          <TableHead>Client</TableHead>
          <TableHead>Opponent</TableHead>
          <TableHead>Case</TableHead>
          <TableHead>Area of Law</TableHead>
          <TableHead>Timeline</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {workspaces.map((workspace, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{workspace.name}</TableCell>
            <TableCell>{workspace.client}</TableCell>
            <TableCell>{workspace.opponent}</TableCell>
            <TableCell>
              <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                {workspace.case}
              </Badge>
            </TableCell>
            <TableCell>{workspace.areaOfLaw}</TableCell>
            <TableCell>{workspace.timeline}</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View Details</DropdownMenuItem>
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default WorkspaceList;
