import AuthContextProvider from "@contexts/AuthContexts";
import RootNavigation from "@navigates/RootNavigation";
const App = () => {
  return (
    <AuthContextProvider>
      <RootNavigation />
    </AuthContextProvider>
  );
};

export default App;
