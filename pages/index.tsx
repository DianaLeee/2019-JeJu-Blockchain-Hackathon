import NonAuthPageLayout from "../layouts/NonAuthPageLayout";
import Initial from "../components/InitialPage/Initial";

const Index = () => (
  <NonAuthPageLayout headerTitle="반려견 DID" isBack={false}>
    <Initial />
  </NonAuthPageLayout>
);
export default Index;
