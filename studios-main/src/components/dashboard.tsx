import React from "react";

interface DashboardProps {
  className?: string;
  dashboardLink: string;
  type?: string;
}

const Dashboard: React.FC<DashboardProps> = ({
  className,
  dashboardLink,
  type,
}) => {
  return (
    <div
      className={`${type === "journey" ? " h-[640px] overflow-hidden" : ""}`}
    >
      <iframe src={dashboardLink} className={`${className}`}></iframe>
    </div>
  );
};

export default Dashboard;
