import React from "react";

type ClockProps = {
  format?: "12" | "24";
  timezone?: string;
};

type ClockState = {
  time: string;
};

class Clock extends React.Component<ClockProps, ClockState> {
  private timerId: NodeJS.Timeout | null = null;

  constructor(props: ClockProps) {
    super(props);
    this.state = {
      time: this.getCurrentTime(),
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        time: this.getCurrentTime(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  getCurrentTime(): string {
    const { format = "24", timezone = "" } = this.props;
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    let formattedTime = "";
    if (format === "12") {
      const period = hours >= 12 ? "PM" : "AM";
      const hour12 = hours % 12 || 12;
      formattedTime = `${hour12}:${this.padZero(minutes)} ${period}`;
    } else {
      formattedTime = `${this.padZero(hours)}:${this.padZero(minutes)}`;
    }

    if (timezone) {
      const [timezoneHours, timezoneMinutes] = timezone.split(":").map(Number);
      const offsetHours = hours + timezoneHours;
      const offsetMinutes = minutes + timezoneMinutes;

      // Проверяем, чтобы часы оставались в диапазоне 0-23
      const adjustedHours = (offsetHours + 24) % 24;
      const adjustedMinutes = (offsetMinutes + 60) % 60;

      const offsetTime = `${this.padZero(adjustedHours)}:${this.padZero(
        adjustedMinutes
      )}`;
      formattedTime += ` (${offsetTime})`;
    }

    return formattedTime;
  }

  padZero(value: number): string {
    return value.toString().padStart(2, "0");
  }

  render() {
    const { time } = this.state;
    return (
      <div>
        {this.props.format && `FMT: ${this.props.format} `}
        {this.props.timezone && `TZ: ${this.props.timezone} `}
        {`--> ${time}`}
      </div>
    );
  }
}

export default Clock;
