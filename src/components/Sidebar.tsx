
import { Settings, Users, CreditCard, Phone, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const menuItems = [
    { icon: Users, label: "Workspaces", active: true },
    { icon: Users, label: "Team Management", active: false },
    { icon: CreditCard, label: "Billings & Plans", active: false },
    { icon: Settings, label: "Settings", active: false },
    { icon: Phone, label: "Contact Admin", active: false },
  ];

  return (
    <div className="w-64 bg-slate-800 text-white min-h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6">
        <h1 className="text-2xl font-bold">Lexi Ai</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Button
                variant={item.active ? "secondary" : "ghost"}
                className={`w-full justify-start text-left ${
                  item.active 
                    ? "bg-slate-600 text-white hover:bg-slate-600" 
                    : "text-slate-300 hover:bg-slate-700 hover:text-white"
                }`}
              >
                <item.icon className="mr-3 h-4 w-4" />
                {item.label}
              </Button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sign Out */}
      <div className="p-4 border-t border-slate-700">
        <Button variant="ghost" className="w-full justify-start text-slate-300 hover:bg-slate-700 hover:text-white">
          <LogOut className="mr-3 h-4 w-4" />
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
