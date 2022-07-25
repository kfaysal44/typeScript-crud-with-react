// import ContactContainer from './features/contact/ContactContainer';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import 'primeflex/primeflex.css';
// import { useState } from 'react';
// import { Button } from 'primereact/button';
import OrganizationContainer from './features/organization/OrganizationContainer';

const App:React.FC =()=> {
  // const [active,setActive]=useState('');
  return (
    <div className="App">
      {/* <div>
        <Button onClick={()=> setActive('Organization')} label='Add Organization' ></Button>
        <Button onClick={()=> setActive('Contact')} label='Add Contact' ></Button>
        </div> */}
        <div>
        {/* {active === "Contact" && <ContactContainer />} */}
        {/* {active === "Organization" && <OrganizationContainer />} */}
        <OrganizationContainer />
      </div>
    </div>
  );
}

export default App;