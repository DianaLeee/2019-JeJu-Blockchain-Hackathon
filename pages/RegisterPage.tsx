import PlainPageLayout from "../layouts/PlainPageLayout";
import Register from "../components/RegisterPage/Register";

const RegisterPage = () => (
  <PlainPageLayout headerTitle="반려견 등록" isBack>
    <Register />
  </PlainPageLayout>
);
export default RegisterPage;
