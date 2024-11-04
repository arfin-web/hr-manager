import { ChartNoAxesColumnIncreasing, ClipboardCheck, UserCheck, Users } from "lucide-react"
import getEmployees from "@/hooks/getEmployees"
import getTasks from "@/hooks/getTasks"
import getNotices from "@/hooks/getNotices"

const AdminOverview = async () => {
  const employees = await getEmployees()
  const tasks = await getTasks()
  const notices = await getNotices()

  const adminData = [
    {
      id: 1,
      title: "Total Employess",
      value: `${employees?.length || 0}`,
      icon: <Users className="w-5 h-5 text-primary" />
    },
    {
      id: 2,
      title: "Total Task Assigned",
      value: `${tasks?.length || 0}`,
      icon: <ClipboardCheck className="w-5 h-5 text-primary" />
    },
    {
      id: 3,
      title: "Todays Notice",
      value: `${notices?.length || 0}`,
      icon: <UserCheck className="w-5 h-5 text-primary" />
    }
  ]
  return (
    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
      {
        adminData.map((item) => (
          <div key={item.id} className="rounded-xl bg-muted/50 p-3 lg:p-5">
            <div className="flex w-full justify-between items-center">
              <h3>{item.title}</h3>
              {item.icon}
            </div>
            <div className="flex w-full justify-between items-center">
              <h1 className="text-3xl text-primary font-bold">{item.value}</h1>
              <ChartNoAxesColumnIncreasing className="w-20 h-20 text-muted" />
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default AdminOverview