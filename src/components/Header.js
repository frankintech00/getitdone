import logo from "../assets/logo.svg";

const Header = ({ children, theme, setTheme }) => {
  // Importing the logo image
  // "children" refers to the content in between the opening and closing tags of the component when it is used in the app
  // "theme" is the current theme of the app
  // "setTheme" is the function used to set the theme of the app

  return (
    // The header component returns the header section of the app
    <header className={`${theme}`}>
      <span className="logo">
        {/* The logo is displayed */}
        <img src={logo} alt="" />
        {/* The name of the app is displayed */}
        <span className={`title ${theme}`}>{children}</span>
      </span>

      <span className="themeSelector">
        {/* Light theme button */}
        <span
          className={theme === "light" ? "light activeTheme" : "light"}
          onClick={() => setTheme("light")}
        ></span>
        {/* Medium theme button */}
        <span
          className={theme === "medium" ? "medium activeTheme" : "medium"}
          onClick={() => setTheme("medium")}
        ></span>
        {/* Dark theme button */}
        <span
          className={theme === "dark" ? "dark activeTheme" : "dark"}
          onClick={() => setTheme("dark")}
        ></span>
      </span>
    </header>
  );
};

export default Header;

// The header.js file is a functional component that represents the header of the task management app. It takes three props as inputs - children, theme, and setTheme.

// The component displays a logo and the title of the app, which is passed as children. It also includes a theme selector, which allows the user to switch between light, medium, and dark themes. The selected theme is reflected by a visual indicator, with the corresponding theme name being set as the class of the selected span.

// The setTheme function is called when a user clicks on a span representing a theme. This function updates the value of the theme state in the parent component, which in turn triggers a re-render and updates the visual appearance of the header to match the selected theme
