import { CardComponent } from "../components/CardComponent";
import './../styles/NinaPage.css'

export const NinaPage = () => {
  return (
    <div className="container main-content">
      <div className="text-efect">FOR GIRLS</div>

      <div className="container mt-5 d-flex flex-wrap gap-5 justify-content-center">
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>

    </div>
  );
}