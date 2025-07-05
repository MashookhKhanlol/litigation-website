
import WorkspaceCard from "./WorkspaceCard";

interface Workspace {
  name: string;
  client: string;
  createdDate: string;
  lastActive: string;
  documentsProcessed: number;
  drafts: number;
  inReview: number;
  completed: number;
  status: string;
}

interface WorkspaceGridProps {
  workspaces: Workspace[];
}

const WorkspaceGrid = ({ workspaces }: WorkspaceGridProps) => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workspaces.map((workspace, index) => (
          <WorkspaceCard
            key={index}
            name={workspace.name}
            client={workspace.client}
            createdDate={workspace.createdDate}
            lastActive={workspace.lastActive}
            documentsProcessed={workspace.documentsProcessed}
            drafts={workspace.drafts}
            inReview={workspace.inReview}
            completed={workspace.completed}
            status={workspace.status}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkspaceGrid;
