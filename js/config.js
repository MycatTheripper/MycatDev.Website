// วางเพลงในโฟลเดอร์ audio/ เพิ่มบรรทัดใน tracks
// order = ลำดับเล่น (1,2,3...) เล่นตามเลขน้อยไปมาก แล้ววนกลับ 1
// เพลงเดียว = วนซ้ำเพลงเดิมเรื่อยๆ
window.PLAYER_CONFIG = {
  tracks: [
    { order: 1, file: 'audio/ขึ้นใจ.mp3', title: 'ขึ้นใจ', artist: 'Mirrr Ft. BLVCKHEART', cover: 'ขึ้นใจ.jpg' },
    { order: 2, file: 'audio/ครองโลก.mp3', title: 'ครองโลก', artist: 'YUNGTARR', cover: 'ครองโลก.png' },
    { order: 3, file: 'audio/มันก็เป็นแค่ครั้งหนึ่ง.mp3', title: 'มันก็เป็นแค่ครั้งหนึ่ง',  artist: 'MaxMillor ft. SURIYA MQT', cover: 'มันก็เป็นแค่ครั้งหนึ่ง.png' },
    { order: 4, file: 'audio/มะงือๆ.mp3', title: 'มะงือๆ',  artist: 'กุตัดอ้อยแมน UNREAL BOXING', cover: 'มะงือๆ.jpeg' },
    { order: 5, file: 'audio/Ariana Grande - bye.mp3', title: 'Ariana Grande - bye',  artist: 'Altare Remix', cover: 'Ariana Grande - bye.png' },
    { order: 6, file: 'audio/Black Coast.mp3', title: 'Black Coast',  artist: 'TRNDSTTR x seanopry', cover: 'Black Coast.png' },
  ],

  // แพตเทินเอง : ใส่เลข order ซ้ำได้ เช่น [1, 2, 1, 3] เล่น 1→2→1→3 แล้ววนใหม่
  // [] = เล่นเรียง order ปกติ
  pattern: [5, 2, 1, 3, 4],

  coverDir: 'images/audio/',
  defaultCover: '',

  volume: 0.5,      // เสียงเริ่มต้น 0 - 1
  autoplay: true,   // เพลงเข้าทันที
  loop: true,       // false = เล่นจบลิสต์แล้วหยุด
  fadeIn: 2500,     // ms จางเข้าตอนเริ่มเพลง
  fadeOut: 600,     // ms จางออกตอนกดหยุด
  tailFade: 3,      // วินาทีท้ายเพลงที่จางลงก่อนเปลี่ยนเพลง (0 = ปิด)
};

window.DISCORD_CONFIG = {
  Discord_ID: '1142140671415820338',
  DADL: 'images/Avatar Decorations/',
  Discord_Avatar_Decorations: 'avatar0',
  DVDL: 'images/Video Decorations/',
  Discord_Video_Decorations: 'video',
  Name_Dis: 'Mycat',
  Discord_Url: 'https://discord.com/users/1142140671415820338',
};

window.TIKTOK_CONFIG = {
  Tiktok_Name: 'วิ่งแลกแว่น',
  Tiktok_tag: '@mycattheripper',
  TAD: 'images/Avatar Decorations/',
  Tiktok_Avatar_Decorations: 'avatar7',
  TVD: 'images/Video Decorations/',
  Tiktok_Video_Decorations: '',
  TA: 'images/Avatar/',
  Tiktok_Avatar: 'Tiktokavatar',
  Name_Tiktok: 'Mycat',
  Tiktok_Url: 'https://www.tiktok.com/@mycattheripper',
};

window.INSTAGRAM_CONFIG = {
  Instagram_Name: '_mxnqvi6',
  Instagram_tag: '@_mxnqvi6',
  IAD: 'images/Avatar Decorations/',
  Instagram_Avatar_Decorations: 'avatar6',
  IVD: 'images/Video Decorations/',
  Instagram_Video_Decorations: '',
  IA: 'images/Avatar/',
  Instagram_Avatar: 'Instagramavatar',
  Name_Instagram: 'Mycat',
  Instagram_Url: 'https://www.instagram.com/_mxnqvi6?stkn=YzQwZmYzYzI4M3dq',
}

window.ROBLOX_CONFIG = {
  Roblox_Name: 'LeonSKennedy',
  Roblox_tag: '@4f8khx',
  RAD: 'images/Avatar Decorations/',
  Roblox_Avatar_Decorations: 'avatar5',
  RVD: 'images/Video Decorations/',
  Roblox_Video_Decorations: '',
  RA: 'images/Avatar/',
  Roblox_Avatar: 'Robloxavatar',
  Name_Roblox: 'Mycat',
  Roblox_Url: 'https://www.roblox.com/th/users/3088189393/profile',
}

window.PAGE_CONFIG = {
  only: [5],      // นล็อกเฉพาะเพจที่ระบุ เช่ [5] = ล็อกเฉพาะเพจ 5 | [] = ล็อกทุกเพจ (เลขเพจนับจาก 1 ตามลำดับ)
  maxSpeed: 3,  // ความเร็วเลื่อนสูงสุดที่ยังล็อก (px/มิลลิวินาที) เลื่อนเร็วกว่านี้ = ไม่ล็อก | 0 = ล็อกทุกความเร็ว | ล็อกยากไป ใส่ค่าเพิ่ม, ล็อกง่ายไป ใส่ค่าลด
  lockMs: 700,   // เวลาล็อก (มิลลิวินาที) 1500 = 1.5 วินาที | 0 = ไม่ล็อก
  selector: 'main, .page2, [data-page]',
};

window.STUDIO_CONFIG = {
  dir: 'images/MycatStudio/',
  images: ['Previewproduct001.png', 'Previewproduct002.png', 'Previewproduct003.png'],
  speed: 26,      // วินาทีต่อหมุนหนึ่งรอบ (ยิ่งมากยิ่งช้า)
  size: 190,      // ความกว้างรูป px (จอเล็กย่อเองอัตโนมัติ)
  aspect: 0.75,   // สูง/กว้าง 1.25 = แนวตั้ง | 1 = จัตุรัส | 0.75 = แนวนอน
  frame: true,    // กรอบขาวรอบรูป
};

window.STUDIO3_CONFIG = {
  dir: 'images/Murazaki/',
  images: [
    { file: 'Previewproduct001.png',  w: 250, aspect: 0.62, tiltX: 2, tiltY: 28,  tiltZ: -6, y: 40, z: -50 },
    { file: 'PreviewproductR.png', w: 230, aspect: 1.5,  tiltX: 0, tiltY: -10, tiltZ: 2,  y: 0,  z: 40 },
  ],
  zoom: false,    // false = กดรูปแล้วไม่ขยาย | true = กดขยายกลางจอ
  spin: false,    // false = ไม่หมุน วางเรียงซ้าย-ขวา | true = หมุนรอบฐาน
  gap: -70,       // ระยะห่างระหว่างรูป px ค่าลบ = ซ้อนทับกัน (ใช้ตอน spin:false) | ใส่ x: px ในแต่ละรูปเพื่อกำหนดตำแหน่งเอง
  lift: 16,       // ตอนเอาเมาส์ชี้: ระยะที่ 2 รูปแยกออกจากกัน px
  speed: 30,      // วินาทีต่อหมุนหนึ่งรอบ (ใช้ตอน spin:true)
  radius: null,   // รัศมีวงโคจร px (ใช้ตอน spin:true, null = อัตโนมัติ)
  size: 220,      // ความกว้างอ้างอิง (ย่อเองบนจอเล็ก)
  aspect: 0.75,   // สูง/กว้าง ค่าเริ่มต้นของรูปที่ไม่ได้ระบุ h/aspect
  frame: true,
};

window.PARTNERS_CONFIG = {
  Name_Dis: 'Partners',
  Discord_Url: 'https://liable-amaranth-pj2zuyyx.edgeone.dev/',
  Button_Text: { th: 'ดิสคอร์ด', en: 'Discord' },
  Avatar: 'images/Partners/xylos.png',                               
  Display_Name: 'Xylos',                  // ชื่อที่แสดง
  Username: '@xylos',                     // ชื่อยูสเซอร์ใต้ชื่อ
  Status: 'online',                          // จุดสถานะ: online | idle | dnd | offline
  Status_Text: { th: '', en: '' },           // ข้อความสถานะ (ว่าง = ใช้คำมาตรฐานตาม Status)
  Guild_Tag: 'XOLOS',                             // แท็กเซิร์ฟเวอร์ท้ายชื่อ เช่น 'MYCAT' (ว่าง = ไม่แสดง)
  Guild_Badge: 'images/Partners/xylos.png',                           // ไอคอนแท็ก เช่น 'images/Partners/tag.png' (ว่าง = ไม่แสดง)
  Bubble: { th: 'เข้ามาหาเพื่อนได้นะคับ', en: 'You can come here to make friends.' },                // ข้อความ (ว่าง = ซ่อนฟอง)
  Bubble_Emoji: '🐯',                          // อีโมจิหน้าข้อความ เช่น '🔥' หรือพาธรูป 'images/Partners/emo.png'
  Card_Small: { th: 'ตอนนี้', en: 'Right now' },
  Card_Title: { th: 'หลงอยู่ในโลกแห่งความฝัน', en: 'Lost in the world of dreams.' },
  Card_Sub:   { th: 'เข้ามาตามในดิสสิ', en: 'Come join us on Discord!.' },
  Card_Url: '',                              // กดการ์ด = เปิดลิงก์ (ว่าง = ไม่เป็นลิงก์)
  DADL: 'images/Avatar Decorations/',
  Discord_Avatar_Decorations: 'avatar8',            // ตัวตกแต่งรอบรูป (.gif) ว่าง = ไม่ใส่
  DVDL: 'images/Video Decorations/',
  Discord_Video_Decorations: '',             // วิดีโอพื้นหลังหลังชื่อ ว่าง = ไม่ใส่
  hero: 'images/Partners/xylos.png',         // รูปใหญ่ด้านขวา (png/jpg/gif/mp4/webm) (ไม่มีไฟล์ = ไม่แสดง)
};

window.TEAM_CONFIG = {
  eyebrow: { th: 'ทีมของฉัน', en: 'My Team' },
  title: 'CØDEXIASTACK',
  text: {
    th: 'ทีมที่มุ่งเน้นการเขียนโค้ดทำหน้าเว็บทำเกมทำหลังบ้านเป็นหลัก',
    en: 'A team focused on coding: web pages, games and back-end.',
  },
  hero: 'images/Team/logo1-1nobg.png',
  color: '#050505',

  members: [
    {
      name: 'MYCAT DEV',                                // ชื่อใหญ่ในโปรไฟล์
      image: 'images/Avatar/mycat.jpg',            // รูปในแถบเลื่อน
      bubble: { th: 'FullStack แต่ถนัดภาษาไทย', en: 'FullStack, but proficient in Thai.' }, // ข้อความใต้รูปในแถบเลื่อน
      theme: 'page1', fx: 'bullet',                 // ธีม + เอฟเฟค (bullet = ปลอกกระสุนร่วง + กระจกแตก)
      hero: 'images/mikey.png',                    // รูปใหญ่ด้านขวา (png/jpg/gif/mp4/webm)
      color: '#0a0a0a',                             // สีธีมตอนเลือก
      Discord_ID: '1142140671415820338',            // เรียลไทม์: รูป ชื่อ สถานะ สิ่งที่กำลังทำ (ว่าง = ใช้ค่าด้านล่างแทน)
      Discord_Url: 'https://discord.com/users/1142140671415820338',   // กดชื่อเล็ก = เปิดลิงก์
      DADL: 'images/Avatar Decorations/',
      Discord_Avatar_Decorations: 'avatar0',        // ตัวตกแต่งรอบรูป
      DVDL: 'images/Video Decorations/',
      Discord_Video_Decorations: 'video',           // วิดีโอพื้นหลังหลังชื่อ
      // ค่าสำรอง (ใช้เมื่อไม่มี Discord_ID หรือยังเชื่อมไม่ได้)
      Avatar: '', Display_Name: '', Username: '',
      Status: 'offline',                            // online | idle | dnd | offline
      Card_Title: { th: 'หลงอยู่ในโลกแห่งความฝัน', en: 'Lost in the world of dreams.' },
      Card_Sub:   { th: 'ออฟไลน์ ไว้กลับมาใหม่นะ', en: 'Offline. Come back later.' },
    },
    {
      name: 'VOID DEV',                                // ชื่อใหญ่ในโปรไฟล์
      image: 'images/Partners/Avatar/void.png',            // รูปในแถบเลื่อน
      bubble: { th: 'ทำโปร แต่เขียนไม่เป็น', en: 'Do a pro, but dont know write.' }, // ข้อความใต้รูปในแถบเลื่อน
      theme: '#e6e6e6', pure: true, fx: 'dust',     // ธีมขาวดำ + ฝุ่นขาว
      hero: 'images/Partners/void.png',                    // รูปใหญ่ด้านขวา (png/jpg/gif/mp4/webm)ตอนเลือกคนนี้ (ว่าง = ใช้รูปทีม)
      color: '#0a0a0a',                             // สีธีมตอนเลือก
      Discord_ID: '975297395443249162',            // เรียลไทม์: รูป ชื่อ สถานะ สิ่งที่กำลังทำ (ว่าง = ใช้ค่าด้านล่างแทน)
      Discord_Url: 'https://ksidgdb.github.io/Void.bio/',   // กดชื่อเล็ก = เปิดลิงก์
      DADL: 'images/Avatar Decorations/',
      Discord_Avatar_Decorations: 'avatar8',        // ตัวตกแต่งรอบรูป
      DVDL: 'images/Video Decorations/',
      Discord_Video_Decorations: '',           // วิดีโอพื้นหลังหลังชื่อ
      // ค่าสำรอง (ใช้เมื่อไม่มี Discord_ID หรือยังเชื่อมไม่ได้)
      Avatar: '', Display_Name: '', Username: '',
      Status: 'offline',                            // online | idle | dnd | offline
      Card_Title: { th: 'หลงอยู่ในโลกแห่งความฝัน', en: 'Lost in the world of dreams.' },
      Card_Sub:   { th: 'ออฟไลน์ ไว้กลับมาใหม่นะ', en: 'Offline. Come back later.' },
    },
    {
      name: 'VEXIS DEV',                                // ชื่อใหญ่ในโปรไฟล์
      image: 'images/Partners/Avatar/vexis.png',            // รูปในแถบเลื่อน
      bubble: { th: 'Frontend เจนเอไอ', en: 'Frontend, but Gen AI' }, // ข้อความใต้รูปในแถบเลื่อน
      theme: '#8b0a1a', fx: 'blood',                // ธีมแดงเลือดหมู + เอฟเฟกต์เลือด
      hero: 'images/Partners/vexis.png',                    // รูปใหญ่ด้านขวา (png/jpg/gif/mp4/webm)ตอนเลือกคนนี้ (ว่าง = ใช้รูปทีม)
      color: '#0a0a0a',                             // สีธีมตอนเลือก
      Discord_ID: '1512532344593055797',            // เรียลไทม์: รูป ชื่อ สถานะ สิ่งที่กำลังทำ (ว่าง = ใช้ค่าด้านล่างแทน)
      Discord_Url: 'https://liable-amethyst-ms4y6zva.edgeone.dev/',   // กดชื่อเล็ก = เปิดลิงก์
      DADL: 'images/Avatar Decorations/',
      Discord_Avatar_Decorations: 'avatar8',        // ตัวตกแต่งรอบรูป
      DVDL: 'images/Video Decorations/',
      Discord_Video_Decorations: '',           // วิดีโอพื้นหลังหลังชื่อ
      // ค่าสำรอง (ใช้เมื่อไม่มี Discord_ID หรือยังเชื่อมไม่ได้)
      Avatar: '', Display_Name: '', Username: '',
      Status: 'offline',                            // online | idle | dnd | offline
      Card_Title: { th: 'หลงอยู่ในโลกแห่งความฝัน', en: 'Lost in the world of dreams.' },
      Card_Sub:   { th: 'ออฟไลน์ ไว้กลับมาใหม่นะ', en: 'Offline. Come back later.' },
    },
    {
      name: 'EIDREAL DEV',                                // ชื่อใหญ่ในโปรไฟล์
      music: 6,                                     // เข้าเพจคนนี้ = เล่นเพลง order 6 วนซ้ำ ออกแล้วกลับเพลงเดิม (ไม่ใส่ = ไม่เปลี่ยนเพลง)
      image: 'images/Partners/Avatar/eidreal.jpg',            // รูปในแถบเลื่อน
      bubble: { th: 'Graphics ติดลิมิต', en: 'Graphics, but limit' }, // ข้อความใต้รูปในแถบเลื่อน
      theme: '#0a0a0a', pure: true, fx: 'rose',      // ธีมดำ + เอฟเฟกต์ดอกกุหลาบ (รูป rose.png ลอยตก + กดแล้วกระจาย)
      hero: 'images/Partners/eidreal.png',                    // รูปใหญ่ด้านขวา (png/jpg/gif/mp4/webm)ตอนเลือกคนนี้ (ว่าง = ใช้รูปทีม)
      color: '#0a0a0a',                             // สีธีมตอนเลือก
      Discord_ID: '1361637465328189624',            // เรียลไทม์: รูป ชื่อ สถานะ สิ่งที่กำลังทำ (ว่าง = ใช้ค่าด้านล่างแทน)
      Discord_Url: 'https://ksidgdb.github.io/eidreal.bio/',   // กดชื่อเล็ก = เปิดลิงก์
      DADL: 'images/Avatar Decorations/',
      Discord_Avatar_Decorations: 'avatar9',        // ตัวตกแต่งรอบรูป
      DVDL: 'images/Video Decorations/',
      Discord_Video_Decorations: '',           // วิดีโอพื้นหลังหลังชื่อ
      // ค่าสำรอง (ใช้เมื่อไม่มี Discord_ID หรือยังเชื่อมไม่ได้)
      Avatar: '', Display_Name: '', Username: '',
      Status: 'offline',                            // online | idle | dnd | offline
      Card_Title: { th: 'หลงอยู่ในโลกแห่งความฝัน', en: 'Lost in the world of dreams.' },
      Card_Sub:   { th: 'ออฟไลน์ ไว้กลับมาใหม่นะ', en: 'Offline. Come back later.' },
    },
    {
      name: 'WHITE DEV',                                // ชื่อใหญ่ในโปรไฟล์
      image: 'images/Partners/Avatar/white.jpg',            // รูปในแถบเลื่อน
      bubble: { th: 'Tester คอมพัง', en: 'Tester, but computer crashed' }, // ข้อความใต้รูปในแถบเลื่อน
      theme: '#d4152a', fx: 'feather',              // ธีมแดง + เอฟเฟกต์ขนนกสีดำ
      hero: 'images/Partners/white.jpg',                    // รูปใหญ่ด้านขวา (png/jpg/gif/mp4/webm)ตอนเลือกคนนี้ (ว่าง = ใช้รูปทีม)
      color: '#0a0a0a',                             // สีธีมตอนเลือก
      Discord_ID: '1501806647637442621',            // เรียลไทม์: รูป ชื่อ สถานะ สิ่งที่กำลังทำ (ว่าง = ใช้ค่าด้านล่างแทน)
      Discord_Url: 'https://ksidgdb.github.io/art.bio/',   // กดชื่อเล็ก = เปิดลิงก์
      DADL: 'images/Avatar Decorations/',
      Discord_Avatar_Decorations: 'avatar8',        // ตัวตกแต่งรอบรูป
      DVDL: 'images/Video Decorations/',
      Discord_Video_Decorations: '',           // วิดีโอพื้นหลังหลังชื่อ
      // ค่าสำรอง (ใช้เมื่อไม่มี Discord_ID หรือยังเชื่อมไม่ได้)
      Avatar: '', Display_Name: '', Username: '',
      Status: 'offline',                            // online | idle | dnd | offline
      Card_Title: { th: 'หลงอยู่ในโลกแห่งความฝัน', en: 'Lost in the world of dreams.' },
      Card_Sub:   { th: 'ออฟไลน์ ไว้กลับมาใหม่นะ', en: 'Offline. Come back later.' },
    },
  ],
};

window.LOGO_CONFIG = {
  default: 0,
  logos: [
    { name: { th: 'โลโก้จาก MycatStudio', en: 'Logo from MycatStudio' }, sub: 'MycatStudio', image: 'images/Team/logo1nobg.png', video: 'video/logo1.mp4', color: '#8fdcff', fx: 'water' },
    { name: { th: 'โลโก้จาก VoidStudio', en: 'Logo from VoidStudio' }, sub: 'VoidStudio', image: 'images/Team/logo2nobg.png', video: 'video/logo2.mp4', scale: 0.7, color: '#cfd4de', pure: true, fx: 'stardust' },
  ],
};

window.INTRO5_CONFIG = {
  duck: 0,             // ระดับเพลงตอนเล่นวิดีโอ (0 = เงียบ, 0.2 = เบา)
  duckMs: 900,         // เวลาหรี่เพลง (ms)
  restoreMs: 1800,     // เวลาจางเพลงกลับ (ms)
  fadeIn: 1000,        // วิดีโอจางเข้า (ms)
  fadeOut: 1000,       // วิดีโอจางออก (ms)
  logoIn: 1000,        // โลโก้จางเข้า (ms)
  hold: 600,           // โลโก้ค้างกลางจอก่อนย้าย (ms)
  move: 1200,          // เวลาย้ายโลโก้ (ms)
  target: '#p5Title',  // ตำแหน่งปลายทางของโลโก้ (selector)
  depth: 10,           // โลโก้ขยับตามเมาส์ (เลขมาก = ขยับมาก, 0 = ไม่ขยับ) เท่ากับ data-depth ขององค์ประกอบอื่น
  maxW: 560,           // ความกว้างโลโก้ตอนอยู่ที่ target สูงสุด (px)
  hideTarget: true,    // true = ซ่อนข้อความที่ target เมื่อโลโก้มาแทน
  remember: false,     // false = เล่นทุกครั้งที่โหลดเว็บ | true = เล่นครั้งเดียวต่อเบราว์เซอร์ (จำใน localStorage)
  canSkip: true,       // กดที่วิดีโอ หรือ Esc = ข้าม
};

window.FX_CONFIG = {
  feather: 'images/fx/feathe.png',   // รูปขนนกของ WHITE DEV (ลอยตก + กด) | โหลดไม่ได้ = ใช้ขนนกดำที่วาดเอง
  rose: 'images/fx/rose.png',        // รูปกุหลาบของ EIDREAL DEV (ลอยตก + กด) | โหลดไม่ได้ = ใช้กลีบซากุระแทน
};

// ธีมหน้า 1: "Refracted Reality" (เลือกจากปุ่มมุมขวาบน ข้างปุ่มมังกร)
window.REFRACT_CONFIG = {
  hero: 'images/DEVILMAYCRY5-1.png',          // รูปตัวละคร เช่น 'images/Refract/character.png' | ว่าง = เห็นแต่เศษกระจกโปร่งใส
  pieces: 16,        // จำนวนเศษกระจกเล็กที่วางทับรูปตัวละคร (0 = ไม่มี)
  refract: 6,        // px ภาพในเศษเหลื่อมกัน
  parallax: 16,      // px ชิ้นกระจกขยับตามเมาส์
  float: 34,         // จำนวนเศษกระจกเล็กลอยรอบจอ (ชิ้นกลาง/หน้าเบลอ คิดสัดส่วนให้เอง)
  bokeh: 10          // จุดแสงฟุ้ง
};