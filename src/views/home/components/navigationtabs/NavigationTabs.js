import React, { useState } from "react";
import { tabs } from "../../../../constants/tabs";
import { StyledTabs, StyledTab } from "./navigationTabsStyles";
import TabPanel from "../TabPanel";
import colors from "../../../../styles/colors";

const NavigationBar = () => {
  const [tabValue, setValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <StyledTabs
        variant="scrollable"
        scrollButtons
        value={tabValue}
        onChange={handleTabChange}
        style={{ color: colors.link }}
      >
        {tabs.map((tab) => (
          <StyledTab key={`tab-${tab.label}`} label={tab.label} />
        ))}
      </StyledTabs>

      <TabPanel tabSelected={tabValue} param={tabs[tabValue].param} />
    </>
  );
};

export default NavigationBar;
