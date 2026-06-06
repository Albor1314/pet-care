import BookingForm from "@/components/BookingForm";
import InteriorCarousel from "@/components/InteriorCarousel";

const customerReviews = [
  {
    quote: "我家狗狗怕吹风，护理师会先让它熟悉声音，再分段吹干，回家一点都没有应激。",
    author: "豆豆主人",
    service: "基础香香洗",
    tag: "怕吹风友好",
  },
  {
    quote: "猫咪第一次在外面洗澡，本来很担心。店里会发过程照片，洗完爪垫和耳朵都很干净。",
    author: "年糕主人",
    service: "猫咪安静洗",
    tag: "猫咪安静护理",
  },
  {
    quote: "修剪前会认真问生活习惯，不是直接照模板剪。夏天这个长度刚刚好，散步也清爽。",
    author: "可乐主人",
    service: "造型修剪",
    tag: "按需造型",
  },
  {
    quote: "以前洗完毛会炸开，这次护理师帮忙做了打结处理，还教我回家怎么梳毛。",
    author: "糯米主人",
    service: "毛发护理",
    tag: "打结处理",
  },
  {
    quote: "预约时间很准，到店不用久等。玻璃窗能看到护理区，主人在外面也比较安心。",
    author: "Lucky 主人",
    service: "小型犬洗护",
    tag: "准时透明",
  },
  {
    quote: "我家小狗皮肤敏感，店员先检查皮肤状态，再换了温和洗剂，洗完没有抓挠。",
    author: "芝麻主人",
    service: "敏感肌洗护",
    tag: "皮肤检查",
  },
];

function CustomerReviews() {
  const scrollingReviews = [...customerReviews, ...customerReviews];

  return (
    <section className="section reviews-section" id="reviews">
      <div className="shell">
        <div className="section-head">
          <h2>客户评价</h2>
          <p className="section-note">洗完不是结束，回家蓬松、稳定、愿意再来，才算真的护理到位。</p>
        </div>

        <div className="review-showcase">
          <div className="review-photo">
            <img
              src="https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?auto=format&fit=crop&w=1200&q=85"
              alt="被抱着的干净小狗"
            />
            <div className="review-score" aria-label="附近社区主人评分 4.9 分">
              <strong>4.9</strong>
              <span>附近社区主人评分</span>
            </div>
          </div>

          <div className="review-marquee" aria-label="客户评价动画轮播">
            <div className="review-track">
              {scrollingReviews.map((review, index) => (
                <article className="review-card" key={`${review.author}-${index}`}>
                  <div className="review-card-top">
                    <span>{review.tag}</span>
                    <b>★★★★★</b>
                  </div>
                  <p>“{review.quote}”</p>
                  <div className="review-author">
                    <strong>{review.author}</strong>
                    <span>{review.service}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MapBoard() {
  return (
    <div
      className="map-board footer-map"
      role="img"
      aria-label="泡泡尾巴宠物洗护店在上海市陕西北路 1620 号的可爱风格定位地图"
    >
      <div className="map-title">
        <span className="paw">爪</span> 泡泡爪 Pet Spa 来店地图 <span className="paw">爪</span>
      </div>
      <div className="map-compass" aria-hidden="true">
        ✦
      </div>
      <span className="map-bubble one" aria-hidden="true" />
      <span className="map-bubble two" aria-hidden="true" />
      <div className="map-road main" />
      <div className="map-road cross" />
      <div className="map-road ring" />
      <div className="map-road diagonal" />
      <span className="road-label main">陕西北路</span>
      <span className="road-label cross">长寿路方向</span>
      <div className="map-park" aria-hidden="true" />
      <div className="map-block" aria-hidden="true" />
      <div className="map-block small" aria-hidden="true" />
      <span className="map-place hospital">普陀区人民医院</span>
      <span className="map-place bank">上海农商银行</span>
      <span className="map-place park-name">光明公园</span>
      <span className="map-place shop">社区小店</span>
      <div className="speech-bubble">就在这里</div>
      <div className="store-kiosk" aria-hidden="true" />
      <div className="pet-duo" aria-hidden="true">
        狗猫
      </div>
      <span className="paw-print one" aria-hidden="true">
        爪
      </span>
      <span className="paw-print two" aria-hidden="true">
        爪
      </span>
      <div className="store-pin">
        <div className="pin-bubble">
          <span>爪</span>
        </div>
        <div className="store-label">
          <strong>泡泡尾巴 PET SPA</strong>
          <span>陕西北路 1620 号</span>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <nav className="nav">
        <div className="shell nav-inner">
          <a className="brand" href="#top" aria-label="泡泡尾巴宠物洗护店首页">
            <span className="brand-mark">爪</span>
            <span>泡泡尾巴 PET SPA</span>
          </a>
          <div className="nav-links" aria-label="页面导航">
            <a href="#services">服务</a>
            <a href="#booking">预约</a>
            <a href="#reviews">客户评价</a>
            <a href="#interior">环境</a>
            <a href="#location">位置</a>
            <a className="button primary" href="#booking">
              立即预约
            </a>
          </div>
        </div>
      </nav>

      <main id="top">
        <section className="hero">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">上海本地宠物洗护 · 小型犬猫友好</div>
              <h1>泡泡尾巴宠物洗护店</h1>
              <p className="lead">低噪烘干、独立洗护间、皮毛状态评估。让狗狗猫猫干净回家，也让主人放心一点。</p>
              <div className="hero-actions">
                <a className="button primary" href="#booking">
                  预约洗护
                </a>
                <a className="button" href="#services">
                  查看套餐
                </a>
              </div>
              <div className="mini-stats" aria-label="店铺亮点">
                <div className="stat">
                  <strong>45min</strong>
                  <span>小型犬基础洗护最快完成</span>
                </div>
                <div className="stat">
                  <strong>1v1</strong>
                  <span>每只宠物独立护理记录</span>
                </div>
                <div className="stat">
                  <strong>4.9</strong>
                  <span>附近社区主人评分</span>
                </div>
              </div>
            </div>

            <div className="hero-photo" aria-label="宠物洗护照片">
              <img
                src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1100&q=85"
                alt="洗护后开心的小狗"
              />
              <div className="hero-ticket">
                <div>
                  <b>今日还有 3 个空位</b>
                  <span>适合基础洗护、爪爪护理、猫咪洁净护理</span>
                </div>
                <a className="button primary" href="#booking">
                  抢先约
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="shell">
            <div className="section-head">
              <h2>从一身泡泡，到一条蓬松尾巴。</h2>
              <p className="section-note">所有套餐都会先做皮肤、耳朵、爪垫状态检查，再决定洗护用品和烘干强度。</p>
            </div>

            <div className="services">
              <article className="service">
                <img
                  src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=700&q=85"
                  alt="两只干净的狗狗"
                />
                <div className="service-body">
                  <h3>基础香香洗</h3>
                  <p>洁净沐浴、吹干梳毛、耳眼清洁、足底护理。</p>
                  <span className="price">¥88 起</span>
                </div>
              </article>

              <article className="service">
                <img
                  src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=700&q=85"
                  alt="金毛犬洗护造型"
                />
                <div className="service-body">
                  <h3>造型修剪</h3>
                  <p>圆脸、泰迪装、夏季清爽剪，按毛量和体型定价。</p>
                  <span className="price">¥168 起</span>
                </div>
              </article>

              <article className="service">
                <img
                  src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=700&q=85"
                  alt="猫咪肖像"
                />
                <div className="service-body">
                  <h3>猫咪安静洗</h3>
                  <p>低接触节奏、低噪吹干，适合胆小或第一次到店猫咪。</p>
                  <span className="price">¥128 起</span>
                </div>
              </article>

              <article className="service">
                <img
                  src="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?auto=format&fit=crop&w=700&q=85"
                  alt="宠物爪子护理"
                />
                <div className="service-body">
                  <h3>爪爪护理</h3>
                  <p>剪指甲、磨甲、足底毛修剪、爪垫保湿护理。</p>
                  <span className="price">¥39 起</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section band" id="booking">
          <div className="shell booking-grid">
            <div>
              <div className="section-head">
                <h2>预约一个舒服的洗澡时间。</h2>
              </div>
              <div className="schedule" aria-label="今日预约空位">
                <div className="slot">
                  <div>
                    <strong>10:30</strong>
                    <span>小型犬基础洗护</span>
                  </div>
                  <strong>可约</strong>
                </div>
                <div className="slot">
                  <div>
                    <strong>14:00</strong>
                    <span>猫咪洁净护理</span>
                  </div>
                  <strong>可约</strong>
                </div>
                <div className="slot">
                  <div>
                    <strong>17:20</strong>
                    <span>造型修剪 + 爪爪护理</span>
                  </div>
                  <strong>可约</strong>
                </div>
              </div>
            </div>

            <BookingForm />
          </div>
        </section>

        <CustomerReviews />

        <section className="section interior-section" id="interior">
          <div className="shell">
            <div className="section-head">
              <h2>店内环境</h2>
              <p className="section-note">以中国一线城市高端宠物洗护店为参考，分区清晰、动线安静，洗护区和等待区互不打扰。</p>
            </div>

            <InteriorCarousel />
          </div>
        </section>
      </main>

      <footer className="footer" id="location">
        <div className="shell footer-grid">
          <div className="footer-info">
            <h2>门店信息</h2>
            <h3>泡泡尾巴 PET SPA</h3>
            <div className="contact">
              <span>地址：上海市陕西北路 1620 号</span>
              <span>营业时间：周一至周日 10:00 - 20:00</span>
              <span>电话：021-8888-2026</span>
            </div>
            <a className="button primary" href="#booking">
              预约到店
            </a>
          </div>
          <MapBoard />
        </div>
      </footer>
    </>
  );
}
