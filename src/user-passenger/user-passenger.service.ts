import { Injectable } from '@nestjs/common';
import { CreateUserPassengerDto } from './dto/create-user-passenger.dto';
import { UpdateUserPassengerDto } from './dto/update-user-passenger.dto';
import { prisma } from 'src/database/prismaServiceDatabase';



@Injectable()
export class UserPassengerService {

  async create(data : CreateUserPassengerDto) {

    return await prisma.userPassenger.create({data: {
      Name: data.Name,
      EmailAdress: data.EmailAdress,
      Password: data.Password,
      PhoneNumber: data.PhoneNumber,
      StatusAccount: data.StatusAccount,
      RacesCanceleds: data.RacesCanceleds,
      RacesCompleteds: data.RacesCompleteds,
      LastConnectedDevice: data.LastConnectedDevice,
      Documentation: data.Documentation,
      UserImg: data.UserImg,
    },});

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
