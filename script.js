const flexContainer = document.querySelector("#flex-container");
const codeValue = document.querySelector("#code-value");
const description = document.querySelector("#mode-description");
const buttons = document.querySelectorAll(".mode-button");

const modeDescriptions = {
    nowrap: "Giữ tất cả item trên một dòng; nội dung có thể tràn ngang.",
    wrap: "Các item tự động chuyển xuống dòng mới khi hết chỗ.",
    "wrap-reverse": "Các item xuống dòng; thứ tự các dòng trên trục phụ được đảo ngược.",
    initial: "Đặt flex-wrap về giá trị mặc định: nowrap."
};

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const mode = button.dataset.mode;

        flexContainer.dataset.mode = mode;
        codeValue.textContent = mode;
        description.innerHTML = `<strong>${mode}</strong> — ${modeDescriptions[mode]}`;

        buttons.forEach((item) => {
            const isSelected = item === button;
            item.classList.toggle("is-selected", isSelected);
            item.setAttribute("aria-pressed", String(isSelected));
        });
    });
});
