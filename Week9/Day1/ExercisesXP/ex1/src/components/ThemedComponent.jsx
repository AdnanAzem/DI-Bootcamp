import { useTheme } from '../context/ThemeContext';

const ThemedComponent = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`themed-component ${theme}`}>
      <h2>Current Theme: {theme}</h2>
      <p>This component changes its appearance based on the selected theme.</p>
    </div>
  );
};

export default ThemedComponent;