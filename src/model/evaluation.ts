export interface Evaluation {
  title: string;
  tasks: EvaluationTask[];
}

export interface EvaluationTask {
  title: string;
  score: number;
  done: boolean;
}
