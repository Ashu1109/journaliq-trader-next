"use client"
import React from 'react'
import { Card, CardContent } from './ui/card'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { useJournalContext } from '@/context/ContextProvider'

interface MonthlyData {
    [key: string]: {
        date: string;
        pnl: number;
    }
}

const DashChart = () => {
    const { journal,userJournalSummary } = useJournalContext()

    
    // Process journal entries to calculate monthly PnL data
    const calculateMonthlyData = () => {
        if (!journal || journal.length === 0) {
            return [
                { date: 'Jan', pnl: 0 },
                { date: 'Feb', pnl: 0 },
                { date: 'Mar', pnl: 0 },
                { date: 'Apr', pnl: 0 },
                { date: 'May', pnl: 0 },
                { date: 'Jun', pnl: 0 },
                { date: 'Jul', pnl: 0 },
                { date: 'Aug', pnl: 0 },
                { date: 'Sep', pnl: 0 },
                { date: 'Oct', pnl: 0 },
                { date: 'Nov', pnl: 0 },
                { date: 'Dec', pnl: 0 },
            ];
        }

        const monthlyData: MonthlyData = {};
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        
        // Initialize all months with zero PnL
        months.forEach((month) => {
            monthlyData[month] = {
                date: month,
                pnl: 0
            };
        });

        // Calculate PnL for each journal entry
        
            const date = new Date(userJournalSummary.createdAt);
            const monthIndex = date.getMonth();
            const monthName = months[monthIndex];

            if (monthlyData[monthName]) {
                monthlyData[monthName].pnl += userJournalSummary.pnl;
            }

        // Convert monthlyData object to array
        const monthlyDataArray = Object.values(monthlyData);
        // Sort by month index
        monthlyDataArray.sort((a, b) => {
            const monthA = months.indexOf(a.date);
            const monthB = months.indexOf(b.date);
            return monthA - monthB;
        }
        );
        return monthlyDataArray;
    };

    const performanceData = calculateMonthlyData();
   
   

    return (
        <Card className="overflow-hidden">
            <CardContent className="p-0">
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            data={performanceData}
                            margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
                        >
                            <defs>
                                <linearGradient id="colorPnl" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#007fff" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#007fff" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid vertical={false} stroke="hsl(var(--muted))" />
                            <XAxis dataKey="date" axisLine={false} tickLine={false} />
                            <YAxis axisLine={false} tickLine={false} />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "#eef5fa",
                                    borderColor: "#d4e1eb",
                                    borderRadius: "var(--radius)",
                                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                                }}
                            />
                            <Area
                                type="monotone"
                                dataKey="pnl"
                                stroke="#007fff"
                                strokeWidth={2}
                                fillOpacity={1}
                                fill="url(#colorPnl)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    )
}

export default DashChart
