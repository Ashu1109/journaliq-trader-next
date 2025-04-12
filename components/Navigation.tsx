"use client";
import { useJournalContext } from "@/context/ContextProvider";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { ChartBar, FileText, Settings, TrendingUp } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItem = ({
  to,
  label,
  icon: Icon,
  isActive,
}: {
  to: string;
  label: string;
  icon: React.ElementType;
  isActive: boolean;
}) => {
  return (
    <Link
      href={to}
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200",
        isActive
          ? "bg-primary text-primary-foreground font-medium"
          : "text-muted-foreground hover:bg-secondary"
      )}
    >
      <Icon size={19} />
      <span>{label}</span>
    </Link>
  );
};

export function Navigation() {
  const location = usePathname();
  const isMobile = useIsMobile();

  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: ChartBar },
    { path: "/journal", label: "Journal", icon: FileText },
    { path: "/analysis", label: "Analysis", icon: TrendingUp },
  ];

  const currentPath = location;
  const {journal} = useJournalContext()
  const isJournalEmpty = journal.length === 0;
  // Redirect to dashboard if journal is empty
  const shouldRedirectFromAnalysis = isJournalEmpty && currentPath === "/analysis";
  const shouldRedirectFromDashboard = isJournalEmpty && currentPath === "/dashboard";
  
  // If we're on the analysis page but journal is empty, redirect to journal
  if (shouldRedirectFromAnalysis || shouldRedirectFromDashboard) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background/80 z-50">
        <div className="text-center p-6 max-w-md">
          <h2 className="text-xl font-semibold mb-2">Journal is empty</h2>
          <p className="text-muted-foreground mb-4">
            Please add some trades to your journal before accessing.
          </p>
          <Link 
            href="/journal" 
            className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md"
          >
            <FileText className="mr-2" size={18} />
            Go to Journal
          </Link>
        </div>
      </div>
    );
  }

  const mobileNav = (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t w-full animate-fade-in">
      <div className="flex items-center justify-around p-3">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={cn(
              "flex flex-col items-center p-2",
              currentPath === item.path
                ? "text-primary"
                : "text-muted-foreground"
            )}
          >
            <item.icon size={20} />
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );

  const desktopNav = (
    <div className="glass-card fixed left-6 top-1/2 -translate-y-1/2 rounded-xl p-2 w-[200px] animate-fade-in">
      <div className="space-y-1.5 py-2">
        {navItems.map((item) => (
          <NavItem
            key={item.path}
            to={item.path}
            label={item.label}
            icon={item.icon}
            isActive={currentPath === item.path}
          />
        ))}
      </div>
      <div className="h-px bg-border my-3" />
      <div className="space-y-1.5 mb-1.5">
        <NavItem
          to="/settings"
          label="Settings"
          icon={Settings}
          isActive={currentPath === "/settings"}
        />
      </div>
    </div>
  );

  return isMobile ? mobileNav : desktopNav;
}
