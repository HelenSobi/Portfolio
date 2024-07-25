import { useNavigate } from 'react-router-dom';

const NavigationBtnClick = () =>{
    const navigate = useNavigate();
   return (
      <div className="container">
         <div className="title">
            <h1>Order Product CockTails</h1>
         </div>
         <button className="btn" onClick={() => navigate('order-summary')}>
            Place Order
         </button>

         <button className="btn" onClick={() => navigate(-1)}>
            Go Back
        </button>
        {/* Back Button */}
      </div>
   );

}

export default NavigationBtnClick;
