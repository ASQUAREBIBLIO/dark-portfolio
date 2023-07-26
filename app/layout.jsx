import "./global.scss";

export const metadata = {
  title: "Dark Protfolio - Next.js Templates",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
