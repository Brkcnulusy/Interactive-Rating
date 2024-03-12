const vote = (function () {
  // Variables

  const votingState = document.querySelector(".js-voting-state");
  const thankState = document.querySelector(".js-thank-you-state");
  const submitButton = document.querySelector(".js-submit-button");
  const chooseMessage = document.querySelector(".js-choose-message");
  const items = document.querySelectorAll(".js-item");
  let rate = "";

  // Event Listeners

  const _eventListeners = function () {
    items.forEach((item) => {
      item.addEventListener("click", _voteChoose);
    });
    submitButton.addEventListener("click", _changeScreen);
  };

  // FunC

  const _voteChoose = function (e) {
    items.forEach((button) => {
      button.classList.remove("active");
    });
    rate = e.target.value;
    const itemClassList = e.target.classList;
    itemClassList.toggle("active");
  };

  const _changeScreen = function () {
    if (rate !== "") {
      votingState.style.display = "none";
      thankState.style.display = "flex";
      chooseMessage.innerHTML = `You selected ${rate} out of 5`;
    }
  };

  return {
    init: function () {
      _eventListeners();
    },
  };
})();
document.addEventListener("DOMContentLoaded", function () {
  vote.init();
});
