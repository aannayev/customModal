// components/CustomComponent.js

import { useEffect } from "react";
import { init } from "@pipedrive/app-extensions-sdk";

const CustomComponent = () => {
  useEffect(() => {
    async function initializeSDK() {
      try {
        const queryParams = new URLSearchParams(window.location.search);
        const identifier = queryParams.get("id");

        if (!identifier) {
          console.error("Identifier not found in URL query parameters.");
          return;
        }

        // Use the identifier as needed
        console.log("Identifier:", identifier);

        // Optionally, you can set custom UI size if needed
        const sdk = await new AppExtensionsSDK({
          identifier: identifier,
        }).initialize({
          size: { height: 500 }, // Replace this with your desired custom UI size
        });

        // Use the sdk object to interact with Pipedrive, for example, opening a modal
        const { modal } = sdk;
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

    initializeSDK();
  }, []);

  return null; // Since this component handles the modal initialization, it doesn't render anything itself
};

export default CustomComponent;
