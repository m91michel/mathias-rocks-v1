import * as React from "react";
import ReactCookieConsent from "react-cookie-consent";
import { consentCookieName } from "../../../utils/config/config";
import Link from "../../general/Link";

const CookieConsent: React.FC = () => {
  return (
    <ReactCookieConsent
      location="bottom"
      enableDeclineButton
      buttonClasses="!rounded !px-10"
      declineButtonClasses="!border-gray-200 !dark:border-gray-800 !border !rounded !border-solid !text-gray-200 !dark:text-gray-800"
      declineButtonStyle={{ background: "unset" }}
      buttonText="Akzeptieren"
      declineButtonText="Ablehnen"
      containerClasses="!item-end"
      buttonWrapperClasses="sm:flex sm:flex-col sm:justify-end lg:flex-row"
      cookieName={consentCookieName}
    >
      Diese Website verwendet Cookies für bestimmte Funktionalitäten (Google
      Trends), die Nutzbarkeit zu verbessern und um Statistiken (Google
      Analytics) zu erheben. Mehr Informationen findest du in unserer{" "}
      <Link to={'/privacy/'}>
        Datenschutzerklärung
      </Link>
      .
    </ReactCookieConsent>
  );
};
export default CookieConsent;
