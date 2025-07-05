
import { Calendar, FileText, Users, MoreHorizontal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface WorkspaceCardProps {
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

const WorkspaceCard = ({ 
  name, 
  client, 
  createdDate, 
  lastActive, 
  documentsProcessed, 
  drafts, 
  inReview, 
  completed,
  status 
}: WorkspaceCardProps) => {
  return (
    <Card className="p-6 hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <div className="flex items-start justify-between mb-4">
          <div>
            <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50 mb-2">
              Criminal
            </Badge>
            <h3 className="font-semibold text-lg text-gray-900">{name}</h3>
            <p className="text-sm text-gray-600">{client}</p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Open</DropdownMenuItem>
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="h-4 w-4 mr-2" />
            <span>Created: {createdDate}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="h-4 w-4 mr-2" />
            <span>Last active: {lastActive}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <FileText className="h-4 w-4 mr-2" />
            <span>{documentsProcessed} documents processed</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-4 text-sm">
            <span><strong>{drafts}</strong> Drafts</span>
            <span><strong>{inReview}</strong> In Review</span>
            <span><strong>{completed}</strong> Completed</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white flex items-center justify-center">
              <Users className="h-4 w-4 text-gray-600" />
            </div>
            <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-medium">
              +2
            </div>
          </div>
          <Button variant="ghost" size="sm" className="text-sm">
            Open →
          </Button>
        </div>

        <div className="mt-4 p-3 bg-slate-800 text-white rounded-lg text-center">
          <div className="flex items-center justify-center">
            <FileText className="h-4 w-4 mr-2" />
            <span className="text-sm">Upgrade to add more litigation cases to the workspace</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WorkspaceCard;
