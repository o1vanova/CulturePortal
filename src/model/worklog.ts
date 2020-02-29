export interface TaskModel {
  id: number;
  hours: number;
  feature: string;
}

export interface WorklogModel {
  id: number;
  name: string;
  done: TaskModel[];
}
