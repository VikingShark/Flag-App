import { useNavigate } from "react-router-dom";

const regions = ["all", "africa", "americas", "asia", "europe", "oceania"];

const DropDown = () => {
    const navigate = useNavigate();

    const handleChange = (event) => {
         const selectedRegion = event.target.value;

        if(selectedRegion !== "all") {
            navigate(`/?region=${selectedRegion}`);
        } else {
            navigate('/')
        }
        
    };

    return (
        <select onChange={handleChange} defaultValue="">
            <option value="all" disabled>Region</option>
                {regions.map((region) => (
             <option key={region} value={region}>
            {region.charAt(0).toUpperCase() + region.slice(1)}
          </option>
        ))}
      </select>
    );
};

export default DropDown;