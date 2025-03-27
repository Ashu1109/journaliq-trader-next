"use client";
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
