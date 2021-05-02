import React from "react";

export default function Icon({ name = "", color = "white" }) {
  switch (name) {
    case "SHOP":
      return (
        <svg
          width="31"
          height="29"
          viewBox="0 0 31 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.6459 9.99154H27.5429L22.6043 0.676887C22.3693 0.233684 21.8195 0.0650613 21.3763 0.299802C20.9331 0.534784 20.7643 1.08455 20.9993 1.52775L25.4868 9.99142H5.64497L10.1325 1.52775C10.3674 1.08455 10.1986 0.534784 9.75543 0.299802C9.31229 0.0648796 8.76247 0.233684 8.52748 0.676887L3.58892 9.99154H2.35412C1.05606 9.99154 0 11.0476 0 12.3457C0 13.6437 1.05606 14.6998 2.35412 14.6998H2.41945C2.42145 14.7127 2.42296 14.7258 2.42527 14.7387L4.31941 25.3595C4.67561 27.3566 6.40646 28.8061 8.43503 28.8061H22.6966C24.7252 28.8061 26.4561 27.3566 26.8122 25.3595L28.7064 14.7387C28.7088 14.7252 28.7104 14.7117 28.7125 14.6982C29.9798 14.6626 30.9999 13.6214 30.9999 12.3457C31 11.0475 29.9439 9.99154 28.6459 9.99154ZM25.024 25.0406C24.8226 26.1699 23.8438 26.9896 22.6967 26.9896H8.43509C7.28797 26.9896 6.30923 26.17 6.10779 25.0406L4.26365 14.6998H26.8682L25.024 25.0406ZM28.6459 12.8832H2.35412C2.05769 12.8832 1.81659 12.6421 1.81659 12.3457C1.81659 12.0492 2.05769 11.8081 2.35412 11.8081H28.6459C28.9423 11.8081 29.1834 12.0492 29.1834 12.3457C29.1834 12.6421 28.9423 12.8832 28.6459 12.8832Z"
            fill={color}
          />
        </svg>
      );
    default:
      <div>default Icon</div>;
  }
  return <div></div>;
}
