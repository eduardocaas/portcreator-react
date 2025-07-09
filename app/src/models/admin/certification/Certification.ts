import type { CertificationType } from "./CertificationType";

export interface Certification {
  id: string,
  title: string,
  description: string,
  type: number,
  issueDate: Date,
  hours: number,
  institutionName: string;
  imagePath: string;
  isChecked?: boolean;
}
