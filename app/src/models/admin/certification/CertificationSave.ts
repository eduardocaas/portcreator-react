import type { CertificationType } from "./CertificationType";

export interface CertificationSave {
  title: string,
  description: string,
  type: number,
  issueDate?: Date,
  hours: number,
  institutionName: string;
  imagePath?: string;
}
