"use client";

import { FormEvent, useEffect, useState } from "react";

function formatDate(date: Date) {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

export default function BookingForm() {
  const [today, setToday] = useState("");
  const [formKey, setFormKey] = useState(0);
  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    setToday(formatDate(new Date()));
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setToastVisible(true);
    setFormKey((key) => key + 1);
    window.setTimeout(() => setToastVisible(false), 3200);
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
            <input name="date" type="date" min={today} defaultValue={today} required />
          </label>
          <label>
            到店时间
            <input name="time" type="time" required />
          </label>
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
        预约信息已收到，前台稍后会联系你确认时间。
      </div>
    </>
  );
}
