import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number; //primary key

  @Column()
  fullname: string; //can be used to store the user's full name or username

  @Column()
  username: string; //must be unique, can be used for login and communication with the user

  @Column()
  email: string; //must be unique, can be used for login and communication with the user

  @Column()
  password: string; //must hash before save to db, can be used for authentication

  @Column({ default: 'user' })
  role: string; //can be used to define user roles (e.g., 'admin', 'user', 'moderator') for access control

  @Column({ default: true })
  isActive: boolean; //can be used to indicate whether the user's account is active or deactivated (e.g., for banning users)

  @CreateDateColumn()
  createdAt: Date; //automatically set when the user is created

  @UpdateDateColumn()
  updatedAt: Date; //automatically set when the user is updated, can be used for tracking changes to the user's information
}
