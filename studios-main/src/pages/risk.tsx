import Dashboard from "../components/dashboard";
import Header from "../components/header";
import { dashboardLinks } from "../utils/constants";

const Risk = () => {
  return (
    <div className="p-2">
      <Header
        title="Risk Dashboard"
        description="Get helpful insights with risk dashboard"
      />
      <Dashboard
        dashboardLink={dashboardLinks["risk"]}
        className="w-full h-screen mt-6"
      />
    </div>
  );
};

export default Risk;
