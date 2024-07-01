import { Field, InputType, ObjectType } from "type-graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Country {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  code: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  emoji: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  continentCode?: string;
}

@InputType()
export class AdCountryInput {
  @Field()
  code: string;

  @Field()
  name: string;

  @Field()
  emoji: string;

  @Field({ nullable: true })
  continentCode?: string;
}
