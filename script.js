async function main() {
  await (async () => {
    while (true) {
      setTimeThingy();
      await new Promise(resolve => setTimeout(resolve, 1000))
    }
  })()
}

function setTimeThingy() {
  let time = new Date();
  let hours = (time.getUTCHours() + 2) % 24
  let timeString = time.toLocaleTimeString("uk-UA", {timeZone: "Europe/Kyiv"});
  let message;
  if (hours >= 2 && hours < 10) {
    message = "🔴 Sleeping"
  } else if (hours >= 10 && hours <= 17) {
    message = "🟡 Busy"
  } else {
    message = "🟢 Free to respond"
  }
  document.getElementById("time").innerText = `${timeString} (${message})`;
}