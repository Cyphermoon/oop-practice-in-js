function StopWatch() {
    let stopWatchStarted = false
    let startTime, stopTime = null

    let duration = 0

    this.start = function () {
        if (stopWatchStarted)
            throw new Error("Stop watch already started")

        stopWatchStarted = !stopWatchStarted

        startTime = new Date().getTime()

    }

    this.stop = function () {
        if (!stopWatchStarted) throw new Error("stopwatch is not started")

        stopWatchStarted = !stopWatchStarted

        stopTime = new Date().getTime()

        let seconds = (stopTime - startTime) / 1000

        duration += seconds
    }

    this.reset = function () {
        duration = 0
        startTime, endTime = 0
        stopWatchStarted = false
    }

    Object.defineProperty(this, "duration", {
        get: () => duration
    })
}

let sw = new StopWatch()

console.log(sw.duration)



