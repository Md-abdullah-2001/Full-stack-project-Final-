import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";

const AppointmentPage = ({ selected, setSelected }) => {
  return (
    <div>
      <div className="hero   bg-base-200">
        <div className="hero-content  flex-col lg:flex-row-reverse gap-32">
          <img src={chair} alt="/" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            {" "}
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
            />
            {/* <p>You picked {format(selected, "PP")}.</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;
