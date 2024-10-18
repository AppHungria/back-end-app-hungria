import { Injectable } from '@nestjs/common';
import { CreateUserPassengerDto } from './dto/create-user-passenger.dto';
import { UpdateUserPassengerDto } from './dto/update-user-passenger.dto';

@Injectable()
export class UserPassengerService {
  create(createUserPassengerDto: CreateUserPassengerDto) {
    return 'This action adds a new userPassenger';
  }

  findAll() {
    return `This action returns all userPassenger`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userPassenger`;
  }

  update(id: number, updateUserPassengerDto: UpdateUserPassengerDto) {
    return `This action updates a #${id} userPassenger`;
  }

  remove(id: number) {
    return `This action removes a #${id} userPassenger`;
  }
}
