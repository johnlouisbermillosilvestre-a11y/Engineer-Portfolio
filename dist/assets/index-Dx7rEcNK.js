(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function i(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(a){if(a.ep)return;a.ep=!0;const s=i(a);fetch(a.href,s)}})();const n="johnlouisbermillosilvestre@gmail.com",u=[{id:"01",title:"EcoOS",category:"software",description:"A dashboard concept for sustainable hydro-climate engineering workflows.",details:"EcoOS turns environmental readings into a focused engineering workspace with monitoring, alerts, and clear decisions at a glance.",tags:["JavaScript","UI Design","Environmental Tech"]},{id:"02",title:"Budget Transparency System",category:"research",description:"A visual approach to understanding local budget data through numerical methods.",details:"This academic concept uses interpolation and curve fitting to help people explore trends in public budget data more clearly.",tags:["Data Visualization","Numerical Methods","Web Development"]},{id:"03",title:"Engineering Circuit Lab",category:"hardware",description:"Circuit simulations and experiments across analog and digital electronics.",details:"A growing collection of lab work covering logic gates, op-amps, filters, diodes, transistors, and measurement techniques.",tags:["Tinkercad","Falstad","Electronics"]}],v=["Digital Logic Circuits","Fundamentals of Electric Circuits","Electronics & Amplifier Circuits","Operating Systems","Numerical Methods","Computer Programming","Microprocessors & Microcontrollers","Engineering Mathematics","Data Structures & Algorithms","Computer Architecture","Embedded Systems","Engineering Research"],m=u.map(e=>`
  <article class="project-card reveal" data-category="${e.category}">
    <div class="project-top"><span>0${e.id}</span><span class="project-type">${e.category}</span></div>
    <h3>${e.title}</h3><p>${e.description}</p>
    <div class="tags">${e.tags.map(t=>`<span>${t}</span>`).join("")}</div>
    <button class="text-button project-button" data-project="${e.id}">Case study <span>↗</span></button>
  </article>`).join("");document.querySelector("#app").innerHTML=`
  <header class="nav"><div class="container nav-content">
    <a class="logo" href="#home" aria-label="Home">JL<span>.</span></a>
    <button class="menu-toggle" id="menuToggle" aria-label="Open navigation" aria-expanded="false"><i></i><i></i></button>
    <nav id="navigation"> <a class="active" href="#home">Home</a><a href="/about">About</a><a href="#work">Work</a><a href="#coursework">Coursework</a><a href="#contact">Contact</a></nav>
  </div></header>

  <main>
    <section class="hero" id="home"><div class="container hero-grid">
      <div class="hero-copy reveal">
        <p class="eyebrow"><span></span> Computer Engineering · PUP Parañaque</p>
        <h1>I design systems<br>that <em>make sense.</em></h1>
        <p class="intro">I'm <strong>Engr. John Louis B. Silvestre</strong>, a Computer Engineering student at <strong>Polytechnic University of the Philippines – Parañaque Campus</strong>, turning ideas into practical software, electronics, and data-driven engineering solutions.</p>
        <div class="hero-actions"><a class="button button-primary" href="#work">See my work <span>↓</span></a><a class="button button-ghost" href="#contact">Let's connect</a></div>
      </div>
      <aside class="profile-card reveal" aria-label="Portrait of Engr. John Louis B. Silvestre">
        <img src="/john-louis.jpg" alt="Engr. John Louis B. Silvestre" />
        <div class="profile-overlay"><p>ENGR.</p><h2>John Louis<br>Silvestre</h2><span>PUP Parañaque · BSCpE</span></div>
      </aside>
      <aside class="terminal reveal" aria-label="Student profile">
        <div class="terminal-bar"><span></span><span></span><span></span><b>engineer.profile</b></div>
        <pre><code><small>// Current configuration</small>
<b>const</b> student = {
  name: <i>"Engr. John Louis B. Silvestre"</i>,
  degree: <i>"BSCpE"</i>,
  school: <i>"PUP Parañaque"</i>,
  exploring: [
    <i>"software"</i>, <i>"hardware"</i>,
    <i>"embedded systems"</i>
  ],
  status: <i>"building & learning"</i>
};<em class="cursor">_</em></code></pre>
      </aside>
    </div><div class="scroll-note">Scroll to explore <span></span></div></section>

    <section id="about"><div class="container">
      <div class="section-heading reveal"><p class="eyebrow">01 / About me</p><h2>Curious by design.<br>Precise by practice.</h2><p>As a Computer Engineering student at Polytechnic University of the Philippines – Parañaque Campus, I bring together the subjects I enjoy most: code, circuits, systems, and the math behind them. I approach every project as a chance to learn deeply and build something useful.</p></div>
      <div class="pillars">
        <article class="pillar reveal"><span>01</span><h3>Software</h3><p>Building thoughtful web interfaces, algorithms, and digital tools that solve real problems.</p></article>
        <article class="pillar reveal"><span>02</span><h3>Hardware</h3><p>Exploring circuitry, digital logic, microcontrollers, and the systems beneath the screen.</p></article>
        <article class="pillar reveal"><span>03</span><h3>Engineering</h3><p>Using analysis, experimentation, and iteration to make ideas work in the real world.</p></article>
      </div>
    </div></section>

    <section class="work-section" id="work"><div class="container">
      <div class="section-row reveal"><div><p class="eyebrow">02 / Selected work</p><h2>Made to explore.</h2></div><p>Academic concepts, experiments, and engineering work that reflect where I'm growing.</p></div>
      <div class="filters reveal" role="group" aria-label="Filter projects"><button class="selected" data-filter="all">All work</button><button data-filter="software">Software</button><button data-filter="hardware">Hardware</button><button data-filter="research">Research</button></div>
      <div class="project-grid" id="projectGrid">${m}</div>
    </div></section>

    <section id="coursework"><div class="container split-section">
      <div class="sticky-heading reveal"><p class="eyebrow">03 / BSCpE curriculum</p><h2>My engineering<br>foundation.</h2><p>Each course strengthens a different part of how I think, from the smallest logic gate to the full system.</p></div>
      <div class="course-list">${v.map((e,t)=>`<div class="course reveal"><span>${String(t+1).padStart(2,"0")}</span><h3>${e}</h3><b>↗</b></div>`).join("")}</div>
    </div></section>

    <section class="skills-section"><div class="container"><div class="section-row reveal"><div><p class="eyebrow">04 / Capabilities</p><h2>Learning in public.</h2></div><p>A practical, growing toolkit shaped by projects and laboratory work.</p></div>
      <div class="skills-grid">
        <article class="skill-card reveal"><h3>Programming</h3><div class="meter"><div><span>JavaScript / TypeScript</span><b>55%</b></div><i data-progress="55"></i></div><div class="meter"><div><span>Python</span><b>50%</b></div><i data-progress="50"></i></div><div class="meter"><div><span>MATLAB</span><b>48%</b></div><i data-progress="48"></i></div></article>
        <article class="skill-card tags-card reveal"><h3>Engineering</h3><div class="tags"><span>Digital Logic</span><span>Circuit Analysis</span><span>Electronics</span><span>Operating Systems</span><span>Numerical Methods</span><span>Computer Architecture</span></div></article>
        <article class="skill-card tags-card reveal"><h3>Tools</h3><div class="tags"><span>VS Code</span><span>Figma</span><span>Tinkercad</span><span>Falstad</span><span>GitHub</span><span>MATLAB</span></div></article>
      </div>
    </div></section>

    <section class="contact-section" id="contact"><div class="container contact-card reveal"><p class="eyebrow">05 / Contact</p><h2>Let's create<br><em>something useful.</em></h2><p>I'm open to academic collaborations, engineering projects, and opportunities to keep learning.</p><div class="contact-actions"><a class="button button-primary" href="mailto:${n}">Start a conversation <span>↗</span></a><button class="email-copy" id="copyEmail">Copy email address</button></div></div></section>
  </main>
  <footer class="container"><span>© ${new Date().getFullYear()} Engr. John Louis B. Silvestre · PUP Parañaque</span><span>Designed & engineered with TypeScript.</span></footer>
  <dialog id="projectDialog"><button class="dialog-close" aria-label="Close project details">×</button><span id="dialogType"></span><h2 id="dialogTitle"></h2><p id="dialogDetails"></p><div id="dialogTags" class="tags"></div></dialog>
  <button class="top-button" id="topButton" aria-label="Back to top">↑</button>`;const c=document.querySelector("#navigation"),d=document.querySelector("#menuToggle");d.addEventListener("click",()=>{const e=c.classList.toggle("open");d.setAttribute("aria-expanded",String(e))});c.querySelectorAll("a").forEach(e=>e.addEventListener("click",()=>c.classList.remove("open")));const g=new IntersectionObserver(e=>e.forEach(t=>{t.isIntersecting&&(t.target.classList.add("shown"),t.target.querySelectorAll("[data-progress]").forEach(i=>i.style.width=`${i.dataset.progress}%`),g.unobserve(t.target))}),{threshold:.12});document.querySelectorAll(".reveal").forEach(e=>g.observe(e));const p=document.querySelectorAll("[data-filter]");p.forEach(e=>e.addEventListener("click",()=>{p.forEach(i=>i.classList.toggle("selected",i===e));const t=e.dataset.filter;document.querySelectorAll(".project-card").forEach(i=>i.hidden=t!=="all"&&i.dataset.category!==t)}));const r=document.querySelector("#projectDialog");document.querySelectorAll(".project-button").forEach(e=>e.addEventListener("click",()=>{const t=u.find(i=>i.id===e.dataset.project);document.querySelector("#dialogType").textContent=t.category,document.querySelector("#dialogTitle").textContent=t.title,document.querySelector("#dialogDetails").textContent=t.details,document.querySelector("#dialogTags").innerHTML=t.tags.map(i=>`<span>${i}</span>`).join(""),r.showModal()}));document.querySelector(".dialog-close").addEventListener("click",()=>r.close());r.addEventListener("click",e=>{e.target===r&&r.close()});document.querySelector("#copyEmail").addEventListener("click",async e=>{const t=e.currentTarget;try{await navigator.clipboard.writeText(n),t.textContent="Email copied ✓",setTimeout(()=>t.textContent="Copy email address",1800)}catch{window.location.href=`mailto:${n}`}});const h=document.querySelector("#topButton");window.addEventListener("scroll",()=>h.classList.toggle("visible",window.scrollY>700));h.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
