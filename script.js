document.addEventListener("DOMContentLoaded", function () {
  
  updateNotificationCounter();
  updateRedDots();

  function updateNotificationCounter() {
    const notificationPanel = document.querySelector(".notification-panel");
    const unreadMessages = notificationPanel.querySelectorAll(".unread");
    const unreadMessagesCount = unreadMessages.length;
    const notificationCount = notificationPanel.querySelector(
      ".notification-count"
    );
    notificationCount.innerText = `${unreadMessagesCount}`;
    if (!unreadMessagesCount) {
      notificationCount.style.display = "none";
    }
  }

  function updateRedDots() {
    const allMessages = document.querySelectorAll(".notification-item");
    allMessages.forEach(message => {
      const isDot = message.querySelector('.red-dot');
      if(isDot){
        isDot.remove();
      }
    })

    const unreadMessages = document.querySelectorAll(".notification-item.unread");
    unreadMessages.forEach((message) => {
      const redDot = document.createElement("span");
      redDot.classList.add("red-dot");
      message.querySelector(".notification-text").appendChild(redDot);
    });
  }

  const button = document.getElementById("mark-all");
  button.addEventListener("click", () => {
    const notificationPanel = document.querySelector(".notification-panel");
    const notificationItems =
      notificationPanel.querySelectorAll(".notification-item");

    notificationItems.forEach((item) => {
      if (item.classList.contains("unread")) {
        item.classList.remove("unread");
      }
    });
    updateNotificationCounter();
    updateRedDots();
  });

  const unreadItems = document.querySelectorAll(".unread");
  unreadItems.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.remove("unread");
      updateNotificationCounter();
      updateRedDots();
    });
  });
});
