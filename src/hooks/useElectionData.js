import { useLanguage } from '../context/LanguageContext';

const LOCALIZED_DATA = {
  en: {
    timeline: [
      { id: 1, date: '2024-08-01', title: 'Primary Elections End', description: 'Candidates for the general election are officially finalized.' },
      { id: 2, date: '2024-09-01', title: 'Voter Registration Opens', description: 'Start registering for the upcoming election online or via mail.' },
      { id: 3, date: '2024-09-15', title: 'Mail-in Ballots Sent', description: 'Registered voters who requested mail-in ballots will begin receiving them.' },
      { id: 4, date: '2024-10-15', title: 'Registration Deadline', description: 'Last day to register to vote in most jurisdictions.' },
      { id: 5, date: '2024-10-20', title: 'Early Voting Begins', description: 'Cast your ballot early at designated drop-off locations and polling sites.' },
      { id: 6, date: '2024-11-05', title: 'Election Day', description: 'General election polling is open from 7 AM to 8 PM local time.' }
    ],
    faq: [
      { id: 1, question: 'Where is my polling place?', answer: 'You can find your polling place on your local state election website or by asking the AI assistant. Polling places are typically schools, community centers, or libraries near your registered address.' },
      { id: 2, question: 'Do I need an ID to vote?', answer: 'Voter ID requirements vary heavily by state. Some states require strict photo ID, while others accept utility bills or bank statements. The assistant can provide details for your specific state if you ask!' },
      { id: 3, question: 'Can I vote if I am a college student?', answer: 'Yes! College students have the right to register to vote at either their college address or their permanent home address, but not both.' },
      { id: 4, question: 'What do I do if I make a mistake on my mail-in ballot?', answer: 'If you make a mistake, do not cross it out. Contact your local election office immediately to request a replacement ballot, or surrender your spoiled ballot at an early voting center.' }
    ],
    voting_steps: [
      { id: 1, title: 'Step 1: Verify Registration', description: 'Ensure you are registered to vote at your current address.' },
      { id: 2, title: 'Step 2: Know Your Options', description: 'Decide whether you will vote by mail, early in-person, or on Election Day.' },
      { id: 3, title: 'Step 3: Find Polling Place', description: 'Locate your designated polling place or ballot drop box.' }
    ]
  },
  hi: {
    timeline: [
      { id: 1, date: '2024-08-01', title: 'प्राथमिक चुनाव समाप्त', description: 'आम चुनाव के उम्मीदवार आधिकारिक तौर पर तय हो गए हैं।' },
      { id: 2, date: '2024-09-01', title: 'मतदाता पंजीकरण शुरू', description: 'ऑनलाइन या मेल के माध्यम से पंजीकरण शुरू करें।' },
      { id: 3, date: '2024-09-15', title: 'डाक मतपत्र भेजे गए', description: 'पंजीकृत मतदाताओं को मतपत्र मिलना शुरू हो जाएगा।' },
      { id: 4, date: '2024-10-15', title: 'पंजीकरण की समय सीमा', description: 'ज्यादातर अधिकार क्षेत्रों में मतदान के लिए पंजीकरण का अंतिम दिन।' },
      { id: 5, date: '2024-10-20', title: 'प्रारंभिक मतदान शुरू', description: 'निर्धारित स्थानों पर जल्दी मतदान करें।' },
      { id: 6, date: '2024-11-05', title: 'चुनाव का दिन', description: 'आम चुनाव मतदान सुबह 7 बजे से रात 8 बजे तक खुला रहता है।' }
    ],
    faq: [
      { id: 1, question: 'मेरा मतदान केंद्र कहाँ है?', answer: 'आप एआई सहायक से पूछकर अपना मतदान केंद्र ढूंढ सकते हैं।' },
      { id: 2, question: 'क्या मुझे वोट देने के लिए आईडी चाहिए?', answer: 'मतदाता आईडी की आवश्यकताएं राज्य के अनुसार भिन्न होती हैं। कुछ को सख्त फोटो आईडी चाहिए।' },
      { id: 3, question: 'क्या मैं कॉलेज का छात्र होने पर भी वोट दे सकता हूँ?', answer: 'हाँ! आप अपने घर या कॉलेज के पते पर पंजीकरण कर सकते हैं।' },
      { id: 4, question: 'अगर मैं अपने मतपत्र पर गलती कर दूं तो क्या होगा?', answer: 'इसे काटें नहीं। तुरंत नया मतपत्र मांगें।' }
    ],
    voting_steps: [
      { id: 1, title: 'चरण 1: पंजीकरण सत्यापित करें', description: 'सुनिश्चित करें कि आप पंजीकृत हैं।' },
      { id: 2, title: 'चरण 2: अपने विकल्प जानें', description: 'तय करें कि आप कैसे मतदान करेंगे।' },
      { id: 3, title: 'चरण 3: मतदान केंद्र खोजें', description: 'अपना मतदान केंद्र खोजें।' }
    ]
  },
  te: {
    timeline: [
      { id: 1, date: '2024-08-01', title: 'ప్రాథమిక ఎన్నికలు ముగిశాయి', description: 'అభ్యర్థులు ఖరారు చేయబడ్డారు.' },
      { id: 2, date: '2024-09-01', title: 'ఓటరు నమోదు ప్రారంభం', description: 'ఆన్‌లైన్‌లో లేదా మెయిల్ ద్వారా నమోదు ప్రారంభించండి.' },
      { id: 3, date: '2024-09-15', title: 'మెయిల్ బ్యాలెట్‌లు పంపబడ్డాయి', description: 'నమోదిత ఓటర్లు బ్యాలెట్‌లను స్వీకరిస్తారు.' },
      { id: 4, date: '2024-10-15', title: 'నమోదు గడువు', description: 'నమోదుకు చివరి రోజు.' },
      { id: 5, date: '2024-10-20', title: 'ముందస్తు ఓటింగ్ ప్రారంభం', description: 'మీ ఓటును ముందుగానే వేయండి.' },
      { id: 6, date: '2024-11-05', title: 'ఎన్నికల రోజు', description: 'ఉదయం 7 నుండి రాత్రి 8 గంటల వరకు ఓటింగ్.' }
    ],
    faq: [
      { id: 1, question: 'నా పోలింగ్ కేంద్రం ఎక్కడ ఉంది?', answer: 'AI అసిస్టెంట్‌ని అడగడం ద్వారా మీరు మీ పోలింగ్ కేంద్రాన్ని కనుగొనవచ్చు.' },
      { id: 2, question: 'ఓటు వేయడానికి నాకు ID కావాలా?', answer: 'రాష్ట్రాన్ని బట్టి ID అవసరాలు మారుతాయి.' },
      { id: 3, question: 'నేను కళాశాల విద్యార్థిని అయితే ఓటు వేయవచ్చా?', answer: 'అవును! మీరు మీ ఇంటి లేదా కళాశాల చిరునామాలో నమోదు చేసుకోవచ్చు.' },
      { id: 4, question: 'బ్యాలెట్‌పై పొరపాటు చేస్తే నేను ఏమి చేయాలి?', answer: 'కొట్టివేయవద్దు. వెంటనే కొత్త బ్యాలెట్ అడగండి.' }
    ],
    voting_steps: [
      { id: 1, title: 'దశ 1: నమోదును ధృవీకరించండి', description: 'మీరు నమోదు చేసుకున్నారని నిర్ధారించుకోండి.' },
      { id: 2, title: 'దశ 2: మీ ఎంపికలను తెలుసుకోండి', description: 'ఎలా ఓటు వేయాలో నిర్ణయించుకోండి.' },
      { id: 3, title: 'దశ 3: పోలింగ్ కేంద్రాన్ని కనుగొనండి', description: 'మీ పోలింగ్ కేంద్రాన్ని గుర్తించండి.' }
    ]
  },
  ta: {
    timeline: [
      { id: 1, date: '2024-08-01', title: 'முதன்மைத் தேர்தல்கள் முடிவு', description: 'வேட்பாளர்கள் இறுதி செய்யப்பட்டனர்.' },
      { id: 2, date: '2024-09-01', title: 'வாக்காளர் பதிவு திறப்பு', description: 'பதிவு செய்யத் தொடங்குங்கள்.' },
      { id: 3, date: '2024-09-15', title: 'அஞ்சல் வாக்குச்சீட்டுகள்', description: 'வாக்குச்சீட்டுகள் அனுப்பப்படும்.' },
      { id: 4, date: '2024-10-15', title: 'பதிவு காலக்கெடு', description: 'பதிவு செய்ய கடைசி நாள்.' },
      { id: 5, date: '2024-10-20', title: 'முன்கூட்டிய வாக்குப்பதிவு', description: 'முன்கூட்டியே வாக்களியுங்கள்.' },
      { id: 6, date: '2024-11-05', title: 'தேர்தல் நாள்', description: 'காலை 7 முதல் இரவு 8 மணி வரை.' }
    ],
    faq: [
      { id: 1, question: 'என் வாக்குச்சாவடி எங்கே உள்ளது?', answer: 'AI உதவியாளரிடம் கேட்டு தெரிந்து கொள்ளலாம்.' },
      { id: 2, question: 'எனக்கு ID தேவையா?', answer: 'ID தேவைகள் மாநிலத்திற்கு மாநிலம் மாறுபடும்.' },
      { id: 3, question: 'மாணவரால் வாக்களிக்க முடியுமா?', answer: 'ஆம்! உங்கள் கல்லூரி அல்லது வீட்டு முகவரியில் பதிவு செய்யலாம்.' },
      { id: 4, question: 'தவறு செய்தால் என்ன செய்வது?', answer: 'புதிய வாக்குச்சீட்டை கேளுங்கள்.' }
    ],
    voting_steps: [
      { id: 1, title: 'படி 1: பதிவைச் சரிபார்க்கவும்', description: 'பதிவு செய்துள்ளீர்கள் என்பதை உறுதிப்படுத்தவும்.' },
      { id: 2, title: 'படி 2: விருப்பங்களை அறியவும்', description: 'எப்படி வாக்களிக்கப் போகிறீர்கள் என முடிவு செய்யுங்கள்.' },
      { id: 3, title: 'படி 3: வாக்குச்சாவடியைக் கண்டறியவும்', description: 'வாக்குச்சாவடியைக் கண்டறியவும்.' }
    ]
  },
  bn: {
    timeline: [
      { id: 1, date: '2024-08-01', title: 'প্রাথমিক নির্বাচন শেষ', description: 'প্রার্থীরা চূড়ান্ত।' },
      { id: 2, date: '2024-09-01', title: 'নিবন্ধন শুরু', description: 'নিবন্ধন শুরু করুন।' },
      { id: 3, date: '2024-09-15', title: 'ব্যালট পাঠানো হয়েছে', description: 'ব্যালট পাঠানো শুরু হয়েছে।' },
      { id: 4, date: '2024-10-15', title: 'নিবন্ধনের শেষ দিন', description: 'নিবন্ধনের শেষ দিন।' },
      { id: 5, date: '2024-10-20', title: 'আগাম ভোটদান শুরু', description: 'আগাম ভোট দিন।' },
      { id: 6, date: '2024-11-05', title: 'নির্বাচনের দিন', description: 'সকাল ৭টা থেকে রাত ৮টা।' }
    ],
    faq: [
      { id: 1, question: 'আমার ভোটকেন্দ্র কোথায়?', answer: 'আপনি এআই সহকারীকে জিজ্ঞাসা করতে পারেন।' },
      { id: 2, question: 'ভোট দিতে কি আইডি লাগবে?', answer: 'আইডির প্রয়োজনীয়তা রাজ্য ভেদে ভিন্ন হয়।' },
      { id: 3, question: 'ছাত্ররা কি ভোট দিতে পারবে?', answer: 'হ্যাঁ! আপনি আপনার বাড়িতে বা কলেজের ঠিকানায় নিবন্ধন করতে পারেন।' },
      { id: 4, question: 'ভুল হলে কী করব?', answer: 'নতুন ব্যালট চান।' }
    ],
    voting_steps: [
      { id: 1, title: 'ধাপ 1: নিবন্ধন যাচাই করুন', description: 'নিশ্চিত করুন আপনি নিবন্ধিত।' },
      { id: 2, title: 'ধাপ 2: বিকল্পগুলি জানুন', description: 'সিদ্ধান্ত নিন কীভাবে ভোট দেবেন।' },
      { id: 3, title: 'ধাপ 3: ভোটকেন্দ্র খুঁজুন', description: 'আপনার ভোটকেন্দ্র খুঁজুন।' }
    ]
  },
  kn: {
    timeline: [
      { id: 1, date: '2024-08-01', title: 'ಪ್ರಾಥಮಿಕ ಚುನಾವಣೆ ಮುಕ್ತಾಯ', description: 'ಅಭ್ಯರ್ಥಿಗಳು ಅಂತಿಮಗೊಂಡಿದ್ದಾರೆ.' },
      { id: 2, date: '2024-09-01', title: 'ನೋಂದಣಿ ಪ್ರಾರಂಭ', description: 'ನೋಂದಣಿ ಪ್ರಾರಂಭಿಸಿ.' },
      { id: 3, date: '2024-09-15', title: 'ಮತಪತ್ರಗಳನ್ನು ಕಳುಹಿಸಲಾಗಿದೆ', description: 'ಮತಪತ್ರಗಳನ್ನು ಕಳುಹಿಸಲಾಗಿದೆ.' },
      { id: 4, date: '2024-10-15', title: 'ನೋಂದಣಿ ಅಂತಿಮ ದಿನ', description: 'ನೋಂದಣಿಗೆ ಕೊನೆಯ ದಿನ.' },
      { id: 5, date: '2024-10-20', title: 'ಮುಂಚಿನ ಮತದಾನ ಪ್ರಾರಂಭ', description: 'ಮೊದಲೇ ಮತ ಚಲಾಯಿಸಿ.' },
      { id: 6, date: '2024-11-05', title: 'ಚುನಾವಣಾ ದಿನ', description: 'ಬೆಳಿಗ್ಗೆ 7 ರಿಂದ ರಾತ್ರಿ 8 ರವರೆಗೆ.' }
    ],
    faq: [
      { id: 1, question: 'ನನ್ನ ಮತಗಟ್ಟೆ ಎಲ್ಲಿದೆ?', answer: 'ಎಐ ಸಹಾಯಕನನ್ನು ಕೇಳಿ.' },
      { id: 2, question: 'ಮತದಾನಕ್ಕೆ ಐಡಿ ಬೇಕೇ?', answer: 'ಐಡಿ ಅಗತ್ಯತೆಗಳು ರಾಜ್ಯದಿಂದ ರಾಜ್ಯಕ್ಕೆ ಭಿನ್ನವಾಗಿರುತ್ತವೆ.' },
      { id: 3, question: 'ವಿದ್ಯಾರ್ಥಿಗಳು ಮತ ಚಲಾಯಿಸಬಹುದೇ?', answer: 'ಹೌದು! ಕಾಲೇಜು ಅಥವಾ ಮನೆಯ ವಿಳಾಸದಲ್ಲಿ ನೋಂದಾಯಿಸಬಹುದು.' },
      { id: 4, question: 'ತಪ್ಪಾದರೆ ಏನು ಮಾಡಬೇಕು?', answer: 'ಹೊಸ ಮತಪತ್ರ ಕೇಳಿ.' }
    ],
    voting_steps: [
      { id: 1, title: 'ಹಂತ 1: ನೋಂದಣಿಯನ್ನು ಪರಿಶೀಲಿಸಿ', description: 'ನೋಂದಾಯಿಸಲಾಗಿದೆ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.' },
      { id: 2, title: 'ಹಂತ 2: ಆಯ್ಕೆಗಳನ್ನು ತಿಳಿಯಿರಿ', description: 'ಹೇಗೆ ಮತ ಚಲಾಯಿಸಬೇಕು ಎಂದು ನಿರ್ಧರಿಸಿ.' },
      { id: 3, title: 'ಹಂತ 3: ಮತಗಟ್ಟೆಯನ್ನು ಹುಡುಕಿ', description: 'ನಿಮ್ಮ ಮತಗಟ್ಟೆಯನ್ನು ಹುಡುಕಿ.' }
    ]
  }
};

export const useElectionData = () => {
  const { language } = useLanguage();
  return LOCALIZED_DATA[language] || LOCALIZED_DATA['en'];
};
