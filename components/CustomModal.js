// components/CustomModal.js

import { useEffect } from "react";
import { init } from "@pipedrive/app-extensions-sdk";

const CustomModal = () => {
  useEffect(() => {
    // Function to create and open the custom modal
    async function openCustomModal() {
      try {
        const { modal } = await init();

        modal.setTitle("Custom Modal");
        modal.setContent("<p>This is the content of the custom modal.</p>");
        modal.setWidth("500px");
        modal.setHeight("300px");
        modal.setIsHiddenOnClose(true);

        modal.open();
      } catch (error) {
        console.error("Error initializing the Pipedrive SDK:", error);
      }
    }

    openCustomModal();
  }, []);

  return null;
};

CustomModal.openCustomModal = () => {
  // Method to trigger the custom modal
  return <CustomModal />;
};

export default CustomModal;
