import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import ChatSteps from './ChatSteps';

const config = {
  botAvatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb0sxq-7bYx6m9UYKZfpEv1OZLUXLrPXnwow&usqp=CAU",
  floating: true,
};

function ChatBotMain() {
  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        headerTitle="Chat Bot"
        steps={ChatSteps}
        {...config}
      />
    </ThemeProvider>
  );
}

export default ChatBotMain;
