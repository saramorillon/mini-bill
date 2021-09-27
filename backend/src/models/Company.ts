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

  @Column('char', { length: 9 })
  siren: string

  @Column('char', { length: 14 })
  siret: string

  @Column('char', { length: 12 })
  vat: string

  @Column()
  address1: string

  @Column()
  address2: string

  @Column()
  zipCode: string

  @Column()
  city: string

  @Column()
  country: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
