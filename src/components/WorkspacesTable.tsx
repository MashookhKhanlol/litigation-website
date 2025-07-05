
import { Grid, List } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import WorkspaceFilters from "./WorkspaceFilters";
import CreateWorkspaceModal from "./CreateWorkspaceModal";
import WorkspaceGrid from "./WorkspaceGrid";
import WorkspaceList from "./WorkspaceList";

const WorkspacesTable = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");
  
  const [workspaces, setWorkspaces] = useState([
    {
      name: "Morgan Acquisition",
      client: "Sarah Chen",
      opponent: "Chen Sarah",
      case: "Criminal",
      areaOfLaw: "Jalandar",
      timeline: "First Meeting done",
      createdDate: "May 3, 2025",
      lastActive: "2 hours ago",
      documentsProcessed: 12,
      drafts: 3,
      inReview: 1,
      completed: 0,
      status: "Active"
    },
  ]);

  const handleCreateWorkspace = (newWorkspace: any) => {
    setWorkspaces([...workspaces, newWorkspace]);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      {/* Table Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Workspaces</h2>
          
          <div className="flex items-center space-x-2">
            <Button 
              variant={viewMode === "grid" ? "default" : "outline"} 
              size="sm"
              onClick={() => setViewMode("grid")}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button 
              variant={viewMode === "list" ? "default" : "outline"} 
              size="sm"
              onClick={() => setViewMode("list")}
            >
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
          <WorkspaceFilters />
          <CreateWorkspaceModal onCreateWorkspace={handleCreateWorkspace} />
        </div>
      </div>

      {/* Content Area */}
      {viewMode === "grid" ? (
        <WorkspaceGrid workspaces={workspaces} />
      ) : (
        <WorkspaceList workspaces={workspaces} />
      )}
    </div>
  );
};

export default WorkspacesTable;
