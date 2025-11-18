export const GoogleMap = () => {
  return (
    <div className="w-full h-full min-h-[500px] bg-gray-100 flex items-center justify-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.6384267471493!2d-0.1277!3d51.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2sLondon!5e0!3m2!1sen!2suk!4v1234567890"
        width="100%"
        height="100%"
        title="London Map for Pickup Location"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      ></iframe>
    </div>
  );
};
