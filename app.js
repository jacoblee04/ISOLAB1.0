/* ============================================================
   ISO LAB — app.js
   ============================================================ */

// ─── CONSTANTS ────────────────────────────────────────────────
const EXERCISES = {
  Chest:     ['Bench Press','Incline Bench Press','Decline Bench Press','Dumbbell Fly','Cable Crossover','Push-Up','Dips','Incline Dumbbell Press','Machine Chest Press','Pec Deck'],
  Back:      ['Deadlift','Pull-Up','Chin-Up','Barbell Row','Dumbbell Row','Cable Row','Lat Pulldown','T-Bar Row','Face Pull','Hyperextension'],
  Shoulders: ['Overhead Press','Dumbbell Shoulder Press','Lateral Raise','Front Raise','Reverse Fly','Arnold Press','Cable Lateral Raise','Upright Row','Machine Shoulder Press'],
  Legs:      ['Squat','Front Squat','Leg Press','Romanian Deadlift','Leg Curl','Leg Extension','Calf Raise','Lunges','Bulgarian Split Squat','Hack Squat','Goblet Squat'],
  Arms:      ['Barbell Curl','Dumbbell Curl','Hammer Curl','Preacher Curl','Cable Curl','Tricep Pushdown','Skull Crusher','Overhead Tricep Extension','Close-Grip Bench Press','Dips'],
  Core:      ['Plank','Ab Wheel','Hanging Leg Raise','Cable Crunch','Russian Twist','Sit-Up','Dead Bug','Dragon Flag','L-Sit','Pallof Press'],
  Cardio:    ['Running','Cycling','Rowing','Jump Rope','Swimming','HIIT','Stair Climber','Elliptical','Walking','Battle Ropes'],
};

const FOODS = [
  {n:'Chicken Breast',    base:100, unit:'g',      cal:165, p:31,  c:0,   f:3.6},
  {n:'Rice, cooked',      base:100, unit:'g',      cal:130, p:2.7, c:28,  f:0.3},
  {n:'Egg',               base:1,   unit:'egg',    cal:72,  p:6,   c:0.4, f:5},
  {n:'Oats (dry)',        base:100, unit:'g',      cal:389, p:17,  c:66,  f:7},
  {n:'Greek Yogurt',      base:100, unit:'g',      cal:59,  p:10,  c:3.6, f:0.4},
  {n:'Banana',            base:1,   unit:'medium', cal:89,  p:1.1, c:23,  f:0.3},
  {n:'Whey Protein',      base:1,   unit:'scoop',  cal:120, p:25,  c:3,   f:2},
  {n:'Salmon',            base:100, unit:'g',      cal:208, p:20,  c:0,   f:13},
  {n:'Sweet Potato',      base:100, unit:'g',      cal:86,  p:1.6, c:20,  f:0.1},
  {n:'Almonds',           base:30,  unit:'g',      cal:173, p:6,   c:6,   f:15},
  {n:'Broccoli',          base:100, unit:'g',      cal:34,  p:2.8, c:7,   f:0.4},
  {n:'Tuna (canned)',     base:100, unit:'g',      cal:116, p:26,  c:0,   f:1},
  {n:'Whole Wheat Bread', base:1,   unit:'slice',  cal:79,  p:4,   c:15,  f:1},
  {n:'Whole Milk',        base:250, unit:'ml',     cal:149, p:8,   c:12,  f:8},
  {n:'Peanut Butter',     base:2,   unit:'tbsp',   cal:188, p:8,   c:6,   f:16},
  {n:'Apple',             base:1,   unit:'medium', cal:95,  p:0.5, c:25,  f:0.3},
  {n:'Beef, lean',        base:100, unit:'g',      cal:215, p:26,  c:0,   f:12},
  {n:'Cottage Cheese',    base:100, unit:'g',      cal:72,  p:12,  c:3,   f:1},
  {n:'Pasta, cooked',     base:100, unit:'g',      cal:158, p:5.8, c:31,  f:0.9},
  {n:'Avocado',           base:100, unit:'g',      cal:160, p:2,   c:9,   f:15},
  {n:'Blueberries',       base:100, unit:'g',      cal:57,  p:0.7, c:14,  f:0.3},
  {n:'Steak',             base:100, unit:'g',      cal:250, p:26,  c:0,   f:17},
  {n:'Orange',            base:1,   unit:'medium', cal:62,  p:1.2, c:15,  f:0.2},
  {n:'Mixed Nuts',        base:30,  unit:'g',      cal:185, p:4.5, c:6,   f:17},
  {n:'Protein Bar',       base:1,   unit:'bar',    cal:200, p:20,  c:22,  f:7},
  {n:'Bagel (plain)',     base:1,   unit:'bagel',  cal:270, p:9,   c:52,  f:1.5},
  {n:'Quinoa, cooked',    base:100, unit:'g',      cal:120, p:4.4, c:22,  f:1.9},
  {n:'Lentils, cooked',   base:100, unit:'g',      cal:116, p:9,   c:20,  f:0.4},
  {n:'Tofu',              base:100, unit:'g',      cal:76,  p:8,   c:1.9, f:4.8},
  {n:'Dark Chocolate',    base:30,  unit:'g',      cal:170, p:2,   c:14,  f:12},
  {n:'Turkey Breast',     base:100, unit:'g',      cal:135, p:30,  c:0,   f:1},
  {n:'White Potato',      base:100, unit:'g',      cal:77,  p:2,   c:17,  f:0.1},
  {n:'Cheddar Cheese',    base:30,  unit:'g',      cal:120, p:7,   c:0.4, f:10},
  {n:'Bread, white',      base:1,   unit:'slice',  cal:67,  p:2.3, c:13,  f:0.9},
  {n:'Orange Juice',      base:250, unit:'ml',     cal:112, p:1.7, c:26,  f:0.5},
  {n:'Olive Oil',         base:1,   unit:'tbsp',   cal:119, p:0,   c:0,   f:13.5},
  {n:'Butter',            base:10,  unit:'g',      cal:72,  p:0.1, c:0,   f:8.1},
  {n:'Honey',             base:1,   unit:'tbsp',   cal:64,  p:0.1, c:17,  f:0},
  {n:'Kidney Beans',      base:100, unit:'g',      cal:127, p:8.7, c:22,  f:0.5},
  {n:'Mozzarella',        base:100, unit:'g',      cal:280, p:28,  c:3.1, f:17},
];

const CURRENCIES = [
  {code:'GBP', symbol:'£',    name:'British Pound'},
  {code:'USD', symbol:'$',    name:'US Dollar'},
  {code:'EUR', symbol:'€',    name:'Euro'},
  {code:'AUD', symbol:'A$',   name:'Australian Dollar'},
  {code:'CAD', symbol:'C$',   name:'Canadian Dollar'},
  {code:'NZD', symbol:'NZ$',  name:'New Zealand Dollar'},
  {code:'SGD', symbol:'S$',   name:'Singapore Dollar'},
  {code:'CHF', symbol:'Fr',   name:'Swiss Franc'},
  {code:'JPY', symbol:'¥',    name:'Japanese Yen'},
  {code:'INR', symbol:'₹',    name:'Indian Rupee'},
  {code:'ZAR', symbol:'R',    name:'South African Rand'},
  {code:'AED', symbol:'AED ', name:'UAE Dirham'},
  {code:'NOK', symbol:'kr',   name:'Norwegian Krone'},
  {code:'SEK', symbol:'kr',   name:'Swedish Krona'},
  {code:'BRL', symbol:'R$',   name:'Brazilian Real'},
  {code:'MXN', symbol:'Mex$', name:'Mexican Peso'},
  {code:'HKD', symbol:'HK$',  name:'Hong Kong Dollar'},
  {code:'CNY', symbol:'¥',    name:'Chinese Yuan'},
];

const BUDGET_CATS = [
  {name:'Gym & Fitness', color:'#4a60f0', icon:'💪'},
  {name:'Food & Nutrition', color:'#00e676', icon:'🥗'},
  {name:'Supplements', color:'#00d4ff', icon:'💊'},
  {name:'Housing', color:'#b06cff', icon:'🏠'},
  {name:'Transport', color:'#f0b429', icon:'🚗'},
  {name:'Entertainment', color:'#ff9800', icon:'🎮'},
  {name:'Clothing', color:'#ff4d6d', icon:'👕'},
  {name:'Health', color:'#00b0ff', icon:'🏥'},
  {name:'Savings', color:'#69f0ae', icon:'💰'},
  {name:'Other', color:'#90a4ae', icon:'📦'},
];

const GOAL_LABELS = {
  muscle:    'Build Muscle',
  fat:       'Lose Fat',
  strength:  'Get Stronger',
  fitness:   'General Fitness',
  sport:     'Athletic Performance',
  recomp:    'Body Recomposition',
  endurance: 'Build Endurance',
};

// ─── STATE ────────────────────────────────────────────────────
let S = {
  user: null,
  workouts: [],
  meals: [],
  notes: [],
  events: [],
  budget: [],
  habits: [],
  habitLog: {},
  weightLog: [],
  measurements: {},
  prs: [],
  tasks: [],
  runs: [],
  supplements: [],
  suppLog: {},
  program: null,
  currentTab: { training: 'program' },
};

// ─── PERSISTENCE ──────────────────────────────────────────────
const save  = (k,v) => { try { localStorage.setItem('iso_'+k, JSON.stringify(v)); } catch(e){} };
const load  = (k,d=null) => { try { const v=localStorage.getItem('iso_'+k); return v?JSON.parse(v):d; } catch(e){ return d; } };

function persistAll() { Object.keys(S).forEach(k => save(k, S[k])); }
function loadAll()    { Object.keys(S).forEach(k => { const v=load(k); if(v!==null) S[k]=v; }); }

// ─── UTILS ────────────────────────────────────────────────────
const todayStr = () => new Date().toISOString().split('T')[0];
const uid      = () => Date.now().toString(36) + Math.random().toString(36).slice(2,6);
const $ = id  => document.getElementById(id);
const clamp = (v,min,max) => Math.max(min,Math.min(max,v));

function fmtDate(d) {
  return new Date(d).toLocaleDateString('en-GB',{weekday:'short',day:'numeric',month:'short'});
}
function currencySymbol() {
  const code = S.user?.currency || 'GBP';
  return (CURRENCIES.find(c=>c.code===code) || CURRENCIES[0]).symbol;
}
function fmtMoney(n) {
  return (n<0?'-':'')+currencySymbol()+Math.abs(n).toFixed(2);
}
function getInitials(name) {
  return name.split(' ').map(w=>w[0]).join('').toUpperCase().slice(0,2);
}
function daysBetween(a,b) {
  return Math.floor((new Date(b)-new Date(a))/(1000*60*60*24));
}
function getWeekStart(offset=0) {
  const d = new Date();
  d.setDate(d.getDate() - d.getDay() + 1 + offset*7);
  d.setHours(0,0,0,0);
  return d;
}

// ─── CALORIE / MACRO CALCULATOR ───────────────────────────────
function calculateTargets(user) {
  const w = parseFloat(user.weight)||75;
  const h = parseFloat(user.height)||175;
  const a = parseInt(user.age)||25;
  const isMale = user.sex !== 'female';
  // Mifflin-St Jeor BMR
  const bmr = isMale
    ? 10*w + 6.25*h - 5*a + 5
    : 10*w + 6.25*h - 5*a - 161;
  // Activity multiplier
  const actMap = {3:1.375, 4:1.45, 5:1.55, 6:1.65};
  const tdee = bmr * (actMap[user.days] || 1.375);

  // Support goals array (new) or legacy single goal string
  const goals = user.goals || (user.goal ? [user.goal] : ['fitness']);
  const primary = goals[0];

  let calories, protein, carbs, fat;
  // Combination goals take precedence
  if (goals.includes('muscle') && goals.includes('fat')) {
    calories = Math.round(tdee + 50); protein = Math.round(w * 2.4);
  } else if (primary === 'muscle') {
    calories = Math.round(tdee + 300); protein = Math.round(w * 2.2);
  } else if (primary === 'fat') {
    calories = Math.round(tdee - 400); protein = Math.round(w * 2.4);
  } else if (primary === 'strength') {
    calories = Math.round(tdee + 100); protein = Math.round(w * 2.0);
  } else if (primary === 'recomp') {
    calories = Math.round(tdee); protein = Math.round(w * 2.4);
  } else if (primary === 'endurance') {
    calories = Math.round(tdee + 200); protein = Math.round(w * 1.8);
  } else {
    calories = Math.round(tdee); protein = Math.round(w * 1.8);
  }
  fat   = Math.round((calories * 0.28) / 9);
  carbs = Math.round((calories - protein * 4 - fat * 9) / 4);
  return { calories, protein, carbs, fat };
}

// ─── PROGRAM GENERATOR ────────────────────────────────────────
function generateProgram(user) {
  const days  = parseInt(user.days)||4;
  const goals = user.goals || (user.goal ? [user.goal] : ['fitness']);
  const goal  = goals[0] || 'fitness';
  const exp   = user.experience||'intermediate';

  const sets  = exp==='beginner' ? 3 : exp==='advanced' ? 5 : 4;
  const hyper = goal==='muscle' || goal==='recomp' || (goals.includes('muscle') && goals.includes('fat'));
  const str   = goal==='strength';
  const endur = goal==='endurance' || goals.includes('endurance');

  const repsRange = str ? '3-5' : hyper ? '8-12' : endur ? '15-20' : '10-15';
  const rest      = str ? 180   : hyper ? 90      : 60;

  const mk = (name, muscle, reps=repsRange, s=sets) => ({name, muscle, sets:s, reps, rest});

  const programs = {
    3: {
      name:'3-Day Full Body',
      days:[
        {label:'Full Body A', exercises:[mk('Squat','Legs'), mk('Bench Press','Chest'), mk('Barbell Row','Back'), mk('Overhead Press','Shoulders'), mk('Barbell Curl','Arms'), mk('Tricep Pushdown','Arms')]},
        {label:'Full Body B', exercises:[mk('Romanian Deadlift','Legs'), mk('Incline Bench Press','Chest'), mk('Lat Pulldown','Back'), mk('Lateral Raise','Shoulders',repsRange,3+1), mk('Hammer Curl','Arms'), mk('Skull Crusher','Arms')]},
        {label:'Full Body C', exercises:[mk('Leg Press','Legs'), mk('Dumbbell Fly','Chest'), mk('Cable Row','Back'), mk('Arnold Press','Shoulders'), mk('Cable Curl','Arms'), mk('Overhead Tricep Extension','Arms')]},
      ]
    },
    4: {
      name:'4-Day Upper / Lower',
      days:[
        {label:'Upper A (Push)', exercises:[mk('Bench Press','Chest'), mk('Overhead Press','Shoulders'), mk('Incline Bench Press','Chest'), mk('Lateral Raise','Shoulders',repsRange,3+1), mk('Tricep Pushdown','Arms'), mk('Skull Crusher','Arms')]},
        {label:'Lower A', exercises:[mk('Squat','Legs'), mk('Romanian Deadlift','Legs'), mk('Leg Press','Legs'), mk('Leg Curl','Legs'), mk('Calf Raise','Legs','12-20',4), mk('Plank','Core','60s',3)]},
        {label:'Upper B (Pull)', exercises:[mk('Deadlift','Back'), mk('Pull-Up','Back'), mk('Barbell Row','Back'), mk('Cable Row','Back'), mk('Barbell Curl','Arms'), mk('Hammer Curl','Arms')]},
        {label:'Lower B', exercises:[mk('Front Squat','Legs'), mk('Bulgarian Split Squat','Legs'), mk('Leg Extension','Legs'), mk('Leg Curl','Legs'), mk('Calf Raise','Legs','15-20',4), mk('Ab Wheel','Core','10-15',3)]},
      ]
    },
    5: {
      name:'5-Day PPL + Arms',
      days:[
        {label:'Push', exercises:[mk('Bench Press','Chest'), mk('Overhead Press','Shoulders'), mk('Incline Dumbbell Press','Chest'), mk('Cable Crossover','Chest'), mk('Lateral Raise','Shoulders',repsRange,4), mk('Tricep Pushdown','Arms')]},
        {label:'Pull', exercises:[mk('Deadlift','Back'), mk('Pull-Up','Back'), mk('Barbell Row','Back'), mk('Lat Pulldown','Back'), mk('Face Pull','Back','15-20',3), mk('Barbell Curl','Arms')]},
        {label:'Legs', exercises:[mk('Squat','Legs'), mk('Romanian Deadlift','Legs'), mk('Leg Press','Legs'), mk('Leg Curl','Legs'), mk('Leg Extension','Legs'), mk('Calf Raise','Legs','15-20',4)]},
        {label:'Arms & Core', exercises:[mk('Barbell Curl','Arms'), mk('Hammer Curl','Arms'), mk('Preacher Curl','Arms'), mk('Skull Crusher','Arms'), mk('Overhead Tricep Extension','Arms'), mk('Hanging Leg Raise','Core','10-15',3), mk('Cable Crunch','Core')]},
        {label:'Full Body / Weak Points', exercises:[mk('Front Squat','Legs'), mk('Incline Bench Press','Chest'), mk('Cable Row','Back'), mk('Lateral Raise','Shoulders',repsRange,4), mk('Bulgarian Split Squat','Legs'), mk('Plank','Core','60s',3)]},
      ]
    },
    6: {
      name:'6-Day PPL x2',
      days:[
        {label:'Push A', exercises:[mk('Bench Press','Chest'), mk('Overhead Press','Shoulders'), mk('Incline Dumbbell Press','Chest'), mk('Lateral Raise','Shoulders',repsRange,4), mk('Tricep Pushdown','Arms'), mk('Skull Crusher','Arms')]},
        {label:'Pull A', exercises:[mk('Deadlift','Back'), mk('Pull-Up','Back'), mk('Barbell Row','Back'), mk('Face Pull','Back','15-20',3), mk('Barbell Curl','Arms'), mk('Hammer Curl','Arms')]},
        {label:'Legs A', exercises:[mk('Squat','Legs'), mk('Romanian Deadlift','Legs'), mk('Leg Press','Legs'), mk('Leg Curl','Legs'), mk('Calf Raise','Legs','15-20',4), mk('Ab Wheel','Core')]},
        {label:'Push B', exercises:[mk('Incline Bench Press','Chest'), mk('Arnold Press','Shoulders'), mk('Cable Crossover','Chest'), mk('Cable Lateral Raise','Shoulders',repsRange,4), mk('Overhead Tricep Extension','Arms'), mk('Dips','Arms')]},
        {label:'Pull B', exercises:[mk('Barbell Row','Back'), mk('Lat Pulldown','Back'), mk('Cable Row','Back'), mk('Reverse Fly','Back','15-20',3), mk('Preacher Curl','Arms'), mk('Cable Curl','Arms')]},
        {label:'Legs B', exercises:[mk('Front Squat','Legs'), mk('Bulgarian Split Squat','Legs'), mk('Leg Extension','Legs'), mk('Leg Curl','Legs'), mk('Hack Squat','Legs'), mk('Calf Raise','Legs','15-20',4)]},
      ]
    },
  };
  const key = Math.min(days,6);
  const prog = programs[key] || programs[4];
  return prog;
}

// ─── ONBOARDING ───────────────────────────────────────────────
let obData = {};
let obStep = 0;

const OB_STEPS = [
  {
    num:'01', title:'Welcome to ISO LAB', sub:'Build your personalised profile — it takes 2 minutes.',
    type:'name',
    render: () => `
      <div class="ob-input-group">
        <div class="ob-field"><label>Your first name</label><input class="ob-field" id="ob-name" type="text" placeholder="e.g. Alex" autocomplete="given-name"></div>
        <div class="ob-field"><label>Age</label><input id="ob-age" type="number" placeholder="e.g. 25" min="14" max="80"></div>
        <div class="ob-field"><label>Biological sex</label>
          <select id="ob-sex"><option value="male">Male</option><option value="female">Female</option><option value="other">Prefer not to say</option></select>
        </div>
      </div>`,
    collect: () => {
      const n=$('ob-name').value.trim(); if(!n){alert('Please enter your name.');return false;}
      obData.name=n; obData.age=$('ob-age').value||25; obData.sex=$('ob-sex').value; return true;
    }
  },
  {
    num:'02', title:'Your body stats', sub:'Used to calculate your personalised calorie & macro targets.',
    type:'stats',
    render: () => `
      <div class="ob-input-group">
        <div class="ob-field"><label>Height (cm)</label><input id="ob-height" type="number" placeholder="e.g. 178" min="120" max="230"></div>
        <div class="ob-field"><label>Weight (kg)</label><input id="ob-weight" type="number" placeholder="e.g. 80" min="30" max="300" step="0.1"></div>
      </div>`,
    collect: () => {
      obData.height=$('ob-height').value||175; obData.weight=$('ob-weight').value||75; return true;
    }
  },
  {
    num:'03', title:'What are your goals?', sub:'Select 1–3 goals — shapes your program, calories & coaching.',
    type:'options',
    render: () => `
      <div class="ob-options">
        ${[['muscle','💪','Build Muscle','Hypertrophy-focused training & calorie surplus'],
           ['fat','🔥','Lose Fat','Caloric deficit with maximum muscle preservation'],
           ['strength','⚡','Get Stronger','Strength programming & peak performance'],
           ['recomp','⚖️','Body Recomposition','Build muscle & lose fat simultaneously'],
           ['endurance','🌊','Build Endurance','Cardio capacity, stamina & aerobic fitness'],
           ['fitness','🏃','General Fitness','Balanced health, energy & wellbeing'],
           ['sport','🎯','Athletic Performance','Sport-specific conditioning & power'],
        ].map(([v,ic,l,s])=>`<button class="ob-option ob-goal-opt" data-goal="${v}"><span class="ob-icon">${ic}</span><span class="ob-label">${l}<span class="ob-sub2">${s}</span></span></button>`).join('')}
      </div>
      <div style="font-size:12px;color:var(--t2);margin-top:10px;text-align:center">Select up to 3 goals</div>`,
    collect: () => {
      const sels=[...document.querySelectorAll('.ob-goal-opt.sel')];
      if(!sels.length){alert('Please select at least one goal.');return false;}
      obData.goals=sels.map(b=>b.dataset.goal);
      obData.goal=obData.goals[0]; return true;
    }
  },
  {
    num:'04', title:'How do you train?', sub:'We\'ll build the optimal split for your schedule.',
    type:'training',
    render: () => `
      <div class="ob-field" style="margin-bottom:20px"><label>Days per week you can train</label>
        <div class="ob-days-grid">
          ${[3,4,5,6].map(d=>`<button class="ob-option" data-val="${d}" style="justify-content:center;font-size:22px;font-weight:900">${d}</button>`).join('')}
        </div>
      </div>
      <div class="ob-field" style="margin-bottom:20px"><label>Training experience</label>
        <div class="ob-options">
          ${[['beginner','Beginner','< 1 year'],['intermediate','Intermediate','1–3 years'],['advanced','Advanced','3+ years']]
            .map(([v,l,s])=>`<button class="ob-option" data-val2="${v}"><span class="ob-label">${l}<span class="ob-sub2">${s}</span></span></button>`).join('')}
        </div>
      </div>
      <div class="ob-field"><label>Preferred session length</label>
        <select id="ob-duration"><option value="45">~45 min</option><option value="60" selected>~60 min</option><option value="75">~75 min</option><option value="90">90+ min</option></select>
      </div>`,
    collect: () => {
      const d=document.querySelector('.ob-option.sel[data-val]');
      const e=document.querySelector('.ob-option.sel[data-val2]');
      if(!d){alert('Select how many days you train.');return false;}
      if(!e){alert('Select your experience level.');return false;}
      obData.days=parseInt(d.dataset.val); obData.experience=e.dataset.val2;
      obData.duration=$('ob-duration').value; return true;
    }
  },
  {
    num:'05', title:'Your lifestyle', sub:'Helps us tailor recovery advice & scheduling.',
    type:'lifestyle',
    render: () => `
      <div class="ob-input-group">
        <div class="ob-field"><label>Work / lifestyle type</label>
          <div class="ob-options ob-grid-2">
            ${[['office','🏢','Office / Desk'],['physical','🔨','Physical Work'],['remote','💻','Remote / WFH'],['student','📚','Student']]
              .map(([v,i,l])=>`<button class="ob-option" data-val3="${v}"><span class="ob-icon">${i}</span><span class="ob-label">${l}</span></button>`).join('')}
          </div>
        </div>
        <div class="ob-field"><label>Diet preference</label>
          <select id="ob-diet">
            <option value="standard">No restriction</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="keto">Keto / Low carb</option>
            <option value="halal">Halal</option>
          </select>
        </div>
        <div class="ob-field"><label>Average wake time</label>
          <input id="ob-wake" type="time" value="07:00">
        </div>
      </div>`,
    collect: () => {
      const w=document.querySelector('.ob-option.sel[data-val3]');
      obData.workType=w?w.dataset.val3:'office';
      obData.diet=$('ob-diet').value; obData.wakeTime=$('ob-wake').value; return true;
    }
  },
  {
    num:'06', title:'Financial picture', sub:'Set your currency & get smart money coaching.',
    type:'budget',
    render: () => `
      <div class="ob-field" style="margin-bottom:20px">
        <label>Your currency</label>
        <select id="ob-currency" class="ob-select" style="width:100%;padding:12px 14px;background:var(--bg3);border:1px solid var(--border);border-radius:var(--r-sm);color:var(--t1);font-size:15px">
          ${CURRENCIES.map(c=>`<option value="${c.code}" ${c.code==='GBP'?'selected':''}>${c.symbol} ${c.name} (${c.code})</option>`).join('')}
        </select>
      </div>
      <div class="ob-options" style="margin-bottom:20px">
        ${[['low','Low income'],['mid','Middle income'],['high','Higher income'],['vhigh','High earner'],['private','Prefer not to say']]
          .map(([v,l])=>`<button class="ob-option" data-val4="${v}"><span class="ob-label">${l}</span></button>`).join('')}
      </div>
      <div class="ob-field"><label>Main financial goal</label>
        <select id="ob-fingoal">
          <option value="save">Save more money</option>
          <option value="track">Track spending better</option>
          <option value="invest">Start investing</option>
          <option value="debt">Pay off debt</option>
        </select>
      </div>`,
    collect: () => {
      const b=document.querySelector('.ob-option.sel[data-val4]');
      obData.budgetBracket=b?b.dataset.val4:'private';
      obData.finGoal=$('ob-fingoal').value;
      obData.currency=$('ob-currency')?.value||'GBP'; return true;
    }
  },
];

function startOnboarding() {
  $('onboarding').classList.remove('hidden');
  obStep=0; obData={};
  renderObStep();
}

function renderObStep() {
  const step = OB_STEPS[obStep];
  const pct  = ((obStep)/OB_STEPS.length*100).toFixed(0);
  $('ob-bar').style.width = pct+'%';
  $('ob-step-container').innerHTML = `
    <div class="ob-step">
      <div class="ob-step-num">Step ${step.num} / 0${OB_STEPS.length}</div>
      <div class="ob-title">${step.title}</div>
      <div class="ob-sub">${step.sub}</div>
      ${step.render()}
      <div class="ob-actions">
        ${obStep>0?`<button class="btn-ghost" onclick="obBack()">Back</button>`:''}
        <button class="btn-primary" onclick="obNext()">${obStep===OB_STEPS.length-1?'Launch ISO LAB 🚀':'Continue'}</button>
      </div>
    </div>`;
  // attach selection listeners
  document.querySelectorAll('.ob-option').forEach(btn => {
    btn.addEventListener('click', () => {
      // Multi-select: goal buttons toggle independently (max 3)
      if(btn.classList.contains('ob-goal-opt')) {
        if(btn.classList.contains('sel')) {
          btn.classList.remove('sel');
        } else {
          const selected = document.querySelectorAll('.ob-goal-opt.sel');
          if(selected.length < 3) btn.classList.add('sel');
        }
        return;
      }
      // Single-select: clear group then select
      const grp = btn.dataset.val !== undefined ? '[data-val]' :
                  btn.dataset.val2!== undefined ? '[data-val2]':
                  btn.dataset.val3!== undefined ? '[data-val3]':
                  btn.dataset.val4!== undefined ? '[data-val4]':'';
      if(grp) document.querySelectorAll('.ob-option'+grp).forEach(b=>b.classList.remove('sel'));
      btn.classList.toggle('sel');
    });
  });
}

function obNext() {
  const step = OB_STEPS[obStep];
  if(step.collect && !step.collect()) return;
  if(obStep < OB_STEPS.length-1) { obStep++; renderObStep(); }
  else { completeOnboarding(); }
}
function obBack() { if(obStep>0){ obStep--; renderObStep(); } }

function completeOnboarding() {
  if(!obData.goals) obData.goals = obData.goal ? [obData.goal] : ['fitness'];
  if(!obData.currency) obData.currency = 'GBP';
  const targets = calculateTargets(obData);
  S.user = { ...obData, targets, createdAt: todayStr() };
  S.program = generateProgram(obData);
  S.habits = [
    {id:uid(), name:'Drink 2.5L water',   icon:'💧', streakDays:[]},
    {id:uid(), name:'Train / move today', icon:'💪', streakDays:[]},
    {id:uid(), name:'8h sleep tonight',   icon:'😴', streakDays:[]},
    {id:uid(), name:'Eat protein goal',   icon:'🥩', streakDays:[]},
    {id:uid(), name:'10 min mindfulness', icon:'🧘', streakDays:[]},
  ];
  S.weightLog = [{date:todayStr(), kg:parseFloat(obData.weight)||0}];
  persistAll();
  $('onboarding').classList.add('hidden');
  startApp();
}

// ─── APP START ────────────────────────────────────────────────
function startApp() {
  $('app').classList.remove('hidden');
  updateSidebarUser();
  // Support manifest shortcuts via URL hash e.g. index.html#training
  const hash = location.hash.replace('#','');
  const validPages = ['dashboard','training','meals','planner','calendar','notes','budget','progress','profile','running','supplements','more'];
  showPage(validPages.includes(hash) ? hash : 'dashboard');
}

function formatGoals(user) {
  const goals = user.goals || (user.goal ? [user.goal] : []);
  return goals.map(g=>GOAL_LABELS[g]||g).join(' · ') || 'General Fitness';
}

function updateSidebarUser() {
  if(!S.user) return;
  const init = getInitials(S.user.name||'U');
  $('sidebar-avatar').textContent = init;
  $('sidebar-name').textContent   = S.user.name;
  $('sidebar-goal').textContent   = formatGoals(S.user);
}

// ─── NAVIGATION ───────────────────────────────────────────────
let currentPage = 'dashboard';

function showPage(id) {
  // Guard: warn if leaving an active workout
  if(activeWorkout && id !== 'training') {
    if(!confirm('You have an active workout in progress. Leave and discard it?')) return;
    activeWorkout = null;
    clearInterval(elapsedInterval);
    stopRestTimer();
    // Restore normal training page
    const tp=$('page-training');
    if(tp) tp.innerHTML=`
      <div class="page-header">
        <div><div class="page-title">Training</div><div class="page-sub">Log sessions, view your program & explore exercises</div></div>
        <div class="header-actions"><button class="btn btn-blue" onclick="openQuickLog()">+ Log Workout</button></div>
      </div>
      <div class="tabs" id="training-tabs">
        <button class="tab active" onclick="showTrainingTab('program')">My Program</button>
        <button class="tab" onclick="showTrainingTab('log')">Workout Log</button>
        <button class="tab" onclick="showTrainingTab('library')">Exercise Library</button>
      </div>
      <div id="training-program"></div>
      <div id="training-log" class="hidden"></div>
      <div id="training-library" class="hidden"></div>`;
  }
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-item, .bnav-item').forEach(b=>{
    b.classList.toggle('active', b.dataset.page===id);
  });
  const page = $('page-'+id);
  if(page) page.classList.add('active');
  currentPage = id;
  const renders = {
    dashboard:   renderDashboard,
    training:    renderTraining,
    meals:       renderMeals,
    planner:     renderPlanner,
    calendar:    renderCalendar,
    notes:       renderNotes,
    budget:      renderBudget,
    progress:    renderProgress,
    profile:     renderProfile,
    running:     renderRunning,
    supplements: renderSupplements,
    more:        renderMore,
  };
  if(renders[id]) renders[id]();
}

// ─── DASHBOARD ────────────────────────────────────────────────
function renderDashboard() {
  const user = S.user; if(!user) return;
  const now  = new Date();
  const hour = now.getHours();
  const greet = hour<12?'Good morning':hour<17?'Good afternoon':'Good evening';
  $('greeting').textContent  = greet+', '+user.name.split(' ')[0]+'!';
  $('date-disp').textContent = now.toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long',year:'numeric'});

  // Streak
  const streak = calcHabitStreak();
  $('streak-badge').innerHTML = `🔥 ${streak} day streak`;

  // Daily score items
  const today = todayStr();
  const doneCt = (S.habitLog[today]||[]).length;
  const habTotal = S.habits.length;
  const todayCals = S.meals.filter(m=>m.date===today).reduce((a,m)=>a+m.cal,0);
  const calTarget = user.targets?.calories||2000;
  const calDone = todayCals >= calTarget*0.9 && todayCals <= calTarget*1.15;
  const workedOut = S.workouts.some(w=>w.date===today) || S.runs.some(r=>r.date===today);
  const weightLogged = S.weightLog.some(w=>w.date===today);
  const scoreItems = [
    {label:'Habits', val:`${doneCt}/${habTotal}`, done: habTotal>0&&doneCt===habTotal, color:'var(--blue3)'},
    {label:'Nutrition', val:calDone?'On target':'Not logged', done:calDone, color:'var(--green)'},
    {label:'Training', val:workedOut?'Completed':'Not done', done:workedOut, color:'var(--gold)'},
    {label:'Weight check-in', val:weightLogged?'Logged':'Pending', done:weightLogged, color:'var(--cyan)'},
  ];
  const scoreTotal = scoreItems.filter(s=>s.done).length;
  const scorePct   = Math.round(scoreTotal/scoreItems.length*100);
  const r=42, circ=2*Math.PI*r;
  const dash = circ*(1-scorePct/100);
  $('coach-card').outerHTML = `
    <div class="daily-score-card" id="coach-card" style="margin-bottom:20px">
      <div class="score-ring-wrap">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="${r}" fill="none" stroke="var(--bg3)" stroke-width="8"/>
          <circle cx="50" cy="50" r="${r}" fill="none"
            stroke="${scorePct>=75?'var(--green)':scorePct>=50?'var(--gold)':'var(--blue2)'}"
            stroke-width="8" stroke-linecap="round"
            stroke-dasharray="${circ}" stroke-dashoffset="${dash}"
            style="transition:stroke-dashoffset 0.6s ease"/>
        </svg>
        <div class="score-ring-label">
          <div class="score-pct">${scorePct}%</div>
          <div class="score-pct-sub">TODAY</div>
        </div>
      </div>
      <div>
        <div class="coach-label">🧠 Your Coach</div>
        <div class="coach-msg" id="coach-msg" style="margin-bottom:12px">${getCoachMessage()}</div>
        <div class="score-items">
          ${scoreItems.map(s=>`<div class="score-item">
            <div class="score-dot" style="background:${s.done?s.color:'var(--t3)'}"></div>
            <span class="score-item-label">${s.label}</span>
            <span class="score-item-val" style="color:${s.done?s.color:'var(--t3)'}">${s.val}</span>
          </div>`).join('')}
        </div>
      </div>
    </div>`;

  // Quick stats
  const weekWorkouts = S.workouts.filter(w=>daysBetween(w.date,today)<=6).length;
  $('stat-workouts').textContent = weekWorkouts;
  $('stat-cals').textContent     = Math.round(todayCals);
  $('stat-cals-sub').textContent = 'of '+calTarget+' kcal';
  const thisMonth = now.toISOString().slice(0,7);
  const income  = S.budget.filter(b=>b.type==='income' &&b.date.startsWith(thisMonth)).reduce((a,b)=>a+b.amount,0);
  const expense = S.budget.filter(b=>b.type==='expense'&&b.date.startsWith(thisMonth)).reduce((a,b)=>a+b.amount,0);
  $('stat-budget').textContent = fmtMoney(income-expense);
  const lastW = S.weightLog.slice(-1)[0];
  $('stat-weight').textContent     = lastW ? lastW.kg+'kg' : '–';
  $('stat-weight-sub').textContent = lastW ? fmtDate(lastW.date) : 'not logged';

  renderTodayWorkoutCard();
  renderHabits();
  renderRecentWorkouts();
}

function calcHabitStreak() {
  let streak=0, d=new Date();
  for(let i=0;i<60;i++){
    const key = d.toISOString().split('T')[0];
    const done = S.habitLog[key]?.length > 0;
    if(done) streak++; else if(i>0) break;
    d.setDate(d.getDate()-1);
  }
  return streak;
}

function getCoachMessage() {
  const user = S.user;
  const streak = calcHabitStreak();
  const weekW = S.workouts.filter(w=>daysBetween(w.date,todayStr())<=6).length;
  const lastW = S.workouts.slice(-1)[0];
  const msgs = [];

  if(streak>=7)  msgs.push(`${streak} days in a row. That's elite consistency — keep compounding.`);
  if(streak===0) msgs.push(`Today is Day 1 again. The best time to start is now. Log your first habit.`);
  if(weekW===0)  msgs.push(`No sessions logged this week yet. Even one workout changes everything.`);
  if(weekW>= user.days) msgs.push(`You've hit your ${user.days}-day target this week. Recovery is part of the process.`);
  if(lastW && daysBetween(lastW.date,todayStr())>=3) msgs.push(`It's been ${daysBetween(lastW.date,todayStr())} days since your last session. Your muscles are ready — get in the lab.`);

  const goalMsgs = {
    muscle:    `Progressive overload is the only rule. Add weight or reps every session.`,
    fat:       `Adherence beats perfection. Stay in your calorie target today.`,
    strength:  `Strength is earned in reps, not sets. Focus on quality over quantity.`,
    fitness:   `Consistency compounds. Show up today and future you thanks you.`,
    sport:     `Train with purpose. Every rep is preparation for your performance.`,
    recomp:    `Recomp is a marathon — hit protein targets and trust the process.`,
    endurance: `Cardio fitness compounds. Every session builds your aerobic engine.`,
  };
  const goals = user.goals || (user.goal ? [user.goal] : ['fitness']);
  msgs.push(goalMsgs[goals[0]]||'You are building something great. Stay disciplined.');
  return msgs[Math.floor(Math.random()*msgs.length)];
}

function renderTodayWorkoutCard() {
  const wrap = $('today-workout-wrap');
  if(!S.program) { wrap.innerHTML=''; return; }
  const dow = new Date().getDay(); // 0=Sun
  const adjDow = ((dow-1+7)%7); // 0=Mon
  const dayIdx = adjDow % S.program.days.length;
  const day = S.program.days[dayIdx];
  const alreadyDone = S.workouts.some(w=>w.date===todayStr() && w.programDay===day.label);
  wrap.innerHTML = `
    <div class="today-workout-card">
      <div class="card-title">💪 Today's Session</div>
      <div class="workout-name">${day.label}</div>
      <div class="workout-meta">
        <div class="workout-meta-item"><span>📋</span>${day.exercises.length} exercises</div>
        <div class="workout-meta-item"><span>⏱</span>${S.user.duration||60} min</div>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:14px">
        ${[...new Set(day.exercises.map(e=>e.muscle))].map(m=>`<span class="chip chip-blue">${m}</span>`).join('')}
      </div>
      ${alreadyDone
        ? `<div class="chip chip-green" style="padding:10px 14px;font-size:13px">✓ Completed today</div>`
        : `<button class="btn btn-blue" onclick="startProgramWorkout(${dayIdx})">Start Workout</button>`}
    </div>`;
}

function renderHabits() {
  const today = todayStr();
  const done  = S.habitLog[today] || [];
  $('habits-list').innerHTML = S.habits.map(h=>`
    <div class="habit-row">
      <div class="habit-check ${done.includes(h.id)?'done':''}" onclick="toggleHabit('${h.id}')">
        ${done.includes(h.id)?`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>`:''}
      </div>
      <span class="habit-name ${done.includes(h.id)?'done':''}">${h.icon} ${h.name}</span>
      <span class="habit-streak">${getHabitStreak(h.id)}🔥</span>
      <button style="background:none;border:none;color:var(--t3);cursor:pointer;font-size:16px;padding:4px 6px;margin-left:4px" onclick="deleteHabit('${h.id}');event.stopPropagation()" title="Remove habit">×</button>
    </div>`).join('') || '<div style="color:var(--t2);font-size:14px;padding:8px 0">No habits yet. Add one to get started!</div>';
}

function deleteHabit(id) {
  S.habits = S.habits.filter(h=>h.id!==id);
  save('habits',S.habits); renderHabits();
}

function getHabitStreak(id) {
  let s=0, d=new Date();
  for(let i=0;i<60;i++){
    const key=d.toISOString().split('T')[0];
    if(S.habitLog[key]?.includes(id)) s++; else if(i>0) break;
    d.setDate(d.getDate()-1);
  }
  return s;
}

function toggleHabit(id) {
  const today = todayStr();
  if(!S.habitLog[today]) S.habitLog[today]=[];
  const idx = S.habitLog[today].indexOf(id);
  if(idx>-1) S.habitLog[today].splice(idx,1);
  else S.habitLog[today].push(id);
  save('habitLog', S.habitLog);
  renderHabits();
  if(currentPage==='dashboard') {
    const streak = calcHabitStreak();
    $('streak-badge').innerHTML = `🔥 ${streak} day streak`;
  }
}

function renderRecentWorkouts() {
  const recent = S.workouts.slice(-5).reverse();
  $('recent-workouts').innerHTML = recent.length ? recent.map(w=>`
    <div style="display:flex;align-items:center;gap:14px;padding:12px 0;border-bottom:1px solid var(--border)">
      <div style="width:40px;height:40px;border-radius:10px;background:rgba(39,56,200,0.15);display:flex;align-items:center;justify-content:center;font-size:18px">💪</div>
      <div style="flex:1">
        <div style="font-size:14px;font-weight:600">${w.name}</div>
        <div style="font-size:12px;color:var(--t2)">${fmtDate(w.date)} · ${w.exercises?.length||0} exercises · ${w.totalSets||0} sets</div>
      </div>
      <div style="font-size:13px;color:var(--t2)">${w.duration||0}min</div>
    </div>`).join('')
  : '<div class="empty-state" style="padding:30px"><div class="empty-state-icon">💪</div><h3>No workouts yet</h3><p>Start your first session to see it here</p></div>';
}

function openAddHabit() {
  openModal(`
    <div class="modal-header"><div class="modal-title">Add Habit</div><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-group"><label class="form-label">Habit name</label><input class="form-input" id="new-habit-name" placeholder="e.g. Meditate 10 minutes"></div>
      <div class="form-group"><label class="form-label">Icon (emoji)</label><input class="form-input" id="new-habit-icon" placeholder="🎯" maxlength="2"></div>
    </div>
    <div class="modal-actions">
      <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn btn-blue" onclick="addHabit()">Add Habit</button>
    </div>`);
}

function addHabit() {
  const name = $('new-habit-name').value.trim();
  if(!name) return;
  S.habits.push({id:uid(), name, icon:$('new-habit-icon').value||'✅', streakDays:[]});
  save('habits', S.habits);
  closeModal();
  renderHabits();
}

// ─── TRAINING ─────────────────────────────────────────────────
let activeWorkout = null;
let workoutStartTime = null;

function renderTraining() {
  if(activeWorkout) { renderActiveWorkout(); return; }
  showTrainingTab(S.currentTab.training||'program');
}

function showTrainingTab(tab) {
  S.currentTab.training = tab;
  document.querySelectorAll('#training-tabs .tab').forEach((t,i)=>{
    t.classList.toggle('active', ['program','log','library'][i]===tab);
  });
  ['program','log','library'].forEach(t=>{
    $('training-'+t).classList.toggle('hidden', t!==tab);
  });
  if(tab==='program')  renderProgram();
  if(tab==='log')      renderWorkoutLog();
  if(tab==='library')  renderLibrary();
}

function renderProgram() {
  const prog = S.program;
  if(!prog){
    $('training-program').innerHTML=`<div class="empty-state"><div class="empty-state-icon">📋</div><h3>No program yet</h3><p>Generate a personalised plan based on your profile</p><button class="btn btn-blue" style="margin-top:16px" onclick="regenerateProgram()">Generate My Program</button></div>`;
    return;
  }
  const dow = ((new Date().getDay()-1+7)%7);
  $('training-program').innerHTML = `
    <div class="card" style="margin-bottom:20px">
      <div class="card-title">${prog.name}</div>
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        ${prog.days.map((d,i)=>`
          <div style="flex:1;min-width:160px;background:${i===dow%prog.days.length?'rgba(39,56,200,0.15)':'var(--bg3)'};border:1px solid ${i===dow%prog.days.length?'var(--border2)':'var(--border)'};border-radius:var(--r-sm);padding:14px;cursor:pointer" onclick="startProgramWorkout(${i})">
            <div style="font-size:11px;color:var(--blue3);font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:4px">Day ${i+1}</div>
            <div style="font-size:15px;font-weight:700;margin-bottom:8px">${d.label}</div>
            ${d.exercises.map(e=>`<div style="font-size:12px;color:var(--t2);margin-bottom:2px">${e.sets}×${e.reps} ${e.name}</div>`).join('')}
            <button class="btn btn-blue btn-sm" style="margin-top:10px;width:100%">Start →</button>
          </div>`).join('')}
      </div>
    </div>`;
}

function regenerateProgram() {
  if(!S.user) return;
  S.program = generateProgram(S.user);
  save('program', S.program);
  renderProgram();
  if(currentPage==='dashboard') renderTodayWorkoutCard();
}

function renderWorkoutLog() {
  const logs = S.workouts.slice().reverse();
  $('training-log').innerHTML = logs.length ? logs.map(w=>`
    <div class="card" style="margin-bottom:12px">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px">
        <div>
          <div style="font-size:18px;font-weight:700">${w.name}</div>
          <div style="font-size:13px;color:var(--t2)">${fmtDate(w.date)} · ${w.duration}min · ${w.totalSets??(w.exercises||[]).reduce((a,e)=>a+(e.sets?.length||0),0)} sets</div>
        </div>
        <button class="btn btn-danger btn-sm" onclick="deleteWorkout('${w.id}')">Delete</button>
      </div>
      ${(w.exercises||[]).map(ex=>`
        <div style="margin-bottom:8px">
          <div style="font-size:14px;font-weight:600;margin-bottom:4px">${ex.name}</div>
          <div style="display:flex;gap:6px;flex-wrap:wrap">
            ${(ex.sets||[]).map((s,i)=>`<span class="chip">${i+1}: ${s.weight}kg × ${s.reps}</span>`).join('')}
          </div>
        </div>`).join('')}
    </div>`).join('')
  : '<div class="empty-state"><div class="empty-state-icon">📋</div><h3>No workouts logged yet</h3><p>Start a session from the program tab</p></div>';
}

function renderLibrary() {
  const search = ''; // could add search input
  $('training-library').innerHTML = `
    <div class="search-bar" style="margin-bottom:16px">
      <input class="form-input" id="lib-search" placeholder="Search exercises…" oninput="filterLibrary()">
    </div>
    <div id="lib-content">${buildLibraryHTML()}</div>`;
}

function buildLibraryHTML(filter='') {
  return Object.entries(EXERCISES).map(([cat,exs])=>{
    const filtered = filter ? exs.filter(e=>e.toLowerCase().includes(filter.toLowerCase())) : exs;
    if(!filtered.length) return '';
    return `<div class="muscle-group-header">${cat}</div>
      <div class="library-grid" style="margin-bottom:16px">
        ${filtered.map(e=>`<div class="lib-item" onclick="openExerciseDetail('${e}','${cat}')">
          <div style="font-size:24px">${catIcon(cat)}</div>
          <div class="li-name">${e}</div>
          <div class="li-cat">${cat}</div>
        </div>`).join('')}
      </div>`;
  }).join('');
}

function filterLibrary() {
  const q = $('lib-search')?.value||'';
  const c = $('lib-content');
  if(c) c.innerHTML = buildLibraryHTML(q);
}

function catIcon(cat) {
  return {Chest:'🏋️',Back:'🎯',Shoulders:'💪',Legs:'🦵',Arms:'💪',Core:'🔥',Cardio:'🏃'}[cat]||'⚡';
}

function openExerciseDetail(name, cat) {
  const prs = S.prs.filter(p=>p.exercise===name);
  const history = S.workouts.flatMap(w=>(w.exercises||[]).filter(e=>e.name===name).map(e=>({date:w.date,sets:e.sets})));
  openModal(`
    <div class="modal-header"><div class="modal-title">${name}</div><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="chip chip-blue" style="margin-bottom:14px">${cat}</div>
      ${prs.length?`<div style="margin-bottom:14px"><div class="form-label">Personal Record</div><div style="font-size:28px;font-weight:900;color:var(--gold)">${prs[0].weight}kg × ${prs[0].reps}</div></div>`:''}
      ${history.length?`<div><div class="form-label" style="margin-bottom:8px">Recent History</div>
        ${history.slice(-3).reverse().map(h=>`<div style="padding:8px 0;border-bottom:1px solid var(--border)">
          <div style="font-size:12px;color:var(--t2)">${fmtDate(h.date)}</div>
          <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:4px">${(h.sets||[]).map((s,i)=>`<span class="chip">${i+1}: ${s.weight}kg×${s.reps}</span>`).join('')}</div>
        </div>`).join('')}</div>`:'<div style="color:var(--t2);font-size:14px">No history yet for this exercise.</div>'}
    </div>`);
}

function openQuickLog() {
  openModal(`
    <div class="modal-header"><div class="modal-title">Log Workout</div><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-group"><label class="form-label">Workout Name</label><input class="form-input" id="wl-name" placeholder="e.g. Push Day, Chest & Tris…"></div>
      <div class="form-group"><label class="form-label">Duration (minutes)</label><input class="form-input" id="wl-dur" type="number" placeholder="60"></div>
      <div class="form-group"><label class="form-label">Notes</label><textarea class="form-textarea" id="wl-notes" placeholder="How did it go?"></textarea></div>
    </div>
    <div class="modal-actions">
      <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn btn-blue" onclick="startProgramWorkoutCustom()">Start Logging Sets →</button>
    </div>`);
}

function startProgramWorkout(idx) {
  const day = S.program.days[idx];
  activeWorkout = {
    id: uid(), name: day.label, programDay: day.label,
    date: todayStr(), startTime: Date.now(),
    exercises: day.exercises.map(e=>({
      name:e.name, muscle:e.muscle, targetSets:e.sets, targetReps:e.reps, restSec:e.rest,
      sets:[]
    })),
  };
  renderActiveWorkout();
}

function startProgramWorkoutCustom() {
  const name = $('wl-name')?.value||'Custom Workout';
  const dur  = parseInt($('wl-dur')?.value)||60;
  closeModal();
  activeWorkout = {
    id:uid(), name, date:todayStr(), startTime:Date.now(), duration:dur, exercises:[]
  };
  renderActiveWorkout();
}

function renderActiveWorkout() {
  const w = activeWorkout;
  const page = $('page-training');
  page.innerHTML = `
    <div class="page-header">
      <div><div class="page-title">${w.name}</div><div class="page-sub" id="workout-elapsed">0:00 elapsed</div></div>
      <div class="header-actions">
        <button class="btn btn-outline btn-sm" onclick="addExerciseToWorkout()">+ Exercise</button>
        <button class="btn btn-blue" onclick="finishWorkout()">Finish ✓</button>
      </div>
    </div>
    <div id="active-exercises">${renderActiveExercises()}</div>
  `;
  page.classList.add('active');
  startElapsedTimer();
}

function renderActiveExercises() {
  if(!activeWorkout) return '';
  return activeWorkout.exercises.map((ex,ei)=>`
    <div class="exercise-card" id="ex-card-${ei}">
      <div class="ex-header">
        <div><div class="ex-name">${ex.name}</div><div class="ex-muscle chip chip-blue">${ex.muscle}</div></div>
        <div style="font-size:12px;color:var(--t2)">${ex.targetSets} sets · ${ex.targetReps} reps</div>
      </div>
      <div style="display:grid;grid-template-columns:32px 1fr 1fr 1fr auto;gap:8px;margin-bottom:8px;padding:6px 0">
        <div style="font-size:11px;color:var(--t3);font-weight:700">SET</div>
        <div style="font-size:11px;color:var(--t3);text-align:center">KG</div>
        <div style="font-size:11px;color:var(--t3);text-align:center">REPS</div>
        <div style="font-size:11px;color:var(--t3);text-align:center">RPE</div>
        <div></div>
      </div>
      ${renderSetsForExercise(ei)}
      <button class="btn btn-outline btn-sm" style="margin-top:10px" onclick="addSet(${ei})">+ Add Set</button>
    </div>`).join('');
}

function renderSetsForExercise(ei) {
  const ex = activeWorkout.exercises[ei];
  const targetSets = ex.targetSets||4;
  const rowCount = Math.max(targetSets, ex.sets.length);
  let html='';
  for(let si=0;si<rowCount;si++){
    const s = ex.sets[si]||{};
    const prev = getPrevSetData(ex.name, si);
    html+=`<div class="set-row" id="set-${ei}-${si}">
      <div class="set-num">${si+1}</div>
      <input class="set-input" id="si-kg-${ei}-${si}" type="number" placeholder="${prev.weight||0}" step="0.5" value="${s.weight||''}">
      <input class="set-input" id="si-reps-${ei}-${si}" type="number" placeholder="${prev.reps||0}" value="${s.reps||''}">
      <input class="set-input" id="si-rpe-${ei}-${si}" type="number" placeholder="RPE" min="1" max="10" value="${s.rpe||''}">
      <button class="set-done-btn ${s.done?'done':''}" onclick="completeSet(${ei},${si})">✓</button>
    </div>`;
  }
  return html;
}

function getPrevSetData(exName, setIdx) {
  const prev = S.workouts.slice().reverse().find(w=>w.exercises?.some(e=>e.name===exName));
  if(!prev) return {};
  const ex = prev.exercises.find(e=>e.name===exName);
  return ex?.sets?.[setIdx]||{};
}

function addSet(ei) {
  activeWorkout.exercises[ei].sets.push({});
  $('active-exercises').innerHTML = renderActiveExercises();
}

function completeSet(ei, si) {
  const kg   = parseFloat($(`si-kg-${ei}-${si}`)?.value)||0;
  const reps = parseInt($(`si-reps-${ei}-${si}`)?.value)||0;
  const rpe  = parseInt($(`si-rpe-${ei}-${si}`)?.value)||0;
  while(activeWorkout.exercises[ei].sets.length<=si) activeWorkout.exercises[ei].sets.push({});
  activeWorkout.exercises[ei].sets[si] = {weight:kg, reps, rpe, done:true};
  checkAndUpdatePR(activeWorkout.exercises[ei].name, kg, reps);
  $('active-exercises').innerHTML = renderActiveExercises();
  const restSec = activeWorkout.exercises[ei].restSec || 90;
  startRestTimer(restSec);
}

function checkAndUpdatePR(name, weight, reps) {
  const existing = S.prs.find(p=>p.exercise===name);
  if(!existing || weight>existing.weight || (weight===existing.weight && reps>existing.reps)){
    S.prs = S.prs.filter(p=>p.exercise!==name);
    S.prs.push({exercise:name, weight, reps, date:todayStr()});
    save('prs', S.prs);
  }
}

function addExerciseToWorkout() {
  openModal(`
    <div class="modal-header"><div class="modal-title">Add Exercise</div><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <input class="form-input" id="ae-search" placeholder="Search exercise…" oninput="filterExSearch()" style="margin-bottom:12px">
      <div class="food-search-results" id="ae-results">
        ${Object.entries(EXERCISES).map(([cat,exs])=>exs.map(e=>`
          <div class="food-result-item" onclick="addExToWorkout('${e}','${cat}')">
            <span>${e}</span><span class="food-result-macros">${cat}</span>
          </div>`).join('')).join('')}
      </div>
    </div>`);
}

function filterExSearch() {
  const q = ($('ae-search')?.value||'').toLowerCase();
  $('ae-results').innerHTML = Object.entries(EXERCISES)
    .map(([cat,exs])=>exs.filter(e=>e.toLowerCase().includes(q)).map(e=>`
      <div class="food-result-item" onclick="addExToWorkout('${e}','${cat}')">
        <span>${e}</span><span class="food-result-macros">${cat}</span>
      </div>`).join('')).join('');
}

function addExToWorkout(name, muscle) {
  activeWorkout.exercises.push({name, muscle, targetSets:4, targetReps:'8-12', restSec:90, sets:[]});
  closeModal();
  $('active-exercises').innerHTML = renderActiveExercises();
}

function finishWorkout() {
  if(!activeWorkout) return;
  const dur = Math.round((Date.now()-activeWorkout.startTime)/60000);
  activeWorkout.exercises.forEach(ex=>{
    ex.sets = ex.sets.filter(s=>s.weight||s.reps);
  });
  activeWorkout.exercises = activeWorkout.exercises.filter(ex=>ex.sets.length);
  activeWorkout.duration  = dur;
  activeWorkout.totalSets = activeWorkout.exercises.reduce((a,e)=>a+e.sets.length,0);
  S.workouts.push(activeWorkout);
  save('workouts', S.workouts);
  activeWorkout = null;
  stopRestTimer();
  $('rest-timer').classList.add('hidden');
  showPage('training');
  showTrainingTab('log');
}

function deleteWorkout(id) {
  if(!confirm('Delete this workout?')) return;
  S.workouts = S.workouts.filter(w=>w.id!==id);
  save('workouts', S.workouts);
  renderWorkoutLog();
}

let elapsedInterval;
function startElapsedTimer() {
  clearInterval(elapsedInterval);
  elapsedInterval = setInterval(()=>{
    if(!activeWorkout) return clearInterval(elapsedInterval);
    const mins = Math.floor((Date.now()-activeWorkout.startTime)/60000);
    const secs = Math.floor(((Date.now()-activeWorkout.startTime)%60000)/1000);
    const el = $('workout-elapsed');
    if(el) el.textContent = `${mins}:${String(secs).padStart(2,'0')} elapsed`;
  },1000);
}

// ─── REST TIMER ───────────────────────────────────────────────
let restInterval, restEnd;
function startRestTimer(sec) {
  restEnd = Date.now() + sec*1000;
  $('rest-timer').classList.remove('hidden');
  clearInterval(restInterval);
  restInterval = setInterval(()=>{
    const remaining = Math.max(0, Math.ceil((restEnd-Date.now())/1000));
    const m=Math.floor(remaining/60), s=remaining%60;
    const el=$('timer-display');
    if(el) el.textContent = `${m}:${String(s).padStart(2,'0')}`;
    if(remaining<=0){ stopRestTimer(); }
  },500);
}
function addRestTime(s) { restEnd+=s*1000; }
function stopRestTimer() {
  clearInterval(restInterval);
  $('rest-timer').classList.add('hidden');
}

// ─── MEALS ────────────────────────────────────────────────────
function renderMeals() {
  const today = todayStr();
  const targets = S.user?.targets||{calories:2000,protein:150,carbs:200,fat:60};
  const log  = S.meals.filter(m=>m.date===today);
  const eaten = {cal:0,p:0,c:0,f:0};
  log.forEach(m=>{eaten.cal+=m.cal;eaten.p+=m.p;eaten.c+=m.c;eaten.f+=m.f;});

  $('meals-date-sub').textContent = fmtDate(today);
  $('meal-date-label').textContent = fmtDate(today);
  $('meal-cals-eaten').textContent  = Math.round(eaten.cal);
  $('meal-cals-target').textContent = targets.calories;
  const calPct = clamp(eaten.cal/targets.calories*100,0,100);
  $('meal-cal-bar').style.width = calPct+'%';
  $('meal-cals-remaining').textContent = eaten.cal<=targets.calories
    ? `${Math.round(targets.calories-eaten.cal)} kcal remaining`
    : `${Math.round(eaten.cal-targets.calories)} kcal over target`;

  $('macro-display').innerHTML = [
    {label:'Protein', val:Math.round(eaten.p), target:targets.protein, color:'var(--blue3)'},
    {label:'Carbs',   val:Math.round(eaten.c), target:targets.carbs,   color:'var(--gold)'},
    {label:'Fat',     val:Math.round(eaten.f), target:targets.fat,     color:'var(--red)'},
  ].map(m=>`
    <div>
      <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px">
        <span style="color:var(--t2)">${m.label}</span>
        <span style="font-weight:700;color:${m.color}">${m.val}g <span style="color:var(--t3)">/ ${m.target}g</span></span>
      </div>
      <div class="progress-bar"><div class="progress-fill" style="width:${clamp(m.val/m.target*100,0,100)}%;background:${m.color}"></div></div>
    </div>`).join('');

  $('meal-log-list').innerHTML = log.length ? log.map(m=>`
    <div class="meal-log-item">
      <div style="width:36px;height:36px;border-radius:8px;background:rgba(0,230,118,0.1);display:flex;align-items:center;justify-content:center">🍽️</div>
      <div style="flex:1">
        <div class="meal-log-name">${m.name}</div>
        <div class="meal-log-macros">P:${m.p}g · C:${m.c}g · F:${m.f}g${m.qty&&m.qty!==1?' · ×'+m.qty:''}</div>
      </div>
      <div>
        <div class="meal-log-cals">${Math.round(m.cal)} kcal</div>
        <button style="font-size:11px;color:var(--red);background:none;border:none;cursor:pointer;float:right" onclick="deleteMeal('${m.id}')">✕</button>
      </div>
    </div>`).join('')
  : '<div class="empty-state" style="padding:30px"><div class="empty-state-icon">🥗</div><h3>Nothing logged yet</h3><p>Tap "+ Log Food" to track your meals</p></div>';
}

let _mealState = { food: null };

function openAddMeal() {
  _mealState = { food: null };
  openModal(`
    <div class="modal-header"><div class="modal-title">Log Food</div><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="tabs" style="margin-bottom:14px">
        <button class="tab active" id="meal-tab-search" onclick="switchMealTab('search')">Search</button>
        <button class="tab" id="meal-tab-custom" onclick="switchMealTab('custom')">Custom</button>
      </div>

      <div id="meal-panel-search">
        <div class="form-group">
          <input class="form-input" id="food-search" placeholder="e.g. Chicken Breast, Oats…" oninput="searchFood()">
          <div id="food-results" style="margin-top:6px"></div>
        </div>
        <div id="food-amount-section" class="hidden" style="border-top:1px solid var(--border);padding-top:14px;margin-top:4px">
          <div style="font-size:14px;font-weight:700;margin-bottom:10px" id="food-selected-name">—</div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Amount</label>
              <input class="form-input" id="food-amount" type="number" step="any" placeholder="100" oninput="updateFoodPreview()">
            </div>
            <div class="form-group">
              <label class="form-label">Unit</label>
              <div class="form-input" id="food-unit-display" style="display:flex;align-items:center;color:var(--t2)">–</div>
            </div>
          </div>
          <div id="food-preview" style="background:var(--bg3);border-radius:var(--r-sm);padding:10px 14px;font-size:13px;display:grid;grid-template-columns:repeat(4,1fr);gap:6px;text-align:center">
            <div><div id="prev-cal" style="font-weight:700;color:var(--blue3)">–</div><div style="color:var(--t2);font-size:11px">kcal</div></div>
            <div><div id="prev-p" style="font-weight:700;color:var(--cyan)">–</div><div style="color:var(--t2);font-size:11px">protein</div></div>
            <div><div id="prev-c" style="font-weight:700;color:var(--gold)">–</div><div style="color:var(--t2);font-size:11px">carbs</div></div>
            <div><div id="prev-f" style="font-weight:700;color:var(--red)">–</div><div style="color:var(--t2);font-size:11px">fat</div></div>
          </div>
        </div>
      </div>

      <div id="meal-panel-custom" class="hidden">
        <div class="form-row">
          <div class="form-group"><label class="form-label">Name</label><input class="form-input" id="custom-food-name" placeholder="Food name"></div>
          <div class="form-group"><label class="form-label">Calories</label><input class="form-input" id="custom-kcal" type="number" placeholder="0" oninput="updateCustomPreview()"></div>
        </div>
        <div class="form-row-3">
          <div class="form-group"><label class="form-label">Protein (g)</label><input class="form-input" id="custom-p" type="number" placeholder="0" oninput="updateCustomPreview()"></div>
          <div class="form-group"><label class="form-label">Carbs (g)</label><input class="form-input" id="custom-c" type="number" placeholder="0" oninput="updateCustomPreview()"></div>
          <div class="form-group"><label class="form-label">Fat (g)</label><input class="form-input" id="custom-f" type="number" placeholder="0" oninput="updateCustomPreview()"></div>
        </div>
        <div id="custom-preview" style="background:var(--bg3);border-radius:var(--r-sm);padding:10px 14px;font-size:13px;display:grid;grid-template-columns:repeat(4,1fr);gap:6px;text-align:center;margin-top:4px">
          <div><div id="cprev-cal" style="font-weight:700;color:var(--blue3)">0</div><div style="color:var(--t2);font-size:11px">kcal</div></div>
          <div><div id="cprev-p" style="font-weight:700;color:var(--cyan)">0g</div><div style="color:var(--t2);font-size:11px">protein</div></div>
          <div><div id="cprev-c" style="font-weight:700;color:var(--gold)">0g</div><div style="color:var(--t2);font-size:11px">carbs</div></div>
          <div><div id="cprev-f" style="font-weight:700;color:var(--red)">0g</div><div style="color:var(--t2);font-size:11px">fat</div></div>
        </div>
      </div>
    </div>
    <div class="modal-actions">
      <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn btn-blue" onclick="logSelectedFood()">Log Food</button>
    </div>`);
}

function switchMealTab(tab) {
  ['search','custom'].forEach(t=>{
    $('meal-tab-'+t)?.classList.toggle('active', t===tab);
    $('meal-panel-'+t)?.classList.toggle('hidden', t!==tab);
  });
}

function updateFoodPreview() {
  const f = _mealState.food; if(!f) return;
  const amt = parseFloat($('food-amount')?.value) || f.base;
  const ratio = amt / f.base;
  const c = Math.round(f.cal * ratio);
  const p = +(f.p * ratio).toFixed(1);
  const cb = +(f.c * ratio).toFixed(1);
  const ft = +(f.f * ratio).toFixed(1);
  if($('prev-cal')) { $('prev-cal').textContent=c; $('prev-p').textContent=p+'g'; $('prev-c').textContent=cb+'g'; $('prev-f').textContent=ft+'g'; }
}

function updateCustomPreview() {
  if($('cprev-cal')) {
    $('cprev-cal').textContent = $('custom-kcal')?.value || '0';
    $('cprev-p').textContent   = ($('custom-p')?.value||'0')+'g';
    $('cprev-c').textContent   = ($('custom-c')?.value||'0')+'g';
    $('cprev-f').textContent   = ($('custom-f')?.value||'0')+'g';
  }
}

function logSelectedFood() {
  // Check which tab is active
  const isSearch = !$('meal-panel-search')?.classList.contains('hidden');
  if(isSearch && _mealState.food) {
    const f = _mealState.food;
    const amt = parseFloat($('food-amount')?.value) || f.base;
    const ratio = amt / f.base;
    const unitLabel = `${amt}${f.unit}`;
    S.meals.push({
      id:uid(), date:todayStr(),
      name:`${f.n} (${unitLabel})`,
      cal: Math.round(f.cal * ratio),
      p:   Math.round(f.p * ratio * 10) / 10,
      c:   Math.round(f.c * ratio * 10) / 10,
      f:   Math.round(f.f * ratio * 10) / 10,
    });
  } else {
    const name = $('custom-food-name')?.value || 'Food';
    const cal  = parseFloat($('custom-kcal')?.value)||0;
    if(!name || !cal) { alert('Enter a name and calories.'); return; }
    S.meals.push({
      id:uid(), date:todayStr(), name,
      cal, p:parseFloat($('custom-p')?.value)||0,
      c:parseFloat($('custom-c')?.value)||0,
      f:parseFloat($('custom-f')?.value)||0,
    });
  }
  save('meals', S.meals);
  closeModal();
  renderMeals();
  if(currentPage==='dashboard') renderDashboard();
}

function searchFood() {
  const q = ($('food-search')?.value||'').toLowerCase();
  const matches = q.length<2 ? [] : FOODS.filter(f=>f.n.toLowerCase().includes(q)).slice(0,8);
  $('food-results').innerHTML = matches.length ? `<div class="food-search-results">
    ${matches.map(f=>`<div class="food-result-item" onclick="selectFood('${f.n.replace(/'/g,"\\'")}')">
      <span>${f.n}</span>
      <span class="food-result-macros">per ${f.base}${f.unit} · ${f.cal}kcal · P:${f.p}g</span>
    </div>`).join('')}</div>` : '';
}

function selectFood(name) {
  const f = FOODS.find(x=>x.n===name); if(!f) return;
  _mealState.food = f;
  $('food-search').value = '';
  $('food-results').innerHTML = '';
  $('food-amount-section')?.classList.remove('hidden');
  if($('food-selected-name')) $('food-selected-name').textContent = f.n;
  if($('food-unit-display')) $('food-unit-display').textContent = f.unit;
  if($('food-amount')) { $('food-amount').value = f.base; $('food-amount').placeholder = f.base; }
  updateFoodPreview();
}


function deleteMeal(id) {
  S.meals = S.meals.filter(m=>m.id!==id);
  save('meals', S.meals);
  renderMeals();
}

// ─── PLANNER ──────────────────────────────────────────────────
let weekOffset = 0;
let taskFilter = 'all';

function renderPlanner() {
  const ws = getWeekStart(weekOffset);
  const we = new Date(ws); we.setDate(we.getDate()+6);
  $('week-label').textContent = `${ws.toLocaleDateString('en-GB',{day:'numeric',month:'short'})} – ${we.toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'})}`;
  renderWeekGrid(ws);
  renderTaskList();
}

function changeWeek(dir) { weekOffset+=dir; renderPlanner(); }

function renderWeekGrid(weekStart) {
  const days=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  const today = todayStr();
  $('week-grid').innerHTML = days.map((d,i)=>{
    const date = new Date(weekStart); date.setDate(date.getDate()+i);
    const dateStr = date.toISOString().split('T')[0];
    const isToday = dateStr===today;
    const dayTasks = S.tasks.filter(t=>t.dueDate===dateStr);
    return `<div class="week-day-col ${isToday?'today':''}">
      <div class="wday-name">${d}</div>
      <div class="wday-num">${date.getDate()}</div>
      ${dayTasks.map(t=>`<div class="wday-task ${t.done?'done':''}" onclick="toggleTask('${t.id}')" title="${t.text}">${t.text.slice(0,16)}${t.text.length>16?'…':''}</div>`).join('')}
      <button style="font-size:18px;background:none;border:none;color:var(--t3);cursor:pointer;margin-top:4px" onclick="openAddTaskForDate('${dateStr}')">+</button>
    </div>`;
  }).join('');
}

function renderTaskList() {
  let tasks = S.tasks.slice();
  const today = todayStr();
  if(taskFilter==='today') tasks = tasks.filter(t=>t.dueDate===today);
  if(taskFilter==='done')  tasks = tasks.filter(t=>t.done);
  else tasks = tasks.filter(t=>taskFilter==='done'||!t.done||taskFilter!=='all'?true:true);
  tasks.sort((a,b)=>{ const pd={high:0,medium:1,low:2}; return (pd[a.priority]||1)-(pd[b.priority]||1); });
  $('task-list').innerHTML = tasks.length ? tasks.map(t=>`
    <div class="task-item">
      <div class="task-check ${t.done?'done':''}" onclick="toggleTask('${t.id}')">
        ${t.done?`<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" width="13" height="13"><polyline points="20 6 9 17 4 12"/></svg>`:''}
      </div>
      <div class="task-priority-dot priority-${t.priority||'low'}"></div>
      <div style="flex:1">
        <div class="task-text ${t.done?'done':''}">${t.text}</div>
        ${t.dueDate?`<div class="task-due">${fmtDate(t.dueDate)}</div>`:''}
      </div>
      <button style="font-size:14px;background:none;border:none;color:var(--red);cursor:pointer" onclick="deleteTask('${t.id}')">✕</button>
    </div>`).join('')
  : '<div class="empty-state" style="padding:30px"><div class="empty-state-icon">✅</div><h3>All clear!</h3><p>No tasks here</p></div>';
}

function filterTasks(f) {
  taskFilter=f;
  ['all','today','done'].forEach(x=>{ $('task-filter-'+x)?.classList.toggle('active',x===f); });
  renderTaskList();
}

function openAddTask() { openAddTaskForDate(todayStr()); }
function openAddTaskForDate(date) {
  openModal(`
    <div class="modal-header"><div class="modal-title">Add Task</div><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-group"><label class="form-label">Task</label><input class="form-input" id="task-text" placeholder="What do you need to do?"></div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">Due date</label><input class="form-input" id="task-date" type="date" value="${date}"></div>
        <div class="form-group"><label class="form-label">Priority</label>
          <select class="form-select" id="task-priority"><option value="high">High</option><option value="medium" selected>Medium</option><option value="low">Low</option></select>
        </div>
      </div>
    </div>
    <div class="modal-actions">
      <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn btn-blue" onclick="addTask()">Add Task</button>
    </div>`);
}

function addTask() {
  const text = $('task-text')?.value.trim(); if(!text) return;
  S.tasks.push({id:uid(), text, dueDate:$('task-date')?.value||todayStr(), priority:$('task-priority')?.value||'medium', done:false});
  save('tasks', S.tasks);
  closeModal(); renderPlanner();
}

function toggleTask(id) {
  const t = S.tasks.find(x=>x.id===id); if(!t) return;
  t.done=!t.done; save('tasks', S.tasks); renderPlanner();
}

function deleteTask(id) {
  S.tasks=S.tasks.filter(t=>t.id!==id); save('tasks',S.tasks); renderPlanner();
}

// ─── CALENDAR ─────────────────────────────────────────────────
let calYear  = new Date().getFullYear();
let calMonth = new Date().getMonth();
let calSelectedDate = todayStr();

function renderCalendar() {
  const months=['January','February','March','April','May','June','July','August','September','October','November','December'];
  $('cal-month-year').textContent = months[calMonth]+' '+calYear;

  const days=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  $('cal-day-headers').innerHTML = days.map(d=>`<div class="cal-day-header">${d}</div>`).join('');

  const first = new Date(calYear, calMonth, 1);
  const last  = new Date(calYear, calMonth+1, 0);
  let startDow = first.getDay(); // 0=Sun
  startDow = ((startDow-1+7)%7); // convert to Mon=0
  const today = todayStr();

  let cells = '';
  for(let i=0;i<startDow;i++){
    const d=new Date(calYear,calMonth,1-startDow+i);
    cells+=`<div class="cal-day other-month"><div class="cal-day-num">${d.getDate()}</div></div>`;
  }
  for(let d=1;d<=last.getDate();d++){
    const dateStr = `${calYear}-${String(calMonth+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const isToday = dateStr===today;
    const dots = getCalDots(dateStr);
    cells+=`<div class="cal-day ${isToday?'today':''} ${dateStr===calSelectedDate?'cal-day-sel':''}" onclick="selectCalDate('${dateStr}')">
      <div class="cal-day-num">${d}</div>
      ${dots?`<div class="cal-dots">${dots}</div>`:''}
    </div>`;
  }
  $('cal-grid').innerHTML = cells;
  renderCalEvents();
}

function getCalDots(date) {
  let dots='';
  if(S.workouts.some(w=>w.date===date)) dots+=`<div class="cal-dot workout"></div>`;
  if(S.meals.some(m=>m.date===date)) dots+=`<div class="cal-dot meal"></div>`;
  if(S.events.some(e=>e.date===date)) dots+=`<div class="cal-dot event"></div>`;
  if(S.budget.some(b=>b.date===date)) dots+=`<div class="cal-dot budget"></div>`;
  return dots;
}

function selectCalDate(d) {
  calSelectedDate = d;
  renderCalendar();
}

function changeCalMonth(dir) {
  calMonth+=dir;
  if(calMonth<0){ calMonth=11; calYear--; }
  if(calMonth>11){ calMonth=0; calYear++; }
  renderCalendar();
}

function renderCalEvents() {
  const date = calSelectedDate;
  $('cal-events-title').textContent = `Events — ${fmtDate(date)}`;
  const evs = S.events.filter(e=>e.date===date);
  const workouts = S.workouts.filter(w=>w.date===date);
  const meals = S.meals.filter(m=>m.date===date);
  let html = '';
  workouts.forEach(w=>{ const sets=w.totalSets??(w.exercises||[]).reduce((a,e)=>a+(e.sets?.length||0),0); html+=`<div class="event-item"><div class="cal-dot workout" style="width:10px;height:10px"></div><div class="event-info"><div class="event-title">💪 ${w.name}</div><div class="event-time">${w.duration}min · ${sets} sets</div></div></div>`; });
  if(meals.length){ html+=`<div class="event-item"><div class="cal-dot meal" style="width:10px;height:10px"></div><div class="event-info"><div class="event-title">🥗 ${meals.length} meals logged</div><div class="event-time">${meals.reduce((a,m)=>a+m.cal,0)} kcal</div></div></div>`; }
  evs.forEach(e=>{ html+=`<div class="event-item"><div class="event-dot" style="background:var(--gold)"></div><div class="event-info"><div class="event-title">${e.title}</div><div class="event-time">${e.time||'All day'}${e.note?' · '+e.note:''}</div></div><button style="background:none;border:none;color:var(--red);cursor:pointer;font-size:14px" onclick="deleteEvent('${e.id}')">✕</button></div>`; });
  $('cal-events-list').innerHTML = html || '<div style="color:var(--t2);padding:20px 0;font-size:14px">No events on this day. Click "+ Add Event" to schedule something.</div>';
}

function openAddEvent() {
  openModal(`
    <div class="modal-header"><div class="modal-title">Add Event</div><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-group"><label class="form-label">Title</label><input class="form-input" id="ev-title" placeholder="e.g. Doctor appointment"></div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">Date</label><input class="form-input" id="ev-date" type="date" value="${calSelectedDate}"></div>
        <div class="form-group"><label class="form-label">Time</label><input class="form-input" id="ev-time" type="time"></div>
      </div>
      <div class="form-group"><label class="form-label">Type</label>
        <select class="form-select" id="ev-type"><option value="event">Event</option><option value="workout">Workout</option><option value="meal">Meal</option><option value="meeting">Meeting</option></select>
      </div>
      <div class="form-group"><label class="form-label">Note</label><input class="form-input" id="ev-note" placeholder="Optional note"></div>
    </div>
    <div class="modal-actions">
      <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn btn-blue" onclick="addEvent()">Add Event</button>
    </div>`);
}

function addEvent() {
  const title=$('ev-title')?.value.trim(); if(!title) return;
  S.events.push({id:uid(), title, date:$('ev-date')?.value||calSelectedDate, time:$('ev-time')?.value, type:$('ev-type')?.value, note:$('ev-note')?.value});
  save('events', S.events);
  closeModal(); renderCalendar();
}

function deleteEvent(id) {
  S.events=S.events.filter(e=>e.id!==id); save('events',S.events); renderCalEvents();
}

// ─── NOTES ────────────────────────────────────────────────────
function renderNotes() {
  const q   = ($('notes-search')?.value||'').toLowerCase();
  const cat = $('notes-cat-filter')?.value||'';
  let notes = S.notes.slice().sort((a,b)=>{ if(a.pinned&&!b.pinned) return -1; if(!a.pinned&&b.pinned) return 1; return b.updatedAt.localeCompare(a.updatedAt); });
  if(q)   notes = notes.filter(n=>(n.title+n.content).toLowerCase().includes(q));
  if(cat) notes = notes.filter(n=>n.category===cat);
  const catColors={General:'var(--t2)',Workout:'var(--blue3)',Goals:'var(--gold)',Health:'var(--green)',Ideas:'var(--purple)',Work:'var(--cyan)'};
  $('notes-grid').innerHTML = notes.length ? notes.map(n=>`
    <div class="note-card ${n.pinned?'pinned':''}" onclick="openEditNote('${n.id}')">
      ${n.pinned?`<div class="note-pin">📌</div>`:''}
      <div class="note-title">${n.title||'Untitled'}</div>
      <div class="note-preview">${n.content||''}</div>
      <div class="note-footer">
        <div class="note-date">${fmtDate(n.updatedAt)}</div>
        <span class="chip" style="color:${catColors[n.category]||'var(--t2)'};border-color:${catColors[n.category]||'var(--border)'}">${n.category||'General'}</span>
      </div>
    </div>`) .join('')
  : '<div class="empty-state" style="grid-column:1/-1"><div class="empty-state-icon">📝</div><h3>No notes yet</h3><p>Create your first note</p></div>';
}

function openAddNote() {
  openModal(`
    <div class="modal-header"><div class="modal-title">New Note</div><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-group"><label class="form-label">Title</label><input class="form-input" id="note-title" placeholder="Note title…"></div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">Category</label>
          <select class="form-select" id="note-cat"><option>General</option><option>Workout</option><option>Goals</option><option>Health</option><option>Ideas</option><option>Work</option></select>
        </div>
        <div class="form-group"><label class="form-label">Pin note?</label>
          <select class="form-select" id="note-pin"><option value="0">No</option><option value="1">Yes</option></select>
        </div>
      </div>
      <div class="form-group"><label class="form-label">Content</label><textarea class="form-textarea" id="note-content" placeholder="Write your note here…" style="min-height:160px"></textarea></div>
    </div>
    <div class="modal-actions">
      <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn btn-blue" onclick="saveNote()">Save Note</button>
    </div>`);
}

function openEditNote(id) {
  const n = S.notes.find(x=>x.id===id); if(!n) return;
  openModal(`
    <div class="modal-header"><div class="modal-title">Edit Note</div><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-group"><label class="form-label">Title</label><input class="form-input" id="note-title" value="${n.title||''}"></div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">Category</label>
          <select class="form-select" id="note-cat">${['General','Workout','Goals','Health','Ideas','Work'].map(c=>`<option ${c===n.category?'selected':''}>${c}</option>`).join('')}</select>
        </div>
        <div class="form-group"><label class="form-label">Pinned?</label>
          <select class="form-select" id="note-pin"><option value="0" ${!n.pinned?'selected':''}>No</option><option value="1" ${n.pinned?'selected':''}>Yes</option></select>
        </div>
      </div>
      <div class="form-group"><label class="form-label">Content</label><textarea class="form-textarea" id="note-content" style="min-height:160px">${n.content||''}</textarea></div>
    </div>
    <div class="modal-actions">
      <button class="btn btn-danger" onclick="deleteNote('${n.id}')">Delete</button>
      <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn btn-blue" onclick="saveNote('${n.id}')">Save</button>
    </div>`);
}

function saveNote(id) {
  const title   = $('note-title')?.value||'Untitled';
  const content = $('note-content')?.value||'';
  const cat     = $('note-cat')?.value||'General';
  const pinned  = $('note-pin')?.value==='1';
  const now = todayStr();
  if(id) {
    const n=S.notes.find(x=>x.id===id); if(!n) return;
    Object.assign(n,{title,content,category:cat,pinned,updatedAt:now});
  } else {
    S.notes.push({id:uid(),title,content,category:cat,pinned,createdAt:now,updatedAt:now});
  }
  save('notes',S.notes); closeModal(); renderNotes();
}

function deleteNote(id) {
  if(!confirm('Delete this note?')) return;
  S.notes=S.notes.filter(n=>n.id!==id); save('notes',S.notes); closeModal(); renderNotes();
}

// ─── BUDGET ───────────────────────────────────────────────────
function renderBudget() {
  const now = new Date();
  const month = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}`;
  $('budget-month-label').textContent = now.toLocaleDateString('en-GB',{month:'long',year:'numeric'});

  const filtered = S.budget.filter(b=>b.date.startsWith(month));
  const income  = filtered.filter(b=>b.type==='income').reduce((a,b)=>a+b.amount,0);
  const expense = filtered.filter(b=>b.type==='expense').reduce((a,b)=>a+b.amount,0);
  const balance = income-expense;

  $('b-income').textContent  = fmtMoney(income);
  $('b-expense').textContent = fmtMoney(expense);
  $('b-balance').textContent = fmtMoney(balance);
  $('b-balance').style.color = balance>=0?'var(--green)':'var(--red)';

  // Category breakdown
  const catTotals = {};
  filtered.filter(b=>b.type==='expense').forEach(b=>{
    catTotals[b.category]=(catTotals[b.category]||0)+b.amount;
  });
  const maxCat = Math.max(...Object.values(catTotals),1);
  $('budget-cats').innerHTML = BUDGET_CATS.filter(c=>catTotals[c.name]).map(c=>`
    <div class="bcat-row">
      <div class="bcat-name">${c.icon} ${c.name}</div>
      <div class="bcat-bar"><div class="bcat-fill" style="width:${(catTotals[c.name]||0)/maxCat*100}%;background:${c.color}"></div></div>
      <div class="bcat-amt">${fmtMoney(catTotals[c.name]||0)}</div>
    </div>`).join('') || '<div style="color:var(--t2);font-size:14px">No expenses logged this month.</div>';

  // Budget advice
  $('budget-advice').textContent = getBudgetAdvice(income, expense, catTotals, balance);

  // Transaction list
  const typeFilter = $('budget-filter')?.value||'';
  let entries = S.budget.filter(b=>b.date.startsWith(month));
  if(typeFilter) entries=entries.filter(b=>b.type===typeFilter);
  entries.sort((a,b)=>b.date.localeCompare(a.date));
  $('budget-list').innerHTML = entries.length ? entries.map(e=>`
    <div class="budget-entry">
      <div class="budget-entry-dot" style="background:${e.type==='income'?'var(--green)':'var(--red)'}"></div>
      <div style="flex:1">
        <div class="budget-entry-name">${e.description}</div>
        <div class="budget-entry-cat">${e.category} · ${fmtDate(e.date)}</div>
      </div>
      <div class="budget-entry-amount ${e.type}">${e.type==='income'?'+':'−'}${fmtMoney(e.amount)}</div>
      <button style="background:none;border:none;color:var(--red);cursor:pointer;font-size:14px;margin-left:8px" onclick="deleteBudgetEntry('${e.id}')">✕</button>
    </div>`).join('')
  : '<div class="empty-state" style="padding:30px"><div class="empty-state-icon">💸</div><h3>No transactions</h3><p>Add your first income or expense</p></div>';
}

function getBudgetAdvice(income, expense, cats, balance) {
  const user = S.user;
  if(income===0) return 'Start by logging your income to understand your full financial picture.';
  const savePct = income>0?Math.round(balance/income*100):0;
  if(balance<0) return `You\'re spending more than you earn this month (${fmtMoney(Math.abs(balance))} over). Review your largest expense categories to find cuts.`;
  if(savePct>=20) return `Great financial discipline — you\'re saving ${savePct}% of income this month. Consider moving surplus to an investment account.`;
  if(savePct>=10) return `You\'re saving ${savePct}% this month. A good rule of thumb is 20%. Small daily savings compound to significant wealth over time.`;
  const topCat = Object.entries(cats).sort((a,b)=>b[1]-a[1])[0];
  if(topCat) return `Your biggest spend category is ${topCat[0]} (${fmtMoney(topCat[1])}). Being intentional about your largest expenses gives you the most leverage.`;
  return `${user?.finGoal==='invest'?'Automate investing: pay yourself first before spending.':user?.finGoal==='debt'?'Focus extra cash on your highest-interest debt first.':'Build your emergency fund to 3 months of expenses before other goals.'}`;
}

function openAddBudget(type) {
  openModal(`
    <div class="modal-header"><div class="modal-title">Add ${type==='income'?'Income':'Expense'}</div><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-group"><label class="form-label">Description</label><input class="form-input" id="b-desc" placeholder="${type==='income'?'Salary, freelance…':'Gym, groceries…'}"></div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">Amount (${currencySymbol()})</label><input class="form-input" id="b-amount" type="number" placeholder="0.00" step="0.01"></div>
        <div class="form-group"><label class="form-label">Date</label><input class="form-input" id="b-date" type="date" value="${todayStr()}"></div>
      </div>
      <div class="form-group"><label class="form-label">Category</label>
        <select class="form-select" id="b-cat">
          ${type==='income'
            ? '<option>Salary</option><option>Freelance</option><option>Investment</option><option>Other Income</option>'
            : BUDGET_CATS.map(c=>`<option>${c.name}</option>`).join('')}
        </select>
      </div>
    </div>
    <div class="modal-actions">
      <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn btn-blue" onclick="addBudgetEntry('${type}')">Add</button>
    </div>`);
}

function addBudgetEntry(type) {
  const desc  = $('b-desc')?.value.trim(); if(!desc) return;
  const amount= parseFloat($('b-amount')?.value)||0; if(!amount) return;
  S.budget.push({id:uid(), type, description:desc, amount, date:$('b-date')?.value||todayStr(), category:$('b-cat')?.value||'Other'});
  save('budget', S.budget);
  closeModal(); renderBudget();
  if(currentPage==='dashboard') renderDashboard();
}

function deleteBudgetEntry(id) {
  S.budget=S.budget.filter(b=>b.id!==id); save('budget',S.budget); renderBudget();
}

// ─── PROGRESS ─────────────────────────────────────────────────
function renderProgress() {
  const logs = S.weightLog.slice().sort((a,b)=>a.date.localeCompare(b.date)).slice(-30);
  const latest = logs.slice(-1)[0];
  const prev   = logs.length>1?logs[logs.length-2]:null;
  $('current-weight').textContent = latest?latest.kg+'kg':'–';
  if(prev && latest){
    const diff=(latest.kg-prev.kg).toFixed(1);
    const el=$('weight-change'); if(el){
      el.textContent=(diff>0?'+':'')+diff+'kg';
      el.className='body-stat-change '+(diff>0?'up':'down');
    }
  }
  setTimeout(()=>drawWeightChart(logs),50);
  setTimeout(()=>drawVolumeChart(),50);

  // Body stats
  const m=S.measurements;
  $('body-stats-grid').innerHTML=[
    {label:'Chest',    val:m.chest,   unit:'cm'},
    {label:'Waist',    val:m.waist,   unit:'cm'},
    {label:'Hips',     val:m.hips,    unit:'cm'},
    {label:'Arms',     val:m.arms,    unit:'cm'},
    {label:'Thighs',   val:m.thighs,  unit:'cm'},
    {label:'Body Fat', val:m.bf,      unit:'%'},
  ].map(s=>`<div class="body-stat">
    <div class="body-stat-val ${s.val?'':''}">  ${s.val?s.val+s.unit:'—'}</div>
    <div class="body-stat-label">${s.label}</div>
  </div>`).join('');

  // PRs
  $('pr-list').innerHTML = S.prs.length ? S.prs.map(p=>`
    <div class="pr-item">
      <div class="pr-exercise">${p.exercise}</div>
      <div><div class="pr-weight">${p.weight}kg</div><div class="pr-reps">${p.reps} reps</div></div>
    </div>`).join('')
  : '<div style="color:var(--t2);font-size:14px;padding:10px 0">No PRs logged yet. They\'re set automatically when you log workouts.</div>';
}

function drawWeightChart(logs) {
  const canvas = $('weight-chart'); if(!canvas||!logs.length) return;
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.offsetWidth||300; canvas.height=200;
  const W=canvas.width, H=canvas.height, pad=30;
  const vals=logs.map(l=>l.kg);
  const minV=Math.min(...vals)-2, maxV=Math.max(...vals)+2;
  ctx.clearRect(0,0,W,H);

  // Grid
  ctx.strokeStyle='rgba(0,122,193,0.12)'; ctx.lineWidth=1;
  for(let i=0;i<=4;i++){
    const y=pad+(H-pad*2)*(1-i/4);
    ctx.beginPath(); ctx.moveTo(pad,y); ctx.lineTo(W-pad,y); ctx.stroke();
    ctx.fillStyle='rgba(123,168,196,0.7)'; ctx.font='10px system-ui'; ctx.textAlign='right';
    ctx.fillText((minV+(maxV-minV)*i/4).toFixed(1), pad-4, y+4);
  }

  if(logs.length<2){
    ctx.fillStyle='rgba(0,122,193,0.8)'; ctx.font='13px system-ui'; ctx.textAlign='center';
    ctx.fillText('Log more weights to see your trend', W/2, H/2); return;
  }

  const xStep=(W-pad*2)/(logs.length-1);
  const toX=(i)=>pad+i*xStep;
  const toY=(v)=>pad+(H-pad*2)*(1-(v-minV)/(maxV-minV));

  // Gradient fill
  const grad=ctx.createLinearGradient(0,pad,0,H-pad);
  grad.addColorStop(0,'rgba(0,122,193,0.30)');
  grad.addColorStop(1,'rgba(0,122,193,0)');
  ctx.beginPath(); ctx.moveTo(toX(0),toY(vals[0]));
  vals.forEach((v,i)=>ctx.lineTo(toX(i),toY(v)));
  ctx.lineTo(toX(vals.length-1),H-pad); ctx.lineTo(toX(0),H-pad); ctx.closePath();
  ctx.fillStyle=grad; ctx.fill();

  // Line
  ctx.beginPath(); ctx.moveTo(toX(0),toY(vals[0]));
  vals.forEach((v,i)=>ctx.lineTo(toX(i),toY(v)));
  ctx.strokeStyle='#007AC1'; ctx.lineWidth=2; ctx.stroke();

  // Dots
  vals.forEach((v,i)=>{
    ctx.beginPath(); ctx.arc(toX(i),toY(v),4,0,Math.PI*2);
    ctx.fillStyle='#007AC1'; ctx.fill();
    ctx.strokeStyle='#060d16'; ctx.lineWidth=2; ctx.stroke();
  });
}

function drawVolumeChart() {
  const canvas = $('volume-chart'); if(!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = canvas.offsetWidth||300; canvas.height=180;
  const W=canvas.width, H=canvas.height, pad=30;

  // Last 7 weeks volume
  const weeks=[]; const now=new Date();
  for(let w=6;w>=0;w--){
    const ws=new Date(now); ws.setDate(ws.getDate()-ws.getDay()+1-w*7);
    const we=new Date(ws); we.setDate(we.getDate()+6);
    const wsStr=ws.toISOString().split('T')[0];
    const weStr=we.toISOString().split('T')[0];
    const sets=S.workouts.filter(x=>x.date>=wsStr&&x.date<=weStr).reduce((a,x)=>a+(x.totalSets||0),0);
    weeks.push({label:'W'+(7-w), sets});
  }

  const maxV=Math.max(...weeks.map(w=>w.sets),1);
  ctx.clearRect(0,0,W,H);
  const bw=(W-pad*2)/weeks.length-4;
  weeks.forEach((w,i)=>{
    const x=pad+i*(bw+4);
    const bh=Math.max((w.sets/maxV)*(H-pad*2),2);
    const y=H-pad-bh;
    const grad=ctx.createLinearGradient(0,y,0,H-pad);
    grad.addColorStop(0,'#007AC1'); grad.addColorStop(1,'rgba(0,44,98,0.25)');
    ctx.fillStyle=grad;
    ctx.beginPath(); ctx.rect(x,y,bw,bh); ctx.fill();
    ctx.fillStyle='rgba(123,168,196,0.7)'; ctx.font='10px system-ui'; ctx.textAlign='center';
    ctx.fillText(w.label, x+bw/2, H-8);
    if(w.sets) { ctx.fillStyle='var(--t1)'; ctx.fillText(w.sets, x+bw/2, y-4); }
  });
}

function openLogWeight() {
  openModal(`
    <div class="modal-header"><div class="modal-title">Log Body Weight</div><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-row">
        <div class="form-group"><label class="form-label">Weight (kg)</label><input class="form-input" id="log-kg" type="number" step="0.1" placeholder="e.g. 80.5"></div>
        <div class="form-group"><label class="form-label">Date</label><input class="form-input" id="log-wdate" type="date" value="${todayStr()}"></div>
      </div>
    </div>
    <div class="modal-actions">
      <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn btn-blue" onclick="logWeight()">Save</button>
    </div>`);
}

function logWeight() {
  const kg=parseFloat($('log-kg')?.value); if(!kg) return;
  const date=$('log-wdate')?.value||todayStr();
  S.weightLog=S.weightLog.filter(w=>w.date!==date);
  S.weightLog.push({date,kg}); S.weightLog.sort((a,b)=>a.date.localeCompare(b.date));
  save('weightLog',S.weightLog); closeModal(); renderProgress();
  if(currentPage==='dashboard') renderDashboard();
}

function openLogMeasurements() {
  const m=S.measurements;
  openModal(`
    <div class="modal-header"><div class="modal-title">Body Measurements</div><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-row"><div class="form-group"><label class="form-label">Chest (cm)</label><input class="form-input" id="m-chest" type="number" value="${m.chest||''}"></div>
        <div class="form-group"><label class="form-label">Waist (cm)</label><input class="form-input" id="m-waist" type="number" value="${m.waist||''}"></div></div>
      <div class="form-row"><div class="form-group"><label class="form-label">Hips (cm)</label><input class="form-input" id="m-hips" type="number" value="${m.hips||''}"></div>
        <div class="form-group"><label class="form-label">Arms (cm)</label><input class="form-input" id="m-arms" type="number" value="${m.arms||''}"></div></div>
      <div class="form-row"><div class="form-group"><label class="form-label">Thighs (cm)</label><input class="form-input" id="m-thighs" type="number" value="${m.thighs||''}"></div>
        <div class="form-group"><label class="form-label">Body Fat %</label><input class="form-input" id="m-bf" type="number" step="0.1" value="${m.bf||''}"></div></div>
    </div>
    <div class="modal-actions">
      <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn btn-blue" onclick="saveMeasurements()">Save</button>
    </div>`);
}

function saveMeasurements() {
  ['chest','waist','hips','arms','thighs','bf'].forEach(k=>{
    const v=parseFloat($('m-'+k)?.value); if(v) S.measurements[k]=v;
  });
  save('measurements',S.measurements); closeModal(); renderProgress();
}

function openAddPR() {
  openModal(`
    <div class="modal-header"><div class="modal-title">Add Personal Record</div><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-group"><label class="form-label">Exercise</label>
        <input class="form-input" id="pr-ex" list="pr-ex-list" placeholder="e.g. Bench Press">
        <datalist id="pr-ex-list">${Object.values(EXERCISES).flat().map(e=>`<option>${e}</option>`).join('')}</datalist>
      </div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">Weight (kg)</label><input class="form-input" id="pr-kg" type="number" step="0.5"></div>
        <div class="form-group"><label class="form-label">Reps</label><input class="form-input" id="pr-reps" type="number"></div>
      </div>
    </div>
    <div class="modal-actions">
      <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn btn-blue" onclick="savePR()">Save PR</button>
    </div>`);
}

function savePR() {
  const ex=$('pr-ex')?.value.trim(); if(!ex) return;
  const kg=parseFloat($('pr-kg')?.value)||0;
  const reps=parseInt($('pr-reps')?.value)||0;
  S.prs=S.prs.filter(p=>p.exercise!==ex);
  S.prs.push({exercise:ex, weight:kg, reps, date:todayStr()});
  save('prs',S.prs); closeModal(); renderProgress();
}

// ─── PROFILE ──────────────────────────────────────────────────
function renderProfile() {
  const u=S.user; if(!u) return;
  $('profile-avatar-big').textContent=getInitials(u.name||'U');
  $('profile-name').textContent=u.name||'';
  $('profile-goal-label').textContent=formatGoals(u);
  $('profile-stats').innerHTML=`
    <div class="profile-stat"><div class="profile-stat-val">${S.workouts.length}</div><div class="profile-stat-label">Workouts</div></div>
    <div class="profile-stat"><div class="profile-stat-val">${S.weightLog.length}</div><div class="profile-stat-label">Check-ins</div></div>
    <div class="profile-stat"><div class="profile-stat-val">${S.prs.length}</div><div class="profile-stat-label">PRs</div></div>`;
  const currencyName = (CURRENCIES.find(c=>c.code===(u.currency||'GBP'))||CURRENCIES[0]).name;
  $('profile-info-rows').innerHTML=[
    {label:'Age',      val:u.age+' years'},
    {label:'Height',   val:u.height+'cm'},
    {label:'Weight',   val:u.weight+'kg'},
    {label:'Sex',      val:u.sex||'–'},
    {label:'Diet',     val:u.diet||'Standard'},
    {label:'Lifestyle',val:u.workType||'–'},
    {label:'Currency', val:`${currencySymbol()} ${currencyName}`},
  ].map(r=>`<div class="settings-row"><span class="settings-row-label">${r.label}</span><span class="settings-row-val">${r.val}</span></div>`).join('');
  $('profile-training-rows').innerHTML=[
    {label:'Goals',         val:formatGoals(u)},
    {label:'Program',       val:S.program?.name||'–'},
    {label:'Days/Week',     val:u.days+' days'},
    {label:'Experience',    val:u.experience||'–'},
    {label:'Session Length',val:(u.duration||60)+'min'},
  ].map(r=>`<div class="settings-row"><span class="settings-row-label">${r.label}</span><span class="settings-row-val">${r.val}</span></div>`).join('');
  const t=u.targets||{};
  $('profile-nutrition-rows').innerHTML=[
    {label:'Calories', val:t.calories+' kcal'},
    {label:'Protein',  val:t.protein+'g'},
    {label:'Carbs',    val:t.carbs+'g'},
    {label:'Fat',      val:t.fat+'g'},
  ].map(r=>`<div class="settings-row"><span class="settings-row-label">${r.label}</span><span class="settings-row-val">${r.val||'–'}</span></div>`).join('');
}

function openEditProfile() {
  const u=S.user;
  openModal(`
    <div class="modal-header"><div class="modal-title">Edit Profile</div><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-row">
        <div class="form-group"><label class="form-label">Name</label><input class="form-input" id="ep-name" value="${u.name||''}"></div>
        <div class="form-group"><label class="form-label">Age</label><input class="form-input" id="ep-age" type="number" value="${u.age||''}"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">Height (cm)</label><input class="form-input" id="ep-height" type="number" value="${u.height||''}"></div>
        <div class="form-group"><label class="form-label">Weight (kg)</label><input class="form-input" id="ep-weight" type="number" step="0.1" value="${u.weight||''}"></div>
      </div>
      <div class="form-group">
        <label class="form-label">Currency</label>
        <select class="form-select" id="ep-currency">
          ${CURRENCIES.map(c=>`<option value="${c.code}" ${(u.currency||'GBP')===c.code?'selected':''}>${c.symbol} ${c.name} (${c.code})</option>`).join('')}
        </select>
      </div>
    </div>
    <div class="modal-actions">
      <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn btn-blue" onclick="saveProfile()">Save</button>
    </div>`);
}

function saveProfile() {
  const u=S.user;
  u.name=$('ep-name')?.value||u.name;
  u.age=$('ep-age')?.value||u.age;
  u.height=$('ep-height')?.value||u.height;
  u.weight=$('ep-weight')?.value||u.weight;
  u.currency=$('ep-currency')?.value||u.currency||'GBP';
  u.targets=calculateTargets(u);
  save('user',S.user); updateSidebarUser(); closeModal(); renderProfile();
}

function openEditNutrition() {
  const t=S.user?.targets||{};
  openModal(`
    <div class="modal-header"><div class="modal-title">Update Targets</div><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-row">
        <div class="form-group"><label class="form-label">Calories</label><input class="form-input" id="nt-cal" type="number" value="${t.calories||''}"></div>
        <div class="form-group"><label class="form-label">Protein (g)</label><input class="form-input" id="nt-p" type="number" value="${t.protein||''}"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">Carbs (g)</label><input class="form-input" id="nt-c" type="number" value="${t.carbs||''}"></div>
        <div class="form-group"><label class="form-label">Fat (g)</label><input class="form-input" id="nt-f" type="number" value="${t.fat||''}"></div>
      </div>
    </div>
    <div class="modal-actions">
      <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn btn-blue" onclick="saveNutrition()">Save</button>
    </div>`);
}

function saveNutrition() {
  if(!S.user.targets) S.user.targets={};
  S.user.targets.calories=parseInt($('nt-cal')?.value)||S.user.targets.calories;
  S.user.targets.protein =parseInt($('nt-p')?.value) ||S.user.targets.protein;
  S.user.targets.carbs   =parseInt($('nt-c')?.value) ||S.user.targets.carbs;
  S.user.targets.fat     =parseInt($('nt-f')?.value) ||S.user.targets.fat;
  save('user',S.user); closeModal(); renderProfile();
}

function exportData() {
  const data=JSON.stringify(S, null, 2);
  const blob=new Blob([data],{type:'application/json'});
  const a=document.createElement('a'); a.href=URL.createObjectURL(blob);
  a.download='isolab-backup-'+todayStr()+'.json'; a.click();
}

function confirmReset() {
  openModal(`
    <div class="modal-header"><div class="modal-title">Reset App</div><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <p style="color:var(--t2);font-size:15px;line-height:1.6">This will permanently delete all your data — workouts, meals, notes, budget, and your profile. This cannot be undone.</p>
    </div>
    <div class="modal-actions">
      <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn btn-danger" onclick="resetApp()">Yes, Reset Everything</button>
    </div>`);
}

function resetApp() {
  localStorage.clear(); location.reload();
}

// ─── RUNNING / CARDIO ─────────────────────────────────────────
const RUN_TYPES = {
  Run:    {icon:'🏃', color:'#4a60f0', bg:'rgba(74,96,240,0.12)'},
  Cycle:  {icon:'🚴', color:'#00e676', bg:'rgba(0,230,118,0.12)'},
  Swim:   {icon:'🏊', color:'#00d4ff', bg:'rgba(0,212,255,0.12)'},
  Row:    {icon:'🚣', color:'#f0b429', bg:'rgba(240,180,41,0.12)'},
  HIIT:   {icon:'⚡', color:'#ff4d6d', bg:'rgba(255,77,109,0.12)'},
  Walk:   {icon:'🚶', color:'#b06cff', bg:'rgba(176,108,255,0.12)'},
  Other:  {icon:'🏅', color:'#90a4ae', bg:'rgba(144,164,174,0.12)'},
};

function renderRunning() {
  const typeFilter = $('run-type-filter')?.value||'';
  const runs = S.runs.slice().filter(r=>!typeFilter||r.type===typeFilter).sort((a,b)=>b.date.localeCompare(a.date));

  // Weekly stats
  const today = todayStr();
  const weekRuns = S.runs.filter(r=>daysBetween(r.date,today)<=6);
  const totalKm  = weekRuns.reduce((a,r)=>a+(parseFloat(r.distanceKm)||0),0);
  const totalMin = weekRuns.reduce((a,r)=>a+(parseFloat(r.durationMin)||0),0);
  const avgPace  = totalKm>0 ? totalMin/totalKm : 0;
  $('run-weekly-stats').innerHTML = `
    <div class="stat-card stat-blue"><div class="stat-label">Sessions</div><div class="stat-value">${weekRuns.length}</div><div class="stat-sub">this week</div></div>
    <div class="stat-card stat-cyan"><div class="stat-label">Distance</div><div class="stat-value">${totalKm.toFixed(1)}</div><div class="stat-sub">km this week</div></div>
    <div class="stat-card stat-green"><div class="stat-label">Time</div><div class="stat-value">${Math.floor(totalMin/60)}h${Math.round(totalMin%60)}m</div><div class="stat-sub">this week</div></div>
    <div class="stat-card stat-gold"><div class="stat-label">Avg Pace</div><div class="stat-value">${avgPace>0?fmtPace(avgPace):'–'}</div><div class="stat-sub">min / km</div></div>`;

  $('run-log-list').innerHTML = runs.length ? runs.map(r=>{
    const t = RUN_TYPES[r.type]||RUN_TYPES.Other;
    const pace = r.distanceKm>0 ? r.durationMin/r.distanceKm : 0;
    return `<div class="run-entry">
      <div class="run-icon" style="background:${t.bg};border:1px solid ${t.color}30">${t.icon}</div>
      <div class="run-info">
        <div class="run-type">${r.type}</div>
        <div class="run-meta">${fmtDate(r.date)}${r.notes?' · '+r.notes:''}</div>
      </div>
      <div class="run-stats">
        <div class="run-distance" style="color:${t.color}">${r.distanceKm?r.distanceKm+'km':r.durationMin+'min'}</div>
        ${r.distanceKm&&r.durationMin?`<div class="run-pace">${fmtPace(pace)} /km · ${r.durationMin}min</div>`:''}
      </div>
      <button style="background:none;border:none;color:var(--red);cursor:pointer;font-size:16px;padding:4px 8px;margin-left:4px" onclick="deleteRun('${r.id}')">×</button>
    </div>`;
  }).join('')
  : '<div class="empty-state" style="padding:40px"><div class="empty-state-icon">🏃</div><h3>No sessions logged yet</h3><p>Track your first cardio session</p></div>';
}

function fmtPace(minPerKm) {
  const m=Math.floor(minPerKm), s=Math.round((minPerKm-m)*60);
  return `${m}:${String(s).padStart(2,'0')}`;
}

function openAddRun() {
  openModal(`
    <div class="modal-header"><div class="modal-title">Log Cardio Session</div><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-group">
        <label class="form-label">Activity Type</label>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">
          ${Object.entries(RUN_TYPES).map(([k,v])=>`
            <button class="ob-option" data-rtype="${k}" style="flex-direction:column;align-items:center;padding:12px 8px;gap:4px">
              <span style="font-size:22px">${v.icon}</span>
              <span style="font-size:12px">${k}</span>
            </button>`).join('')}
        </div>
      </div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">Distance (km)</label><input class="form-input" id="run-dist" type="number" step="0.01" placeholder="e.g. 5.0"></div>
        <div class="form-group"><label class="form-label">Duration (min)</label><input class="form-input" id="run-dur" type="number" placeholder="e.g. 30"></div>
      </div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">Date</label><input class="form-input" id="run-date" type="date" value="${todayStr()}"></div>
        <div class="form-group"><label class="form-label">Feeling</label>
          <select class="form-select" id="run-feel"><option value="">–</option><option>Easy</option><option>Moderate</option><option>Hard</option><option>Max effort</option></select>
        </div>
      </div>
      <div class="form-group"><label class="form-label">Notes</label><input class="form-input" id="run-notes" placeholder="Route, conditions, how it felt…"></div>
    </div>
    <div class="modal-actions">
      <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn btn-blue" onclick="addRun()">Save Session</button>
    </div>`);
  // attach selection
  document.querySelectorAll('.ob-option[data-rtype]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.ob-option[data-rtype]').forEach(b=>b.classList.remove('sel'));
      btn.classList.add('sel');
    });
  });
}

function addRun() {
  const typeBtn = document.querySelector('.ob-option.sel[data-rtype]');
  const type   = typeBtn ? typeBtn.dataset.rtype : 'Run';
  const dist   = parseFloat($('run-dist')?.value)||0;
  const dur    = parseFloat($('run-dur')?.value)||0;
  if(!dist&&!dur){ alert('Enter distance or duration.'); return; }
  S.runs.push({
    id:uid(), date:$('run-date')?.value||todayStr(),
    type, distanceKm:dist, durationMin:dur,
    feel:$('run-feel')?.value||'', notes:$('run-notes')?.value||'',
  });
  save('runs',S.runs); closeModal(); renderRunning();
  if(currentPage==='dashboard') renderDashboard();
}

function deleteRun(id) {
  S.runs=S.runs.filter(r=>r.id!==id); save('runs',S.runs); renderRunning();
}

// ─── SUPPLEMENTS ──────────────────────────────────────────────
const SUPP_TIMINGS = ['Morning','Pre-Workout','With Meals','Evening','Other'];
const SUPP_ICONS   = {Morning:'🌅',Prebis:'⚡','Pre-Workout':'⚡','With Meals':'🍽️',Evening:'🌙',Other:'💊'};

function renderSupplements() {
  const today = todayStr();
  const taken = S.suppLog[today]||[];

  // Completion ring
  const pct = S.supplements.length ? Math.round(taken.length/S.supplements.length*100) : 0;
  const r2=36, circ2=2*Math.PI*r2;
  $('supp-progress-wrap').innerHTML = `
    <div style="display:flex;align-items:center;gap:20px">
      <div style="position:relative;width:90px;height:90px;flex-shrink:0">
        <svg width="90" height="90" viewBox="0 0 90 90" style="transform:rotate(-90deg)">
          <circle cx="45" cy="45" r="${r2}" fill="none" stroke="var(--bg3)" stroke-width="8"/>
          <circle cx="45" cy="45" r="${r2}" fill="none"
            stroke="${pct===100?'var(--green)':'var(--cyan)'}" stroke-width="8" stroke-linecap="round"
            stroke-dasharray="${circ2}" stroke-dashoffset="${circ2*(1-pct/100)}"
            style="transition:stroke-dashoffset 0.5s ease"/>
        </svg>
        <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center">
          <div style="font-size:20px;font-weight:900">${pct}%</div>
          <div style="font-size:9px;color:var(--t2);font-weight:600;letter-spacing:1px">DONE</div>
        </div>
      </div>
      <div>
        <div style="font-size:28px;font-weight:900;color:var(--cyan)">${taken.length}<span style="font-size:16px;color:var(--t2);font-weight:400"> / ${S.supplements.length}</span></div>
        <div style="font-size:13px;color:var(--t2)">supplements taken today</div>
        ${pct===100?'<div style="margin-top:8px;font-size:13px;font-weight:700;color:var(--green)">✓ Stack complete!</div>':''}
      </div>
    </div>`;

  // Today's schedule grouped by timing
  if(!S.supplements.length) {
    $('supp-today-list').innerHTML='<div style="color:var(--t2);font-size:14px;padding:10px 0">No supplements added yet.</div>';
  } else {
    $('supp-today-list').innerHTML = SUPP_TIMINGS.map(timing=>{
      const group = S.supplements.filter(s=>s.timing===timing);
      if(!group.length) return '';
      return `<div class="supp-timing-group">
        <div class="supp-timing-label">${SUPP_ICONS[timing]||'💊'} ${timing}</div>
        ${group.map(s=>`<div class="supp-item">
          <button class="supp-check ${taken.includes(s.id)?'done':''}" onclick="toggleSupp('${s.id}')">
            ${taken.includes(s.id)?`<svg viewBox="0 0 24 24" fill="none" stroke="var(--bg)" stroke-width="3" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>`:''}
          </button>
          <div style="flex:1">
            <div class="supp-name">${s.name}</div>
            <div class="supp-dose">${s.dose} ${s.unit}</div>
            ${s.purpose?`<div class="supp-purpose">${s.purpose}</div>`:''}
          </div>
        </div>`).join('')}
      </div>`;
    }).join('');
  }

  // All supplements list
  $('supp-all-list').innerHTML = S.supplements.length ? S.supplements.map(s=>`
    <div class="supp-stack-item">
      <div class="supp-stack-icon">💊</div>
      <div style="flex:1">
        <div class="supp-stack-name">${s.name}</div>
        <div class="supp-stack-meta">${s.dose} ${s.unit} · ${s.timing}${s.purpose?' · '+s.purpose:''}</div>
      </div>
      <div class="supp-stack-actions">
        <button class="btn btn-outline btn-sm" onclick="openEditSupplement('${s.id}')">Edit</button>
        <button class="btn btn-danger btn-sm" onclick="deleteSupplement('${s.id}')">✕</button>
      </div>
    </div>`).join('')
  : '<div class="empty-state" style="padding:30px"><div class="empty-state-icon">💊</div><h3>No supplements added</h3><p>Build your daily stack</p></div>';
}

function toggleSupp(id) {
  const today=todayStr();
  if(!S.suppLog[today]) S.suppLog[today]=[];
  const idx=S.suppLog[today].indexOf(id);
  if(idx>-1) S.suppLog[today].splice(idx,1); else S.suppLog[today].push(id);
  save('suppLog',S.suppLog); renderSupplements();
}

function openAddSupplement(id) {
  const s=id?S.supplements.find(x=>x.id===id):{};
  openModal(`
    <div class="modal-header"><div class="modal-title">${id?'Edit':'Add'} Supplement</div><button class="modal-close" onclick="closeModal()">✕</button></div>
    <div class="modal-body">
      <div class="form-group"><label class="form-label">Supplement Name</label><input class="form-input" id="s-name" placeholder="e.g. Creatine, Vitamin D…" value="${s.name||''}"></div>
      <div class="form-row">
        <div class="form-group"><label class="form-label">Dose</label><input class="form-input" id="s-dose" placeholder="e.g. 5" value="${s.dose||''}"></div>
        <div class="form-group"><label class="form-label">Unit</label>
          <select class="form-select" id="s-unit">
            ${['g','mg','mcg','ml','IU','capsule','tablet','scoop'].map(u=>`<option ${(s.unit||'g')===u?'selected':''}>${u}</option>`).join('')}
          </select>
        </div>
      </div>
      <div class="form-group"><label class="form-label">Timing</label>
        <select class="form-select" id="s-timing">
          ${SUPP_TIMINGS.map(t=>`<option ${(s.timing||'Morning')===t?'selected':''}>${t}</option>`).join('')}
        </select>
      </div>
      <div class="form-group"><label class="form-label">Purpose / Note</label><input class="form-input" id="s-purpose" placeholder="e.g. Strength, recovery, sleep…" value="${s.purpose||''}"></div>
    </div>
    <div class="modal-actions">
      <button class="btn btn-outline" onclick="closeModal()">Cancel</button>
      <button class="btn btn-blue" onclick="saveSupplement('${id||''}')">Save</button>
    </div>`);
}

function openEditSupplement(id) { openAddSupplement(id); }

function saveSupplement(id) {
  const name=$('s-name')?.value.trim(); if(!name) return;
  const entry={id:id||uid(), name, dose:$('s-dose')?.value||'', unit:$('s-unit')?.value||'g', timing:$('s-timing')?.value||'Morning', purpose:$('s-purpose')?.value||''};
  if(id) { const idx=S.supplements.findIndex(s=>s.id===id); if(idx>-1) S.supplements[idx]=entry; }
  else S.supplements.push(entry);
  save('supplements',S.supplements); closeModal(); renderSupplements();
}

function deleteSupplement(id) {
  S.supplements=S.supplements.filter(s=>s.id!==id); save('supplements',S.supplements); renderSupplements();
}

// ─── MORE PAGE (mobile hub) ────────────────────────────────────
function renderMore() {
  const today=todayStr();
  const tiles = [
    {page:'calendar',    icon:'📅', label:'Calendar',    sub:'Events & schedule'},
    {page:'notes',       icon:'📝', label:'Notes',       sub:`${S.notes.length} notes`},
    {page:'budget',      icon:'💰', label:'Budget',      sub:'Track spending'},
    {page:'progress',    icon:'📊', label:'Progress',    sub:`${S.weightLog.length} check-ins`},
    {page:'running',     icon:'🏃', label:'Cardio',      sub:`${S.runs.length} sessions`},
    {page:'supplements', icon:'💊', label:'Supplements', sub:`${(S.suppLog[today]||[]).length}/${S.supplements.length} today`},
    {page:'profile',     icon:'⚙️', label:'Profile',     sub:S.user?.name||''},
  ];
  $('more-grid').innerHTML = tiles.map(t=>`
    <div class="more-tile" onclick="showPage('${t.page}')">
      <div class="more-tile-icon">${t.icon}</div>
      <div class="more-tile-label">${t.label}</div>
      <div class="more-tile-sub">${t.sub}</div>
    </div>`).join('');
}

// ─── MODAL ────────────────────────────────────────────────────
function openModal(html) {
  $('modal').innerHTML = html;
  $('modal').classList.remove('hidden');
  $('modal-overlay').classList.remove('hidden');
}
function closeModal() {
  $('modal').classList.add('hidden');
  $('modal-overlay').classList.add('hidden');
}

// Close modal on Escape key
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); });

// ─── INIT ─────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(()=>{
    $('splash').classList.add('out');
    setTimeout(()=>{
      $('splash').classList.add('hidden');
      loadAll();
      if(!S.user) startOnboarding();
      else startApp();
    },600);
  },1800);
});
