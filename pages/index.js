// pages/index.js

import { useEffect } from "react";
import CustomModal from "../components/CustomModal";

const HomePage = () => {
  useEffect(() => {
    // Example of triggering the custom modal on page load
    CustomModal.openCustomModal();
  }, []);

  return (
    <div>
      <h1>Hello, Next.js App!</h1>
    </div>
  );
};

export default HomePage;
