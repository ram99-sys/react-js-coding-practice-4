const Notification = (props) => {
  const { notificationText, imageUrl, className } = props;
  return (
    <div className={`${className}`}>
      <img src={`${imageUrl}`} className="image-size" />
      <p className="notification-alignment">{notificationText}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="notification-heading">Notifications</h1>
    <div className="notifications-container">
      <Notification
        notificationText="Information Message"
        imageUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        className="info-container"
      />
      <Notification
        notificationText="Success Message"
        imageUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        className="success-container"
      />
      <Notification
        notificationText="Warning Message"
        imageUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        className="warning-container"
      />
      <Notification
        notificationText="Error Message"
        imageUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        className="error-container"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
