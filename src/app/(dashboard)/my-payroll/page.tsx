"use client";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useStipends } from "@/hooks/useStipends";
import { useProfile } from "@/hooks/useProfile";
import { useState } from "react";

const MyPayroll = () => {
    const { stipends } = useStipends();
    const { profile } = useProfile();
    const [filter, setFilter] = useState<string>("all");

    const filteredStipends = stipends?.filter((employee: any) => {
        return (
            profile?.email === employee.email &&
            (filter === "all" || employee.status.toLowerCase() === filter.toLowerCase())
        );
    });

    return (
        <div className="flex flex-1 flex-col gap-4">
            {/* Header Section with Filter */}
            <div className="w-full flex justify-between items-center px-2">
                <h2 className="text-lg font-bold">
                    My <span className="text-primary">Payroll</span>
                </h2>
                <Select onValueChange={(value) => setFilter(value)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="all">All</SelectItem>
                            <SelectItem value="paid">Paid</SelectItem>
                            <SelectItem value="advance">Advance</SelectItem>
                            <SelectItem value="bonus">Bonus</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            {/* Table Section */}
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Month</TableHead>
                        <TableHead>Year</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredStipends?.length > 0 ? (
                        filteredStipends.map((employee: any) => (
                            <TableRow key={employee._id}>
                                <TableCell className="font-medium">{employee.month}</TableCell>
                                <TableCell>{employee.year}</TableCell>
                                <TableCell>{employee.status}</TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={3} className="text-center">
                                No records found
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

export default MyPayroll;