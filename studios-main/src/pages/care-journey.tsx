import { Select } from "antd";
import Header from "../components/header";
import { careJoureyPatients, careJourneyDashboards } from "../utils/constants";
import Dashboard from "../components/dashboard";
import { useEffect, useState } from "react";

const CareJourney = () => {
  const [link, setLink] = useState<string>("");

  useEffect(() => {
    const name = careJoureyPatients[0].value;
    const dashBoardLink = careJourneyDashboards.find(
      (item) => item.name === name
    )?.dashboard_link;
    if (dashBoardLink) {
      setLink(dashBoardLink);
    }
  }, []);

  const handleChange = (value: any) => {
    const dashBoardLink = careJourneyDashboards.find(
      (item) => item.name === value
    )?.dashboard_link;
    if (dashBoardLink) {
      setLink(dashBoardLink);
    }
  };
  return (
    <div className="px-6">
      <div className="flex flex-col space-y-4">
        <div className="w-full">
          <Header
            title="Care Journey"
            description="Insights of patient care journey"
          />
        </div>
        <Select
          onChange={handleChange}
          options={careJoureyPatients}
          defaultValue={careJoureyPatients[0].value}
        />
        <Dashboard
          dashboardLink={link}
          className="w-full h-[700px]"
          type="journey"
        />
      </div>
    </div>
  );
};

export default CareJourney;
