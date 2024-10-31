// src/components/Sidebar.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlusCircle, Calendar, Tag, Bell, LogOut } from "lucide-react";

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-800">Administrador</h1>
      </div>
      <nav className="mt-6">
        <Button
          variant="ghost"
          className="w-full justify-start px-4 py-2 text-left"
        >
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Task
        </Button>
        <Link href="/calendar">
          <Button
            variant="ghost"
            className="w-full justify-start px-4 py-2 text-left"
          >
            <Calendar className="mr-2 h-4 w-4" />
            Calendar
          </Button>
        </Link>
        <Button
          variant="ghost"
          className="w-full justify-start px-4 py-2 text-left"
        >
          <Tag className="mr-2 h-4 w-4" />
          Categories
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start px-4 py-2 text-left"
        >
          <Bell className="mr-2 h-4 w-4" />
          Reminders
        </Button>
      </nav>
      <div className="absolute bottom-0 w-64 p-4">
        <Button
          variant="ghost"
          className="w-full justify-start px-4 py-2 text-left text-red-600"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </aside>
  );
};
