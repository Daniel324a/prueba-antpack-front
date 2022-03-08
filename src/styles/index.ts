const styles = {
  alerts: {
    user: 'flex flex-col gap-1.5 items-center pb-5 text-gray-600 font-light text-xl',
  },
  animateTransforms: ' transition-all transform duration-200 ',
  animateTransforms100: ' transition-all transform duration-100 ',
  buttons: {
    button: ` 
    flex items-center justify-center
      py-2 px-3 rounded-md w-min
      text-white bg-blue-500
      ring-0 ring-blue-500 flex-shrink-0
      hover:ring-2 flex-shrink-0
      `,
    disabled: ' bg-blue-300 ring-blue-300 hover:ring-0 ',
    disabledOutlined: ' bg-blue-50 outline-blue-100 text-blue-300 ',
    disabledRound: ' bg-gray-50 text-gray-200 ',
    outlined: `
    flex items-center justify-center
      py-2 px-3 rounded-md w-min
      text-blue-500 outline outline-2
      -outline-offset-2 outline-blue-500 
      flex-shrink-0 hover:bg-blue-50 
    `,
    round: ` 
      flex items-center justify-center
      p-2 rounded-full text-gray-600
      flex-shrink-0 hover:bg-gray-200  
    `,
  },
  card: ' bg-white flex flex-col items-center p-10 pb-5 rounded-lg flex-grow-0 flex-shrink-0 h-max w-full text-center overflow-hidden hover:shadow-lg sm:w-72 ',
  container: ` flex flex-col flex-grow gap-1 overflow-y-auto p-5 sm:p-10 `,
  roundedImage: ' w-4/5 rounded-full object-cover ',
  textField: ` 
    outline outline-2 outline-gray-200 
    -outline-offset-2 rounded-md p-2 w-full
    hover:bg-gray-100 focus:outline-gray-400 
  `,
  topBar: ' flex h-20 w-full gap-1.5 p-5 items-center bg-white shadow-lg fixed z-50 overflow-hidden sm:gap-3 ',
  users: {
    container: ' flex flex-wrap gap-5 justify-center flex-grow overflow-y-auto mt-20 p-5 sm:p-10 ',
  },
  view: ' flex flex-col h-screen white w-screen overflow-hidden ',
};

export default styles;
