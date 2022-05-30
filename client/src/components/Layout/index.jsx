import { useEffect, useState } from "react";

import { Sidebar } from "./Sidebar";

export function DashboardLayout({ children, tempB64ProfileImg }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar
        isMenuOpen={isMenuOpen}
        onCollapseButtonClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      <div className="relative flex-grow p-8">
        {children}
      </div>
    </div>
  );
}