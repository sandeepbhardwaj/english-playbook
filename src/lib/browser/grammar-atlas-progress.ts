export interface LessonProgressState {
  completed?: boolean;
  bookmarked?: boolean;
  lastQuizPercent?: number;
  updatedAt?: string;
}

export interface QuizScore {
  percent: number;
  correct: number;
  total: number;
  updatedAt?: string;
}

export interface ErrorLogEntry {
  id: string;
  createdAt?: string;
  lessonSlug: string;
  title: string;
  mistake: string;
  correction: string;
  note: string;
}

export interface GrammarAtlasProgressApi {
  addErrorLogEntry(entry: Partial<ErrorLogEntry> & Pick<ErrorLogEntry, 'title' | 'mistake'>): ErrorLogEntry;
  exportProgress(): string;
  getActivityLog(): string[];
  getErrorLog(): ErrorLogEntry[];
  getLessonProgressMap(): Record<string, LessonProgressState>;
  getLessonState(slug: string): LessonProgressState;
  getQuizScore(slug: string): QuizScore | null;
  getQuizScores(): Record<string, QuizScore | null>;
  getStudyStreak(): number;
  importProgress(raw: string): boolean;
  removeErrorLogEntry(id: string): void;
  saveQuizScore(slug: string, payload: QuizScore): void;
  toggleLessonBookmark(slug: string): LessonProgressState;
  toggleLessonComplete(slug: string): LessonProgressState;
  updateLessonState(slug: string, patch: Partial<LessonProgressState>): LessonProgressState;
}

declare global {
  interface Window {
    GrammarAtlasProgress?: GrammarAtlasProgressApi;
  }
}

export function getGrammarAtlasProgress() {
  if (typeof window === 'undefined') {
    return undefined;
  }

  return window.GrammarAtlasProgress;
}
