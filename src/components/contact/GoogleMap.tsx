import React from 'react';

const GoogleMap = () => {
  return (
    <div className="w-full h-[500px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4935.748904873711!2d79.9304317749962!3d6.89333309310579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNTMnMzYuMCJOIDc5wrA1NSc1OC44IkU!5e1!3m2!1sen!2slk!4v1760802896586!5m2!1sen!2slk"
        className="w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default GoogleMap;