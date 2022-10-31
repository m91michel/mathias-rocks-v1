import * as React from "react";
import { resetCookieConsentValue } from "react-cookie-consent";
import { consentCookieName } from "../../../utils/config/config";

const RevokeCookie: React.FC = () => {
  const onClick = () => resetCookieConsentValue(consentCookieName);
  return (
    <button className="button is-link !text-white" onClick={onClick}>
      Einstellungen zurücksetzten
    </button>
  );
};
export default RevokeCookie;
