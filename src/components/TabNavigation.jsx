import React from "react";
// import { render } from 'react-dom';

import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import ReadingsTable from "./ReadingsTable";

const STabs = styled(Tabs)`
  font-family: BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 12px;
  /* width: 50%; */
`;

const STabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  gap: 1rem;
  margin-bottom: 10px;
`;
STabList.tabsRole = "TabList";

const STab = styled(Tab)`
  margin-right: 4px;
  border-bottom: 1px solid black;
  padding: 4px;
  user-select: none;
  cursor: arrow;

  &.is-selected {
    // color: white;
    // background: black;
    border-bottom: 1px solid white;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 0, 255, 0.5);
  }
`;
STab.tabsRole = "Tab";

const STabPanel = styled(TabPanel)`
  display: none;
  min-height: 40vh;
  max-height: 50vh;
  border: 1px solid black;
  padding: 4px;
  margin-top: -5px;
  overflow-y: scroll;

  &.is-selected {
    display: block;
  }
`;
STabPanel.tabsRole = "TabPanel";

const TabNavigation = ({ panels, tabs }) => (
  <STabs
    selectedTabClassName="is-selected"
    selectedTabPanelClassName="is-selected"
  >
    <STabList>
      {tabs.map((tab, key) => {
        return <STab>{tab}</STab>;
      })}
    </STabList>
    <STabPanel>
      <ReadingsTable deviceId={panels}/>
    </STabPanel>
    <STabPanel>Panel 2</STabPanel>
    <STabPanel>Panel 3</STabPanel>
  </STabs>
);

export default TabNavigation;
