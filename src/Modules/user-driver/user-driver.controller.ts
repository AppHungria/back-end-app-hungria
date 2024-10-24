import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserDriverService } from './user-driver.service';
import { CreateUserDriverDto } from './dto/create-user-driver.dto';
import { UpdateUserDriverDto } from './dto/update-user-driver.dto';

@Controller('user-driver')
export class UserDriverController {
  constructor(private readonly userDriverService: UserDriverService) {}

  @Post()
  create(@Body() createUserDriverDto: CreateUserDriverDto) {
    return this.userDriverService.create(createUserDriverDto);
  }

  @Get()
  findAll() {
    return this.userDriverService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userDriverService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDriverDto: UpdateUserDriverDto) {
    return this.userDriverService.update(+id, updateUserDriverDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userDriverService.remove(+id);
  }
}
