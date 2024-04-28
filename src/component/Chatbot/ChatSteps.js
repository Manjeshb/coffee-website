const ChatSteps = [
    {
      id: 'welcome',
      message: 'Welcome to Coffee Connect! Join us in cultivating a sustainable future for farming.',
      trigger: 'name',
    },
    {
        id: 'name',
        message: "What is your name?",
        trigger: 'getName',
    },
    {
        id: 'getName',
        user: true,
        trigger: 'first',
    },
    {
      id: 'first',
      message: 'How can I help you, {previousValue}?',
      trigger: 'options',
    },
    {
      id: 'options',
      options: [
        { value: 1, label: 'Coffee', trigger: 'coffeeInfo' },
        { value: 2, label: 'Black Pepper', trigger: 'pepperInfo' },
        { value: 3, label: 'Avocados', trigger: 'avocadoInfo' },
      ],
    },
    {
      id: 'coffeeInfo',
      message: 'Here is some information about coffee...',
      trigger: 'coffeeContact',
    },
    {
      id: 'pepperInfo',
      message: 'Here is some information about black pepper...',
      trigger: 'pepperContact',
    },
    {
      id: 'avocadoInfo',
      message: 'Here is some information about avocados...',
      trigger: 'avocadoContact',
    },
    {
      id: 'coffeeContact',
      message: 'If you want more information, you can connect with us via email at website@gmail.com or call us at +91 123456789.',
      end: true,
    },
    {
      id: 'pepperContact',
      message: 'If you want more information, you can connect with us via email at website@gmail.com or call us at +91 123456789.',
      end: true,
    },
    {
      id: 'avocadoContact',
      message: 'If you want more information, you can connect with us via email at website@gmail.com or call us at +91 123456789.',
      end: true,
    },
];

export default ChatSteps;
