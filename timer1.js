const timers = process.argv.slice(2);

function timerBeep(timers) {
  for (const timer of timers) {
    if (timer >= 0 && !isNaN(timer)) {
      setTimeout(() => {
        console.log(timer);
        process.stdout.write("\x07");
      }, timer * 1000);
    }
  }
};

timerBeep(timers);