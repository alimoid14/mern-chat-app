const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://cdn.donmai.us/original/1b/13/1b13a1119a303a364ac83d11178b7679.jpg"
            alt="avatar"
          />
        </div>
      </div>
      <div className="chat-bubble text-white bg-blue-500">
        Hi! what&apos;s up?
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        12:43
      </div>
    </div>
  );
};

export default Message;
