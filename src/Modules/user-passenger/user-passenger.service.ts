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

    const existUser = await this.findAll()


    const exist = existUser.find(user => user.EmailAdress == data.EmailAdress)

   
    if(exist){ return "já existe este e-mail"}


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
      UserImg: data.UserImg 
    },});

  }

  async findAll(filters?, skip?:number, take?){

    try {
      const users = await prisma.userPassenger.findMany({
        where: filters || {}, 
        skip: skip || 0,  
        take: take || 10
      });
  
      return users;
    } catch (error) {
      console.error('Erro ao buscar passageiros:', error);
      throw new Error('Não foi possível buscar os passageiros.');
    }

  }

  async findOne(id: number) {

     return prisma.userPassenger.findMany({
      where: {UserId: id},
    });

  }


  async update(id: number, updateUserPassengerDto: UpdateUserPassengerDto) {
    const data = await this.findOne(id);
  
    if (!Array.isArray(data) || data.length === 0) {
      console.log('Não encontrado:', data);
      return 'Não encontrado';
    }
  
    const existingUser = data[0];
    console.log('Usuário encontrado:', existingUser);
  
  
    const newUserData = {
      ...existingUser,
      ...updateUserPassengerDto,
    };
  
   
    try {
      const updatedUser = await prisma.userPassenger.update({
        where: { UserId: id }, 
        data: newUserData, 
      });
  
      console.log('Usuário atualizado:', updatedUser);
      return updatedUser;
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
      throw new Error('Não foi possível atualizar o usuário.');
    }
  }


  async remove(id: number) {

    prisma.userPassenger.delete({where: {UserId: id}})

    return "deleted"

  }
  
}
