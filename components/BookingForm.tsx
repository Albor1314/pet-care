"use client";

import { FormEvent, useEffect, useState } from "react";

const BEIJING_UTC_OFFSET_MS = 8 * 60 * 60 * 1000;
const MIN_ARRIVAL_TIME = "08:30";
const MAX_ARRIVAL_TIME = "19:00";
const DEFAULT_ARRIVAL_TIME = MIN_ARRIVAL_TIME;
const ARRIVAL_TIME_STEP_MINUTES = 30;

function timeToMinutes(time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function minutesToTime(totalMinutes: number) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

const arrivalTimeOptions = Array.from(
  {
    length:
      Math.floor((timeToMinutes(MAX_ARRIVAL_TIME) - timeToMinutes(MIN_ARRIVAL_TIME)) / ARRIVAL_TIME_STEP_MINUTES) + 1,
  },
  (_, index) => minutesToTime(timeToMinutes(MIN_ARRIVAL_TIME) + index * ARRIVAL_TIME_STEP_MINUTES),
);

function formatDateFromUTC(date: Date) {
  const yyyy = date.getUTCFullYear();
  const mm = String(date.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(date.getUTCDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function getTomorrowInBeijing() {
  const beijingDate = new Date(Date.now() + BEIJING_UTC_OFFSET_MS);
  beijingDate.setUTCDate(beijingDate.getUTCDate() + 1);
  return formatDateFromUTC(beijingDate);
}

function clampArrivalTime(time: string) {
  if (!time) {
    return "";
  }

  if (time < MIN_ARRIVAL_TIME) {
    return MIN_ARRIVAL_TIME;
  }

  if (time > MAX_ARRIVAL_TIME) {
    return MAX_ARRIVAL_TIME;
  }

  return time;
}

function buildExpectedArrivalAtBeijing(date: string, time: string) {
  const safeTime = clampArrivalTime(time);
  return date && safeTime ? `${date}T${safeTime}` : "";
}

export default function BookingForm() {
  const [minimumDate, setMinimumDate] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [arrivalTime, setArrivalTime] = useState(DEFAULT_ARRIVAL_TIME);
  const [expectedArrivalAtBeijing, setExpectedArrivalAtBeijing] = useState("");
  const [formKey, setFormKey] = useState(0);
  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    const defaultBookingDate = getTomorrowInBeijing();

    setMinimumDate(defaultBookingDate);
    setBookingDate(defaultBookingDate);
    setArrivalTime(DEFAULT_ARRIVAL_TIME);
    setExpectedArrivalAtBeijing(buildExpectedArrivalAtBeijing(defaultBookingDate, DEFAULT_ARRIVAL_TIME));
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const defaultBookingDate = getTomorrowInBeijing();

    setToastVisible(true);
    setMinimumDate(defaultBookingDate);
    setBookingDate(defaultBookingDate);
    setArrivalTime(DEFAULT_ARRIVAL_TIME);
    setExpectedArrivalAtBeijing(buildExpectedArrivalAtBeijing(defaultBookingDate, DEFAULT_ARRIVAL_TIME));
    setFormKey((key) => key + 1);
    window.setTimeout(() => setToastVisible(false), 3200);
  }

  function handleBookingDateChange(value: string) {
    setBookingDate(value);
    setExpectedArrivalAtBeijing(buildExpectedArrivalAtBeijing(value, arrivalTime));
  }

  function handleArrivalTimeChange(value: string) {
    const safeArrivalTime = clampArrivalTime(value);

    setArrivalTime(safeArrivalTime);
    setExpectedArrivalAtBeijing(buildExpectedArrivalAtBeijing(bookingDate, safeArrivalTime));
  }

  return (
    <>
      <form className="form-panel" id="bookingForm" key={formKey} onSubmit={handleSubmit}>
        <div className="form-grid">
          <label>
            主人姓名
            <input name="owner" autoComplete="name" placeholder="例如：王小姐" required />
          </label>
          <label>
            联系电话
            <input name="phone" inputMode="tel" autoComplete="tel" placeholder="手机号" required />
          </label>
          <label>
            宠物类型
            <select name="pet" defaultValue="小型犬">
              <option>小型犬</option>
              <option>中大型犬</option>
              <option>猫咪</option>
              <option>其他小宠</option>
            </select>
          </label>
          <label>
            服务项目
            <select name="service" defaultValue="基础香香洗">
              <option>基础香香洗</option>
              <option>造型修剪</option>
              <option>猫咪安静洗</option>
              <option>爪爪护理</option>
            </select>
          </label>
          <label>
            预约日期
            <input
              name="date"
              type="date"
              min={minimumDate}
              value={bookingDate}
              onChange={(event) => handleBookingDateChange(event.target.value)}
              required
            />
          </label>
          <label>
            到店时间（08:30–19:00）
            <select
              name="time"
              value={arrivalTime}
              onChange={(event) => handleArrivalTimeChange(event.target.value)}
              required
            >
              {arrivalTimeOptions.map((time) => (
                <option value={time} key={time}>
                  {time}
                </option>
              ))}
            </select>
          </label>
          <input type="hidden" name="expectedArrivalAtBeijing" value={expectedArrivalAtBeijing} />
          <label className="full">
            特殊情况
            <textarea name="note" placeholder="例如：怕吹风、皮肤敏感、第一次到店" />
          </label>
        </div>
        <div className="form-foot">
          <span className="hint">提交后前台会在 15 分钟内电话确认。</span>
          <button className="button primary" type="submit">
            提交预约
          </button>
        </div>
      </form>

      <div className={`toast${toastVisible ? " show" : ""}`} role="status" aria-live="polite">
        预约信息已收到，前台会按北京时间记录并稍后联系你确认。
      </div>
    </>
  );
}
