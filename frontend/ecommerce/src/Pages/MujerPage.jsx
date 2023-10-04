import { CardComponent } from '../components/CardComponent';
import './../styles/MujerPage.css';

export const MujerPage = () => {
  return (
    <div className="container main-content">
      <div className="text-efect">FOR WOMAN</div>

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