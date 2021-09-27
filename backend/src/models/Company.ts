import {
  Column,
  CreateDateColumn,
  Entity,
  getConnection,
  PrimaryGeneratedColumn,
  Repository,
  UpdateDateColumn,
} from 'typeorm'

@Entity()
export class Company {
  static getRepository(): Repository<Company> {
    return getConnection().getRepository(Company)
  }

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  isMain: boolean

  @Column()
  name: string

  @Column('char', { length: 9, default: '' })
  siren: string

  @Column('char', { length: 14, default: '' })
  siret: string

  @Column('char', { length: 12, default: '' })
  vat: string

  @Column({ default: '' })
  address1: string

  @Column({ default: '' })
  address2: string

  @Column({ default: '' })
  zipCode: string

  @Column({ default: '' })
  city: string

  @Column({ default: '' })
  country: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
