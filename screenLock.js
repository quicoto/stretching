// Create a reference for the Wake Lock.
let wakeLock = null;

// create an async function to request a wake lock
try {
  wakeLock = await navigator.wakeLock.request("screen");
  console.log("Wake Lock is active!");
} catch (err) {
  // The Wake Lock request has failed - usually system related, such as battery.
  console.log(`${err.name}, ${err.message}`);
}