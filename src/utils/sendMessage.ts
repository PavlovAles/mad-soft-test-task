import emailjs from 'emailjs-com';

export const sendEmail = async (message: string) => {
  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const userID = import.meta.env.VITE_EMAILJS_USER_ID;

  try {
    const result = await emailjs.send(serviceID, templateID, { message }, userID);
    console.log('@sendEmail', result);
    return result;
  } catch (error) {
    console.log('@sendEmail', error);
    return false;
  }
};
