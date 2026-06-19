export const MOCK_PLANS = [
  {
    "id": "plan_eg",
    "planName": "Ground Floor (EG)",
    "imageRef": "0708-arc-lp5-gr-eg-R", 
    "issues": [
      {
        "id": "eg_1",
        "title": "Door Clearance < 90cm",
        "description": "Main corridor double-door fails minimum clear width requirement.",
        "rule": "DIN 18040-1 Sec 4.3.3",
        "severity": "High",
        "box": { "left": "48%", "top": "62%", "width": "4%", "height": "5%" }
      },
      {
        "id": "eg_2",
        "title": "Missing Wheelchair Turning Space",
        "description": "Sanitary room lacks the required 150cm x 150cm turning area.",
        "rule": "DIN 18040-1 Sec 5.3.2",
        "severity": "High",
        "box": { "left": "35%", "top": "45%", "width": "8%", "height": "8%" }
      },
      {
        "id": "eg_3",
        "title": "Narrow Escape Route",
        "description": "Escape corridor width narrows to 1.35m (1.50m required).",
        "rule": "ASR A1.8 / Workplace Guidelines",
        "severity": "Medium",
        "box": { "left": "70%", "top": "80%", "width": "12%", "height": "4%" }
      }
    ]
  },
  {
    "id": "plan_og1",
    "planName": "1st Floor (OG1)",
    "imageRef": "0708-arc-lp5-gr-og1-Q",
    "issues": [
      {
        "id": "og1_1",
        "title": "Unreachable Window Controls",
        "description": "Window operating elements are higher than 105cm from FFB.",
        "rule": "DIN 18040-1 Sec 4.6",
        "severity": "Medium",
        "box": { "left": "15%", "top": "25%", "width": "3%", "height": "10%" }
      },
      {
        "id": "og1_2",
        "title": "Corridor Width < 150cm",
        "description": "Secondary hallway width is 1.20m, restricting dual wheelchair passage.",
        "rule": "DIN 18040-1 Sec 4.3.1",
        "severity": "High",
        "box": { "left": "55%", "top": "50%", "width": "5%", "height": "15%" }
      }
    ]
  }
];
