import { CardComponent } from "../components/CardComponent";
import './../styles/NinoPage.css';

export const NinoPage = () => {
  return (
    <div className="container main-content">
      <div className="text-efect">FOR BOYS</div>

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