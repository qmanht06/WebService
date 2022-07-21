// import Header from "../../components/Header/Header";
import PageManages from "../../components/PageManage/PageManage";
function PageManage({ type }) {
  return (
    <>
      {/* <Header></Header> */}
      <PageManages types={type}></PageManages>
    </>
  );
}

export default PageManage;
