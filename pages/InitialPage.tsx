import PageLayout from "../layouts/PageLayout";
import Initial from "../components/InitialPage/Initial";
import NonAuthUserHeader from "../components/UserHeader/NoAuthUserHeader";

const InitialPage = () => (
  <PageLayout headerTitle="반려견 DID" isBack={false}>
    <NonAuthUserHeader />
    <Initial />
  </PageLayout>
);
export default InitialPage;
