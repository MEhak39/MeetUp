import { Route, Routes} from "react-router-dom";

import AllMeetUp from "./pages/AllMeetUp";
import NewMeetUp from "./pages/NewMeetUp";
import Favorites from "./pages/Favorites";

import Layout from "./Layout/Layout";
function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" Component={AllMeetUp} />
          <Route path="/new-meet" Component={NewMeetUp} />

          <Route path="/favs" Component={Favorites} />
        </Routes>
      </Layout>
    </div>
  );
}
export default App;
