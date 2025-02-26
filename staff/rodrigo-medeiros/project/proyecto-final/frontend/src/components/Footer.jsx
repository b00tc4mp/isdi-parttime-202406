import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-900 text-white text-center py-4 w-full fixed bottom-0"> 
      <aside>
        <p>Copyright © {new Date().getFullYear()} - Low Prices Tours</p>
      </aside>
    </footer>
  );
}

export default Footer;

//<footer className="bg-blue-900 text-white text-center py-4"> 