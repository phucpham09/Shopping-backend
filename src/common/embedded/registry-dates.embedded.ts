import { CreateDateColumn } from 'typeorm';

export class RegistryDates {
  @CreateDateColumn()
  created_at: Date;
  @CreateDateColumn()
  updated_at: Date;
}
