import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from './users.entity';

@Entity()
export class RefreshToken {
  @PrimaryGeneratedColumn()
  id: number; //primary key

  @ManyToOne(() => Users)
  @JoinColumn({ name: 'userId' })
  user: Users;

  @Column()
  userId: number;

  @Column()
  token: string; //must hash before save to db

  @Column()
  expiresAt: Date; //optional, can be used to set an expiration time for the refresh token

  @Column()
  deviceInfo: string; //optional, can store info about the device or browser

  @Column()
  ip: string; //optional, can store the IP address from which the token was issued

  @CreateDateColumn()
  createdAt: Date; //automatically set when the token is created
}
