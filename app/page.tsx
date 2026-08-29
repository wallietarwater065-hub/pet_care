import { EnvironmentCarousel } from "@/components/EnvironmentCarousel";

const services = [
  {
    icon: "B",
    title: "犬猫基础精洗",
    copy: "温和清洁、耳眼护理、指甲修整和足底护理，适合日常焕新。",
    tags: ["低刺激香波", "吹护分段", "护理记录"]
  },
  {
    icon: "C",
    title: "毛结护理与皮毛调理",
    copy: "先判断毛结密度和皮肤状态，再决定开结、修剪或保湿护理。",
    tags: ["先检查", "少拉扯", "分毛质护理"]
  },
  {
    icon: "S",
    title: "造型修剪",
    copy: "根据体型、毛量和日常打理习惯设计线条，不追求模板化造型。",
    tags: ["造型沟通", "局部修饰", "回家好打理"]
  }
];

const steps = [
  ["01", "到店检查", "记录皮肤、耳道、毛结和情绪状态。"],
  ["02", "沟通方案", "确认洗护用品、修剪范围和预计时长。"],
  ["03", "分段护理", "清洁、吹护、修剪之间留出缓冲时间。"],
  ["04", "交付记录", "反馈本次护理情况和回家注意事项。"]
];

const prices = [
  ["¥88", "小型犬精洗", ["适合 8kg 以下", "含耳眼、指甲、足底", "约 90 分钟"]],
  ["¥128", "猫咪精洗", ["预约制安静时段", "含基础梳毛护理", "约 120 分钟"]],
  ["¥168", "造型修剪", ["含洗护和修剪沟通", "适合常规宠物造型", "约 150 分钟"]],
  ["¥39", "单项护理", ["剪指甲、清耳、剃足底", "适合日常维护", "到店即做"]]
];

const reviews = [
  ["我家狗以前吹风会躲，这里会慢慢来，中间还给它休息。洗完毛很蓬，但味道不会刺鼻。", "土豆家长", "5.0"],
  ["猫咪第一次在外面洗澡，店员会提前问很多细节，还会告诉我哪些地方有点干。", "年糕家长", "4.9"],
  ["修剪不是千篇一律，会按它腿短的特点改线条，回家以后也很好梳，省心很多。", "丸子家长", "5.0"]
];

export default function Home() {
  return (
    <>
      <header className="site-header" aria-label="主导航">
        <a className="brand" href="#top" aria-label="毛茸研究所首页">
          <span className="brand-mark" aria-hidden="true" />
          <span>毛茸研究所</span>
        </a>
        <nav className="nav" aria-label="页面导航">
          <a href="#services">洗护项目</a>
          <a href="#process">安心流程</a>
          <a href="#prices">价格</a>
          <a href="#booking">门店位置</a>
          <a href="#booking">预约</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-label="宠物洗护店介绍">
          <div className="hero-content">
            <p className="kicker">Pet grooming studio</p>
            <h1>把洗护变成一次温柔的放松</h1>
            <p className="hero-text">
              社区型犬猫洗护店，分龄分毛质护理。少等待、低刺激、全程可视，让敏感的小朋友也能慢慢放松。
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#booking">立即预约</a>
              <a className="btn btn-secondary" href="tel:18800001234">电话咨询</a>
            </div>
          </div>
        </section>

        <div className="quick-strip" aria-label="门店亮点">
          <div className="quick-item"><span className="quick-label">营业时间</span><span className="quick-value">10:00 至 21:00</span></div>
          <div className="quick-item"><span className="quick-label">到店方式</span><span className="quick-value">提前预约优先</span></div>
          <div className="quick-item"><span className="quick-label">适合对象</span><span className="quick-value">犬猫全毛型</span></div>
          <div className="quick-item"><span className="quick-label">护理记录</span><span className="quick-value">每次留档跟进</span></div>
        </div>

        <section id="services">
          <div className="wrap">
            <div className="section-head">
              <div>
                <p className="eyebrow">洗护项目</p>
                <h2>先看状态，再决定怎么洗</h2>
              </div>
              <p className="section-copy">每只宠物到店后先做皮肤、耳道、毛结和情绪检查，再选择清洁、护理和吹整方式。</p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <div className="service-top">
                    <span className="service-icon" aria-hidden="true">{service.icon}</span>
                    <h3>{service.title}</h3>
                  </div>
                  <p>{service.copy}</p>
                  <div className="service-tags">
                    {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="process" id="process">
          <div className="wrap">
            <div className="section-head">
              <div>
                <p className="eyebrow">安心流程</p>
                <h2>四步把不确定变少</h2>
              </div>
              <p className="section-copy">我们把洗护拆成四个可追踪步骤，降低宠物紧张，也让沟通更清楚。</p>
            </div>
            <div className="wash-line">
              {steps.map(([number, title, copy]) => (
                <div className="step" key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="prices">
          <div className="wrap">
            <div className="section-head">
              <div>
                <p className="eyebrow">基础价格</p>
                <h2>价格清楚，护理不赶</h2>
              </div>
              <p className="section-copy">实际价格会根据体重、毛结、攻击性、护理时长调整。预约时可先发照片预估。</p>
            </div>
            <div className="prices-layout">
              <aside className="price-note">
                <h3>首次到店建议预留 2 小时</h3>
                <p>敏感、年长、幼龄宠物会安排更慢的节奏。我们宁愿少接一单，也不赶着完成护理。</p>
              </aside>
              <div className="price-grid">
                {prices.map(([price, title, items]) => (
                  <article className="price-card" key={title as string}>
                    <p className="price">{price} <small>起</small></p>
                    <h3>{title}</h3>
                    <ul>{(items as string[]).map((item) => <li key={item}>{item}</li>)}</ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="environment" aria-label="店内环境">
          <div className="wrap">
            <EnvironmentCarousel />
          </div>
        </section>

        <section>
          <div className="wrap">
            <div className="section-head">
              <div>
                <p className="eyebrow">主人反馈</p>
                <h2>熟客最常说的是“它没有那么怕了”</h2>
              </div>
              <p className="section-copy">洗护不只是洗干净，情绪稳定也是服务的一部分。</p>
            </div>
            <div className="reviews">
              {reviews.map(([copy, name, rating]) => (
                <article className="review-card" key={name}>
                  <p>{copy}</p>
                  <div className="reviewer">
                    <span>{name}</span>
                    <span className="rating">{rating}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="booking" id="booking">
          <div className="wrap">
            <div className="booking-panel">
              <div className="booking-info">
                <div className="contact-box">
                  <p className="eyebrow">预约到店</p>
                  <h2>今天留一个清爽名额</h2>
                  <ul className="contact-list">
                    <li><span>电话</span>188 0000 1234</li>
                    <li><span>地址</span>上海市宜川路街道陕西北路1620号</li>
                    <li><span>营业</span>周一至周日 10:00 至 21:00</li>
                  </ul>
                </div>
                <figure className="store-map" aria-label="门店位置地图">
                  <img src="/assets/store-location-map.png" alt="上海市宜川路街道陕西北路1620号附近的清爽宠物店风格地图，店铺位置已用爪印图钉标记" />
                  <figcaption className="store-map-label">
                    <span>门店位置</span>
                    <strong>毛茸研究所</strong>
                    <p>上海市宜川路街道陕西北路1620号</p>
                  </figcaption>
                </figure>
              </div>

              <form action="#" method="post">
                <label>主人姓名<input type="text" name="owner" placeholder="例如：小林" autoComplete="name" /></label>
                <label>联系电话<input type="tel" name="phone" placeholder="用于确认预约" autoComplete="tel" /></label>
                <label>宠物类型<select name="pet"><option>小型犬</option><option>中大型犬</option><option>猫咪</option><option>其他</option></select></label>
                <label>想预约的项目<select name="service"><option>犬猫精洗</option><option>造型修剪</option><option>皮毛护理</option><option>单项护理</option></select></label>
                <label className="wide">补充说明<textarea name="message" placeholder="可以写宠物体重、毛结情况、是否怕吹风等" /></label>
                <p className="form-note wide">提交后门店会在营业时间内联系确认。此静态页面不会真的发送信息，可接入你的表单服务。</p>
                <button className="btn btn-primary wide" type="submit">发送预约信息</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <span>毛茸研究所 Pet Grooming Studio</span>
          <span>精洗、修剪、护理、预约到店</span>
        </div>
      </footer>
    </>
  );
}
