import AuthContextProvider from "@contexts/AuthContexts";
import RootNavigation from "@navigates/RootNavigation";
import PostContextProvider from "./contexts/PostContext";
const App = () => {
  return (
    <div className="flex m-0 p-0">
      <AuthContextProvider>
        <PostContextProvider>
          <RootNavigation />
        </PostContextProvider>
      </AuthContextProvider>
    </div>
  );
};

export default App;
