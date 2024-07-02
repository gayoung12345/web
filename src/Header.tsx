import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

export default function Header(props: HeaderProps) {
  const { sections, title } = props;

  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    // localStorage에서 모드를 읽어와서 darkMode 상태를 설정
    const mode = window.localStorage.getItem("mode");
    if (mode === "dark") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []); // 컴포넌트가 마운트될 때 한 번만 실행됨

  // darkMode 상태에 따라 root 클래스 설정
  React.useEffect(() => {
    const root = document.getElementsByTagName("html")[0];
    if (darkMode) {
      root.classList.add("dark-mode");
    } else {
      root.classList.remove("dark-mode");
    }

    // localStorage에 darkMode 상태 반영
    window.localStorage.setItem("mode", darkMode ? "dark" : "light");
  }, [darkMode]); // darkMode 상태가 변경될 때마다 실행됨

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <div className="App">
          <button onClick={() => setDarkMode(!darkMode)}>
            Toggle Dark Mode
          </button>
          <p>Current Mode: {darkMode ? "Dark" : "Light"}</p>
          {/* 여기에 dark mode일 때 보여줄 컴포넌트들을 추가 */}
        </div>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}
