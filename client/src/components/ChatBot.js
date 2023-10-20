import React from 'react';

class ChatBot extends React.Component {
  render() {
    return (
      <div>
        <iframe
          title="Internal HTML File"
          src="/chat_bot.html"
          width="100%"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
    );
  }
}

export default ChatBot ;