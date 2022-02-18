import ItemSheet from "components/ItemSheet/ItemSheet";
import GlobalStyle from "./style/GlobalStyle";
import MainPage from "layout/MainPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { tableActions } from "store";
import MOCK_DATA from "assets/MOCK_DATA.json";
import Cards from "components/Cards";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(tableActions.getTableData(MOCK_DATA));
  }, []);

  return (
    <MainPage>
      <GlobalStyle />
      <ItemSheet />
      {/* <Cards /> */}
    </MainPage>
  );
};

export default App;
