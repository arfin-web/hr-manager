import { Briefcase, UserCheck, Users } from "lucide-react"

const data = [
  {
    id: 1,
    title: "Total Employess",
    value: 100,
    icon: <Users className="w-4 h-4" />
  },
  {
    id: 2,
    title: "Todays Attandence",
    value: 80,
    icon: <UserCheck className="w-4 h-4" />
  },
  {
    id: 3,
    title: "Job Openings",
    value: 20,
    icon: <Briefcase className="w-4 h-4" />
  }
]

export default function Overview() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        {
          data.map((item) => (
            <div key={item.id} className="rounded-xl bg-muted/50 p-3 lg:p-5">
              <div className="flex w-full justify-between items-center">
                <h3>{item.title}</h3>
                {item.icon}
              </div>
              <h1 className="text-3xl font-bold">{item.value}</h1>
            </div>
          ))
        }
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
    </div>
  )
}