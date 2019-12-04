import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const editorColors = {
  property: "rgb(41, 185, 115)",
  comment: "rgba(255, 255, 255, 0.3)",
  punctuation: "rgba(255, 255, 255, 0.4)",
  keyword: "rgb(42, 126, 211)",
  def: "rgb(56, 189, 193)",
  qualifier: "#1c92a9",
  attribute: "rgb(247, 116, 102)",
  number: "#2882f9",
  string: "#d64292",
  builtin: "#d47509",
  string2: "#0b7fc7",
  variable: "rgb(181, 34, 130)",
  meta: "#b33086",
  atom: "rgb(249, 233, 34)",
  ws: "rgba(255, 255, 255, 0.4)",
  selection: "rgba(255, 255, 255, 0.1)",
  cursorColor: "rgba(255, 255, 255, 0.4)",
  text: "#fff",
  textInactive: "rgba(255, 255, 255, 0.6)",
  background: "#09141c",
  sidebarTop: "#0f202d",
  sidebar: "#172b3a",
  sidebarBottom: "#172b3a",
  sidebarItemActive: "rgb(23, 42, 58)",
  sidebarItemSide: "#27ae60",
  sidebarItemSessions: "rgba(255, 255, 255, 0.05)",
  tab: "#172b3a",
  tabInactive: "#0f202d",
  tabText: "#fff",
  navigationBar: "#172b3a",
  navigationBarText: "rgba(255, 255, 255, 0.6)",
  editorBackground: "#0f202d",
  resultBackground: "#172b3a",
  leftDrawerBackground: "#0b1924",
  rightDrawerBackground: "#0b1924",
  drawerText: "rgba(255,255,255,0.6)",
  drawerTextInactive: "#555e66",
  executeButton: "rgb(185, 191, 196)",
  executeButtonBorder: "rgb(11, 20, 28)",
  executeButtonHover: "rgb(195, 201, 206)",
  executeButtonSubscription: "#f25c54",
  executeButtonSubscriptionHover: "#f36c65",
  icon: "rgb(74, 85, 95)",
  iconHover: "rgba(255, 255, 255, 0.6)",
  button: "#0F202D",
  buttonHover: "#122535",
  buttonText: "rgba(255,255,255,0.6)",
  buttonWorkspace: "#b9bfc4",
  buttonWorkspaceHover: "#a4acb2",
  buttonWorkspaceText: "rgb(23, 42, 58)",
  circle: "rgba(255, 255, 255, 0.4)"
};

const colors = Object.keys(editorColors).map(key => ({
  name: key,
  color: editorColors[key]
}));

const Colors = () => (
  <div className="container">
    {colors.map(d => (
      <div className="wrapper">
        <CopyToClipboard
          text={d.color}
          onCopy={() => alert(`copied ${d.color}`)}
        >
          <div
            className="square"
            style={{
              backgroundColor: d.color
            }}
          />
        </CopyToClipboard>
        <p>{d.name}</p>
      </div>
    ))}
  </div>
);

export default Colors;
