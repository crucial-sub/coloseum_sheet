import ItemSheet from "components/ItemSheet/ItemSheet";
import GlobalStyle from "./style/GlobalStyle";
<<<<<<< HEAD
=======
import MainPage from "layout/MainPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { tableActions } from "store";
import MOCK_DATA from "assets/MOCK_DATA.json";
>>>>>>> 4864cb8 (Add:테이블 클릭시 해당 행과 열이 강조되는 기능 구현)

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(tableActions.getTableData(MOCK_DATA));
  }, []);

  return (
    <Fragment>
      <GlobalStyle />
      <ItemSheet />
    </Fragment>
  );
};

export default App;
