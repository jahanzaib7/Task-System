'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  LayoutDashboard,
  Users,
  Clock,
  ClipboardList,
  FolderKanban,
  BarChart2,
  Settings,
  UserCog,
  Key,
  Download,
  Search,
  MoreVertical,
} from "lucide-react"

interface Project {
  id: string
  name: string
  color: string
  employees: number
  modules: number
  tasks: number
  startDate: string
  endDate: string
  totalTime: string
  progress: number
}

export default function ProjectList() {
  const [projects] = useState<Project[]>([
    {
      id: "1",
      name: "Income tax",
      color: "bg-cyan-500",
      employees: 2,
      modules: 1,
      tasks: 1,
      startDate: "2021-09-10",
      endDate: "2021-10-10",
      totalTime: "00:00:00",
      progress: 0,
    },
    {
      id: "2",
      name: "ASDPSHUKL",
      color: "bg-red-500",
      employees: 1,
      modules: 1,
      tasks: 0,
      startDate: "2021-09-08",
      endDate: "2021-09-22",
      totalTime: "00:00:00",
      progress: 0,
    },
    {
      id: "3",
      name: "Softsense",
      color: "bg-yellow-500",
      employees: 4,
      modules: 0,
      tasks: 0,
      startDate: "2021-09-15",
      endDate: "2021-09-24",
      totalTime: "00:00:00",
      progress: 0,
    },
    {
      id: "4",
      name: "something",
      color: "bg-green-500",
      employees: 2,
      modules: 1,
      tasks: 1,
      startDate: "2021-10-28",
      endDate: "2021-11-30",
      totalTime: "00:00:00",
      progress: 0,
    },
    {
      id: "5",
      name: "re",
      color: "bg-emerald-500",
      employees: 2,
      modules: 1,
      tasks: 1,
      startDate: "2021-09-06",
      endDate: "2021-09-12",
      totalTime: "00:00:00",
      progress: 0,
    },
  ])

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-[#1E1F55] text-white">
        <div className="p-4">
          <h1 className="text-xl font-bold text-white mb-8">Task Monitoring System</h1>
          <nav className="space-y-2">
            <a href="#" className="flex items-center px-4 py-2 text-gray-300 hover:bg-[#2D2E6F] rounded-lg">
              <LayoutDashboard className="w-5 h-5 mr-3" />
              Dashboard
            </a>
            <a href="#" className="flex items-center px-4 py-2 text-gray-300 hover:bg-[#2D2E6F] rounded-lg">
              <Users className="w-5 h-5 mr-3" />
              Employee
            </a>
            <a href="#" className="flex items-center px-4 py-2 text-gray-300 hover:bg-[#2D2E6F] rounded-lg">
              <Clock className="w-5 h-5 mr-3" />
              Timesheets
            </a>
            <a href="#" className="flex items-center px-4 py-2 text-gray-300 hover:bg-[#2D2E6F] rounded-lg">
              <ClipboardList className="w-5 h-5 mr-3" />
              Time Claim
            </a>
            <a href="#" className="flex items-center px-4 py-2 bg-[#2D2E6F] text-white rounded-lg">
              <FolderKanban className="w-5 h-5 mr-3" />
              Projects
            </a>
            <a href="#" className="flex items-center px-4 py-2 text-gray-300 hover:bg-[#2D2E6F] rounded-lg">
              <BarChart2 className="w-5 h-5 mr-3" />
              Reports
            </a>
            <a href="#" className="flex items-center px-4 py-2 text-gray-300 hover:bg-[#2D2E6F] rounded-lg">
              <Settings className="w-5 h-5 mr-3" />
              Settings
            </a>
            <a href="#" className="flex items-center px-4 py-2 text-gray-300 hover:bg-[#2D2E6F] rounded-lg">
              <UserCog className="w-5 h-5 mr-3" />
              Behaviour
            </a>
          </nav>
        </div>
        <div className="mt-auto p-4 border-t border-[#2D2E6F]">
          <a href="#" className="flex items-center px-4 py-2 text-gray-300 hover:bg-[#2D2E6F] rounded-lg">
            <Key className="w-5 h-5 mr-3" />
            License Information
          </a>
          <Button className="w-full mt-4 bg-white text-[#1E1F55] hover:bg-gray-200">
            <Download className="w-4 h-4 mr-2" /> DOWNLOAD AGENT
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-[#1E1F55]">Projects List</h2>
            <div className="flex items-center gap-4">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px] border-[#1E1F55]">
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="on-hold">On Hold</SelectItem>
                </SelectContent>
              </Select>
              <Button className="bg-[#1E1F55] hover:bg-[#2D2E6F] text-white">Add Project Detail</Button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b flex justify-between items-center">
              <div className="flex items-center gap-2">
                Show
                <Select defaultValue="10">
                  <SelectTrigger className="w-[70px] border-[#1E1F55]">
                    <SelectValue placeholder="10" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="25">25</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                  </SelectContent>
                </Select>
                Entries
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-10 w-64 border-[#1E1F55]"
                />
              </div>
            </div>

            <Table>
              <TableHeader>
                <TableRow className="bg-[#F3F4F6]">
                  <TableHead className="text-[#1E1F55]">Project Name</TableHead>
                  <TableHead className="text-[#1E1F55]">Assignees</TableHead>
                  <TableHead className="text-[#1E1F55]">Modules</TableHead>
                  <TableHead className="text-[#1E1F55]">Task(s)</TableHead>
                  <TableHead className="text-[#1E1F55]">Start Date</TableHead>
                  <TableHead className="text-[#1E1F55]">End Date</TableHead>
                  <TableHead className="text-[#1E1F55]">Total Time</TableHead>
                  <TableHead className="text-[#1E1F55]">Progress(%)</TableHead>
                  <TableHead className="text-[#1E1F55]">Status</TableHead>
                  <TableHead className="text-[#1E1F55]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projects.map((project) => (
                  <TableRow key={project.id}>
                    <TableCell>
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-full ${project.color} flex items-center justify-center text-white font-medium mr-3`}>
                          {project.name.charAt(0).toUpperCase()}
                        </div>
                        {project.name}
                      </div>
                    </TableCell>
                    <TableCell>{project.employees} Employees</TableCell>
                    <TableCell>{project.modules} Modules</TableCell>
                    <TableCell>{project.tasks} Tasks</TableCell>
                    <TableCell>{project.startDate}</TableCell>
                    <TableCell>{project.endDate}</TableCell>
                    <TableCell>{project.totalTime}</TableCell>
                    <TableCell>{project.progress}</TableCell>
                    <TableCell>
                      <div className="w-4 h-4 bg-gray-200 rounded"></div>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="w-4 h-4 text-[#1E1F55]" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}