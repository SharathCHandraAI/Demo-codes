export const toastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "light",
};

export const giveBase64Src = (byteString: string) => {
  return `data:image/png;base64,${byteString}`;
};

export const BASE_URL = "http://localhost:8000";

export const sexOptions = [
  {
    label: "Male",
    value: "male",
  },
  {
    label: "Female",
    value: "female",
  },
];

export const chestPainTypeOptions = [
  {
    label: "Typical Angina",
    value: "typical angina",
  },
  {
    label: "Atypical Angina",
    value: "atypical angina",
  },
  {
    label: "Non Anginal Pain",
    value: "non-anginal pain",
  },
  {
    label: "Asymptomatic",
    value: "asymptomatic",
  },
];

export const ekgResultOptions = [
  {
    label: "Normal",
    value: "normal",
  },
  {
    label: "ST-T Wave Abnormality",
    value: "ST-T wave abnormality",
  },
  {
    label: "Left Ventricular Hypertrophy",
    value: "left ventricular hypertrophy",
  },
];

export const fbsOptions = [
  {
    label: "True",
    value: "true",
  },
  {
    label: "False",
    value: "false",
  },
];

export const exerciseAnginaOptions = [
  {
    label: "Yes",
    value: "yes",
  },
  {
    label: "No",
    value: "no",
  },
];

export const slopeStOptions = [
  {
    label: "Upsloping",
    value: "upsloping",
  },
  {
    label: "Flat",
    value: "flat",
  },
  {
    label: "Downsloping",
    value: "downsloping",
  },
];

export const thalliumOptions = [
  {
    label: "Normal",
    value: "normal",
  },
  {
    label: "Fixed Defect",
    value: "fixed defect",
  },
  {
    label: "Reversible Defect",
    value: "reversible defect",
  },
];

export const dashboardLinks = {
  // risk: "https://app.powerbi.com/view?r=eyJrIjoiMTgxN2M1ZDUtMDk0Ny00N2JlLTgyN2MtZGNmNWMwYjA4ZDc4IiwidCI6ImI3NThkYTQ4LTMwNTctNDc4MS04MzRkLWUwMWQ2NTlmYzY0MCJ9&pageName=ReportSection"
  risk:"https://app.powerbi.com/view?r=eyJrIjoiZDU4NGMwNjUtMmFlOC00MjdjLWEzZmYtNjBjNDYwNjRjNWQ1IiwidCI6IjI1ZDkwZWMyLWNlZTYtNDQ0ZS1iODUyLWYwYmMyODlkYTczZSJ9",
};

export const careJourneyDashboards = [
  {
    name: "sunita",
    dashboard_link:
      "https://app.powerbi.com/view?r=eyJrIjoiMDIwOGMxNGUtOTQxZC00ZTAzLThmOGMtODc3ZmVkYjUzY2FlIiwidCI6ImI3NThkYTQ4LTMwNTctNDc4MS04MzRkLWUwMWQ2NTlmYzY0MCJ9&pageName=ReportSection8f894b0837cd0b760d87",
    summary_link:
      "https://app.powerbi.com/view?r=eyJrIjoiMDIwOGMxNGUtOTQxZC00ZTAzLThmOGMtODc3ZmVkYjUzY2FlIiwidCI6ImI3NThkYTQ4LTMwNTctNDc4MS04MzRkLWUwMWQ2NTlmYzY0MCJ9&pageName=ReportSection3969796a7d04b576837a",
  },
  {
    name: "sumit",
    dashboard_link:
      "https://app.powerbi.com/view?r=eyJrIjoiNTMwMDhkN2MtOWIwNS00MWIxLTgyNDctNGVjMjBlMTUxZDQxIiwidCI6ImI3NThkYTQ4LTMwNTctNDc4MS04MzRkLWUwMWQ2NTlmYzY0MCJ9&pageName=ReportSection9e78328bc913152ea66a",
    summary_link:
      "https://app.powerbi.com/view?r=eyJrIjoiNTMwMDhkN2MtOWIwNS00MWIxLTgyNDctNGVjMjBlMTUxZDQxIiwidCI6ImI3NThkYTQ4LTMwNTctNDc4MS04MzRkLWUwMWQ2NTlmYzY0MCJ9&pageName=ReportSection6612275b2de8504a182f",
  },
];

export const careJoureyPatients = [
  {
    label: "Sunita",
    value: "sunita",
  },
  {
    label: "Sumit",
    value: "sumit",
  },
];
