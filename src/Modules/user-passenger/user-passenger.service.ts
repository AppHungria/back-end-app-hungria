import { Injectable } from '@nestjs/common';
import { CreateUserPassengerDto } from './dto/create-user-passenger.dto';
import { UpdateUserPassengerDto } from './dto/update-user-passenger.dto';
import { prisma } from 'src/database/prismaServiceDatabase';




@Injectable()
export class UserPassengerService {

  async create(data : CreateUserPassengerDto) {

    if(!data.UserImg){
      data = null
    }


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

  async findAll() {

    return prisma.userPassenger.findMany()

  }

  async findOne(id: number) {

     return prisma.userPassenger.findMany({
      where: {UserId: id},
    });

  }


  async update(id: number, updateUserPassengerDto: UpdateUserPassengerDto) {
    return `This action updates a #${id} userPassenger`;
  }

  async remove(id: number) {

     prisma.userPassenger.delete({where: {UserId: id}})

     return "deleted"
  }
}
