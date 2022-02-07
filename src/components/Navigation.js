import { SideNav, SideNavGroup, SideNavItem } from "@leafygreen-ui/side-nav";
import Icon from "@leafygreen-ui/icon";

export default function Navigation() {
  return (
    <SideNav widthOverride={300}>
      <SideNavItem>Overview</SideNavItem>
      <SideNavItem>Introduction</SideNavItem>
      <SideNavItem>
        Android SDK
        <SideNavItem>Install MongoDB Community Edition</SideNavItem>
        <SideNavGroup
          header="Fundamentals"
          collapsible
          glyph={<Icon glyph="Building" />}
        >
          <SideNavItem active>
            Upgrade MongoDB Community to MongoDB Enterprise
          </SideNavItem>
          <SideNavItem>Verify Integrity of MongoDB Packages</SideNavItem>
          <SideNavGroup header="Preferences">
            <SideNavItem>Privacy</SideNavItem>
            <SideNavItem>Security</SideNavItem>
          </SideNavGroup>
        </SideNavGroup>
      </SideNavItem>
    </SideNav>
  );
}
