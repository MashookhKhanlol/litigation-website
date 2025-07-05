
import { Search, Grid, List, Plus, MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const WorkspacesTable = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const workspaces = [
    {
      name: "Morgan Acquisition",
      client: "Sarah Chen",
      opponent: "Chen Sarah",
      case: "Criminal",
      areaOfLaw: "Jalandar",
      timeline: "First Meeting done",
    },
  ];

  const handleCreateWorkspace = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Creating new workspace...");
    setIsCreateModalOpen(false);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      {/* Table Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Workspaces</h2>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Grid className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-8 mb-6">
          <button className="text-gray-600 hover:text-gray-900 pb-2">Contracts</button>
          <button className="text-blue-600 border-b-2 border-blue-600 pb-2 font-medium">Litigation</button>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-between">
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

          <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
            <DialogTrigger asChild>
              <Button className="bg-green-600 hover:bg-green-700">
                <Plus className="mr-2 h-4 w-4" />
                Create New Workspace
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Create New Workspace</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleCreateWorkspace} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="workspaceName">Workspace Name</Label>
                  <Input id="workspaceName" placeholder="Enter workspace name" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="clientName">Client Name</Label>
                  <Input id="clientName" placeholder="Enter client name" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="opponentName">Opponent Name</Label>
                  <Input id="opponentName" placeholder="Enter opponent name" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="caseType">Case Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select case type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="criminal">Criminal</SelectItem>
                      <SelectItem value="civil">Civil</SelectItem>
                      <SelectItem value="family">Family</SelectItem>
                      <SelectItem value="corporate">Corporate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="areaOfLaw">Area of Law</Label>
                  <Input id="areaOfLaw" placeholder="Enter area of law" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Enter workspace description" rows={3} />
                </div>
                
                <div className="flex justify-end space-x-2 pt-4">
                  <Button type="button" variant="outline" onClick={() => setIsCreateModalOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-green-600 hover:bg-green-700">
                    Create Workspace
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Table */}
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

      {/* Upgrade Message */}
      <div className="p-4 bg-slate-800 text-white rounded-b-lg">
        <div className="flex items-center">
          <div className="mr-3">
            <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
              <Plus className="h-4 w-4 text-slate-800" />
            </div>
          </div>
          <span className="text-sm">Upgrade to add more litigation cases to the workspace</span>
        </div>
      </div>
    </div>
  );
};

export default WorkspacesTable;
