import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserPassengerService } from './user-passenger.service';
import { CreateUserPassengerDto } from './dto/create-user-passenger.dto';
import { UpdateUserPassengerDto } from './dto/update-user-passenger.dto';

@Controller('user-passenger')
export class UserPassengerController {
  constructor(private readonly userPassengerService: UserPassengerService) {}

  @Post()
  create(@Body() createUserPassengerDto: CreateUserPassengerDto) {
    return this.userPassengerService.create(createUserPassengerDto);
  }

  @Get()
  findAll() {
    return this.userPassengerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userPassengerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserPassengerDto: UpdateUserPassengerDto) {
    return this.userPassengerService.update(+id, updateUserPassengerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userPassengerService.remove(+id);
  }
}
