"use client";

import { Pie, PieChart, Cell, Tooltip } from "recharts";
import { useStipends } from "@/hooks/useStipends";
import { useProfile } from "@/hooks/useProfile";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const COLORS = [
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#ff7300",
    "#0088FE",
];

const MyPayrollChart = () => {
    const { stipends } = useStipends();
    const { profile } = useProfile();

    // Prepare chart data grouped by status
    const chartData = stipends
        ?.filter((employee: any) => employee.email === profile?.email)
        .reduce((acc: { [key: string]: number }, curr: any) => {
            const status = curr.status.toLowerCase();
            acc[status] = (acc[status] || 0) + 1;
            return acc;
        }, {});

    const formattedChartData = Object.entries(chartData || {}).map(([name, value]) => ({
        name,
        value,
    }));

    return (
        <Card className="flex flex-col">
            <CardHeader className="items-center pb-0">
                <CardTitle>Payroll Overview</CardTitle>
                <CardDescription>Breakdown of stipend statuses</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center pb-0">
                <PieChart width={250} height={250}>
                    <Pie
                        data={formattedChartData}
                        dataKey="value"
                        nameKey="name"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                    >
                        {formattedChartData.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </CardContent>
            <CardFooter className="text-sm">
                <div className="flex items-center gap-2 font-medium leading-none">
                    Showing payroll breakdown for {profile?.designation || "Employee"}
                </div>
            </CardFooter>
        </Card>
    );
};

export default MyPayrollChart;