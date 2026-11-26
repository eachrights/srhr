// EACHRights SRHR Portal — All Data
// Edit this file to update content. Non-developers: search for your county and change values.

window.SITE = {
  name: "EACHRights SRHR Advocacy Portal",
  tagline: "Taking on the Legal and Policy Advocacy Challenge: Promoting Synergies Among SRHR Social Movements in Kenya",
  org: "East African Centre for Human Rights (EACHRights)",
  partner: "Amplify Change",
  project_period: "2024–2027",
  last_updated: "August 2026"
};

window.NATIONAL_POLICIES = [
  { id:"np-01", name:"Constitution of Kenya — Article 43(1)(a)", year:2010, status:"Adopted", impl_pct:65, category:"Constitutional", gap:"County-level implementation inconsistent", theme:"Constitutional & Legal Framework", doc_url:"" },
  { id:"np-02", name:"National Reproductive Health Policy (2022–2032)", year:2022, status:"Adopted", impl_pct:60, category:"Reproductive Health", gap:"Inadequate resource allocation; limited HCW training", theme:"Maternal Health Access, Quality of Care & Preventable Maternal Deaths", doc_url:"http://guidelines.health.go.ke:8000/media/The_National_Reproductive_Health_Policy_2022_-_2032.pdf" },
  { id:"np-03", name:"National Family Planning Policy", year:2025, status:"Adopted", impl_pct:55, category:"Family Planning", gap:"Supply chain challenges; cultural/religious barriers", theme:"Contraceptive Access", doc_url:"https://www.health.go.ke/sites/default/files/2026-02/Signed%20National%20Family%20Planning%20Guidelines%207th%20Edition%202025%20%281%29.pdf" },
  { id:"np-04", name:"National ASRHR Policy", year:2015, status:"Adopted", impl_pct:38, category:"Adolescent Health", gap:"Low youth-friendly facility coverage; high teen pregnancy", theme:"Adolescent Pregnancy & Youth-Friendly SRHR Services", doc_url:"https://tciurbanhealth.org/wp-content/uploads/2018/03/Ministry-of-Health-ASRH-POLICY-2015.pdf" },
  { id:"np-05", name:"HIV Prevention and Control Act", year:2014, status:"Adopted", impl_pct:57, category:"HIV/AIDS", gap:"Stigma; limited SRHR-HIV integration", theme:"Contraceptive Access & HIV Integration", doc_url:"" },
  { id:"np-06", name:"National Gender and Development Policy", year:2019, status:"Partially Implemented", impl_pct:32, category:"Gender", gap:"Inadequate gender-responsive budgeting", theme:"Gender Equality & Development", doc_url:"https://gender.go.ke/sites/default/files/publications/NATIONAL-POLICY-ON-GENDER-AND-DEVELOPMENT.pdf" },
  { id:"np-07", name:"National Guidelines for Comprehensive Sexuality Education", year:2018, status:"Adopted", impl_pct:30, category:"Education", gap:"Inconsistent integration in schools", theme:"Adolescent Pregnancy & Youth-Friendly SRHR Services", doc_url:"" },
  { id:"np-08", name:"National Policy on Prevention and Response to GBV", year:2014, status:"Adopted", impl_pct:45, category:"GBV", gap:"Fragmented SGBV response systems; under-resourced", theme:"Gender-Based Violence (SGBV)", doc_url:"" },
  { id:"np-09", name:"Menstrual Hygiene Management Policy (2019–2030)", year:2019, status:"Adopted", impl_pct:28, category:"Menstrual Health", gap:"County-level implementation very low", theme:"Menstrual Health & Hygiene Management", doc_url:"http://guidelines.health.go.ke:8000/media/Menstrual_Hygiene_Management_Policy_2019-2030-_May2020.pdf" },
  { id:"np-10", name:"National School Re-entry Guidelines (2020)", year:2020, status:"Adopted", impl_pct:35, category:"Education", gap:"Inconsistent enforcement across counties", theme:"School Re-entry for Adolescent Mothers", doc_url:"https://www.education.go.ke/sites/default/files/2022-05/2020RH_NationalSchoolReEntryGuidelines.pdf" }
];

// ── ADVOCACY SCORECARD METHODOLOGY ──
// County Policy and Legislative Advocacy Scorecard: 7 stages, 15 milestones.
// Each milestone is scored 0 (Not Started) / 1 (Started/Ongoing) / 2 (Completed) per county.
// All scores start at 0 and are filled in by staff via the Advocacy Scorecard Google Sheet tab.
window.ADVOCACY_MILESTONES = [
  { id:"m01", stage:1, stage_name:"Policy Development", name:"Situation Analysis", indicator:"Evidence generated and policy need documented." },
  { id:"m02", stage:1, stage_name:"Policy Development", name:"Policy Drafted", indicator:"Draft policy developed through technical consultations." },
  { id:"m03", stage:1, stage_name:"Policy Development", name:"Policy Adopted", indicator:"Policy approved by the County Executive Committee." },
  { id:"m04", stage:2, stage_name:"Legislative Preparation", name:"Bill Developed", indicator:"Bill drafted to give legal effect to the policy." },
  { id:"m05", stage:2, stage_name:"Legislative Preparation", name:"Executive Approval", indicator:"Bill approved for submission to the County Assembly." },
  { id:"m06", stage:3, stage_name:"Political Engagement", name:"Bill Tabled", indicator:"Bill formally introduced in the County Assembly." },
  { id:"m07", stage:3, stage_name:"Political Engagement", name:"Political Support", indicator:"MCA champions secured and committee engagement undertaken." },
  { id:"m08", stage:4, stage_name:"Community Mobilization", name:"Public Participation", indicator:"Public participation forums conducted and community views submitted." },
  { id:"m09", stage:4, stage_name:"Community Mobilization", name:"Community Mobilization", indicator:"Communities, CSOs, CHPs, youth, women and faith leaders mobilized to support the Bill." },
  { id:"m10", stage:4, stage_name:"Community Mobilization", name:"Media Advocacy", indicator:"Media and social media campaigns implemented." },
  { id:"m11", stage:5, stage_name:"Legislative Action", name:"Bill Enacted", indicator:"Bill passed by the County Assembly and assented to by the Governor." },
  { id:"m12", stage:6, stage_name:"Implementation", name:"Budget Allocated", indicator:"Dedicated implementation budget approved." },
  { id:"m13", stage:6, stage_name:"Implementation", name:"Implementation Guidelines", indicator:"Guidelines, SOPs and operational plans developed." },
  { id:"m14", stage:6, stage_name:"Implementation", name:"Institutional Structures", indicator:"Committees, coordination mechanisms and technical structures established." },
  { id:"m15", stage:7, stage_name:"Accountability & Sustainability", name:"Monitoring & Reporting", indicator:"Indicators tracked, annual reports produced and oversight mechanisms functioning." }
];
window.ADVOCACY_MAX_SCORE = window.ADVOCACY_MILESTONES.length * 2; // 30

window.advocacyRatingForPct = function(pct) {
  if (pct >= 100) return "Completed";
  if (pct >= 61) return "Advanced progress";
  if (pct >= 31) return "Ongoing / Moderate progress";
  if (pct >= 1) return "Started / Early progress";
  return "Not Started";
};

window.COUNTIES = [
  {
    id: "homa-bay",
    name: "Homa Bay",
    advocacy_bundle_url: "https://drive.google.com/drive/folders/1QPBuYG5ZokxKon4ph0Cm5qSpIf9cMDzJ",
    region: "Nyanza",
    color: "#c0392b",
    population: 1419662,
    lat: -0.5167, lng: 34.4500,
    hero_stat: { label: "Teen Pregnancy Rate", value: "23%", national_avg: "15%", direction: "above" },
    key_stats: [
      { label: "Maternal Mortality", value: "516/100k", benchmark: "355 national avg", status: "above" },
      { label: "Under-5 Mortality", value: "61/1,000", benchmark: "41 national avg", status: "above" },
      { label: "HIV Prevalence", value: "~20%", benchmark: "5.6% national avg", status: "above" },
      { label: "SRHR Budget FY24/25", value: "KShs 117.4M", benchmark: "5.1% of health budget", status: "neutral" },
      { label: "Active CSOs", value: "~25", benchmark: "", status: "neutral" }
    ],
    overview: "Homa Bay County in the Nyanza region faces significant SRHR challenges, including the highest maternal mortality rate among the four target counties. With 9 sub-counties and 40 wards, the county has ~25 active CSOs working on SRHR advocacy. A dedicated county SRHR policy framework remains the top advocacy priority.",
    sub_counties: 9, wards: 40,
    women_reproductive_age: 336792,
    policies: [
      { id:"hb-p01", name:"Homa Bay County Reproductive Health Policy (2026)", year:2026, status:"In Progress", impl_pct:0, actors:["Ministry of Health / CHMT","Gender TWG","CSOs"], gap:"Delayed finalization", advocacy:"Lobby for enactment", theme:"Maternal Health Access, Quality of Care & Preventable Maternal Deaths", doc_url:"https://drive.google.com/file/d/1felAZTq-0cPqNMvpHDit0cnWIffSFwD8/view?usp=sharing" },
      { id:"hb-p02", name:"County Reproductive Health Policy", year:2025, status:"In Progress", impl_pct:5, actors:["CHMT","CSOs"], gap:"Draft stage — limited stakeholder input", advocacy:"Accelerate stakeholder consultations", theme:"Maternal Health Access, Quality of Care & Preventable Maternal Deaths", doc_url:"" },
      { id:"hb-p03", name:"County SGBV Bill", year:2025, status:"In Progress", impl_pct:0, actors:["County Assembly","CSOs","Gender Office"], gap:"Bill awaiting tabling", advocacy:"Engage county assembly members", theme:"Gender-Based Violence (SGBV)", doc_url:"" },
      { id:"hb-p04", name:"SGBV Policy (2023)", year:2023, status:"Adopted", impl_pct:55, actors:["Gender Office","CSOs"], gap:"Enforcement weak at sub-county level", advocacy:"Strengthen enforcement mechanisms", theme:"Gender-Based Violence (SGBV)", doc_url:"https://s3.us-east-005.backblazeb2.com/homabaycms/webadmin/downloads/files/019d5882-b4e6-71ce-bdbd-f08a88e88502-dw-nq51odce19shbdwzowpzinfp.pdf" },
      { id:"hb-p05", name:"County Health Services Act (2020)", year:2020, status:"Adopted", impl_pct:60, actors:["CDH","CHMT"], gap:"SRHR components under-resourced", advocacy:"Advocate for dedicated SRHR budget line", theme:"Health Systems Strengthening & Service Delivery", doc_url:"https://s3.us-east-005.backblazeb2.com/homabaycms/webadmin/downloads/files/019d5882-9ac4-70c9-a516-1b94fa876740-dw-bn9rejjmrdl1lksoip2vjot2.pdf" },
      { id:"hb-p06", name:"Homa Bay County HIV and AIDS Strategic Plan (2020–2025)", year:2020, status:"Adopted", impl_pct:58, actors:["CHMT","NSDCC","Development Partners"], gap:"SRHR-HIV integration weak", advocacy:"Strengthen SRHR-HIV service linkages", theme:"Contraceptive Access & HIV Integration", doc_url:"https://nsdcc.go.ke/wp-content/uploads/2021/08/homabay.pdf" },
      { id:"hb-p07", name:"Homa Bay County Facility Improvement Financing Act (2023)", year:2023, status:"Adopted", impl_pct:45, actors:["CDH","CHMT"], gap:"SRHR facility coverage gaps", advocacy:"Leverage Act for SRHR facility upgrades", theme:"Health Systems Strengthening & Service Delivery", doc_url:"https://www.slo-countybills.go.ke/api/v1/bill/pdf/YFNM1WG388_Homa%20Bay-%20006-2023_The%20Homa%20Bay%20County%20Health%20Facility%20Improvement%20Financing%20Act,%202023%20cover.pdf" },
      { id:"hb-p08", name:"National School Re-entry Guidelines (2020)", year:2020, status:"Adopted", impl_pct:35, actors:["Ministry of Education","County Education Dept."], gap:"Implementation inconsistent at county level", advocacy:"Enforce re-entry policy for teen mothers", theme:"School Re-entry for Adolescent Mothers", doc_url:"https://www.education.go.ke/sites/default/files/2022-05/2020RH_NationalSchoolReEntryGuidelines.pdf" }
    ],
    advocacy_materials: [
      { policy:"Homa Bay County Reproductive Health Bill & Policy (2026)", theme:"Maternal Health Access, Quality of Care & Preventable Maternal Deaths", stage:"Legislative Action", materials:{ decision_maker:{label:"Executive Policy Brief",urls:[]}, community:{label:"Community Flyer",urls:["https://drive.google.com/file/d/1WzRA8KmzMXaHoQMlW3hgbsKJ_M9rzbzc/view"]}, media:{label:"Social Media Cards",urls:[]} } },
      { policy:"Homa Bay County Sexual & Gender-Based Violence Control and Management Bill (2024)", theme:"Gender-Based Violence (SGBV)", stage:"Legislative Action", materials:{ decision_maker:{label:"Policy Brief",urls:["https://drive.google.com/file/d/1th-LZKmIrtcNhvtRs59UVNfc0RiMzhHR/view"]}, community:{label:"Community Flyer",urls:["https://drive.google.com/file/d/19el8KzNT5KPNqVdRw-61yB2XqTl_SdXo/view"]}, media:{label:"Social Media Cards",urls:["https://drive.google.com/file/d/1yXDQ6K_pAD__qmvJc1-HtckOOixPRkd7/view","https://drive.google.com/file/d/1Z7aANekfaqSBeq-Fie9dz3uBacq9Od33/view","https://drive.google.com/file/d/1Ae_j63aqCd42K6TH2ijH7B1hqWNF9jai/view"]} } },
      { policy:"Homa Bay Sexual & Gender-Based Violence Policy (2023)", theme:"Gender-Based Violence (SGBV)", stage:"Implementation", materials:{ decision_maker:{label:"Policy Brief",urls:["https://drive.google.com/file/d/1th-LZKmIrtcNhvtRs59UVNfc0RiMzhHR/view"]}, community:{label:"Community Flyer",urls:["https://drive.google.com/file/d/19el8KzNT5KPNqVdRw-61yB2XqTl_SdXo/view"]}, media:{label:"Social Media Cards",urls:["https://drive.google.com/file/d/1yXDQ6K_pAD__qmvJc1-HtckOOixPRkd7/view","https://drive.google.com/file/d/1Z7aANekfaqSBeq-Fie9dz3uBacq9Od33/view","https://drive.google.com/file/d/1Ae_j63aqCd42K6TH2ijH7B1hqWNF9jai/view"]} } },
      { policy:"National School Re-entry Guidelines (2020)", theme:"School Re-entry for Adolescent Mothers", stage:"County Domestication & Implementation", materials:{ decision_maker:{label:"Policy Brief",urls:["https://drive.google.com/file/d/1JY5weKXerTv4irQUurkQYMKATLdjKEPo/view"]}, community:{label:"Community Poster",urls:["https://drive.google.com/file/d/1TULSeM83JRs69NK7Cc9MphEPmGoNvQF-/view"]}, media:{label:"Social Media Cards",urls:["https://drive.google.com/file/d/1cXIWiZNTg2zuyrq9N7zQ4A--3zt7mqOc/view","https://drive.google.com/file/d/1NFnqNUwdkZ-S9fVX2huxt6a5aS2OGHv_/view","https://drive.google.com/file/d/1Ouuo1LIimfTXlQxD8abnt0XjkeI6I-kv/view"]} } },
      { policy:"National ASRHR Policy", theme:"Adolescent Pregnancy & Youth-Friendly SRHR Services", stage:"County Domestication", materials:{ decision_maker:{label:"Policy Brief",urls:["https://drive.google.com/file/d/1Jzx5kUXH66rBiv1lC3qR1nT8apV5bxgu/view"]}, community:{label:"Community Flyer",urls:["https://drive.google.com/file/d/158eNIDFStCZ_glTLAHQKFCEWWVjO9JFD/view"]}, media:{label:"Social Media Cards",urls:["https://drive.google.com/file/d/1JW-WXb0QgRgES0rbIL9a6c5Zf3_DoTVA/view","https://drive.google.com/file/d/1AG0gxUrPBn5fjiT7oxj2ae8z7dMEEqyc/view","https://drive.google.com/file/d/11WroTM8AA_BKKidMmjtASmy71GEA55FY/view"]} } },
      { policy:"Homa Bay County HIV & AIDS Strategic Plan (2020–2025)", theme:"Contraceptive Access & HIV Integration", stage:"Implementation", materials:{ decision_maker:{label:"Policy Brief",urls:["https://drive.google.com/file/d/1s8RolG1pktQ1Y2Hiwor8UVgYGDRWxBug/view"]}, community:{label:"Community Poster",urls:["https://drive.google.com/file/d/18V9zuYgUS-hy4NpCKGkdp_SrySrSlx5h/view"]}, media:{label:"Social Media Cards",urls:["https://drive.google.com/file/d/1LfW7ZrapBCN9ewIaAY7-L1Jy93UBYmx1/view","https://drive.google.com/file/d/1XCIEdVcLpreza_OC-7I7YSIVIFLg-g3F/view","https://drive.google.com/file/d/1NWhShSdLMK_KLHngbz_bJr-pVEC_FY5f/view"]} } },
      { policy:"Homa Bay County Health Services Act (2020)", theme:"Post-Abortion Care (PAC)", stage:"Implementation", materials:{ decision_maker:{label:"Policy Brief",urls:["https://drive.google.com/file/d/16MPm6fx2rOFJuIucBUWd1ViupSmf-Cyv/view"]}, community:{label:"Community Flyer",urls:[]}, media:{label:"Social Media Cards",urls:[]} } },
      { policy:"Homa Bay County Health Services Act (2020)", theme:"Disability Inclusion in SRHR Services", stage:"Implementation", materials:{ decision_maker:{label:"Policy Brief",urls:["https://drive.google.com/file/d/1MC4Th5Prcwfk_B85wt7OY7duedpCp5Vs/view"]}, community:{label:"Community Flyer",urls:[]}, media:{label:"Social Media Cards",urls:[]} } },
      { policy:"County Integrated Development Plan (CIDP)", theme:"SRHR Mainstreaming in County Planning", stage:"Implementation", materials:{ decision_maker:{label:"CIDP Advocacy Brief",urls:[]}, community:{label:"Community Flyer",urls:["https://drive.google.com/file/d/1tLO3VeYQbayUI6M8oy_3ha-CVnBRpDdr/view"]}, media:{label:"Social Media Cards",urls:[]} } },
      { policy:"Cross-cutting", theme:"Harmful Cultural & Religious Practices Affecting SRHR", stage:"Advocacy & Community Engagement", materials:{ decision_maker:{label:"FAQ Brief",urls:["https://drive.google.com/file/d/1JrWl9j_NfpcGIh4sSORLLDOsPBl7jSq1/view"]}, community:{label:"Community Flyer",urls:[]}, media:{label:"Social Media Cards",urls:["https://drive.google.com/file/d/1ONSX6QYNrsQyRd7TN4ulvwh-6aSnJt1y/view","https://drive.google.com/file/d/1OA1SZhfSjreeorGspjjNU_LhvYT352kq/view"]} } },
      { policy:"Menstrual Hygiene Management Policy (2019–2030)", theme:"Menstrual Health & Hygiene Management", stage:"County Domestication", materials:{ decision_maker:{label:"Policy Brief",urls:[]}, community:{label:"Community Flyer",urls:["https://drive.google.com/file/d/1A7dhqQgZbUtRtqdTk4CnGt19sC3Q3UFo/view"]}, media:{label:"Social Media Cards",urls:["https://drive.google.com/file/d/1q_WkxwpYGzoRnxTeD2i79Lrww27-hcXK/view","https://drive.google.com/file/d/1Zb7nWVexpdZQzna-OkGa74ZzwMMvlrbN/view","https://drive.google.com/file/d/1eiLk4fUwETdfvmWQesS1LiooA-GLJmVS/view"]} } }
    ],
    stakeholders: {
      government: ["County Department of Health","County Department of Education and Vocational Training","County Gender Office","Homa Bay County Assembly Health Committee","Homa Bay County Office of the Attorney","Department of Economic Planning and Budget","Department of Finance and Planning"],
      csos: ["GVRC","CSA","CYAN Kenya","KELIN","NAYA","HOCEN","HOYMAS"],
      development_partners: ["UNICEF","UNFPA"],
      community: ["Religious coordinating bodies","Traditional leaders' councils","Community health promoters' network","Youth advisory councils"]
    },
    budget_trend: [
      { fy:"2022/23", allocation_m:98.8 },
      { fy:"2023/24", allocation_m:109.7 },
      { fy:"2024/25", allocation_m:117.4 }
    ],
    cso_strengths: ["Community mobilization","HIV-focused networking","Local context knowledge"],
    cso_gaps: ["Policy analysis","Budget tracking","Documentation","Strategic litigation"],
    coordination: ["CHMT quarterly meetings","HIV Technical Working Group","Ad hoc CSO coordination meetings","RMNCAH committee"],
    updates: [
      { id:"hb-u01", date:"2026-06-01", title:"County SRHR Policy Technical Review Meeting", body:"Stakeholders convened to review the draft Homa Bay County Reproductive Health Bill. Technical review stage ongoing with inputs from CSOs and CHMT.", source:"EACHRights Field Team", tags:["policy","reproductive-health"] },
      { id:"hb-u02", date:"2026-04-15", title:"SGBV Awareness Campaign — Homa Bay Town", body:"A joint campaign by GVRC and NAYA reached over 2,000 community members across 5 sub-counties with SGBV prevention messaging.", source:"GVRC", tags:["sgbv","community"] }
    ],
  },
  {
    id: "migori",
    name: "Migori",
    advocacy_bundle_url: "https://drive.google.com/drive/folders/1HoDqiVpZOMoPEPpxDpUMyuuI_tqIIkTt",
    region: "Nyanza",
    color: "#8e44ad",
    population: 1116436,
    lat: -1.0634, lng: 34.4731,
    hero_stat: { label: "Teen Pregnancy Rate", value: "24%", national_avg: "14.7%", direction: "above" },
    key_stats: [
      { label: "HIV Prevalence", value: "14.3%", benchmark: "5.6% national avg", status: "above" },
      { label: "FGM Rate (girls 15–19)", value: "28%", benchmark: "National concern", status: "above" },
      { label: "Active CSOs", value: "~18", benchmark: "", status: "neutral" },
      { label: "Teen Pregnancy Rate", value: "24%", benchmark: "14.7% national avg", status: "above" }
    ],
    overview: "Migori County has the highest teen pregnancy rate among the four counties and a notably high HIV prevalence at 14.3% against the national average of 5.6%. FGM affects 28% of girls aged 15–19. The Reproductive Health Bill remains stalled, making legislative advocacy the top priority for EACHRights and partner CSOs.",
    sub_counties: 8, wards: 40,
    women_reproductive_age: 271000,
    policies: [
      { id:"mg-p01", name:"GBV Policy (2026 Draft)", year:2026, status:"Draft", impl_pct:0, actors:["Gender Office","CSOs"], gap:"Awaiting approval", advocacy:"Push for County Executive approval", theme:"Gender-Based Violence (SGBV)", doc_url:"" },
      { id:"mg-p02", name:"SGBV Policy (2019)", year:2019, status:"Adopted", impl_pct:50, actors:["Gender Office","Police","CSOs"], gap:"Limited enforcement; low awareness", advocacy:"Strengthen enforcement & reporting", theme:"Gender-Based Violence (SGBV)", doc_url:"" },
      { id:"mg-p03", name:"Gender Policy (2021–2025)", year:2021, status:"Adopted", impl_pct:55, actors:["County Gender Office"], gap:"Budget allocation insufficient", advocacy:"Advocate for increased allocation", theme:"Gender Equality & Development", doc_url:"" },
      { id:"mg-p04", name:"County HIV Strategic Plan", year:2020, status:"Adopted", impl_pct:60, actors:["CHMT","Development Partners"], gap:"SRHR linkages weak", advocacy:"Integrate SRHR-HIV services", theme:"Contraceptive Access & HIV Integration", doc_url:"https://nsdcc.go.ke/wp-content/uploads/2021/08/migori.pdf" },
      { id:"mg-p05", name:"CIDP SRHR Components (2023–2027)", year:2023, status:"Adopted", impl_pct:40, actors:["County Government"], gap:"Implementation lagging", advocacy:"Quarterly monitoring reviews", theme:"SRHR Mainstreaming in County Planning", doc_url:"" },
      { id:"mg-p06", name:"Reproductive Health Bill", year:2025, status:"Stalled", impl_pct:0, actors:["County Assembly","CSOs"], gap:"Political barriers; limited lobbying", advocacy:"Intensify legislator engagement", theme:"Maternal Health Access, Quality of Care & Preventable Maternal Deaths", doc_url:"" },
      { id:"mg-p07", name:"Migori County Community Health Services Act (2022)", year:2022, status:"Adopted", impl_pct:45, actors:["CDH","CHMT","Community Health Volunteers"], gap:"Limited integration of SRHR in community health", advocacy:"Integrate SRHR in community health unit frameworks", theme:"Post-Abortion Care (PAC)", doc_url:"https://migoriassembly.go.ke/wp-content/uploads/2024/10/The-Migori-County-Community-Health-Services-Act-2022.pdf" }
    ],
    advocacy_materials: [
      { policy:"Proposed Migori County Reproductive Health Policy/Bill", theme:"Maternal Health Access, Quality of Care & Preventable Maternal Deaths", stage:"Policy Development", materials:{ decision_maker:{label:"Executive Policy Brief",urls:[]}, community:{label:"Community Flyer",urls:[]}, media:{label:"Social Media Cards",urls:[]} } },
      { policy:"Migori County SGBV Policy (2019)", theme:"Gender-Based Violence (SGBV)", stage:"Implementation", materials:{ decision_maker:{label:"Policy Brief",urls:["https://drive.google.com/file/d/1uaQU0Yas0Q-Zo76VIcVLiXIr0LwqIDli/view"]}, community:{label:"Community Flyer",urls:["https://drive.google.com/file/d/1ASIjhsmGKKjFXEuUS9czlFal-3I90Hbc/view"]}, media:{label:"Social Media Cards",urls:["https://drive.google.com/file/d/1ruPVSCB9ooxz-cIE4mD3UPY519govLt3/view","https://drive.google.com/file/d/1XVMr0mFp1MPJ7rIeAtfTsXN6jqvOTHhR/view","https://drive.google.com/file/d/1-y9Byyg0zFxrQtq4nKvjIDutQs_XOeIJ/view"]} } },
      { policy:"Draft Migori County GBV Policy (2026)", theme:"Gender-Based Violence (SGBV)", stage:"Policy Development", materials:{ decision_maker:{label:"Policy Brief",urls:["https://drive.google.com/file/d/1uaQU0Yas0Q-Zo76VIcVLiXIr0LwqIDli/view"]}, community:{label:"Community Flyer",urls:["https://drive.google.com/file/d/1ASIjhsmGKKjFXEuUS9czlFal-3I90Hbc/view"]}, media:{label:"Social Media Cards",urls:["https://drive.google.com/file/d/1ruPVSCB9ooxz-cIE4mD3UPY519govLt3/view","https://drive.google.com/file/d/1XVMr0mFp1MPJ7rIeAtfTsXN6jqvOTHhR/view","https://drive.google.com/file/d/1-y9Byyg0zFxrQtq4nKvjIDutQs_XOeIJ/view"]} } },
      { policy:"National School Re-entry Guidelines (2020)", theme:"School Re-entry for Adolescent Mothers", stage:"County Domestication", materials:{ decision_maker:{label:"Policy Brief",urls:["https://drive.google.com/file/d/1xa8hCejKKiHXEuwEZ_t-ae_XkbuBbduY/view"]}, community:{label:"Poster",urls:["https://drive.google.com/file/d/1EmAt4e7Ce09hWo58E9bkGos1V1syvfyY/view"]}, media:{label:"Social Media Cards",urls:["https://drive.google.com/file/d/1h4eUPoLSTdg29hqNG3wg6dqKnn0YsZq7/view","https://drive.google.com/file/d/1_ukGHbYg7S4QTldDnVF8vsp3R-ksNXjc/view","https://drive.google.com/file/d/1TP-LAZKJrNVXI8eVYM_d5AqqWuudRDcw/view"]} } },
      { policy:"National ASRHR Policy", theme:"Adolescent Pregnancy & Youth-Friendly SRHR Services", stage:"County Domestication", materials:{ decision_maker:{label:"Policy Brief",urls:[]}, community:{label:"Community Flyer",urls:["https://drive.google.com/file/d/1ZsVWBfv5TdbxgZPQUGB2-C0bgpKfSJDC/view"]}, media:{label:"Social Media Cards",urls:["https://drive.google.com/file/d/1GMNG1qkj9XRlsnpP_uLMYKfYDdOeY21T/view","https://drive.google.com/file/d/1qk_j__fVOh6bX46R8gUszVhmGtlDloXS/view","https://drive.google.com/file/d/1jBO7I-LDP-kKdHhdaq3K-or1OIlU6szF/view"]} } },
      { policy:"Migori County HIV & AIDS Strategic Plan", theme:"Contraceptive Access & HIV Integration", stage:"Implementation", materials:{ decision_maker:{label:"Policy Brief",urls:["https://drive.google.com/file/d/17aWGAk0UAy4dmBW-emWQ_jha419LZWS2/view"]}, community:{label:"Community Flyer",urls:[]}, media:{label:"Social Media Cards",urls:["https://drive.google.com/file/d/1mhFs6pIE3oSvK8_FqOV2gHHcqndHOAmt/view","https://drive.google.com/file/d/1qGWLPIeIltanxkqom3s33bwweFiDz7zF/view","https://drive.google.com/file/d/1xpp7vvZn13f4s23DOkvOyj_fwBdjdqxY/view"]} } },
      { policy:"Migori County Community Health Services Act", theme:"Post-Abortion Care (PAC)", stage:"Implementation", materials:{ decision_maker:{label:"Policy Brief",urls:["https://drive.google.com/file/d/1SPmkXgjhOYyVz86omE6NZJawp27pLWKC/view"]}, community:{label:"Community Flyer",urls:[]}, media:{label:"Social Media Cards",urls:[]} } },
      { policy:"Migori County Gender Policy (2021–2025)", theme:"Disability Inclusion in SRHR Services", stage:"Implementation", materials:{ decision_maker:{label:"Policy Brief",urls:[]}, community:{label:"Community Flyer",urls:[]}, media:{label:"Social Media Cards",urls:[]} } },
      { policy:"County Integrated Development Plan (2023–2027)", theme:"SRHR Mainstreaming in County Planning", stage:"Implementation", materials:{ decision_maker:{label:"CIDP Advocacy Brief",urls:[]}, community:{label:"Community Flyer",urls:["https://drive.google.com/file/d/1mRi-IQBHlWVSwWgyrrgkJJ3YYQ4qOMtK/view"]}, media:{label:"Social Media Cards",urls:[]} } },
      { policy:"Cross-cutting", theme:"Harmful Cultural & Religious Practices Affecting SRHR", stage:"Advocacy & Community Engagement", materials:{ decision_maker:{label:"FAQ Brief",urls:["https://drive.google.com/file/d/1DSs4VR5HDy-0pLzXo_THl0oYmAVa0eSo/view"]}, community:{label:"Community Flyer",urls:[]}, media:{label:"Social Media Cards",urls:["https://drive.google.com/file/d/1ymH_onyCto247PsWY1mY__CIolz_csA2/view","https://drive.google.com/file/d/17yB6iOVWY3NXE2SbbPin1CmQsU4FWk0I/view"]} } },
      { policy:"Menstrual Hygiene Management Policy (2019–2030)", theme:"Menstrual Health & Hygiene Management", stage:"County Domestication", materials:{ decision_maker:{label:"Policy Brief",urls:[]}, community:{label:"Community Flyer",urls:["https://drive.google.com/file/d/1GJ2ZAE_B7Il7i9P4-XC-y7_XSEL_4Bkb/view"]}, media:{label:"Social Media Cards",urls:["https://drive.google.com/file/d/1eRY8y03LU9VhIFDVfhVukBNDoc_4pcIy/view","https://drive.google.com/file/d/1jSkzmM98elbi64PajdLMyAQXnvyRRbFx/view","https://drive.google.com/file/d/1dyYzM-SRbP5EEOZutxVDil-PrKWQq25Q/view"]} } }
    ],
    stakeholders: {
      government: ["County Department of Health Services","County Department of Youth Affairs","County Department of Gender and Social Services","Migori County Assembly Health Committee"],
      csos: ["Mikeda Youth Empowerment","Dreamt Hope","Safe Engage Foundation","Youth for a Sustainable World (YSW)"],
      development_partners: ["Youth for a Sustainable World (YSW)","Plan International","PATH (Program for Appropriate Technology in Health)"],
      community: ["Religious leaders' network","Community Health Strategy Coordinating Committee","Youth Parliamentarians' forum","Women's rights networks"]
    },
    budget_trend: null,
    cso_strengths: ["Strong community networks","FGM elimination advocacy","HIV programming experience"],
    cso_gaps: ["Legislative advocacy","Budget analysis","Monitoring & evaluation","Coalition building"],
    coordination: ["County Reproductive Health Technical Working Group","Gender Technical Working Group","Informal CSO coordination meetings","County HIV Committee"],
    updates: [
      { id:"mg-u01", date:"2026-05-20", title:"Reproductive Health Bill Lobbying Campaign", body:"EACHRights and KELIN convened a legislative engagement session with 12 MCAs to push for tabling of the stalled Reproductive Health Bill.", source:"EACHRights Field Team", tags:["policy","bill","legislature"] },
      { id:"mg-u02", date:"2026-03-08", title:"International Women's Day SGBV Forum", body:"Joint forum held in Migori town on IWD, attended by 150 stakeholders, focused on operationalizing the 2019 SGBV Policy.", source:"KELIN Migori", tags:["sgbv","forum"] }
    ]
  },
  {
    id: "kilifi",
    name: "Kilifi",
    advocacy_bundle_url: "https://drive.google.com/drive/folders/1iV9KATrVI7Mfq3rzI0xpOKcU5l-IXi-J",
    region: "Coast",
    color: "#2980b9",
    population: 1453787,
    lat: -3.5107, lng: 39.8499,
    hero_stat: { label: "Teen Pregnancy Rate", value: "21%", national_avg: "15%", direction: "above" },
    key_stats: [
      { label: "RMNCAH Act Implementation", value: "30–35%", benchmark: "Target: 80%", status: "below" },
      { label: "Youth-Friendly Facilities", value: "35%", benchmark: "Meeting standards", status: "below" },
      { label: "SGBV Policy", value: "0%", benchmark: "Not yet operational", status: "critical" },
      { label: "Active CSOs", value: "~20", benchmark: "", status: "neutral" }
    ],
    overview: "Kilifi County on the Coast region has a recently enacted RMNCAH Act (2025) but with only 30–35% implementation. Critically, an SGBV Policy (2020) exists but remains unsigned by the Governor and thus non-operational. Advocacy focuses on operationalizing existing policies and strengthening youth-friendly services.",
    sub_counties: 7, wards: 35,
    women_reproductive_age: 358000,
    policies: [
      { id:"kf-p01", name:"Kilifi County RMNCAH Act (2025)", year:2025, status:"Enacted", impl_pct:33, actors:["CDH","CHMT","CSOs"], gap:"Low implementation; funding shortfall", advocacy:"Develop county implementation plan with budget", theme:"Maternal Health Access, Quality of Care & Preventable Maternal Deaths", doc_url:"https://slo-countybills.go.ke/api/v1/bill/pdf/B1KNHP7XG1_8_KILIFI%20COUNTY%20REPRODUCTIVE,MATERNAL,%20ADOLESCENT%20AND%20CHILD%20HEALTH%20BILL%202024.pdf" },
      { id:"kf-p02", name:"County SGBV Policy (2020)", year:2020, status:"Not Operational", impl_pct:0, actors:["County Executive","Gender Office"], gap:"Awaiting Governor's signature", advocacy:"Lobby Governor's office to sign immediately", theme:"Gender-Based Violence (SGBV)", doc_url:"https://fliphtml5.com/hbwww/vray/Kilifi_County_GBV_Policy_-_Draft_1.5/15/" },
      { id:"kf-p03", name:"Menstrual Health Management (MHM) Policy", year:2024, status:"Draft", impl_pct:17, actors:["CDH","Education Dept.","CSOs"], gap:"Not formally adopted; no county-specific MHM policy", advocacy:"Fast-track adoption process", theme:"Menstrual Health & Hygiene Management", doc_url:"" },
      { id:"kf-p04", name:"Kilifi County SGBV Bill (2023)", year:2023, status:"Not Yet Assessed", impl_pct:null, actors:["County Assembly","CSOs","Gender Office"], gap:"Bill verified as real via county bills portal; implementation status not yet documented by EACHRights", advocacy:"Lobby County Assembly for passage", theme:"Gender-Based Violence (SGBV)", doc_url:"https://slo-countybills.go.ke/api/v1/bill/pdf/8BZTY32RAX_3_KIlifi%20County%20Gender%20Based%20Violance%20Bill,%202023.pdf" },
      { id:"kf-p05", name:"Kilifi County CIDP — SRHR Components (2023–2027)", year:2023, status:"Adopted", impl_pct:47, actors:["County Government"], gap:"Limited SRHR-specific indicators; inadequate budget allocation; implementation tracking challenges", advocacy:"Advocate for enhanced SRHR focus in the next CIDP; push for dedicated SRHR budget lines", theme:"SRHR Mainstreaming in County Planning", doc_url:"https://assets.countydevelopmentplan.com/cidp/pdfs/280d3e55-e43f-4db3-b028-8e4637440be4-KILIFI-COUNTY-CIDP-III_30.05.2023.pdf" },
      { id:"kf-p06", name:"National School Re-entry Guidelines (2020)", year:2020, status:"Limited Implementation", impl_pct:22, actors:["Ministry of Education","County Education Dept."], gap:"Limited county guidelines; cultural resistance; teacher capacity gaps", advocacy:"Advocate for county-specific guidelines; push for teacher training programs", theme:"School Re-entry for Adolescent Mothers", doc_url:"https://www.education.go.ke/sites/default/files/2022-05/2020RH_NationalSchoolReEntryGuidelines.pdf" },
      { id:"kf-p07", name:"Menstrual Hygiene Management Policy (2019–2030)", year:2019, status:"Adopted", impl_pct:28, actors:["Ministry of Health","County Health Dept."], gap:"Implementation minimal at county level", advocacy:"Develop county MHM implementation plan", theme:"Menstrual Health & Hygiene Management", doc_url:"http://guidelines.health.go.ke:8000/media/Menstrual_Hygiene_Management_Policy_2019-2030-_May2020.pdf" },
      { id:"kf-p08", name:"Kilifi County Adolescent and Young People (AYP) Health Strategy (2025–2030)", year:2025, status:"Under Review", impl_pct:0, actors:["Ministry of Health","CHMT","Gender Technical Working Group","CSOs — Health Thematic Group"], gap:"Strategy pending adoption and operationalization", advocacy:"Support CSOs to advocate and lobby for adoption and operationalization of the Strategy", theme:"Adolescent Pregnancy & Youth-Friendly SRHR Services", doc_url:"" },
      { id:"kf-p09", name:"National ASRHR Policy (Kilifi county-level)", year:2015, status:"Adopted", impl_pct:32, actors:["County Government of Kilifi"], gap:"Limited youth-friendly facilities; no systematic CSE implementation; cultural and religious barriers", advocacy:"Advocate for youth-friendly service points; push for CSE integration in schools", theme:"Adolescent Pregnancy & Youth-Friendly SRHR Services", doc_url:"" },
      { id:"kf-p10", name:"Persons with Disabilities Act (Kilifi county-level)", year:2003, status:"Limited Implementation", impl_pct:17, actors:["County Government of Kilifi"], gap:"Limited physical accessibility; inadequate disability-inclusive SRHR services", advocacy:"Advocate for accessibility improvements; push for disability-inclusive SRHR training", theme:"Disability Inclusion in SRHR Services", doc_url:"" }
    ],
    advocacy_materials: [
      { policy:"Kilifi RMNCAH Act (2025)", theme:"Maternal Health Access, Quality of Care & Preventable Maternal Deaths", stage:"Implementation", materials:{ decision_maker:{label:"Executive Policy Brief",urls:[]}, community:{label:"Community Flyer",urls:[]}, media:{label:"Social Media Cards",urls:[]} } },
      { policy:"Kilifi County SGBV Bill (2023)", theme:"Gender-Based Violence (SGBV)", stage:"Legislative Action", materials:{ decision_maker:{label:"Policy Brief",urls:[]}, community:{label:"Community Flyer",urls:["https://drive.google.com/file/d/1S5fJ94cOvEay0L9Ladv1RJ1kcFPrlc5a/view"]}, media:{label:"Social Media Cards",urls:["https://drive.google.com/file/d/1CWZpBe044V59d3ck0kxrKvlVqV8Rdjt6/view","https://drive.google.com/file/d/1f7QNzb8lj36j-Stm8TmnXh_O7AWTemU4/view","https://drive.google.com/file/d/1uy42XWAaSNbtw7LYieEOCr41CWQOSb1X/view"]} } },
      { policy:"Kilifi County SGBV Policy (2020)", theme:"Gender-Based Violence (SGBV)", stage:"Implementation", materials:{ decision_maker:{label:"Policy Brief",urls:[]}, community:{label:"Community Flyer",urls:["https://drive.google.com/file/d/1S5fJ94cOvEay0L9Ladv1RJ1kcFPrlc5a/view"]}, media:{label:"Social Media Cards",urls:["https://drive.google.com/file/d/1CWZpBe044V59d3ck0kxrKvlVqV8Rdjt6/view","https://drive.google.com/file/d/1f7QNzb8lj36j-Stm8TmnXh_O7AWTemU4/view","https://drive.google.com/file/d/1uy42XWAaSNbtw7LYieEOCr41CWQOSb1X/view"]} } },
      { policy:"National School Re-entry Guidelines (2020)", theme:"School Re-entry for Adolescent Mothers", stage:"County Domestication", materials:{ decision_maker:{label:"Policy Brief",urls:["https://drive.google.com/file/d/1M0dTqksBk3tH3Nz-pYBb5pUM9y6U1fHp/view"]}, community:{label:"Poster • Flyer",urls:["https://drive.google.com/file/d/1IXxHBEQo9ZYH4nP53XScnxXNzCGepahQ/view"]}, media:{label:"Social Media Cards",urls:["https://drive.google.com/file/d/1aS6fYR2DGNiNxvdVdej3qFJjqxoO68Ih/view","https://drive.google.com/file/d/16BZsGTqxoD2dtFUgFfQ0GhPcErU5IW0y/view","https://drive.google.com/file/d/1ug1slXLZd7H1RQT6z9iAgJznLTeu2XxW/view"]} } },
      { policy:"National ASRHR Policy", theme:"Adolescent Pregnancy & Youth-Friendly SRHR Services", stage:"County Domestication", materials:{ decision_maker:{label:"Policy Brief",urls:[]}, community:{label:"Community Flyer",urls:["https://drive.google.com/file/d/1-mmc6TDLRI7dhM16fJ08OEykqXsALRou/view"]}, media:{label:"Social Media Cards",urls:["https://drive.google.com/file/d/15oIZgLwJxiZ_QB3Sqo_BfHqUjRClyyOb/view","https://drive.google.com/file/d/1E9RrqaiW3e8gfc7urM4aPHh5gZhH_Wf9/view","https://drive.google.com/file/d/1bdCFqK0uLpLFprgFBkAuF8nZnyZwfing/view"]} } },
      { policy:"Menstrual Hygiene Management Policy", theme:"Menstrual Health & Hygiene Management", stage:"County Adoption & Implementation", materials:{ decision_maker:{label:"Policy Brief",urls:[]}, community:{label:"Community Flyer",urls:["https://drive.google.com/file/d/1VE_zFTbtfeWWeKrKTRBo8QM_-hE2Gzk2/view"]}, media:{label:"Social Media Cards",urls:["https://drive.google.com/file/d/1cJ48mGjlmAXsgQ3Oy9M39LE9gxsEK2va/view","https://drive.google.com/file/d/1DXk4ssZuz2BhyVU_PxxHAkMsdNjFt2A7/view","https://drive.google.com/file/d/14kY5lEJN6ODgxTVps7XQXdbFMRRd90ob/view"]} } },
      { policy:"Persons with Disabilities Act", theme:"Disability Inclusion in SRHR Services", stage:"County Implementation", materials:{ decision_maker:{label:"Policy Brief",urls:["https://drive.google.com/file/d/1ldlwAGola1oxDT2K3-QIhB1QjTFFREmV/view"]}, community:{label:"Community Flyer",urls:[]}, media:{label:"Social Media Cards",urls:[]} } },
      { policy:"County Integrated Development Plan", theme:"SRHR Mainstreaming in County Planning", stage:"Implementation", materials:{ decision_maker:{label:"CIDP Advocacy Brief",urls:[]}, community:{label:"Community Flyer",urls:["https://drive.google.com/file/d/1ARLZDrNuOQRX1IpA2r4j2-lwgl_ozru4/view"]}, media:{label:"Social Media Cards",urls:[]} } },
      { policy:"Kilifi RMNCAH Act", theme:"Post-Abortion Care (PAC)", stage:"Implementation", materials:{ decision_maker:{label:"Policy Brief",urls:["https://drive.google.com/file/d/1gTMG-zmhlzwsMLYLrnXCVS-EqMatuQgy/view"]}, community:{label:"Community Flyer",urls:[]}, media:{label:"Social Media Cards",urls:[]} } },
      { policy:"Cross-cutting", theme:"Harmful Cultural & Religious Practices Affecting SRHR", stage:"Advocacy & Community Engagement", materials:{ decision_maker:{label:"FAQ Brief",urls:["https://drive.google.com/file/d/1wYa8S-yTcyuS_5s0HLq6e7KYgZEwEcrY/view"]}, community:{label:"Community Flyer",urls:[]}, media:{label:"Social Media Cards",urls:["https://drive.google.com/file/d/1oTeSo8lgymSJ5gosdYZclAX_Chr__MOV/view","https://drive.google.com/file/d/1880ybzMYDI0ywTQxYkfI0sr-Dc_kHJcS/view","https://drive.google.com/file/d/1FS10vJViXDt0FiYuE8Ehk9hFnfswZ_AV/view"]} } },
      { policy:"National Family Planning Policy", theme:"Contraceptive Access", stage:"County Implementation", materials:{ decision_maker:{label:"Policy Brief",urls:["https://drive.google.com/file/d/136RXntRRWOXXXWiwOMuvjzOZMnzsl5FK/view"]}, community:{label:"Community Flyer",urls:["https://drive.google.com/file/d/1dn0hN2qnblt9U6ijHCqk75ws1IaaGHff/view"]}, media:{label:"Social Media Cards",urls:["https://drive.google.com/file/d/1t4kxf9znxwJuAcMy7YrOXk4CslwAr_J9/view","https://drive.google.com/file/d/1CoQke_VVJyXdZRLEh7E19cnfCIVo93Ep/view","https://drive.google.com/file/d/1Bp2xcdM9GsYOQAdw8wCRd7ZxhrCvv4Ob/view"]} } }
    ],
    stakeholders: {
      government: ["County Department of Health Services","County Department of Education","County Department of Gender and Social Services","Kilifi County Assembly","Office of the County Attorney"],
      csos: ["Kilifi CSO Network","Rising Winners Youth Empowerment Initiative","Pwani Youth Network","Youth for a Sustainable World (YSW)","KELIN"],
      development_partners: ["Planned Parenthood Global","Marie Stopes Kenya","UNFPA","UNICEF"],
      community: ["Council of Elders","Interfaith Religious Leaders Forum","Youth advisory networks","Women's rights groups"]
    },
    budget_trend: null,
    cso_strengths: ["Coastal community networks","Youth engagement","Maternal health programming"],
    cso_gaps: ["Strategic litigation","Budget advocacy","Policy documentation","Media engagement"],
    coordination: ["County Reproductive Health Technical Working Group","Gender Technical Working Group","Child Protection Network","Ad hoc CSO coordination meetings","RMNCAH Committee"],
    updates: [
      { id:"kf-u01", date:"2026-06-10", title:"Governor Signature Campaign for SGBV Policy", body:"A coalition of 8 CSOs submitted a formal petition to the Governor's office demanding signature of the 2020 SGBV Policy. Follow-up meeting scheduled for July 2026.", source:"CREAW Kilifi", tags:["sgbv","policy","governor"] },
      { id:"kf-u02", date:"2026-05-05", title:"RMNCAH Act Implementation Review Workshop", body:"County stakeholders reviewed progress on RMNCAH Act implementation. Current rate stands at 33%. Key bottleneck identified as inadequate HCW capacity.", source:"PATH Kenya", tags:["rmncah","implementation"] }
    ]
  },
  {
    id: "kwale",
    name: "Kwale",
    advocacy_bundle_url: "https://drive.google.com/drive/folders/1lC51ir0bgOVKJfhQpak59b5bLG1mADmb",
    region: "Coast",
    color: "#27ae60",
    population: 866820,
    lat: -4.1731, lng: 39.4525,
    hero_stat: { label: "Teen Pregnancy Rate", value: "22%", national_avg: "15%", direction: "above" },
    key_stats: [
      { label: "County SRHR Policy", value: "None", benchmark: "Relies on national only", status: "critical" },
      { label: "SGBV Act Implementation", value: "30–40%", benchmark: "Target: 80%", status: "below" },
      { label: "Active CSOs", value: "~15", benchmark: "Fewest of 4 counties", status: "neutral" },
      { label: "Religious Influence", value: "High", benchmark: "Council of Imams", status: "neutral" }
    ],
    overview: "Kwale County has the fewest active CSOs (~15) and no dedicated county SRHR policy — relying solely on national frameworks. The predominantly Muslim context means the Council of Imams holds significant influence over SRHR discourse. The SGBV Act 2023/2024 shows 30–40% implementation, and a Gender & Social Inclusion Policy remains at 0% with no adoption date confirmed.",
    sub_counties: 4, wards: 20,
    women_reproductive_age: 210000,
    policies: [
      { id:"kw-p01", name:"Kwale County SGBV Act (2023/2024)", year:2023, status:"Enacted", impl_pct:35, actors:["County Government","Police","CSOs"], gap:"Enforcement weak; limited resources", advocacy:"Lobby for implementation budget", theme:"Gender-Based Violence (SGBV)", doc_url:"https://www.kwaleassembly.go.ke/wp-content/uploads/2024/03/KWALE-COUNTY-SEXUAL-GENDER-BASED_2023.pdf" },
      { id:"kw-p02", name:"Gender & Social Inclusion Policy", year:2025, status:"Draft", impl_pct:0, actors:["County Gender Office","CSOs"], gap:"Not yet adopted", advocacy:"Engage County Executive for fast-track adoption", theme:"Gender Equality & Development", doc_url:"https://kwale.go.ke/wp-content/uploads/2024/12/KWALE-GENDER-AND-SOCIAL-INCLUSION-POLICY-2024-POPULAR-VERSION-DRAFT.pdf" },
      { id:"kw-p03", name:"National Reproductive Health Policy (2022–2032) — county-level", year:2022, status:"Adopted", impl_pct:65, actors:["County Government of Kwale"], gap:"Inadequate resource allocation; limited healthcare worker training; poor community awareness", advocacy:"Advocate for a county-specific implementation framework; push for increased budgetary allocation", theme:"Maternal Health Access, Quality of Care & Preventable Maternal Deaths", doc_url:"" },
      { id:"kw-p04", name:"National Family Planning Policy — county-level", year:2025, status:"Adopted", impl_pct:55, actors:["County Government of Kwale"], gap:"Supply chain challenges; limited method mix; cultural and religious barriers", advocacy:"Strengthen commodity security systems; advocate for a county budget line for FP commodities", theme:"Contraceptive Access", doc_url:"" },
      { id:"kw-p05", name:"National ASRHR Policy — county-level", year:2015, status:"Adopted", impl_pct:35, actors:["County Government of Kwale"], gap:"Limited youth-friendly facilities; lack of comprehensive sexuality education; high teenage pregnancy rates", advocacy:"Push for county adoption of CSE guidelines; advocate for youth-friendly service points", theme:"Adolescent Pregnancy & Youth-Friendly SRHR Services", doc_url:"" },
      { id:"kw-p06", name:"Kenya Health Policy (2014–2030) — county-level", year:2014, status:"Adopted", impl_pct:45, actors:["County Government of Kwale"], gap:"Limited health insurance coverage; inadequate health infrastructure; shortage of specialized SRHR services", advocacy:"Advocate for SRHR inclusion in UHC packages; push for health facility upgrades in underserved areas", theme:"Health Systems Strengthening & Service Delivery", doc_url:"" },
      { id:"kw-p07", name:"Menstrual Hygiene Management Policy — county-level", year:2019, status:"Draft", impl_pct:25, actors:["County Government of Kwale"], gap:"Limited access to menstrual products; poor WASH infrastructure in schools", advocacy:"Push for county adoption of MHM policy; advocate for budget allocation for menstrual products", theme:"Menstrual Health & Hygiene Management", doc_url:"" },
      { id:"kw-p08", name:"National Gender and Development Policy — county-level", year:2019, status:"Partially Implemented", impl_pct:35, actors:["County Government of Kwale"], gap:"Stigma around menstruation; limited MHM education; limited gender analysis in planning", advocacy:"Engage education sector on MHM facilities; push for gender analysis in county planning", theme:"Gender Equality & Development", doc_url:"" },
      { id:"kw-p09", name:"HIV Prevention and Control Act — county-level", year:2014, status:"Adopted", impl_pct:55, actors:["County Government of Kwale"], gap:"Cultural barriers to women's empowerment; stigma and discrimination; limited integration with SRHR services", advocacy:"Advocate for gender-responsive budgeting; advocate for strengthened SRHR-HIV integration", theme:"Contraceptive Access & HIV Integration", doc_url:"" },
      { id:"kw-p10", name:"Persons with Disabilities Act — county-level", year:2003, status:"Limited Implementation", impl_pct:25, actors:["County Government of Kwale"], gap:"Limited physical accessibility; inadequate disability-inclusive SRHR services; lack of information in accessible formats", advocacy:"Push for infrastructure modifications; support development of accessible IEC materials", theme:"Disability Inclusion in SRHR Services", doc_url:"" }
    ],
    advocacy_materials: [
      { policy:"National Reproductive Health Policy (County Implementation)", theme:"Maternal Health Access, Quality of Care & Preventable Maternal Deaths", stage:"County Implementation", materials:{ decision_maker:{label:"Executive Policy Brief",urls:[]}, community:{label:"Community Flyer",urls:[]}, media:{label:"Social Media Cards",urls:[]} } },
      { policy:"Kwale County SGBV Act", theme:"Gender-Based Violence (SGBV)", stage:"Implementation", materials:{ decision_maker:{label:"Policy Brief",urls:["https://drive.google.com/file/d/1OIwJNidECDS9mISnIu_FXyyLGjKlyCNV/view"]}, community:{label:"Community Flyer",urls:["https://drive.google.com/file/d/1erELSZ8HGmweqYmulgMiakRRI4JOZfzc/view"]}, media:{label:"Social Media Cards",urls:["https://drive.google.com/file/d/1oZ0Zvrr4MHADr-7nCtp2P8dfY-NdVJxA/view","https://drive.google.com/file/d/1BB2tuC1pId35JIv6bAhEi3oXbCSSK-HW/view","https://drive.google.com/file/d/1KdtdZS5rBc_Cn1VgxPX1JWNxbg2A3EIz/view"]} } },
      { policy:"Draft Kwale County Gender & Social Inclusion Policy", theme:"Disability Inclusion in SRHR Services", stage:"Policy Development", materials:{ decision_maker:{label:"Policy Brief",urls:["https://drive.google.com/file/d/1lzyGDLV_SFxsqzsSCG5Gb5U0VBmvRzox/view"]}, community:{label:"Community Flyer",urls:[]}, media:{label:"Social Media Cards",urls:[]} } },
      { policy:"National School Re-entry Guidelines (2020)", theme:"School Re-entry for Adolescent Mothers", stage:"County Domestication", materials:{ decision_maker:{label:"County Brief",urls:["https://drive.google.com/file/d/1d21hlJQPTQN6nLNhRxO03VRiTLRfOFGn/view"]}, community:{label:"Poster • Flyer",urls:["https://drive.google.com/file/d/1D4EfzhD06SbL5iDl5y_1nnbKMMNIcpC0/view"]}, media:{label:"Social Media Cards",urls:["https://drive.google.com/file/d/1hQ7fmPLbIF8iOk8uUbPdhV4rvgWiNtJy/view","https://drive.google.com/file/d/1xWzMjCvThfmSAnEwaQbMQBFnjlGe1szw/view","https://drive.google.com/file/d/1i_lmWY8m__XDP9XeoEuchV6fPnIMEQtJ/view"]} } },
      { policy:"National ASRHR Policy", theme:"Adolescent Pregnancy & Youth-Friendly SRHR Services", stage:"County Domestication", materials:{ decision_maker:{label:"Policy Brief",urls:[]}, community:{label:"Community Flyer",urls:["https://drive.google.com/file/d/15s3qcRXPeRBZmlXI20FIRFfbyDAxCnoU/view"]}, media:{label:"Social Media Cards",urls:["https://drive.google.com/file/d/1LW725mj0j08irHvWLzh-bHY9Idwcm9yL/view","https://drive.google.com/file/d/1p327-7s-APnTnzC546Gj86TU2XBsO8g_/view","https://drive.google.com/file/d/1g-MMWrxiXCjY5dQ4e7N1ep8fhbLpY-Dn/view"]} } },
      { policy:"National Family Planning Policy", theme:"Contraceptive Access", stage:"County Implementation", materials:{ decision_maker:{label:"County Brief",urls:["https://drive.google.com/file/d/1wMyhYvUPKQktgG1nksxGs20wnjxPkQXP/view"]}, community:{label:"Community Flyer",urls:[]}, media:{label:"Social Media Cards",urls:["https://drive.google.com/file/d/1iYp8-VhaxzNhzWQQYvjf0fN_4cBhQ01A/view","https://drive.google.com/file/d/1HUyuQ7mV5q6VC7DoY1hW3oqo3Sg5NZfZ/view","https://drive.google.com/file/d/1yG4sQ-dyxJP6GPWKdQovnYk7tCHbNxT_/view"]} } },
      { policy:"Kenya Health Policy (2014–2030)", theme:"Post-Abortion Care (PAC)", stage:"County Implementation", materials:{ decision_maker:{label:"Policy Brief",urls:["https://drive.google.com/file/d/1HVIbPJVu5slwmwCmEQFI5Vc66Q-fcX_o/view"]}, community:{label:"Community Flyer",urls:[]}, media:{label:"Social Media Cards",urls:[]} } },
      { policy:"Menstrual Hygiene Management Policy", theme:"Menstrual Health & Hygiene Management", stage:"County Implementation", materials:{ decision_maker:{label:"Policy Brief",urls:[]}, community:{label:"Community Flyer",urls:["https://drive.google.com/file/d/1wE91GmKIANWJgkzhCMx-tJC02HEbj43Z/view"]}, media:{label:"Social Media Cards",urls:["https://drive.google.com/file/d/1UhHysTMXwT1a8tBVpYvlsAFDbDFnthPN/view","https://drive.google.com/file/d/1_aLqyfDKdIP0or3A-EvoucoCjUBEJdqa/view","https://drive.google.com/file/d/10QS-WVOk_6qC9_diS-4P7y-Oha8LPQiv/view"]} } },
      { policy:"County Integrated Development Plan", theme:"SRHR Mainstreaming in County Planning", stage:"Implementation", materials:{ decision_maker:{label:"CIDP Advocacy Brief",urls:[]}, community:{label:"Community Flyer",urls:["https://drive.google.com/file/d/1SLSfTp8FNzgGJ43YeJODACiuC6p6u5vY/view"]}, media:{label:"Social Media Cards",urls:[]} } },
      { policy:"Cross-cutting", theme:"Harmful Cultural & Religious Practices Affecting SRHR", stage:"Advocacy & Community Engagement", materials:{ decision_maker:{label:"FAQ Brief",urls:["https://drive.google.com/file/d/1VtwPw0Nie1qnjXv_H8xK7kLwCrqZSGEV/view"]}, community:{label:"Community Flyer",urls:[]}, media:{label:"Social Media Cards",urls:["https://drive.google.com/file/d/1RHDLjG4u1kBtmFn3x-AG4QFEUtvaWtMF/view","https://drive.google.com/file/d/1jh_fBfm-qhSX7xIcAnZ4KYxG6S54eHwd/view","https://drive.google.com/file/d/1CeqcOsSJ6JQP8Ml1lasnbiOS_f9V03GO/view"]} } }
    ],
    stakeholders: {
      government: ["County Department of Health","County Department of Education","County Department of Gender, Special Group and Youth Affairs","Kwale County Assembly Health Committee","Office of the National Commissioner, Kwale County"],
      csos: ["Kwale CSOs Consortium","AN International Kwale","Kwale Youth and Governance Consortium","Maternal and Child Health Advocacy International","Teens Watch","Kwale Human Rights Network","Kenya Red Cross Kwale Branch"],
      development_partners: ["World Vision","UNICEF","Care International","UNFPA"],
      community: ["Council of Imams and Preachers of Kenya (CIPK)","Community health volunteers' network","Women's rights groups","Youth networks"]
    },
    budget_trend: null,
    cso_strengths: ["Religious leader engagement","Community trust","Local knowledge"],
    cso_gaps: ["Policy advocacy","Budget tracking","Strategic litigation","CSO networking"],
    coordination: ["County Health Management Team meetings","Maternal and Child Health Technical Working Group","Informal CSO networking platforms","Gender Technical Working Group"],
    updates: [
      { id:"kw-u01", date:"2026-06-15", title:"Interfaith SRHR Dialogue — Kwale Town", body:"First-ever interfaith dialogue on SRHR involving the Council of Imams and Christian leaders. Agreement reached to co-develop community SRHR messaging.", source:"Kwale Women Network", tags:["interfaith","sgbv","community"] },
      { id:"kw-u02", date:"2026-04-20", title:"County SRHR Policy Development Workshop", body:"Stakeholder workshop to launch the SRHR policy development process. 22 organizations participated. Technical committee formed to draft the policy by Q4 2026.", source:"EACHRights Field Team", tags:["policy","workshop"] }
    ]
  }
];

// ── OPTION A: GOOGLE SHEETS AS SINGLE SOURCE OF TRUTH ──
// Data is fetched fresh from Google Sheets on every page load.
// Stored in memory only (window.SHEET_DATA) — no localStorage conflicts.
// county.html merges sheet data over base COUNTIES data before rendering.
// Policies tab: edited directly by trusted staff (see admin.html guide).
// Updates tab: fed by a Google Form, then gated by the 'Show on site' column.

const GS_DEFAULTS = {
  policies:  "https://docs.google.com/spreadsheets/d/e/2PACX-1vS-PmarsL1CDHiaanaytyeO1f7iCgUrKWl6TAD-Esc2ZmyRuSd8xKetPXDutVKOkwJe4ldoUyGkLw4w/pub?gid=0&single=true&output=csv",
  updates:   "https://docs.google.com/spreadsheets/d/e/2PACX-1vS-PmarsL1CDHiaanaytyeO1f7iCgUrKWl6TAD-Esc2ZmyRuSd8xKetPXDutVKOkwJe4ldoUyGkLw4w/pub?gid=841913399&single=true&output=csv",
  advocacy:  "https://docs.google.com/spreadsheets/d/e/2PACX-1vS-PmarsL1CDHiaanaytyeO1f7iCgUrKWl6TAD-Esc2ZmyRuSd8xKetPXDutVKOkwJe4ldoUyGkLw4w/pub?gid=1539470058&single=true&output=csv"
};

// The Google Form and training-guide links are deliberately NOT here. This file
// is loaded by every public page, so anything in it is served to every visitor.
// They live in admin.html instead, which is the only page that uses them.

const VALID_COUNTY_IDS = new Set(['homa-bay', 'migori', 'kilifi', 'kwale']);
const VALID_MILESTONE_IDS = new Set(window.ADVOCACY_MILESTONES.map(m => m.id));
// Expected column headers for the Updates tab. Matched case/whitespace-
// insensitively (see normalizeHeader) so a stray extra space or a different
// capitalization in the sheet doesn't silently drop a column.
const UPDATES_FORM_HEADERS = {
  county: 'County',
  date: 'Date Event',
  title: 'Update Title',
  body: 'Description',
  source: 'Source/ Organization',
  tags: 'Tags( optional, separate with ;  )',
  // Review gate. A tick box column added by hand to the Updates tab, to the
  // right of the columns the form writes. Name it exactly this in the sheet.
  approved: 'Show on site'
};
const COUNTY_LABEL_TO_ID = { 'Homa Bay': 'homa-bay', 'Migori': 'migori', 'Kilifi': 'kilifi', 'Kwale': 'kwale' };

// ── XSS-SAFE RENDER HELPERS — use these around every value written via innerHTML ──
window.esc = function(str) {
  return String(str ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
};
// Only allow http(s) URLs through to href/src attributes — blocks javascript: injection via doc_url
window.safeUrl = function(url) {
  if (typeof url !== 'string') return '';
  const trimmed = url.trim();
  return /^https?:\/\//i.test(trimmed) ? trimmed : '';
};
// One shared status→CSS-class slug, used by index.html, county.html, admin.html
window.slugStatus = function(status) {
  return 'pill-' + String(status ?? '').toLowerCase().replace(/[\s\/\-]+/g, '');
};

// Google exports a ticked box as "TRUE" and an unticked one as "FALSE". Blank
// means the script has not written to the cell yet, which is treated as NOT
// approved. The wider set of spellings is here so that a staff member typing
// "yes" by hand into the column still works as they expect.
function isApprovedFlag(value) {
  return /^(true|yes|y|1|approved)$/i.test(String(value ?? '').trim());
}

function clampPct(n) {
  const v = parseInt(n, 10);
  if (isNaN(v)) return 0;
  return Math.max(0, Math.min(100, v));
}

// Google Sheets exports Form-submitted dates in the sheet's locale format
// (e.g. "9/7/2026"), while hand-written baseline dates below are ISO
// ("2026-06-01"). Both need to be ISO before display or sorting, since
// updates are sorted with plain string comparison.
function normalizeDate(raw) {
  raw = (raw || '').trim();
  if (!raw) return '';
  if (/^\d{4}-\d{2}-\d{2}/.test(raw)) return raw.slice(0, 10);
  const m = raw.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (m) {
    const [, mo, da, yr] = m;
    return `${yr}-${mo.padStart(2, '0')}-${da.padStart(2, '0')}`;
  }
  return raw;
}

// Matches a wanted column name against a sheet's actual header row,
// ignoring case and collapsing whitespace, so a retyped header cell
// ("Source/Organization" vs "Source/ Organization") doesn't silently
// come back empty.
function normalizeHeader(s) {
  return String(s || '').trim().toLowerCase().replace(/\s*\/\s*/g, '/').replace(/\s+/g, ' ');
}
function buildHeaderKeyMap(fields) {
  const map = {};
  (fields || []).forEach(f => { map[normalizeHeader(f)] = f; });
  return map;
}
function getByHeader(row, headerKeyMap, wantedHeader) {
  const actualKey = headerKeyMap[normalizeHeader(wantedHeader)];
  return actualKey ? (row[actualKey] || '').trim() : '';
}

// fetch with a hard timeout so a hung network doesn't block rendering forever
async function fetchWithTimeout(url, ms) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), ms);
  try {
    return await fetch(url, { signal: ctrl.signal });
  } finally {
    clearTimeout(t);
  }
}

// In-memory store — reset on every page load, no stale data
window.SHEET_DATA = { policies: {}, updates: {}, advocacy: {} };
window.SHEET_STATUS = { policies: 'pending', updates: 'pending', advocacy: 'pending' }; // 'pending' | 'ok' | 'error'

window.loadGoogleSheetsData = async function() {
  // ── POLICIES ── (Papa Parse handles quoting/escaping correctly; header:true reads by column name)
  try {
    const res = await fetchWithTimeout(GS_DEFAULTS.policies, 5000);
    const text = await res.text();
    const parsed = Papa.parse(text.trim(), { header: true, skipEmptyLines: true });
    parsed.data.forEach(row => {
      const county_id = (row.county_id || '').trim();
      const policy_id = (row.policy_id || '').trim();
      if (!VALID_COUNTY_IDS.has(county_id) || !policy_id) return; // silently drop malformed/unknown rows
      if (!window.SHEET_DATA.policies[county_id]) window.SHEET_DATA.policies[county_id] = [];
      window.SHEET_DATA.policies[county_id].push({
        id: policy_id,
        status: (row.status || '').trim(),
        // A blank cell means "leave the existing value alone", the same as status,
        // gap and doc_url. Without this, blank became 0 and silently zeroed the
        // progress bar of every policy given a row in the sheet.
        impl_pct: String(row.impl_pct ?? '').trim() === '' ? undefined : clampPct(row.impl_pct),
        gap: (row.gap || '').trim(),
        doc_url: window.safeUrl(row.doc_url || '')
      });
    });
    window.SHEET_STATUS.policies = 'ok';
  } catch (e) {
    window.SHEET_STATUS.policies = 'error';
    console.warn('⚠️ Policies sheet load failed — using base data:', e.message);
  }

  // ── UPDATES ── (fed by the public Google Form; county comes through as a label, mapped to id)
  try {
    const res2 = await fetchWithTimeout(GS_DEFAULTS.updates, 5000);
    const text2 = await res2.text();
    const parsed2 = Papa.parse(text2.trim(), { header: true, skipEmptyLines: true });
    const updatesHeaderMap = buildHeaderKeyMap(parsed2.meta.fields);
    // The review gate is only enforced when the column actually exists. If it is
    // absent, every row renders, which is how the sheet behaved before the gate
    // was introduced, so deleting the column degrades to the old behaviour
    // rather than emptying every county feed.
    const gateIsActive = Object.prototype.hasOwnProperty.call(
      updatesHeaderMap, normalizeHeader(UPDATES_FORM_HEADERS.approved)
    );
    parsed2.data.forEach(row => {
      const rawCounty = getByHeader(row, updatesHeaderMap, UPDATES_FORM_HEADERS.county);
      const county_id = VALID_COUNTY_IDS.has(rawCounty) ? rawCounty : COUNTY_LABEL_TO_ID[rawCounty];
      const title = getByHeader(row, updatesHeaderMap, UPDATES_FORM_HEADERS.title);
      if (!county_id || !title) return;
      // Anything submitted through the open Field Update Form lands here
      // unapproved and stays off the public dashboard until a staff member
      // ticks it in the Updates tab. Fail closed: unticked, blank and
      // unrecognised values are all treated as not approved.
      if (gateIsActive && !isApprovedFlag(getByHeader(row, updatesHeaderMap, UPDATES_FORM_HEADERS.approved))) return;
      const date = normalizeDate(getByHeader(row, updatesHeaderMap, UPDATES_FORM_HEADERS.date));
      const tagsRaw = getByHeader(row, updatesHeaderMap, UPDATES_FORM_HEADERS.tags);
      if (!window.SHEET_DATA.updates[county_id]) window.SHEET_DATA.updates[county_id] = [];
      window.SHEET_DATA.updates[county_id].push({
        id: `gs-${county_id}-${date}-${title.slice(0, 8).replace(/\s/g, '')}`,
        date,
        title,
        body: getByHeader(row, updatesHeaderMap, UPDATES_FORM_HEADERS.body),
        source: getByHeader(row, updatesHeaderMap, UPDATES_FORM_HEADERS.source),
        tags: tagsRaw ? tagsRaw.split(';').map(t => t.trim()).filter(Boolean) : []
      });
    });
    window.SHEET_STATUS.updates = 'ok';
  } catch (e) {
    window.SHEET_STATUS.updates = 'error';
    console.warn('⚠️ Updates sheet load failed — using base data:', e.message);
  }

  // ── ADVOCACY SCORECARD ── (trusted staff edit directly, like Policies)
  if (GS_DEFAULTS.advocacy.startsWith('http')) {
    try {
      const res3 = await fetchWithTimeout(GS_DEFAULTS.advocacy, 5000);
      const text3 = await res3.text();
      const parsed3 = Papa.parse(text3.trim(), { header: true, skipEmptyLines: true });
      parsed3.data.forEach(row => {
        const county_id = (row.county_id || '').trim();
        const milestone_id = (row.milestone_id || '').trim();
        if (!VALID_COUNTY_IDS.has(county_id) || !VALID_MILESTONE_IDS.has(milestone_id)) return;
        if (!window.SHEET_DATA.advocacy[county_id]) window.SHEET_DATA.advocacy[county_id] = {};
        window.SHEET_DATA.advocacy[county_id][milestone_id] = Math.max(0, Math.min(2, parseInt(row.score, 10) || 0));
      });
      window.SHEET_STATUS.advocacy = 'ok';
    } catch (e) {
      window.SHEET_STATUS.advocacy = 'error';
      console.warn('⚠️ Advocacy scorecard sheet load failed — all milestones default to 0:', e.message);
    }
  } else {
    window.SHEET_STATUS.advocacy = 'error'; // placeholder URL not yet configured
  }

  console.log('Google Sheets sync:', window.SHEET_STATUS);
};

// Helper: get the advocacy scorecard for a county — all milestones default to 0 until a staff member scores them via the Sheet
window.getAdvocacyScorecard = function(countyId) {
  const scores = window.SHEET_DATA.advocacy[countyId] || {};
  const milestones = window.ADVOCACY_MILESTONES.map(m => ({ ...m, score: scores[m.id] ?? 0 }));
  const totalScore = milestones.reduce((sum, m) => sum + m.score, 0);
  const pct = Math.round((totalScore / window.ADVOCACY_MAX_SCORE) * 100);
  return { milestones, totalScore, maxScore: window.ADVOCACY_MAX_SCORE, pct, ratingLabel: window.advocacyRatingForPct(pct) };
};

// Helper: get a county with sheet data merged in (used by county.html and admin.html)
window.getMergedCounty = function(countyId) {
  const found = COUNTIES.find(c => c.id === countyId);
  if (!found) return null;
  const base = JSON.parse(JSON.stringify(found));

  // Merge policy overrides from sheet
  const sheetPolicies = window.SHEET_DATA.policies[countyId] || [];
  sheetPolicies.forEach(sp => {
    const p = base.policies.find(p => p.id === sp.id);
    if (p) {
      if (sp.status) p.status = sp.status;
      if (sp.impl_pct !== undefined) p.impl_pct = sp.impl_pct;
      if (sp.gap) p.gap = sp.gap;
      if (sp.doc_url) p.doc_url = sp.doc_url;
    }
  });

  // Prepend sheet updates before base updates
  const sheetUpdates = window.SHEET_DATA.updates[countyId] || [];
  base.updates = [...sheetUpdates, ...base.updates]
    .sort((a, b) => b.date.localeCompare(a.date));

  return base;
};

// Auto-load on every page — always resolves even if sheet is unreachable
window.SHEET_READY = window.loadGoogleSheetsData().catch(() => {
  console.warn('Sheet unavailable — using base data');
});