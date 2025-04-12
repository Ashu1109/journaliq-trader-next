"use client"
import { useJournalContext } from '@/context/ContextProvider';
import { MetricCard } from './ui-components';

const DashPerformanceTrend = () => {
    const { userJournalSummary } = useJournalContext();
    const winRate = userJournalSummary.noOfProfit
      ? ((userJournalSummary.noOfProfit / userJournalSummary.noofJournal) * 100).toFixed(2)
      : 0;

  return (

    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
    <MetricCard
      label="Total P&L"
      value={`${userJournalSummary.pnl.toFixed(2)}$`}
      variant="profit"
      className="animate-fade-in"
    />
    <MetricCard
      label="Win Rate"
      value={`${winRate}%`}
      className="animate-fade-in [animation-delay:100ms]"
    />
    <MetricCard
      label="Total No of Trades"
      value={`${userJournalSummary.noofJournal}`}
      className="animate-fade-in [animation-delay:200ms]"
    />
  </div>
  )
}

export default DashPerformanceTrend
