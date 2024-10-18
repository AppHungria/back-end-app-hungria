import { Injectable } from '@nestjs/common';
import { CreateUserDriverDto } from './dto/create-user-driver.dto';
import { UpdateUserDriverDto } from './dto/update-user-driver.dto';

@Injectable()
export class UserDriverService {
  create(createUserDriverDto: CreateUserDriverDto) {
    return 'This action adds a new userDriver';
  }

  findAll() {
    return `This action returns all userDriver`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userDriver`;
  }

  update(id: number, updateUserDriverDto: UpdateUserDriverDto) {
    return `This action updates a #${id} userDriver`;
  }

  remove(id: number) {
    return `This action removes a #${id} userDriver`;
  }
}
