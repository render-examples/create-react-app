import { useState } from "react";
import StepBar from "./StepBar";
import StepOne from "./step1";
import StepTwo from "./step2";
import StepThree from "./step3";
import StepFour from "./step4";

const Signup = () => {
    const [current, setCurrent] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: {
            street: '',
            number: '',
            city: ''
        },
        help: [],
        imageUrl: './empty-user.jpg',
        password: ''
    })
    return (
        <dev className="Signup">
            < StepBar current={current}/>
            {current === 0 && <StepOne setCurrent={setCurrent} formData={formData} setFormData={setFormData} />},
            {current === 1 && <StepTwo setCurrent={setCurrent} formData={formData} setFormData={setFormData} />},
            {current === 2 && <StepThree setCurrent={setCurrent} formData={formData} setFormData={setFormData} />},
            {current === 3 && <StepFour formData={formData} setFormData={setFormData} />}
        </dev>
    );
}
 
export default Signup;