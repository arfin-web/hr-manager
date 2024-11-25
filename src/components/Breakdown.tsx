"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { useEmployees } from "@/hooks/useEmployees"

const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    chrome: {
        label: "Chrome",
        color: "hsl(var(--chart-1))",
    },
    safari: {
        label: "Safari",
        color: "hsl(var(--chart-2))",
    },
    firefox: {
        label: "Firefox",
        color: "hsl(var(--chart-3))",
    },
    edge: {
        label: "Edge",
        color: "hsl(var(--chart-4))",
    },
    other: {
        label: "Other",
        color: "hsl(var(--chart-5))",
    },
} satisfies ChartConfig

export default function Breakdown() {
    const { employees = [] } = useEmployees() // Ensure `employees` is always defined

    // Group employees by department and count the number of employees in each department
    const chartData = React.useMemo(() => {
        if (!employees || employees?.length === 0) return []

        const departmentsCount = employees.reduce((acc: any, employee: any) => {
            acc[employee.department] = (acc[employee.department] || 0) + 1
            return acc
        }, {})

        // Assign colors to categories
        const getdepartmentColor = (department: any) => {
            const colors = {
                Engineering: "hsl(var(--chart-1))",
                HumanResource: "hsl(var(--chart-2))",
                Support: "hsl(var(--chart-3))",
                Design: "hsl(var(--chart-4))",
                others: "hsl(var(--chart-5))",
            }
            return colors[department] || "hsl(var(--chart-other))"
        }

        // Map the counts to the chart data format
        return Object.entries(departmentsCount).map(([department, count]) => ({
            department,
            visitors: count,
            fill: getdepartmentColor(department),
        }))
    }, [employees])

    const totalVisitors = React.useMemo(() => {
        return chartData.reduce((acc, curr: any) => acc + curr.visitors, 0)
    }, [chartData])

    // Show a loading message if chart data is empty
    if (chartData.length === 0) {
        return <div>Loading chart data...</div>
    }

    return (
        <Card className="flex flex-col border border-primary h-96">
            <CardHeader className="items-center pb-0">
                <CardTitle>Departments Analysis</CardTitle>
                <CardDescription>See employees based on Departments</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="visitors"
                            nameKey="department"
                            innerRadius={60}
                            strokeWidth={5}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-3xl font-bold"
                                                >
                                                    {/* {totalVisitors.toLocaleString()} */}
                                                    {employees?.length || 0}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground"
                                                >
                                                    employees
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 font-medium leading-none">
                    Trending up by 5.2% this week <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                    Showing total employees for the last 1 Week
                </div>
            </CardFooter>
        </Card>
    )
}