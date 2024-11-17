 
import React, { useEffect } from "react";

const WatsonAssistantChat = () => {
  useEffect(() => {
     
    window.watsonAssistantChatOptions = {
      integrationID:import.meta.env.VITE_WATSON_INTEGRATION_ID , 
      region: import.meta.env.VITE_WATSON_REGION,
      serviceInstanceID: import.meta.env.VITE_WATSON_SERVICE_INSTANCE_ID,
      onLoad: async (instance) => {
        await instance.render();
      },
    };

    
    const script = document.createElement("script");
    script.src =
      "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
      (window.watsonAssistantChatOptions.clientVersion || "latest") +
      "/WatsonAssistantChatEntry.js";
    script.async = true;
    document.head.appendChild(script);

     
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;  
};

export default WatsonAssistantChat;
