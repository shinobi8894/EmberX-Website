import { BrandSidebar } from "@/components/brand/brand-sidebar";
import { BrandHeader } from "@/components/brand/brand-header";

export default function BrandLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen bg-background flex overflow-hidden">
      <BrandSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <BrandHeader />
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
