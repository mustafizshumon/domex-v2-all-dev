document.addEventListener('DOMContentLoaded',()=>{
  const header=document.querySelector('.site-header');
  const toggle=document.getElementById('menuToggle');
  const nav=document.getElementById('mainNav');
  const toast=document.getElementById('toast');
  const year=document.getElementById('year');
  if(year) year.textContent=new Date().getFullYear();
  window.addEventListener('scroll',()=>header?.classList.toggle('scrolled',window.scrollY>12),{passive:true});
  const closeMenu=()=>{
    nav?.classList.remove('open');
    toggle?.setAttribute('aria-expanded','false');
    toggle?.setAttribute('aria-label','Apri menu');
  };
  toggle?.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded',String(open));
    toggle.setAttribute('aria-label',open?'Chiudi menu':'Apri menu');
  });
  nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
  document.addEventListener('click',e=>{
    if(nav?.classList.contains('open')&&!nav.contains(e.target)&&!toggle?.contains(e.target))closeMenu();
  });
  window.addEventListener('resize',()=>{if(window.innerWidth>980)closeMenu();},{passive:true});

  const translations = {
    it: {
      "nav.home":"Home","nav.properties":"Immobili","nav.services":"Servizi","nav.about":"Chi siamo","nav.contact":"Contatti","nav.talk":"Parliamone",
      "hero.eyebrow":"DOMEX GROUP · ITALIA","hero.title":"La tua casa,<br><em>la nostra missione.</em>","hero.sub":"Insieme verso il futuro.","hero.desc":"Un unico partner, nuove possibilità. Ti accompagniamo con servizi immobiliari, digitali ed energetici pensati intorno alle tue esigenze.","hero.cta":"Vieni a parlare con noi","hero.more":"Scopri le opportunità",
      "partner.note":"In collaborazione con <b>partner selezionati</b>","welcome.eyebrow":"BENVENUTI · WELCOME","welcome.title":"La tua lingua, <em>la nostra attenzione.</em>","welcome.desc":"Qualunque sia la tua lingua, siamo qui per ascoltarti e aiutarti a trovare la soluzione giusta.",
      "services.eyebrow":"COSA FACCIAMO","services.title":"Un gruppo. <em>Tre aree,</em><br>un solo obiettivo.","services.desc":"Mettiamo in relazione competenze e servizi per rendere più semplice ogni tuo progetto.",
      "service1.title":"La casa giusta<br>per il tuo futuro.","service1.desc":"Acquisto, vendita e consulenza immobiliare con attenzione alle persone.","service1.link":"Esplora gli immobili →",
      "service2.title":"Idee che diventano<br>visibilità.","service2.desc":"Strategia, presenza digitale e comunicazione per far crescere il tuo brand.","service2.link":"Scopri i servizi →",
      "service3.title":"Energia più semplice,<br>scelte consapevoli.","service3.desc":"Orientamento e supporto per valutare soluzioni energetiche adatte a te.","service3.link":"Parliamone →",
      "statement.eyebrow":"IL NOSTRO APPROCCIO","statement.title":"Più valore ai tuoi progetti,<br>con <em>soluzioni affidabili.</em>","statement.cta":"Conosci DOMEX",
      "why.eyebrow":"PERCHÉ DOMEX","why.title":"Vicini alle persone.<br><em>Attenti ai dettagli.</em>","why.desc":"Crediamo nelle relazioni chiare, nell'ascolto e in un accompagnamento concreto, dal primo contatto al passo successivo.","why.link":"Scopri chi siamo",
      "why1.title":"Ascolto prima di tutto","why1.desc":"Partiamo dalle tue necessità per capire cosa conta davvero.","why2.title":"Un approccio integrato","why2.desc":"Competenze diverse, coordinate da un unico punto di riferimento.","why3.title":"Chiarezza e fiducia","why3.desc":"Informazioni comprensibili e attenzione in ogni fase.",
      "cta.eyebrow":"IL PROSSIMO PASSO INIZIA QUI","cta.title":"Hai un progetto<br>in mente?","cta.desc":"Raccontacelo. Saremo felici di ascoltarti.","cta.button":"Parla con il nostro team",
      "footer.tagline":"Insieme verso il futuro.<br>Servizi, idee e persone al tuo fianco.","footer.explore":"Esplora","footer.services":"Servizi","footer.contact":"Contatti","footer.privacy":"Privacy Policy","footer.cookies":"Cookie Policy","footer.legal":"Note legali",
      "contact.title":"Siamo qui per <em>ascoltarti.</em>","contact.desc":"Scrivici per informazioni, appuntamenti o per raccontarci il tuo progetto.","contact.address":"Indirizzo","contact.name":"Nome e cognome","contact.email":"Email","contact.topic":"Di cosa vuoi parlare?","contact.message":"Il tuo messaggio","contact.send":"Invia richiesta","contact.consent":"Ho letto l'informativa privacy e acconsento al trattamento dei dati per essere ricontattato.",
      "inner.properties":"Immobili","inner.services":"I nostri servizi","inner.about":"Chi siamo","inner.contacts":"Contatti",
      "lang.en":"English","lang.it":"Italiano","lang.bn":"বাংলা","lang.ar":"العربية","lang.ur":"اردو","lang.hi":"हिन्दी"
    },
    en: {
      "nav.home":"Home","nav.properties":"Properties","nav.services":"Services","nav.about":"About us","nav.contact":"Contact","nav.talk":"Let's talk",
      "hero.eyebrow":"DOMEX GROUP · ITALY","hero.title":"Your home,<br><em>our mission.</em>","hero.sub":"Together towards the future.","hero.desc":"One partner, new possibilities. We support you with real estate, digital and energy services designed around your needs.","hero.cta":"Come and talk with us","hero.more":"Explore opportunities",
      "partner.note":"In collaboration with <b>selected partners</b>","welcome.eyebrow":"WELCOME · BENVENUTI","welcome.title":"Your language, <em>our attention.</em>","welcome.desc":"Whatever language you speak, we are here to listen and help you find the right solution.",
      "services.eyebrow":"WHAT WE DO","services.title":"One group. <em>Three areas,</em><br>one shared goal.","services.desc":"We bring skills and services together to make every project easier.",
      "service1.title":"The right home<br>for your future.","service1.desc":"Property buying, selling and advice with people at the centre.","service1.link":"Explore properties →",
      "service2.title":"Ideas that build<br>visibility.","service2.desc":"Strategy, digital presence and communication to grow your brand.","service2.link":"Explore services →",
      "service3.title":"Simpler energy,<br>informed choices.","service3.desc":"Guidance and support to assess energy solutions that suit you.","service3.link":"Let's talk →",
      "statement.eyebrow":"OUR APPROACH","statement.title":"More value for your projects,<br>with <em>reliable solutions.</em>","statement.cta":"Discover DOMEX",
      "why.eyebrow":"WHY DOMEX","why.title":"Close to people.<br><em>Attentive to details.</em>","why.desc":"We believe in clear relationships, listening and practical support, from the first contact to the next step.","why.link":"Meet the team",
      "why1.title":"Listening comes first","why1.desc":"We start with your needs to understand what really matters.","why2.title":"An integrated approach","why2.desc":"Different areas of expertise, coordinated through one point of contact.","why3.title":"Clarity and trust","why3.desc":"Understandable information and care at every stage.",
      "cta.eyebrow":"YOUR NEXT STEP STARTS HERE","cta.title":"Have a project<br>in mind?","cta.desc":"Tell us about it. We would be happy to listen.","cta.button":"Talk to our team",
      "footer.tagline":"Together towards the future.<br>Services, ideas and people by your side.","footer.explore":"Explore","footer.services":"Services","footer.contact":"Contact","footer.privacy":"Privacy Policy","footer.cookies":"Cookie Policy","footer.legal":"Legal notes",
      "contact.title":"We are here to <em>listen.</em>","contact.desc":"Write to us for information, appointments or to tell us about your project.","contact.address":"Address","contact.name":"Full name","contact.email":"Email","contact.topic":"What would you like to discuss?","contact.message":"Your message","contact.send":"Send request","contact.consent":"I have read the privacy notice and agree to be contacted.",
      "inner.properties":"Properties","inner.services":"Our services","inner.about":"About us","inner.contacts":"Contact",
      "lang.en":"English","lang.it":"Italiano","lang.bn":"বাংলা","lang.ar":"العربية","lang.ur":"اردو","lang.hi":"हिन्दी"
    },
    bn: {
      "nav.home":"হোম","nav.properties":"প্রপার্টি","nav.services":"সেবাসমূহ","nav.about":"আমাদের সম্পর্কে","nav.contact":"যোগাযোগ","nav.talk":"কথা বলুন",
      "hero.eyebrow":"ডোমেক্স গ্রুপ · ইতালি","hero.title":"আপনার বাড়ি,<br><em>আমাদের অঙ্গীকার।</em>","hero.sub":"একসাথে আগামীর পথে।","hero.desc":"একটি নির্ভরযোগ্য পার্টনার, সম্ভাবনার নতুন দিগন্ত। আপনার প্রয়োজন অনুযায়ী রিয়েল এস্টেট, ডিজিটাল ও এনার্জি সেবায় আমরা পাশে আছি।","hero.cta":"আমাদের সঙ্গে কথা বলুন","hero.more":"সুযোগগুলো দেখুন",
      "partner.note":"নির্বাচিত পার্টনারদের সঙ্গে <b>যৌথ সহযোগিতায়</b>","welcome.eyebrow":"স্বাগতম · WELCOME","welcome.title":"আপনার ভাষা, <em>আমাদের আন্তরিকতা।</em>","welcome.desc":"আপনি যে ভাষাতেই কথা বলুন, আপনার কথা শুনতে এবং সঠিক সমাধান খুঁজতে আমরা পাশে আছি।",
      "services.eyebrow":"আমাদের কার্যক্রম","services.title":"একটি গ্রুপ। <em>তিনটি ক্ষেত্র,</em><br>একটি লক্ষ্য।","services.desc":"আপনার প্রতিটি কাজ সহজ করতে আমরা দক্ষতা ও সেবাকে একত্র করি।",
      "service1.title":"আপনার ভবিষ্যতের<br>সঠিক ঠিকানা।","service1.desc":"মানুষকে গুরুত্ব দিয়ে বাড়ি কেনা, বিক্রি ও রিয়েল এস্টেট পরামর্শ।","service1.link":"প্রপার্টি দেখুন →",
      "service2.title":"আইডিয়া থেকে<br>ডিজিটাল পরিচিতি।","service2.desc":"আপনার ব্র্যান্ডের বিকাশে কৌশল, অনলাইন উপস্থিতি ও যোগাযোগ।","service2.link":"সেবা দেখুন →",
      "service3.title":"সহজ এনার্জি,<br>সচেতন সিদ্ধান্ত।","service3.desc":"আপনার উপযোগী বিদ্যুৎ ও গ্যাস সমাধান বুঝতে পরামর্শ ও সহায়তা।","service3.link":"কথা বলুন →",
      "statement.eyebrow":"আমাদের কাজের ধরন","statement.title":"আপনার উদ্যোগে আরও মূল্য,<br><em>নির্ভরযোগ্য সমাধানের সঙ্গে।</em>","statement.cta":"ডোমেক্স সম্পর্কে জানুন",
      "why.eyebrow":"কেন ডোমেক্স","why.title":"মানুষের কাছাকাছি।<br><em>বিস্তারিত বিষয়ে যত্নশীল।</em>","why.desc":"প্রথম যোগাযোগ থেকে পরবর্তী পদক্ষেপ পর্যন্ত আমরা স্বচ্ছ সম্পর্ক, মনোযোগ দিয়ে শোনা এবং বাস্তব সহায়তায় বিশ্বাস করি।","why.link":"আমাদের সম্পর্কে জানুন",
      "why1.title":"প্রথমেই আপনার কথা শুনি","why1.desc":"আপনার প্রকৃত প্রয়োজন বুঝে আমরা কাজ শুরু করি।","why2.title":"সমন্বিত সেবা","why2.desc":"বিভিন্ন দক্ষতা, একটি সমন্বিত যোগাযোগের মাধ্যমে।","why3.title":"স্বচ্ছতা ও আস্থা","why3.desc":"প্রতিটি ধাপে সহজবোধ্য তথ্য ও যত্নশীল সহযোগিতা।",
      "cta.eyebrow":"আপনার পরবর্তী পদক্ষেপ এখানেই","cta.title":"আপনার কি কোনো<br>পরিকল্পনা আছে?","cta.desc":"আমাদের জানান। আপনার কথা শুনতে আমরা আগ্রহী।","cta.button":"আমাদের টিমের সঙ্গে কথা বলুন",
      "footer.tagline":"একসাথে আগামীর পথে।<br>সেবা, ধারণা ও মানুষ—আপনার পাশে।","footer.explore":"এক্সপ্লোর","footer.services":"সেবাসমূহ","footer.contact":"যোগাযোগ","footer.privacy":"গোপনীয়তা নীতি","footer.cookies":"কুকি নীতি","footer.legal":"আইনি তথ্য",
      "contact.title":"আপনার কথা <em>শুনতে আমরা আছি।</em>","contact.desc":"তথ্য, অ্যাপয়েন্টমেন্ট অথবা আপনার পরিকল্পনা জানাতে লিখুন।","contact.address":"ঠিকানা","contact.name":"নাম","contact.email":"ইমেইল","contact.topic":"কোন বিষয়ে কথা বলতে চান?","contact.message":"আপনার বার্তা","contact.send":"অনুরোধ পাঠান","contact.consent":"আমি গোপনীয়তা নীতি পড়েছি এবং যোগাযোগের সম্মতি দিচ্ছি।",
      "inner.properties":"প্রপার্টি","inner.services":"আমাদের সেবা","inner.about":"আমাদের সম্পর্কে","inner.contacts":"যোগাযোগ",
      "lang.en":"English","lang.it":"Italiano","lang.bn":"বাংলা","lang.ar":"العربية","lang.ur":"اردو","lang.hi":"हिन्दी"
    },
    ar: {
      "nav.home":"الرئيسية","nav.properties":"العقارات","nav.services":"الخدمات","nav.about":"من نحن","nav.contact":"اتصل بنا","nav.talk":"لنتحدث",
      "hero.eyebrow":"مجموعة دومكس · إيطاليا","hero.title":"منزلك،<br><em>مهمتنا.</em>","hero.sub":"معًا نحو المستقبل.","hero.desc":"شريك واحد وإمكانات جديدة. ندعمك بخدمات العقارات والتقنيات الرقمية والطاقة المصممة وفق احتياجاتك.","hero.cta":"تحدث معنا","hero.more":"اكتشف الفرص",
      "partner.note":"بالتعاون مع <b>شركاء مختارين</b>","welcome.eyebrow":"أهلاً وسهلاً","welcome.title":"لغتك، <em>اهتمامنا.</em>","welcome.desc":"مهما كانت لغتك، نحن هنا للاستماع إليك ومساعدتك في إيجاد الحل المناسب.",
      "services.eyebrow":"ماذا نقدم","services.title":"مجموعة واحدة. <em>ثلاثة مجالات،</em><br>هدف واحد.","services.desc":"نجمع الخبرات والخدمات لتسهيل كل مشروع من مشاريعك.",
      "service1.title":"المنزل المناسب<br>لمستقبلك.","service1.desc":"شراء وبيع واستشارات عقارية مع الاهتمام بالناس.","service1.link":"استكشف العقارات ←",
      "service2.title":"أفكار تصنع<br>الحضور الرقمي.","service2.desc":"استراتيجية وحضور رقمي واتصال لتنمية علامتك التجارية.","service2.link":"اكتشف الخدمات ←",
      "service3.title":"طاقة أبسط،<br>قرارات واعية.","service3.desc":"إرشاد ودعم لتقييم حلول الطاقة المناسبة لك.","service3.link":"لنتحدث ←",
      "statement.eyebrow":"نهجنا","statement.title":"قيمة أكبر لمشاريعك،<br>مع <em>حلول موثوقة.</em>","statement.cta":"تعرف على دومكس",
      "why.eyebrow":"لماذا دومكس","why.title":"قريبون من الناس.<br><em>نهتم بالتفاصيل.</em>","why.desc":"نؤمن بالعلاقات الواضحة والاستماع والدعم العملي من أول اتصال إلى الخطوة التالية.","why.link":"تعرف علينا",
      "why1.title":"الاستماع أولاً","why1.desc":"نبدأ باحتياجاتك لفهم ما يهمك حقًا.","why2.title":"نهج متكامل","why2.desc":"خبرات متنوعة بتنسيق من نقطة اتصال واحدة.","why3.title":"الوضوح والثقة","why3.desc":"معلومات مفهومة واهتمام في كل مرحلة.",
      "cta.eyebrow":"خطوتك التالية تبدأ هنا","cta.title":"هل لديك مشروع<br>في ذهنك؟","cta.desc":"أخبرنا عنه، يسعدنا الاستماع إليك.","cta.button":"تحدث مع فريقنا",
      "footer.tagline":"معًا نحو المستقبل.<br>خدمات وأفكار وأشخاص إلى جانبك.","footer.explore":"استكشف","footer.services":"الخدمات","footer.contact":"اتصل بنا","footer.privacy":"سياسة الخصوصية","footer.cookies":"سياسة ملفات الارتباط","footer.legal":"معلومات قانونية",
      "contact.title":"نحن هنا <em>للاستماع إليك.</em>","contact.desc":"راسلنا للاستفسار أو تحديد موعد أو إخبارنا بمشروعك.","contact.address":"العنوان","contact.name":"الاسم الكامل","contact.email":"البريد الإلكتروني","contact.topic":"ما الموضوع الذي ترغب في مناقشته؟","contact.message":"رسالتك","contact.send":"إرسال الطلب","contact.consent":"قرأت إشعار الخصوصية وأوافق على التواصل معي.",
      "inner.properties":"العقارات","inner.services":"خدماتنا","inner.about":"من نحن","inner.contacts":"اتصل بنا",
      "lang.en":"English","lang.it":"Italiano","lang.bn":"বাংলা","lang.ar":"العربية","lang.ur":"اردو","lang.hi":"हिन्दी"
    },
    ur: {
      "nav.home":"ہوم","nav.properties":"جائیدادیں","nav.services":"خدمات","nav.about":"ہمارے بارے میں","nav.contact":"رابطہ","nav.talk":"بات کریں",
      "hero.eyebrow":"ڈومیکس گروپ · اٹلی","hero.title":"آپ کا گھر،<br><em>ہماری ذمہ داری۔</em>","hero.sub":"مل کر مستقبل کی طرف۔","hero.desc":"ایک قابلِ اعتماد ساتھی، نئے امکانات۔ آپ کی ضروریات کے مطابق رئیل اسٹیٹ، ڈیجیٹل اور توانائی کی خدمات میں ہم آپ کے ساتھ ہیں۔","hero.cta":"ہم سے بات کریں","hero.more":"مواقع دیکھیں",
      "partner.note":"منتخب شراکت داروں کے <b>تعاون سے</b>","welcome.eyebrow":"خوش آمدید","welcome.title":"آپ کی زبان، <em>ہماری توجہ۔</em>","welcome.desc":"آپ کوئی بھی زبان بولتے ہوں، ہم آپ کی بات سننے اور درست حل تلاش کرنے کے لیے موجود ہیں۔",
      "services.eyebrow":"ہم کیا کرتے ہیں","services.title":"ایک گروپ۔ <em>تین شعبے،</em><br>ایک مقصد۔","services.desc":"آپ کے ہر منصوبے کو آسان بنانے کے لیے ہم مہارت اور خدمات کو یکجا کرتے ہیں۔",
      "service1.title":"آپ کے مستقبل<br>کا صحیح گھر۔","service1.desc":"لوگوں کو ترجیح دیتے ہوئے جائیداد کی خرید، فروخت اور مشاورت۔","service1.link":"جائیدادیں دیکھیں ←",
      "service2.title":"خیالات سے<br>ڈیجیٹل شناخت۔","service2.desc":"آپ کے برانڈ کی ترقی کے لیے حکمتِ عملی، آن لائن موجودگی اور رابطہ۔","service2.link":"خدمات دیکھیں ←",
      "service3.title":"آسان توانائی،<br>باخبر فیصلے۔","service3.desc":"آپ کے لیے موزوں توانائی کے حل جاننے میں رہنمائی اور مدد۔","service3.link":"بات کریں ←",
      "statement.eyebrow":"ہمارا طریقۂ کار","statement.title":"آپ کے منصوبوں کے لیے زیادہ قدر،<br><em>قابلِ اعتماد حل کے ساتھ۔</em>","statement.cta":"ڈومیکس کو جانیں",
      "why.eyebrow":"ڈومیکس کیوں","why.title":"لوگوں کے قریب۔<br><em>تفصیلات کا خیال۔</em>","why.desc":"ہم واضح تعلقات، توجہ سے سننے اور عملی مدد پر یقین رکھتے ہیں۔","why.link":"ہمارے بارے میں جانیں",
      "why1.title":"سب سے پہلے آپ کی بات","why1.desc":"ہم آپ کی ضروریات سے آغاز کرتے ہیں۔","why2.title":"مربوط طریقۂ کار","why2.desc":"مختلف مہارتیں، ایک رابطہ مرکز۔","why3.title":"شفافیت اور اعتماد","why3.desc":"ہر مرحلے پر واضح معلومات اور توجہ۔",
      "cta.eyebrow":"آپ کا اگلا قدم یہاں سے","cta.title":"کیا آپ کے ذہن میں<br>کوئی منصوبہ ہے؟","cta.desc":"ہمیں بتائیں، ہم سننے کے لیے تیار ہیں۔","cta.button":"ہماری ٹیم سے بات کریں",
      "footer.tagline":"مل کر مستقبل کی طرف۔<br>خدمات، خیالات اور لوگ آپ کے ساتھ۔","footer.explore":"دیکھیے","footer.services":"خدمات","footer.contact":"رابطہ","footer.privacy":"رازداری کی پالیسی","footer.cookies":"کوکی پالیسی","footer.legal":"قانونی معلومات",
      "contact.title":"ہم یہاں <em>آپ کی بات سننے کے لیے ہیں۔</em>","contact.desc":"معلومات، ملاقات یا اپنے منصوبے کے بارے میں ہمیں لکھیں۔","contact.address":"پتہ","contact.name":"پورا نام","contact.email":"ای میل","contact.topic":"آپ کس بارے میں بات کرنا چاہتے ہیں؟","contact.message":"آپ کا پیغام","contact.send":"درخواست بھیجیں","contact.consent":"میں نے رازداری کی اطلاع پڑھ لی ہے اور رابطے کی اجازت دیتا/دیتی ہوں۔",
      "inner.properties":"جائیدادیں","inner.services":"ہماری خدمات","inner.about":"ہمارے بارے میں","inner.contacts":"رابطہ",
      "lang.en":"English","lang.it":"Italiano","lang.bn":"বাংলা","lang.ar":"العربية","lang.ur":"اردو","lang.hi":"हिन्दी"
    },
    hi: {
      "nav.home":"होम","nav.properties":"प्रॉपर्टी","nav.services":"सेवाएँ","nav.about":"हमारे बारे में","nav.contact":"संपर्क","nav.talk":"बात करें",
      "hero.eyebrow":"डोमेक्स ग्रुप · इटली","hero.title":"आपका घर,<br><em>हमारा मिशन।</em>","hero.sub":"मिलकर भविष्य की ओर।","hero.desc":"एक भरोसेमंद साथी, नई संभावनाएँ। आपकी ज़रूरतों के अनुसार रियल एस्टेट, डिजिटल और ऊर्जा सेवाओं में हम आपके साथ हैं।","hero.cta":"हमसे बात करें","hero.more":"अवसर देखें",
      "partner.note":"चुने हुए भागीदारों के <b>सहयोग से</b>","welcome.eyebrow":"स्वागत है","welcome.title":"आपकी भाषा, <em>हमारा ध्यान।</em>","welcome.desc":"आप कोई भी भाषा बोलते हों, हम आपकी बात सुनने और सही समाधान खोजने के लिए यहाँ हैं।",
      "services.eyebrow":"हम क्या करते हैं","services.title":"एक समूह। <em>तीन क्षेत्र,</em><br>एक लक्ष्य।","services.desc":"आपकी हर परियोजना को आसान बनाने के लिए हम कौशल और सेवाओं को जोड़ते हैं।",
      "service1.title":"आपके भविष्य<br>का सही घर।","service1.desc":"लोगों को प्राथमिकता देते हुए संपत्ति खरीद, बिक्री और सलाह।","service1.link":"प्रॉपर्टी देखें →",
      "service2.title":"विचारों से बने<br>डिजिटल पहचान।","service2.desc":"आपके ब्रांड को आगे बढ़ाने के लिए रणनीति, ऑनलाइन उपस्थिति और संवाद।","service2.link":"सेवाएँ देखें →",
      "service3.title":"सरल ऊर्जा,<br>समझदारी भरे विकल्प।","service3.desc":"आपके लिए उपयुक्त ऊर्जा समाधानों को समझने में मार्गदर्शन और सहायता।","service3.link":"बात करें →",
      "statement.eyebrow":"हमारा दृष्टिकोण","statement.title":"आपकी परियोजनाओं के लिए अधिक मूल्य,<br><em>भरोसेमंद समाधानों के साथ।</em>","statement.cta":"डोमेक्स को जानें",
      "why.eyebrow":"डोमेक्स क्यों","why.title":"लोगों के करीब।<br><em>हर विवरण पर ध्यान।</em>","why.desc":"हम स्पष्ट संबंधों, ध्यान से सुनने और पहली बातचीत से अगले कदम तक व्यावहारिक सहयोग में विश्वास करते हैं।","why.link":"हमारे बारे में जानें",
      "why1.title":"सबसे पहले आपकी बात","why1.desc":"हम आपकी ज़रूरतों से शुरुआत करते हैं।","why2.title":"एकीकृत दृष्टिकोण","why2.desc":"अलग-अलग विशेषज्ञताएँ, एक संपर्क केंद्र।","why3.title":"स्पष्टता और विश्वास","why3.desc":"हर चरण में समझने योग्य जानकारी और ध्यान।",
      "cta.eyebrow":"आपका अगला कदम यहाँ से शुरू होता है","cta.title":"क्या आपके मन में<br>कोई योजना है?","cta.desc":"हमें बताइए। हम आपकी बात सुनना चाहेंगे।","cta.button":"हमारी टीम से बात करें",
      "footer.tagline":"मिलकर भविष्य की ओर।<br>सेवाएँ, विचार और लोग आपके साथ।","footer.explore":"देखें","footer.services":"सेवाएँ","footer.contact":"संपर्क","footer.privacy":"गोपनीयता नीति","footer.cookies":"कुकी नीति","footer.legal":"कानूनी जानकारी",
      "contact.title":"हम यहाँ <em>आपकी बात सुनने के लिए हैं।</em>","contact.desc":"जानकारी, अपॉइंटमेंट या अपनी परियोजना के बारे में हमें लिखें।","contact.address":"पता","contact.name":"पूरा नाम","contact.email":"ईमेल","contact.topic":"आप किस बारे में बात करना चाहते हैं?","contact.message":"आपका संदेश","contact.send":"अनुरोध भेजें","contact.consent":"मैंने गोपनीयता सूचना पढ़ ली है और मुझसे संपर्क करने की सहमति देता/देती हूँ।",
      "inner.properties":"प्रॉपर्टी","inner.services":"हमारी सेवाएँ","inner.about":"हमारे बारे में","inner.contacts":"संपर्क",
      "lang.en":"English","lang.it":"Italiano","lang.bn":"বাংলা","lang.ar":"العربية","lang.ur":"اردو","lang.hi":"हिन्दी"
    }
  };
  const pageTranslations = {
    "immobili.html": {
      it:["Il tuo prossimo indirizzo comincia da un dialogo.","Trova lo spazio giusto per te.","Una selezione dimostrativa per presentare la struttura delle schede immobiliari. Gli annunci reali potranno essere inseriti dal gestore del sito.","Appartamenti","Ville e case","Opportunità","Richiedi una consulenza"],
      en:["Your next address starts with a conversation.","Find the right space for you.","A sample selection showing how property listings can be presented. Real listings can be added by the website manager.","Apartments","Villas and houses","Opportunities","Request a consultation"],
      bn:["আপনার পরবর্তী ঠিকানার শুরু হোক কথোপকথনে।","আপনার জন্য সঠিক জায়গাটি খুঁজুন।","প্রপার্টি তালিকার নমুনা কাঠামো। ওয়েবসাইট পরিচালনাকারী এখানে প্রকৃত বিজ্ঞাপন যোগ করতে পারবেন।","অ্যাপার্টমেন্ট","ভিলা ও বাড়ি","বিনিয়োগের সুযোগ","পরামর্শ চান"],
      ar:["عنوانك القادم يبدأ بحوار.","اعثر على المكان المناسب لك.","عرض تجريبي لطريقة تقديم العقارات. يمكن لمسؤول الموقع إضافة الإعلانات الفعلية.","شقق","فلل ومنازل","فرص","اطلب استشارة"],
      ur:["آپ کا اگلا پتہ گفتگو سے شروع ہوتا ہے۔","اپنے لیے صحیح جگہ تلاش کریں۔","جائیداد کی فہرست دکھانے کا نمونہ۔ اصل اشتہارات ویب سائٹ منتظم شامل کر سکتا ہے۔","اپارٹمنٹس","ولا اور گھر","مواقع","مشاورت طلب کریں"],
      hi:["आपका अगला पता बातचीत से शुरू होता है।","अपने लिए सही जगह खोजें।","प्रॉपर्टी लिस्टिंग दिखाने का नमूना। वेबसाइट प्रबंधक वास्तविक लिस्टिंग जोड़ सकता है।","अपार्टमेंट","विला और घर","अवसर","परामर्श माँगें"]
    },
    "servizi.html": {
      it:["Competenze complementari per accompagnare le persone e le imprese in ogni progetto.","Consulenza immobiliare","Marketing digitale","Servizi energetici"],
      en:["Complementary expertise to support people and businesses with every project.","Real estate consulting","Digital marketing","Energy services"],
      bn:["মানুষ ও প্রতিষ্ঠানের প্রতিটি উদ্যোগে সহায়তার জন্য সমন্বিত দক্ষতা ও সেবা।","রিয়েল এস্টেট পরামর্শ","ডিজিটাল মার্কেটিং","এনার্জি সেবা"],
      ar:["خبرات متكاملة لدعم الأفراد والشركات في كل مشروع.","استشارات عقارية","التسويق الرقمي","خدمات الطاقة"],
      ur:["ہر منصوبے میں افراد اور کاروبار کی مدد کے لیے تکمیلی مہارتیں۔","رئیل اسٹیٹ مشاورت","ڈیجیٹل مارکیٹنگ","توانائی کی خدمات"],
      hi:["हर परियोजना में लोगों और व्यवसायों की सहायता के लिए पूरक विशेषज्ञता।","रियल एस्टेट सलाह","डिजिटल मार्केटिंग","ऊर्जा सेवाएँ"]
    },
    "chi-siamo.html": {
      it:["Un gruppo orientato alle persone, alla collaborazione e a soluzioni affidabili.","Una visione condivisa","Servizi complementari","Relazioni di fiducia"],
      en:["A group focused on people, collaboration and reliable solutions.","A shared vision","Complementary services","Relationships built on trust"],
      bn:["মানুষ, সহযোগিতা ও নির্ভরযোগ্য সমাধানকে কেন্দ্র করে গড়ে ওঠা একটি গ্রুপ।","সম্মিলিত লক্ষ্য","পরিপূরক সেবা","বিশ্বাসের সম্পর্ক"],
      ar:["مجموعة تركز على الناس والتعاون والحلول الموثوقة.","رؤية مشتركة","خدمات متكاملة","علاقات قائمة على الثقة"],
      ur:["لوگوں، تعاون اور قابلِ اعتماد حل پر توجہ دینے والا گروپ۔","مشترکہ وژن","تکمیلی خدمات","اعتماد پر مبنی تعلقات"],
      hi:["लोगों, सहयोग और भरोसेमंद समाधानों पर केंद्रित समूह।","साझा दृष्टि","पूरक सेवाएँ","विश्वास के रिश्ते"]
    },
    "contatti.html": {
      it:["Scegli il modo più semplice per entrare in contatto con DOMEX Group.","Indirizzo","Nome e cognome","Di cosa vuoi parlare?","Il tuo messaggio","Invia richiesta"],
      en:["Choose the easiest way to get in touch with DOMEX Group.","Address","Full name","What would you like to discuss?","Your message","Send request"],
      bn:["DOMEX Group-এর সঙ্গে যোগাযোগের সহজ উপায়টি বেছে নিন।","ঠিকানা","নাম","কোন বিষয়ে কথা বলতে চান?","আপনার বার্তা","অনুরোধ পাঠান"],
      ar:["اختر أسهل طريقة للتواصل مع مجموعة دومكس.","العنوان","الاسم الكامل","ما الموضوع الذي ترغب في مناقشته؟","رسالتك","إرسال الطلب"],
      ur:["ڈومیکس گروپ سے رابطے کا آسان طریقہ منتخب کریں۔","پتہ","پورا نام","آپ کس بارے میں بات کرنا چاہتے ہیں؟","آپ کا پیغام","درخواست بھیجیں"],
      hi:["DOMEX Group से संपर्क करने का सबसे आसान तरीका चुनें।","पता","पूरा नाम","आप किस बारे में बात करना चाहते हैं?","आपका संदेश","अनुरोध भेजें"]
    }
  };
  const langSelect = document.getElementById('languageSelect');
  const supported = ['it','en','bn','ar','ur','hi'];
  const getSavedLang = () => {
    try { return localStorage.getItem('domex-language') || 'it'; } catch(e) { return 'it'; }
  };
  function setText(el, value) {
    if (!el || value == null) return;
    if (value.includes('<')) el.innerHTML = value;
    else el.textContent = value;
  }
  function applyLanguage(lang) {
    if (!supported.includes(lang)) lang = 'it';
    const dict = translations[lang] || translations.it;
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar' || lang === 'ur') ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl', lang === 'ar' || lang === 'ur');
    if (langSelect) langSelect.value = lang;

    const selectors = {
      'nav.home':'.main-nav > a[href="index.html"]',
      'nav.properties':'.main-nav > a[href="immobili.html"]',
      'nav.services':'.main-nav > a[href="servizi.html"]',
      'nav.about':'.main-nav > a[href="chi-siamo.html"]',
      'nav.contact':'.main-nav > a[href="contatti.html"]',
      'nav.talk':'.nav-actions .button',
      'hero.eyebrow':'.hero .eyebrow',
      'hero.title':'.hero h1',
      'hero.sub':'.hero-sub',
      'hero.desc':'.hero-desc',
      'hero.cta':'.hero-actions .button',
      'hero.more':'.hero-actions .text-link',
      'partner.note':'.partner-note',
      'welcome.eyebrow':'.language-section .eyebrow',
      'welcome.title':'.language-section h2',
      'welcome.desc':'.language-section .section-heading p',
      'services.eyebrow':'.services-section .eyebrow',
      'services.title':'.services-section h2',
      'services.desc':'.services-section .split-heading > p',
      'service1.title':'.property-service h3','service1.desc':'.property-service p','service1.link':'.property-service .service-link',
      'service2.title':'.marketing-service h3','service2.desc':'.marketing-service p','service2.link':'.marketing-service .service-link',
      'service3.title':'.energy-service h3','service3.desc':'.energy-service p','service3.link':'.energy-service .service-link',
      'statement.eyebrow':'.statement-section .eyebrow','statement.title':'.statement-section h2','statement.cta':'.statement-section .button',
      'why.eyebrow':'.why-section .eyebrow','why.title':'.why-layout h2','why.desc':'.why-layout .muted-copy','why.link':'.why-layout .text-link',
      'why1.title':'.why-list > div:nth-child(1) b','why1.desc':'.why-list > div:nth-child(1) p',
      'why2.title':'.why-list > div:nth-child(2) b','why2.desc':'.why-list > div:nth-child(2) p',
      'why3.title':'.why-list > div:nth-child(3) b','why3.desc':'.why-list > div:nth-child(3) p',
      'cta.eyebrow':'.contact-cta .eyebrow','cta.title':'.contact-cta h2','cta.desc':'.contact-cta p','cta.button':'.contact-cta .button',
      'footer.tagline':'.footer-brand p','footer.explore':'.footer-main > div:nth-child(2) h4','footer.services':'.footer-main > div:nth-child(3) h4','footer.contact':'.footer-main > div:nth-child(4) h4',
      'footer.privacy':'.footer-bottom a:nth-child(1)','footer.cookies':'.footer-bottom a:nth-child(2)','footer.legal':'.footer-bottom a:nth-child(3)',
      'contact.title':'.contact-layout h2','contact.desc':'.contact-layout .muted-copy','contact.address':'.contact-details b',
      'contact.name':'label[for="name"]','contact.email':'label[for="email"]','contact.topic':'label[for="topic"]','contact.message':'label[for="message"]','contact.send':'.contact-form button[type="submit"]','contact.consent':'.contact-form .form-note'
    };
    Object.entries(selectors).forEach(([key,selector])=>{
      const el=document.querySelector(selector);
      if (el && dict[key]) setText(el,dict[key]);
    });
    document.querySelectorAll('[data-lang-card]').forEach(card=>{
      const cardLang=card.dataset.langCard;
      const label=card.querySelector('.lang-label');
      if(label) label.textContent = ({en:'English',it:'Italiano',bn:'বাংলা',ar:'العربية',ur:'اردو',hi:'हिन्दी'})[cardLang];
    });

    const file = location.pathname.split('/').pop() || 'index.html';
    const innerTitles = {
      'immobili.html':{it:'Immobili',en:'Properties',bn:'প্রপার্টি',ar:'العقارات',ur:'جائیدادیں',hi:'प्रॉपर्टी'},
      'servizi.html':{it:'I nostri servizi',en:'Our services',bn:'আমাদের সেবাসমূহ',ar:'خدماتنا',ur:'ہماری خدمات',hi:'हमारी सेवाएँ'},
      'chi-siamo.html':{it:'Chi siamo',en:'About us',bn:'আমাদের সম্পর্কে',ar:'من نحن',ur:'ہمارے بارے میں',hi:'हमारे बारे में'},
      'contatti.html':{it:'Contatti',en:'Contact',bn:'যোগাযোগ',ar:'اتصل بنا',ur:'رابطہ',hi:'संपर्क'}
    };
    const innerTitle = innerTitles[file]?.[lang];
    if (innerTitle) {
      const h1=document.querySelector('.inner-hero h1');
      if(h1) h1.textContent=innerTitle;
    }
    const page = pageTranslations[file]?.[lang];
    if (page) {
      const hero = document.querySelector('.inner-hero');
      if (hero) {
        const p=hero.querySelector('p'); if(p) p.textContent=page[0];
      }
      const cards=[...document.querySelectorAll('.info-card')];
      if(file==='immobili.html' && cards.length>=3) {
        cards[0].querySelector('h3').textContent=page[3];cards[1].querySelector('h3').textContent=page[4];cards[2].querySelector('h3').textContent=page[5];
        const btn=document.querySelector('.section-pad .button');if(btn)btn.textContent=page[6]+' ↗';
      }
      if(file==='servizi.html' && cards.length>=3) cards.forEach((c,i)=>c.querySelector('h3').textContent=page[i+1]);
      if(file==='chi-siamo.html' && cards.length>=0) {
        const rows=[...document.querySelectorAll('.why-list > div')];rows.forEach((r,i)=>{if(page[i+1])r.querySelector('b').textContent=page[i+1];});
      }
      if(file==='contatti.html') {
        const labels=[...document.querySelectorAll('.contact-details b')];if(labels[0])labels[0].textContent=page[1];
      }
    }
    const pageCopy = {
      'immobili.html': {
        en:["A sample selection showing how property listings can be presented. Real listings can be added by the website manager.","Homes in the city and in neighbourhoods to enjoy, with clear information and viewing support.","Spaces for families, gardens and new possibilities: tell us what you are looking for.","We assess your needs, location and property features together to guide your search."],
        bn:["প্রপার্টি তালিকার নমুনা কাঠামো। ওয়েবসাইট পরিচালনাকারী এখানে প্রকৃত বিজ্ঞাপন যোগ করতে পারবেন।","শহর ও বসবাসের উপযোগী এলাকায় বাড়ি—পরিষ্কার তথ্য ও পরিদর্শন সহায়তাসহ।","পরিবারের জন্য জায়গা, বাগান ও নতুন সম্ভাবনা—আপনি কী খুঁজছেন আমাদের জানান।","আপনার চাহিদা, অবস্থান ও বৈশিষ্ট্য বিবেচনা করে অনুসন্ধানে সহায়তা করি।"],
        ar:["عرض تجريبي لطريقة تقديم العقارات. يمكن لمسؤول الموقع إضافة الإعلانات الفعلية.","منازل في المدينة وأحياء مناسبة للعيش، مع معلومات واضحة ودعم للزيارة.","مساحات للعائلة وحدائق وفرص جديدة؛ أخبرنا عما تبحث عنه.","نقيّم احتياجاتك والموقع والخصائص معًا لمساعدتك في البحث."],
        ur:["جائیداد کی فہرست دکھانے کا نمونہ۔ اصل اشتہارات ویب سائٹ منتظم شامل کر سکتا ہے۔","شہر اور رہنے کے اچھے محلوں میں گھر، واضح معلومات اور وزٹ کی مدد کے ساتھ۔","خاندان کے لیے جگہ، باغات اور نئے امکانات؛ ہمیں بتائیں آپ کیا تلاش کر رہے ہیں۔","آپ کی ضروریات، مقام اور خصوصیات دیکھ کر تلاش میں رہنمائی کرتے ہیں۔"],
        hi:["प्रॉपर्टी लिस्टिंग दिखाने का नमूना। वेबसाइट प्रबंधक वास्तविक लिस्टिंग जोड़ सकता है।","शहर और अच्छे पड़ोस में घर, स्पष्ट जानकारी और विज़िट सहायता के साथ।","परिवार के लिए जगह, बगीचे और नए अवसर—बताइए आप क्या खोज रहे हैं।","आपकी ज़रूरत, स्थान और विशेषताओं के आधार पर खोज में मदद करते हैं।"]
      },
      'servizi.html': {
        en:["Property buying, selling and advice with people at the centre.","Digital presence, content and tools to shape and grow your projects.","Information and guidance to help you understand available electricity and gas options."],
        bn:["মানুষকে গুরুত্ব দিয়ে বাড়ি কেনা, বিক্রি ও রিয়েল এস্টেট পরামর্শ।","আপনার উদ্যোগের ডিজিটাল উপস্থিতি ও বিকাশে কনটেন্ট এবং প্রয়োজনীয় টুলস।","বিদ্যুৎ ও গ্যাসের উপলভ্য বিকল্প বুঝতে তথ্য ও পরামর্শ।"],
        ar:["شراء وبيع العقارات والاستشارات مع وضع الناس في المقام الأول.","الحضور الرقمي والمحتوى والأدوات لدعم مشاريعك وتنميتها.","معلومات وإرشادات لفهم خيارات الكهرباء والغاز المتاحة."],
        ur:["لوگوں کو ترجیح دیتے ہوئے جائیداد کی خرید، فروخت اور مشاورت۔","آپ کے منصوبوں کی ڈیجیٹل موجودگی اور ترقی کے لیے مواد اور ٹولز۔","بجلی اور گیس کے دستیاب اختیارات سمجھنے کے لیے معلومات اور رہنمائی۔"],
        hi:["लोगों को प्राथमिकता देते हुए संपत्ति खरीद, बिक्री और सलाह।","आपकी परियोजनाओं की डिजिटल उपस्थिति और विकास के लिए सामग्री और टूल।","बिजली और गैस के उपलब्ध विकल्पों को समझने के लिए जानकारी और मार्गदर्शन।"]
      },
      'chi-siamo.html': {
        en:["Bringing people, skills and opportunities together.","Three areas of activity to support different customer needs.","Clear communication and attention throughout every customer's journey."],
        bn:["মানুষ, দক্ষতা ও সম্ভাবনাকে একত্র করা।","বিভিন্ন গ্রাহকের প্রয়োজন পূরণে তিনটি কার্যক্ষেত্র।","প্রতিটি গ্রাহকের যাত্রায় স্বচ্ছ যোগাযোগ ও যত্নশীল সহযোগিতা।"],
        ar:["نجمع الناس والمهارات والفرص معًا.","ثلاثة مجالات لدعم احتياجات العملاء المختلفة.","تواصل واضح واهتمام طوال رحلة كل عميل."],
        ur:["لوگوں، مہارتوں اور مواقع کو یکجا کرنا۔","مختلف صارفین کی ضروریات کے لیے تین شعبے۔","ہر صارف کے سفر میں واضح رابطہ اور توجہ۔"],
        hi:["लोगों, कौशल और अवसरों को एक साथ लाना।","अलग-अलग ग्राहकों की ज़रूरतों के लिए तीन कार्यक्षेत्र।","हर ग्राहक की यात्रा में स्पष्ट संवाद और ध्यान।"]
      }
    };
    const copies=pageCopy[file]?.[lang];
    if(copies){
      const cards=[...document.querySelectorAll('.info-card')];
      if(file==='immobili.html'){
        cards.forEach((c,i)=>{const p=c.querySelector('p');if(p&&copies[i+1])p.textContent=copies[i+1];});
        const intro=document.querySelector('.section-heading p');if(intro)intro.textContent=copies[0];
      } else {
        cards.forEach((c,i)=>{const p=c.querySelector('p');if(p&&copies[i])p.textContent=copies[i];});
      }
    }
    try { localStorage.setItem('domex-language',lang); } catch(e) {}
  }
  if (langSelect) {
    langSelect.addEventListener('change', e => applyLanguage(e.target.value));
    applyLanguage(getSavedLang());
  } else {
    applyLanguage(getSavedLang());
  }

  document.querySelectorAll('form[data-demo-form]').forEach(form=>form.addEventListener('submit',e=>{
    e.preventDefault();
    if(toast){toast.textContent='Grazie! Questa è una demo: collega il modulo al tuo servizio email/CRM per ricevere i messaggi.';toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),4200);}
    form.reset();
  }));
});