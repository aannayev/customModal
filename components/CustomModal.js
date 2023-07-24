// components/CustomComponent.js

import { useEffect } from "react";
import { init } from "@pipedrive/app-extensions-sdk";

const CustomComponent = () => {
  useEffect(() => {
    async function initializeSDK() {
      try {
        const queryParams = new URLSearchParams(window.location.search);
        const identifier = queryParams.get("id");

        if (identifier) {
          // Use the identifier from the URL query parameters
          console.log("Identifier from URL:", identifier);
          const sdk = await new AppExtensionsSDK().initialize();
          // Use the SDK object to interact with Pipedrive, if needed
          // For example, open a modal with the default custom UI size
          const { modal } = sdk;
          modal.setTitle("Custom Modal");
          modal.setContent("<p>This is the content of the custom modal.</p>");
          modal.open();
        } else {
          // Use the identifier '123abc' and provide a custom UI size
          const sdk = await new AppExtensionsSDK({
            identifier: "f58eadf6-d017-44b9-b9a4-d1fbd247ddf1",
          }).initialize({
            size: { height: 500 }, // Replace this with your desired custom UI size
          });
          // Use the SDK object to interact with Pipedrive, if needed
          // For example, open a modal with the specified custom UI size
          const { modal } = sdk;
          modal.setTitle("Custom Modal");
          modal.setContent("<p>This is the content of the custom modal.</p>");
          modal.open();
        }
      } catch (error) {
        console.error("Error initializing the Pipedrive SDK:", error);
      }
    }

    initializeSDK();
  }, []);

  return null; // Since this component handles the modal initialization, it doesn't render anything itself
};

export default CustomComponent;
