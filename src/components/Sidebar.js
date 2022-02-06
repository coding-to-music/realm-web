import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { useRealmApp } from "../RealmApp";
import useProjects from "../graphql/useProjects";
import Card from "./Card";
import { uiColors } from "@leafygreen-ui/palette";

export default function Sidebar({
  currentProject,
  setCurrentProject,
  setIsEditingPermissions,
}) {
  const projects = useProjects();
  const app = useRealmApp();

  return (
    <SidebarContainer>
      <Card>
        <SectionHeading>Projects</SectionHeading>
        <SectionList>
          {projects.map((project) => (
            <SectionListItem
              key={project.partition}
              onClick={() => setCurrentProject(project)}
              isSelected={project.partition === currentProject?.partition}
            >
              {project.name}
            </SectionListItem>
          ))}
        </SectionList>
        <UserDetails
          user={app.currentUser}
          handleLogout={() => {
            app.logOut();
          }}
          handleEditPermissions={() => {
            setIsEditingPermissions(true);
          }}
        />
      </Card>
      <Card>
        <SectionHeading>Drudge Report Scrapes</SectionHeading>
        <div class="container">
          <iframe
            // style="background: #21313C;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);"
            width="300"
            height="300"
            src="https://charts.mongodb.com/charts-project-0-hptut/embed/charts?id=0dff1349-6a3b-4885-aafa-7395b61408f4&maxDataAge=3600&theme=dark&autoRefresh=true"
          ></iframe>
        </div>
      </Card>
      <Card>
        <SectionHeading>Hacker News Scrapes</SectionHeading>
        <div class="container">
          <iframe
            // style="background: #21313C;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);"
            width="300"
            height="300"
            src="https://charts.mongodb.com/charts-project-0-hptut/embed/charts?id=a549a138-0a8c-485f-803a-3c52d0a79447&maxDataAge=3600&theme=dark&autoRefresh=true"
          ></iframe>{" "}
        </div>
      </Card>
      <Card>
        <SectionHeading>Sentiment Score of Scrapes</SectionHeading>
        <div class="container">
          <iframe
            // style="background: #21313C;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);"
            width="300"
            height="300"
            src="https://charts.mongodb.com/charts-project-0-hptut/embed/charts?id=ce1e79ac-87c1-4346-8843-921e21e5df8c&maxDataAge=3600&theme=dark&autoRefresh=true"
          ></iframe>{" "}
        </div>
      </Card>
      <Card>
        <SectionHeading>Articles per Hacker News Writer</SectionHeading>
        <div class="container">
          <iframe
            // style="background: #21313C;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);"
            width="300"
            height="300"
            src="https://charts.mongodb.com/charts-project-0-hptut/embed/charts?id=34b6f432-ecd5-4de6-b943-a5035dd09a6d&maxDataAge=3600&theme=dark&autoRefresh=true"
          ></iframe>{" "}
        </div>
      </Card>
      <Card>
        <SectionHeading>Hacker News Articles</SectionHeading>
        <div class="container">
          <iframe
            // style="background: #21313C;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);"
            width="300"
            height="300"
            src="https://charts.mongodb.com/charts-project-0-hptut/embed/charts?id=80e6cc7b-4736-479b-bf9c-b9fbaf3d8311&maxDataAge=3600&theme=dark&autoRefresh=true"
          ></iframe>{" "}
        </div>
      </Card>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  display: flex;
  background: ${uiColors.gray.light2};
  flex-direction: column;
  padding: 40px;
`;

const SectionHeading = styled.h2`
  margin: 0;
  padding: 8px;
`;
const SectionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const SectionListItem = styled.li(
  (props) => css`
    padding: 8px 12px;
    border-radius: 8px;
    background: ${props.isSelected && uiColors.green.light2};
    :hover {
      background: ${!props.isSelected && uiColors.gray.light1};
    }
  `
);

function UserDetails({ user, handleLogout, handleEditPermissions }) {
  return (
    <UserDetailsContainer>
      <Username>{user.profile.email}</Username>
      <TextButton onClick={handleEditPermissions}>Manage My Project</TextButton>
      <TextButton onClick={handleLogout}>Log Out</TextButton>
    </UserDetailsContainer>
  );
}

const UserDetailsContainer = styled.div`
  padding: 8px 0;
  display: flex;
  flex-direction: column;
`;

const Username = styled.div`
  font-weight: bold;
  text-align: center;
  margin-bottom: 4px;
`;

const TextButton = styled.button`
  background: none;
  border: none;
  padding: 4px;
  color: #069;
  text-decoration: none;
  cursor: pointer;
  color: ${uiColors.green.dark2};
`;
