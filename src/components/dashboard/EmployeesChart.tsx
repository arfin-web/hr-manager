"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { useEmployees } from "@/hooks/useEmployees";

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--primary))",
    },
} satisfies ChartConfig

export default function EmployeesChart() {
    const { employees } = useEmployees();

    // Ensure employees is defined and is an array
    const safeEmployees = Array.isArray(employees) ? employees : [];

    // Preprocess data to count users/employees by date
    const groupedData = safeEmployees.reduce((acc, customer) => {
        const date = new Date(customer.createdAt).toISOString().split("T")[0]; // Extract date only
        acc[date] = (acc[date] || 0) + 1;
        return acc;
    }, {});

    // Transform grouped data into an array suitable for the chart
    const chartData = Object.keys(groupedData).map((date) => ({
        date,
        count: groupedData[date],
    }));

    return (
        <Card>
            <CardHeader>
                <CardTitle>Employee Joining Chart</CardTitle>
                <CardDescription>Number of registrations by date</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart data={chartData} width={600} height={300}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => new Date(value).toLocaleDateString()}
                        />
                        <YAxis allowDecimals={false} />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent />}
                        />
                        <Bar dataKey="count" fill="hsl(var(--primary))" radius={8} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                    Trending up <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                    Showing registrations per date
                </div>
            </CardFooter>
        </Card>
    );
}