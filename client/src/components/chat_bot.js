<script>
window.watsonAssistantChatOptions = {
  integrationID: "530542a6-decf-431b-9387-854e558109d1", // The ID of this integration.
  region: "us-east", // The region your integration is hosted in.
  serviceInstanceID: "fd14f6f7-7ef6-451c-8340-cdb2b64e76c8", // The ID of your service instance.
  onLoad: function(instance) { instance.render(); }
};
setTimeout(function(){
  const t=document.createElement('script');
  t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
  document.head.appendChild(t);
});
</script>