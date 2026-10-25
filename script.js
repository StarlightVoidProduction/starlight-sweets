const availability = {
  "2026-10-24": "available",
  "2026-10-25": "available",
  "2026-10-30": "available",
  "2026-10-31": "limited",
  "2026-11-01": "sold"
};

let displayedMonth = new Date(2026, 9, 1);

const calendarTitle = document.getElementById("calendarTitle");
const calendarDays = document.getElementById("calendarDays");
const availabilityMessage = document.getElementById("availabilityMessage");
const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");

function formatKey(year, month, day) {
  return (
    year +
    "-" +
    String(month + 1).padStart(2, "0") +
    "-" +
    String(day).padStart(2, "0")
  );
}

function drawCalendar() {
  calendarDays.innerHTML = "";

  const year = displayedMonth.getFullYear();
  const month = displayedMonth.getMonth();

  calendarTitle.textContent =
    displayedMonth.toLocaleString("en-US", {
      month: "long",
      year: "numeric"
    });

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement("div");
    empty.className = "calendar-day empty";
    calendarDays.appendChild(empty);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dateKey = formatKey(year, month, day);
    const status = availability[dateKey];

    const dateButton = document.createElement("button");

    dateButton.type = "button";
    dateButton.className = "calendar-day";
    dateButton.textContent = day;

    if (status) {
      dateButton.classList.add(status);

      dateButton.addEventListener("click", function () {
        const niceDate = new Date(
          year,
          month,
          day
        ).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric"
        });

        if (status === "available") {
          availabilityMessage.textContent =
            niceDate + " — Orders available! 🎀";
        }

        if (status === "limited") {
          availabilityMessage.textContent =
            niceDate + " — Limited spots remaining.";
        }

        if (status === "sold") {
          availabilityMessage.textContent =
            niceDate + " — Sold out.";
        }
      });
    }

    calendarDays.appendChild(dateButton);
  }
}

prevMonth.addEventListener("click", function () {
  displayedMonth = new Date(
    displayedMonth.getFullYear(),
    displayedMonth.getMonth() - 1,
    1
  );

  drawCalendar();
});

nextMonth.addEventListener("click", function () {
  displayedMonth = new Date(
    displayedMonth.getFullYear(),
    displayedMonth.getMonth() + 1,
    1
  );

  drawCalendar();
});

drawCalendar();
