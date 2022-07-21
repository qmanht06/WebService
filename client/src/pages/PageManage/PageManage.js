import Header from "../../components/Header/Header";
import PageManages from "../../components/PageManage/PageManage"
function PageManage({ type }) {
    return (
        <>
            <PageManages types={type}></PageManages>
        </>
    );
}

export default PageManage;