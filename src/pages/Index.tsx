
import { Users, FileText, Edit, CheckSquare, Globe } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import StatsCard from "@/components/StatsCard";
import WorkspacesTable from "@/components/WorkspacesTable";

const Index = () => {
  const stats = [
    {
      title: "Total Workspaces",
      value: "4",
      change: "↗ 12% from last month",
      changeType: "positive" as const,
      icon: <Users className="h-5 w-5 text-blue-600" />,
      color: "bg-blue-100",
    },
    {
      title: "Total Signed Contracts",
      value: "51",
      change: "↗ 12% from last month",
      changeType: "positive" as const,
      icon: <FileText className="h-5 w-5 text-blue-600" />,
      color: "bg-blue-100",
    },
    {
      title: "Contracts Drafted",
      value: "4",
      change: "↘ 4% from last month",
      changeType: "negative" as const,
      icon: <Edit className="h-5 w-5 text-yellow-600" />,
      color: "bg-yellow-100",
    },
    {
      title: "Contracts Reviewed",
      value: "18",
      change: "↗ 12% from last month",
      changeType: "positive" as const,
      icon: <CheckSquare className="h-5 w-5 text-green-600" />,
      color: "bg-green-100",
    },
    {
      title: "Contracts Translated",
      value: "9",
      change: "↗ 10% from last month",
      changeType: "positive" as const,
      icon: <Globe className="h-5 w-5 text-red-600" />,
      color: "bg-red-100",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="flex-1 p-6">
          {/* Dashboard Title */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            {stats.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>

          {/* Workspaces Table */}
          <WorkspacesTable />
        </main>
      </div>
    </div>
  );
};

export default Index;
