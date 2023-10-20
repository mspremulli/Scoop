import React from 'react';

class ChatBot extends React.Component {
  render() {
    return (
      <div>
        <iframe
          title="Watson AI Chat Bot"
          src="/chat_bot.html"
          width="500px"
          height="500px"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
    );
  }
}

export default ChatBot ;