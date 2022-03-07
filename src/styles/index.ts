const styles = {
  view: ' flex flex-col h-screen white w-screen overflow-hidden ',
  animateTransforms: ' transition-all transform duration-200 ',
  animateTransforms100: ' transition-all transform duration-100 ',
  card: ' bg-white flex flex-col items-center p-10 rounded-lg flex-grow-0 flex-shrink-0 h-max w-72 hover:shadow-lg ',

  textField: ` 
    outline outline-2 outline-gray-200 
    -outline-offset-2 rounded-md p-2 
    hover:bg-gray-100 focus:outline-gray-400 
  `,

  users: {
    container: ' flex flex-wrap gap-5 justify-center flex-grow overflow-y-auto mt-20 p-10 ',
    searchField: ' flex h-20 w-full gap-3 p-5 items-center bg-white shadow-lg fixed z-50 ',
  },

  buttons: {
    button: ` 
      flex items-center justify-center
      py-2 px-3 rounded-md w-min
      text-white bg-blue-500
      ring-0 ring-blue-500 
      hover:ring-2
    `,

    outlined: `
      flex items-center justify-center
      py-2 px-3 rounded-md w-min
      text-blue-500 outline outline-2
      -outline-offset-2 outline-blue-500 
      hover:bg-blue-50
    `,

    disabled: ' bg-blue-300 ring-blue-300 hover:ring-0 ',
    disabledOutlined: ' bg-blue-50 bg-transparent outline-blue-100 text-blue-300 ',
  },
};

export default styles;