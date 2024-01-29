import AuthContextProvider from "@contexts/AuthContexts";
import RootNavigation from "@navigates/RootNavigation";
import PostContextProvider from "./contexts/PostContext";
const App = () => {
  return (
    <div className="w-screen h-screen ">
      <AuthContextProvider>
        <PostContextProvider>
          <RootNavigation />
        </PostContextProvider>
      </AuthContextProvider>
    </div>
  );
};

export default App;
