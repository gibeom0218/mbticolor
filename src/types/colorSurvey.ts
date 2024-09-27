export interface ColorSurveyInfo {
  createdAt: number;
  updatedAt: number;
  colorCode: string;
  id: number;
  mbti: string;
}

export interface ColorSurvey {
  count: number;
  next: string;
  previous: string;
  results: ColorSurveyInfo[];
}
