import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import WebDevelopmentPage from './Pages/ServicesPage/WebDevelopmentPage';
import SoftwareDevelopment from './Pages/ServicesPage/SoftwareDevelopment';
import ItConsultancy from './Pages/ServicesPage/ItConsultancy';
import AdditionalServices from './Pages/ServicesPage/AdditionalServices';
import ItTraining from './Pages/ServicesPage/ItTraining';
import CareersPage from './Pages/CareersPage';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsConditions from './Pages/TermsConditions';

const App = () => {
  return (
    <>
      <Routes>
        {/* Landing page shown at "/" */}
        <Route path="/" element={<HomePage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route
          path="/services/web-development"
          element={<WebDevelopmentPage />}
        />
        <Route
          path="/services/software-development"
          element={<SoftwareDevelopment />}
        />
        <Route path="/services/it-consultancy" element={<ItConsultancy />} />
        <Route path="/services/it-training" element={<ItTraining />} />
        <Route
          path="/services/additional-services"
          element={<AdditionalServices />}
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />

        {/* Add more routes later, e.g.: */}
      </Routes>
    </>
  );
};

export default App;
