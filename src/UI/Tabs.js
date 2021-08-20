import React from 'react';
import { TabsClassicGroup, TabsClassicItem ,TabsClassicPanel, Desktop, Internet, Mobile,Promocode } from '@design-system-rt/rtk-ui-kit';


const Tabs = () => {
    return (
        <div>
            <>
  <TabsClassicGroup
    onChange={function noRefCheck(){}}
    value="0"
  >
    <TabsClassicItem
      icon={<Internet />}
      index="0"
      label="Интернет"
    />
    <TabsClassicItem
      icon={<Desktop />}
      index="1"
      label="Интерактивное ТВ"
    />
    <TabsClassicItem
      icon={<Mobile />}
      index="2"
      label="Мобильный телефон"
    />
    <TabsClassicItem
      disabled
      icon={<Promocode />}
      index="3"
      label="Прочее"
    />
  </TabsClassicGroup>
  {/* <TabsClassicPanel
    index="0"
    value="0"
  >
    Item One
  </TabsClassicPanel>
  <TabsClassicPanel
    index="1"
    value="0"
  >
    Item Two
  </TabsClassicPanel>
  <TabsClassicPanel
    index="2"
    value="0"
  >
    Item Three
  </TabsClassicPanel>
  <TabsClassicPanel
    index="3"
    value="0"
  >
    Item Four
  </TabsClassicPanel> */}
</>
        </div>
    );
};

export default Tabs;
// rsc