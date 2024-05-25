import {
  Sequelize,
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from '@sequelize/core';
import { Attribute, PrimaryKey, AutoIncrement, NotNull, Table } from '@sequelize/core/decorators-legacy';

@Table({ tableName: 'users', timestamps: false })
export default class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  @AutoIncrement
  declare id: CreationOptional<number>;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare name: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare email: string;
  
  @Attribute(DataTypes.STRING)
  declare email_verified_at: string;
  
  @Attribute(DataTypes.STRING)
  declare created_at: string;
  
  @Attribute(DataTypes.TIME)
  declare updated_at: string;

  public things: Thing[] = [];
  
  /**
   * getStuff
   */
  public getStuff() {
    console.log(this.name + " -- " + this.email)
  }

  public loadThings() {
    const t = new Thing();
    t.name = "test";
    t.desc = "test 1";
    this.things.push(t);
    
    const t2 = new Thing();
    t2.name = "test";
    t2.desc = "test 2";
    this.things.push(t2);
  }
}

class Thing {
  declare name: string;
  declare desc: string;
}