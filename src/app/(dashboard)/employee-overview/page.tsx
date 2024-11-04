import { ChartNoAxesColumnIncreasing, ClipboardList, LayoutList, PackageCheck } from "lucide-react"

const EmployeeOverviewPage = () => {

    const employeeData = [
        {
            id: 1,
            title: "Total Task",
            value: 10,
            icon: <ClipboardList className="w-5 h-5 text-primary" />
        },
        {
            id: 2,
            title: "Total Pending",
            value: 3,
            icon: <LayoutList className="w-5 h-5 text-primary" />
        },
        {
            id: 3,
            title: "Total Completed",
            value: 20,
            icon: <PackageCheck className="w-5 h-5 text-primary" />
        }
    ]

    return (
        <div className="flex flex-1 flex-col gap-4">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                {
                    employeeData.map((item) => (
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
            <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
    )
}

export default EmployeeOverviewPage